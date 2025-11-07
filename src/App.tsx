import React, { useEffect, useState } from "react";
import { getPosts, Post } from "./api/posts";
import PostList from "./components/PostList";

function App() {
  // useState es un hook de React que sirve para guardar y actualizar valores dentro de un componente funcional.
  // posts guarda los datos que llegan de la API
  // setPosts es la función que actualiza el valor
  const [posts, setPosts] = useState<Post[]>([]);       // Estado tipado con Post[]
  const [loading, setLoading] = useState<boolean>(true); // Estado de carga tipado con boolean

  // !! Cuando cambia estado con setPosts o setLoading, React vuelve a renderizar el componente automáticamente.

  // useEffect es otro hook que ejecuta código después de que el componente se haya renderizado.
  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getPosts();
        setPosts(data);
      } catch (error) {
        console.error("Error al cargar los datos:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []); // [] para que se ejecute una sola vez

  /* 
  Antes de que lleguen los datos, el componente muestra un texto que indica que está cargando.
  Cuando loading cambia a false, React vuelve a renderizar y muestra la lista.
  */
  return (
    <div style={{ padding: "20px" }}>
      <h1>📚 Lista de Posts</h1>
      {loading ? <p>Cargando datos...</p> : <PostList posts={posts} />}
    </div>
  );
}

export default App;