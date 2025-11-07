import { Post } from "../types/Posts";

export async function getPosts() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    if (!response.ok) {
      throw new Error("Error al obtener los posts");
    }
    const data: Post[] = await response.json();
    return data;
  } catch (error) {
    console.error("Error en getPosts:", error);
    throw error;
  }
}