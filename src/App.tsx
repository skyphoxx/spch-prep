import { useState } from "react";
import { Button } from "./components/Button"; // 👈 import your new component
import "./App.css";

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app" style={{ padding: 24, textAlign: "center" }}>
      <h1>Speechify Prep Demo</h1>
      <p>Count: {count}</p>

      <Button
        label="Increment"
        onClick={() => setCount((prev) => prev + 1)}
      />

      <Button
        label="Reset"
        onClick={() => setCount(0)}
        disabled={count === 0}
      />

      <p style={{ marginTop: 16, color: "#666" }}>
        Edit <code>src/App.tsx</code> and save to test hot reload 🔥
      </p>
    </div>
  );
}