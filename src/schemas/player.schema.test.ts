import { describe, expect, it } from 'vitest';

import { Player } from './player.schema';

describe('Player schema', () => {
  it('defaults to an empty identity at the world origin', () => {
    const player = new Player();

    expect(player.id).toBe('');
    expect(player.name).toBe('');
    expect(player.x).toBe(0);
    expect(player.y).toBe(0);
    expect(player.z).toBe(0);
  });

  it('holds assigned identity and position values', () => {
    const player = new Player();
    player.id = 'p1';
    player.name = 'Link';
    player.x = 1;
    player.y = 2;
    player.z = 3;

    expect(player.id).toBe('p1');
    expect(player.name).toBe('Link');
    expect(player.x).toBe(1);
    expect(player.y).toBe(2);
    expect(player.z).toBe(3);
  });
});
