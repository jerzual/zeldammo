import { create } from 'zustand';

/**
 * Plain, render-friendly view of a networked player.
 * This is intentionally a POJO (not a Colyseus Schema instance) so React
 * components can subscribe to it via selectors without reaching into the
 * Colyseus decoder.
 */
export interface PlayerView {
  id: string;
  name: string;
  x: number;
  y: number;
  z: number;
}

interface GameStore {
  /** Our own player's session id, once joined. */
  sessionId: string | null;
  connected: boolean;
  /** All players in the room, keyed by sessionId. */
  players: Record<string, PlayerView>;

  setConnected: (connected: boolean, sessionId?: string | null) => void;
  upsertPlayer: (player: PlayerView) => void;
  removePlayer: (id: string) => void;
  reset: () => void;
}

export const useGameStore = create<GameStore>((set) => ({
  sessionId: null,
  connected: false,
  players: {},

  setConnected: (connected, sessionId = null) => set({ connected, sessionId }),

  upsertPlayer: (player) =>
    set((state) => ({ players: { ...state.players, [player.id]: player } })),

  removePlayer: (id) =>
    set((state) => {
      const next = { ...state.players };
      delete next[id];
      return { players: next };
    }),

  reset: () => set({ players: {}, connected: false, sessionId: null }),
}));
