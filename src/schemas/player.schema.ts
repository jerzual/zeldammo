import { Schema, type } from '@colyseus/schema';

export class Player extends Schema {
  @type('string') id = '';
  @type('string') name = '';
  // World position. Three.js ground plane is x/z (y is up).
  @type('number') x = 0;
  @type('number') y = 0;
  @type('number') z = 0;
}
