import { useColyseus } from './client/net/use-colyseus';
import Scene from './client/components/scene';
import { useGameStore } from './client/store/game-store';

import './app.css';

function App() {
  // Joins the 'overworld' room and syncs its state into the store.
  useColyseus('overworld');

  const connected = useGameStore((state) => state.connected);
  const sessionId = useGameStore((state) => state.sessionId);
  const players = useGameStore((state) => state.players);

  return (
    <>
      <div>
        <a href="/">
          <img src="/favicon.png" className="logo" alt="Vite logo" />
        </a>
      </div>
      <h1>ZeldaMMO</h1>
      <div className="card">
        <p>
          {connected ? `connected as ${sessionId}` : 'connecting…'} —{' '}
          {Object.keys(players).length} player(s) online
        </p>
        <ul>
          {Object.values(players).map((player) => (
            <li key={player.id}>
              {player.name} @ ({player.x.toFixed(1)}, {player.y.toFixed(1)},{' '}
              {player.z.toFixed(1)})
            </li>
          ))}
        </ul>
        <Scene />
      </div>
    </>
  );
}

export default App;
