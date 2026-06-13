# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

ZeldaMMO is a multiplayer Zelda-style game: an SSR React + react-three-fiber client driven by an authoritative Colyseus server, with networked room state mirrored into a Zustand store. The project is early-stage — much of `src/client/components` is still stubs.

## Commands

Package manager is **pnpm** (v11, Node >= 24). There is no test-watch or typecheck npm script.

- `pnpm dev` — run the app in development (Vite middleware mode, HMR, on-the-fly SSR). Serves HTTP on **5173** and the Colyseus WS server on **2567**.
- `pnpm preview` — run in **production** mode (`NODE_ENV=production`); serves the prebuilt `dist/`. `pnpm start` is dev mode despite the name (no `NODE_ENV`).
- `pnpm build` — builds all three bundles in sequence: `build:client` (`dist/client`), `build:server` (SSR entry → `dist/server`), `build:game-server` (Colyseus server → `dist/game`).
- `pnpm lint` / `pnpm lint:check` — oxlint. `pnpm format` / `pnpm format:check` — oxfmt.
- `pnpm test` — vitest. Single file/test: `pnpm test <path>` or `pnpm exec vitest run <path> -t "<name>"`. (No tests exist yet.)
- `npx tsc --noEmit` — typecheck (no script alias for this).

CI (`.github/workflows/node.js.yml`) runs `pnpm install && pnpm run build && pnpm test` on push/PR to `main`.

## Architecture

**One Node process, two servers.** `server.js` (the entry for every run mode) creates the Express app AND boots the Colyseus game server in the same process via `createGameServer(app, logger)` (`src/server/game-server.ts`). HTTP/SSR is on `PORT` (5173); Colyseus WS is on `WS_PORT` (2567). `server.js` branches on `NODE_ENV`:
- **dev**: Vite middleware + `vite.ssrLoadModule(...)` loads `src/server/game-server.ts` and `src/entry-server.tsx` fresh per request.
- **prod**: serves `dist/client` via sirv and imports the prebuilt `dist/game/game-server.js` + `dist/server/entry-server.js`. **The template HTML and these bundles are cached at startup** — so in prod a code change requires `pnpm build` **and** a server restart to take effect (a rebuild alone is not picked up).

**SSR React.** `index.html` has `<!--app-head-->` / `<!--app-html-->` placeholders. `entry-server.tsx` renders to string; `entry-client.tsx` hydrates `#root`. App root is `src/app.tsx`.

**Colyseus → Zustand state flow** (the core pattern):
- `src/schemas/*.schema.ts` define the authoritative state (`GameState` holds `MapSchema<Player>`). These classes are **shared by both server and client** — the client imports them as `import type` only (decoding happens via the SDK's schema reflection at runtime).
- Server rooms live in `src/server/rooms/*.room.ts` and are registered by name in `game-server.ts` (e.g. `'overworld'`). A room owns `this.state`, mutates it on `onJoin`/`onLeave` and message handlers.
- `src/client/net/colyseus-bridge.ts` joins a room and pipes Colyseus `getStateCallbacks` (`onAdd`/`onChange`/`onRemove`) into the Zustand store.
- `src/client/store/game-store.ts` is the Zustand store — plain `PlayerView` POJOs keyed by sessionId, for UI/roster. `src/client/net/use-colyseus.ts` is the React hook that owns the connection lifecycle and exposes a `roomRef` for sending input (`room.send('move', …)`).
- **Per-frame rule**: read high-frequency transforms straight from `room.state.players.get(id)` inside `useFrame` — do NOT subscribe to positions through the Zustand store (that re-renders React every frame). The store is for roster/HUD; the live schema is for the render loop. The bridge marks this boundary.

## Colyseus / schema constraints (read before touching deps)

- The browser client is **`@colyseus/sdk`** (0.17). It is *not* `colyseus.js` (the old ≤0.16 client) and *not* `colyseus` (the Node server meta-package). Importing the wrong one breaks the matchmaking handshake.
- All Colyseus packages must move together on **0.17 / schema v4**: `@colyseus/core`, `@colyseus/ws-transport`, `@colyseus/sdk`, and `@colyseus/schema` (pinned `4.0.26`). Client and server must share the same schema major — the seat-reservation/handshake format changed between 0.16 and 0.17.
- `@colyseus/schema` uses **legacy property decorators**, so `tsconfig.json` sets `experimentalDecorators: true` and `useDefineForClassFields: false`. Do not flip these — with `useDefineForClassFields: true`, schema field initializers shadow the accessors `@type()` installs and silently break state change-tracking. Schema fields therefore use plain initializers (`@type('number') x = 0`).
- The native `@colyseus/uwebsockets-transport` is intentionally excluded via `ignoredOptionalDependencies` in `pnpm-workspace.yaml` (pnpm v11 no longer reads the `pnpm` field in `package.json`).

## Conventions

- oxfmt enforces single quotes and **sorted imports**; oxlint runs the `correctness` category as errors with the typescript/unicorn/oxc plugins.
- `postgres`/`drizzle-orm` and `redis` are dependencies and appear in `docker-compose.yml`, but no DB/persistence layer is wired into `src` yet.
