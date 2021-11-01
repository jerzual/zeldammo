import * as express from "express";
import { SocketIO } from "socket.io";
import { from } from "rxjs";
import { join } from "path";
import { createServer } from "http";
import { Server } from "@colyseus/core";
import { WebSocketTransport } from "@colyseus/ws-transport"
const port = Number(process.env.PORT) || 3000;

// express main app
const app = new express();
app.use(express.static(join(__dirname, '..','client')));

// colyseus game server
const gameServer = new Server({
  transport: new WebSocketTransport({
  server: createServer(app)
})
});


gameServer.listen(port);