import { useEffect, useRef } from 'react';

import type { Room } from '@colyseus/sdk';

import type { GameState } from '../../schemas/game-state.schema';
import { connect } from './colyseus-bridge';

/**
 * Joins the given room for the lifetime of the component and keeps a ref to
 * the live Room so callers can send input (e.g. roomRef.current?.send('move', ...)).
 * State sync into the Zustand store is handled inside connect().
 */
export function useColyseus(roomName = 'overworld') {
  const roomRef = useRef<Room<GameState> | null>(null);

  useEffect(() => {
    let cancelled = false;

    connect(roomName)
      .then((room) => {
        if (cancelled) {
          // Effect was torn down before the join resolved (e.g. StrictMode
          // double-invoke in dev) — leave immediately.
          void room.leave();
          return;
        }
        roomRef.current = room;
      })
      .catch((error) => {
        console.error('[colyseus] failed to join', roomName, error);
      });

    return () => {
      cancelled = true;
      void roomRef.current?.leave();
      roomRef.current = null;
    };
  }, [roomName]);

  return roomRef;
}
