import { Client, getStateCallbacks, type Room } from '@colyseus/sdk';

import type { GameState } from '../../schemas/game-state.schema';
import { useGameStore } from '../store/game-store';

const ENDPOINT = import.meta.env.VITE_COLYSEUS_URL ?? 'ws://localhost:2567';

/**
 * Join a room and mirror its authoritative state into the Zustand store.
 *
 * Architectural note: the store is for UI / roster state (who's here, names,
 * HUD). For smooth per-frame rendering, read the live schema directly inside
 * `useFrame` via `room.state.players.get(id)` instead of subscribing to
 * position in the store — that keeps high-frequency transform updates out of
 * React's render cycle. See `onChange` below.
 */
export async function connect(
  roomName = 'overworld',
  options?: Record<string, unknown>,
): Promise<Room<GameState>> {
  const client = new Client(ENDPOINT);
  const room = await client.joinOrCreate<GameState>(roomName, options);

  const store = useGameStore.getState();
  store.setConnected(true, room.sessionId);

  // Colyseus 0.16+ moved schema callbacks behind getStateCallbacks(room).
  const $ = getStateCallbacks(room);

  $(room.state).players.onAdd((player, sessionId) => {
    const sync = () =>
      useGameStore.getState().upsertPlayer({
        id: player.id || sessionId,
        name: player.name,
        x: player.x,
        y: player.y,
        z: player.z,
      });

    sync();
    // Fires on every field change for this player. Fine for roster/HUD; for
    // 60fps movement, prefer reading room.state directly in useFrame.
    $(player).onChange(sync);
  });

  $(room.state).players.onRemove((_player, sessionId) => {
    useGameStore.getState().removePlayer(sessionId);
  });

  room.onLeave(() => {
    useGameStore.getState().reset();
  });

  return room;
}
