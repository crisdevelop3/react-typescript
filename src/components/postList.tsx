import React from "react";
import { Post } from "../api/posts";

// ✅ Se define el tipo de props que recibe el componente
interface PostListProps {
  posts: Post[];
}

function PostList({ posts }: Posts) {
  // se limita a mostrar 10 posts y los recorre con map
  return (
    <ul style={{ listStyle: "none", padding: 0 }}>
      {posts.slice(0, 10).map((post) => (
        <li
          key={post.id}
          style={{
            border: "1px solid #ddd",
            borderRadius: "10px",
            marginBottom: "10px",
            padding: "10px",
          }}
        >
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </li>
      ))}
    </ul>
  );
}

export default PostList;