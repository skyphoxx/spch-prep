import { useState } from "react";
import { Button } from "./components/Button";
import "./App.css";

export default function App() {
  // ✅ hooks at top-level
  const [countA, setA] = useState(0);
  const [countB, setB] = useState(0);
  const [name, setName] = useState("");

  return (
    <div className="app" style={{ padding: 24, textAlign: "center" }}>
      <h1>Two Counters</h1>

      {/* --- Counter A --- */}
      <h2>A: {countA}</h2>
      <Button label="A +1" onClick={() => setA((n) => n + 1)} />
      <Button label="Reset A" onClick={() => setA(0)} disabled={countA === 0} />

      <hr style={{ margin: "24px 0" }} />

      {/* --- Counter B --- */}
      <h2>B: {countB}</h2>
      <Button label="B +1" onClick={() => setB((n) => n + 1)} />
      <Button label="Reset B" onClick={() => setB(0)} disabled={countB === 0} />

      <hr style={{ margin: "24px 0" }} />

      {/* --- Controlled input --- */}
      <div>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Type your name"
          style={{ padding: 8, borderRadius: 6, border: "1px solid #ccc" }}
        />
        <p style={{ marginTop: 8 }}>Hello, {name || "friend"}!</p>
      </div>
    </div>
  );
}
