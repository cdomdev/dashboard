import { query } from "../../components/lib/request";
import { categorySchema } from "@/interfaces";


export async function createCategoria({ nombre }: categorySchema) {
  try {
    const response = await query("/api/categories/create", "POST", { nombre });
    return response;
  } catch (error) {
    console.error("Error creating categoria:", error);
  }
}

export async function getCategorias() {
  try {
    const response = await query("/api/categories/list", "GET");
    return response;
  } catch (error) {
    console.error("Error fetching categorias:", error);
  }
}