import React, { useState } from "react";
import "./App.css";

function App() {
  const [mood, setMood] = useState("");

  return (
    <div className="container">
      <h1>Mood Tracker</h1>

      <div className="buttons">
        <button onClick={() => setMood("😊 Happy")}>Happy</button>
        <button onClick={() => setMood("😢 Sad")}>Sad</button>
        <button onClick={() => setMood("😡 Angry")}>Angry</button>
        <button onClick={() => setMood("😴 Tired")}>Tired</button>
      </div>

      <h2>Your Mood: {mood}</h2>
    </div>
  );
}

export default App;