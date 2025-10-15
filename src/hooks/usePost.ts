import { useEffect, useState } from "react";

export interface Post {
  id: number;
  title: string;
  body: string;
}

export function usePost(id: number) {
  const [data, setData] = useState<Post | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const ctrl = new AbortController();

    (async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch(
          `https://jsonplaceholder.typicode.com/posts/${id}`,
          { signal: ctrl.signal }
        );
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const json: Post = await res.json();
        setData(json);
      } catch (e: any) {
        if (e?.name !== "AbortError") setError(e?.message ?? "Error");
      } finally {
        setLoading(false);
      }
    })();

    return () => ctrl.abort();
  }, [id]);

  return { data, loading, error, refetch: () => setData(null) };
}
