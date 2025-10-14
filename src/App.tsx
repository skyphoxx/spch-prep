import { useEffect, useState } from "react";
import { Button } from "./components/Button";
import "./App.css";

type Post = {
  id: number;
  title: string;
  body: string;
};

export default function App() {
  // counters
  const [countA, setA] = useState(0);
  const [countB, setB] = useState(0);

  // controlled input
  const [name, setName] = useState("");

  // fetch demo
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [reloads, setReloads] = useState(0); // force re-fetch when changed

  useEffect(() => {
    const ctrl = new AbortController();
    const run = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch(
          "https://jsonplaceholder.typicode.com/posts/1",
          { signal: ctrl.signal }
        );
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data: Post = await res.json();
        setPost(data);
      } catch (err: any) {
        if (err.name !== "AbortError") setError(err.message ?? "Error");
      } finally {
        setLoading(false);
      }
    };
    run();
    return () => ctrl.abort();
  }, [reloads]); // re-run when "Reload" pressed

  return (
    <div className="app" style={{ padding: 24, textAlign: "center" }}>
      <h1>Daveable Typescript + React Prep Demo</h1>

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

      <hr style={{ margin: "24px 0" }} />

      {/* --- Fetch demo --- */}
      <h2>Fetch a Post</h2>
      {loading && <p>Loading…</p>}
      {error && <p style={{ color: "crimson" }}>Error: {error}</p>}
      {!loading && !error && post && (
        <div style={{ maxWidth: 600, margin: "0 auto", textAlign: "left" }}>
          <h3 style={{ marginBottom: 8 }}>{post.title}</h3>
          <p style={{ color: "#555" }}>{post.body}</p>
        </div>
      )}
      <div style={{ marginTop: 12 }}>
        <Button label="Reload" onClick={() => setReloads((n) => n + 1)} />
      </div>
    </div>
  );
}