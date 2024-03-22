import { useState } from "react";
import Scene from "./client/components/scene";
import "./app.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="/">
          <img src="/favicon.png" className="logo" alt="Vite logo" />
        </a>
      </div>
      <h1>ZeldaMMO</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <Scene />
      </div>
    </>
  );
}

export default App;
