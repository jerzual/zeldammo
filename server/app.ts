import * as express from "express";
import { join } from "node:path";
import { createServer } from "node:http";
import { LobbyRoom, Server } from "@colyseus/core";
import { WebSocketTransport } from "@colyseus/ws-transport";
import pino from "pino";
import pinoHttp from "pino-http";
const port = Number(process.env.PORT) || 2567;
const logger = pino();
// express main app
const app = express.default();

app.use(pinoHttp);
// app.use(express.static(join(process.cwd(), "dist", "render")));

// colyseus game server
const gameServer = new Server({
  transport: new WebSocketTransport({
    server: createServer(app),
  }),
  greet: false,
});
gameServer.define("lobby", LobbyRoom);
gameServer.listen(port);

gameServer.onShutdown(() => {
  logger.info("server shutdown");
});
app.listen(3000, () => {
  logger.info("express server started");
});
