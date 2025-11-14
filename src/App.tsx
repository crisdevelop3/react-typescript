// src/App.tsx
import React from "react";
import PostsList from "./components/PostsList";

function App() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>My Blog</h1>
      <PostsList />
    </div>
  );
}

export default App;
