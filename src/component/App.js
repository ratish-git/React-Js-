import React, { useState } from "react";
import "./App.css";

function App() {
  setInterval(updateTime, 1000);
  const now = new Date().toLocaleTimeString();

  const [time, setTime] = useState(now);

  function updateTime() {
    const now = new Date().toLocaleTimeString();
    setTime(now);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>{time}</h1>
      </header>
    </div>
  );
}

export default App;
