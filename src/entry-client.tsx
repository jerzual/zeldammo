import './index.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app'

import * as Colyseus from "colyseus.js"; // not necessary if included via <script> tag.

const client = new Colyseus.Client('ws://localhost:2567');

client.joinOrCreate("lobby").then(room => {
    console.log(room.sessionId, "joined", room.name);
}).catch(e => {
    console.log("JOIN ERROR", e);
});

ReactDOM.hydrateRoot(
  document.getElementById('root') as HTMLElement,
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
