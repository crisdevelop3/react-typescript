// Definimos la interfaz Post para tipar los datos que devuelve la API
export interface Post {
  id: number;
  title: string;
  body: string;
}

export async function getPosts(): Promise<Post[]> {
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
