import { Room } from '@colyseus/core';

export class DungeonRoom extends Room {
  onCreate() {
    console.log("DungeonRoom created!", this.roomId);
  }

  onJoin() {
    console.log("DungeonRoom joined!", this.roomId);
  }

  onLeave() {
    console.log("DungeonRoom left!", this.roomId);
  }

  onDispose() {
    console.log("DungeonRoom disposed!", this.roomId);
  }
}

