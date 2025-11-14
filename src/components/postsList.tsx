// src/components/PostsList.tsx
import React, { useEffect, useState } from "react";
import type { Post } from "../types";

const PostsList: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [page, setPage] = useState(1);

  const fetchPosts = async (pageNumber: number) => {
    setLoading(true);

    const res = await fetch(
      `https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${pageNumber}`
    );

    const data: Post[] = await res.json();
    setPosts(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchPosts(page);
  }, [page]);




    return (
      <div>
        <h2>Posts (page {page})</h2>

        {loading && <p>Cargando…</p>}

        {!loading &&
          posts.map((post) => (
            <div key={post.id} style={{ marginBottom: 15 }}>
              <h3>{post.title}</h3>
              <p>{post.body}</p>
            </div>
          ))}

        <button
          disabled={page === 1}
          onClick={() => setPage((p) => p - 1)}
        >
          Prev
        </button>

        <button
          onClick={() => setPage((p) => p + 1)}
          style={{ marginLeft: 10 }}
        >
          Next
        </button>
      </div>
    );

};

export default PostsList;
