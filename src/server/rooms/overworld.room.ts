import { Client, Room } from '@colyseus/core';

import { GameState } from '../../schemas/game-state.schema';
import { Player } from '../../schemas/player.schema';

interface JoinOptions {
  name?: string;
}

interface MoveMessage {
  x: number;
  y: number;
  z: number;
}

export class OverworldRoom extends Room<{ state: GameState }> {
  onCreate() {
    this.state = new GameState();

    this.onMessage('move', (client, message: MoveMessage) => {
      const player = this.state.players.get(client.sessionId);
      if (!player) return;
      player.x = message.x;
      player.y = message.y;
      player.z = message.z;
    });
  }

  onJoin(client: Client, options?: JoinOptions) {
    const player = new Player();
    player.id = client.sessionId;
    player.name = options?.name ?? `player-${client.sessionId.slice(0, 4)}`;
    this.state.players.set(client.sessionId, player);
  }

  onLeave(client: Client) {
    this.state.players.delete(client.sessionId);
  }
}
