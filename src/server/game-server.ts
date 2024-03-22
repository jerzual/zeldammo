import type {Application } from "express";
import { createServer } from "node:http";
import { LobbyRoom, Server } from "@colyseus/core";
import { WebSocketTransport } from "@colyseus/ws-transport";
import { Logger } from "pino";

const port = Number(process.env.WS_PORT) || 2567;

export function createGameServer(app: Application, logger: Logger){
    // colyseus game server
    const gameServer = new Server({
      transport: new WebSocketTransport({
        server: createServer(app),
      }),
      greet: false,
      logger: logger,
      devMode: true,
      gracefullyShutdown: true,
    });
    gameServer.define("lobby", LobbyRoom);
    gameServer.listen(port);

    gameServer.onShutdown(() => {
      logger.info("Game server shutdown");
    });
    logger.info(`Game server listening on ws://localhost:${port}`);
    return gameServer;
}
