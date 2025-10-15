import { useEffect, useState } from "react";
import { Button } from "./components/Button";
import { Loader } from "./components/Loader";
import { ErrorMessage } from "./components/ErrorMessage";
import { Card } from "./components/Card";
import {TextField} from "./components/TextField"
import { usePost } from "./hooks/usePost";
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

  // fetch
const [postId, setPostId] = useState(1);
const { data: post, loading, error } = usePost(postId);
  return (
    <div className="app" style={{ padding: 24, textAlign: "center" }}>
      <h1>Dave's' Typescript + React Prep Demo</h1>

      {/* --- Counter A --- */}
      <Card title="Counter A" variant="elevated">
      <h2>A: {countA}</h2>
      <Button label="A +1" onClick={() => setA((n) => n + 1)} />
      <Button label="Reset A" onClick={() => setA(0)} disabled={countA === 0} />
      </Card>

      <hr style={{ margin: "24px 0" }} />

      {/* --- Counter B --- */}
      <h2>B: {countB}</h2>
      <Button label="B +1" onClick={() => setB((n) => n + 1)} />
      <Button label="Reset B" onClick={() => setB(0)} disabled={countB === 0} />

      <hr style={{ margin: "24px 0" }} />

      {/* --- Controlled input test --- */}
      <div>
        <Card title="Your Name">

          <TextField
            label="Name"
            value={name}
            onChange={setName}
            placeholder="Type your name here"
            />

        </Card>
        <Card title="Select Post ID">
  <input
    type="number"
    min={1}
    value={postId}
    onChange={(e) => setPostId(Number(e.target.value))}
    style={{ padding: 8, borderRadius: 6, border: "1px solid #ccc", }}/>
</Card>

        <p style={{ marginTop: 8 }}>Hello, {name || "friend"}!</p>
    </div>

      <hr style={{ margin: "24px 0" }} />

      {/* --- Fetch Test --- */}
      <Card title="Fetch a Post">
  {loading && <Loader />}
  {error && <ErrorMessage message={error} />}
  {!loading && !error && post && (
    <>
      <h3 style={{ marginBottom: 8 }}>{post.title}</h3>
      <p style={{ color: "#555" }}>{post.body}</p>
    </>
  )}
  <div style={{ marginTop: 12 }}>
    <Button label="Reload" onClick={() => window.location.reload()} />
    {/* simple reload; or evolve usePost to accept a refetch trigger later */}
  </div></Card>
  </div>
  );}