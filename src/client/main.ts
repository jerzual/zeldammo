console.log("Zelda MMO v0.0.1");
import "./zelda.css";

import * as Colyseus from "colyseus.js"; // not necessary if included via <script> tag.

const client = new Colyseus.Client('ws://localhost:2567');

client.joinOrCreate("lobby").then(room => {
    console.log(room.sessionId, "joined", room.name);
}).catch(e => {
    console.log("JOIN ERROR", e);
});