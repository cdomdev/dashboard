import { query } from "@/app/dashboard/components";
import { categorySchema } from "@/interfaces";


export function createSubcategoria({ nombre }: categorySchema) {
  const response = query("/api/subcategories/create", "POST", { nombre });
  return response;
}


export function getSubcategorias() {
  const response = query("/api/subcategories/list", "GET");
  return response;
}

export function deleteSubcategoria(id?: string) {
  const response = query(`/api/subcategories/delete/${id}`, "DELETE");
  return response;
}

