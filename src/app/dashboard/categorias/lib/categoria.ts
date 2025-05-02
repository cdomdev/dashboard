import { query } from "../../components/lib/request";
import { categorySchema } from "@/interfaces";

export async function createCategoria({ nombre }: categorySchema) {
  const response = await query("/api/categories/create", "POST", { nombre });
  return response;
}

export async function getCategorias() {
  const response = await query("/api/categories/list", "GET");
  return response;
}
