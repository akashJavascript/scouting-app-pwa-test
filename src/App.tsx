import { useState } from "react";
import reactLogo from "./assets/react.svg";
import appLogo from "/favicon.svg";
import PWABadge from "./PWABadge.tsx";
// import OAuthLogin from "./oauthLogin.tsx";
import "./App.css";
import CoralButton from "./coralButton.tsx";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={appLogo} className="logo" alt="scouting-app-test logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>scouting-app-test</h1>
      <div className="card">
        <button className="score-button" onClick={() => setCount((count) => count + 1)}>
          Score 
          <p>Count: {count}</p>
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <PWABadge />
      <CoralButton />
    </>
  );
}

export default App;
