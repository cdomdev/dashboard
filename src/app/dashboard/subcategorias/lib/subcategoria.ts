import { query } from "@/lib/request";
import { CategorySchema } from "@/interfaces";

export function createSubcategoria({ nombre }: CategorySchema) {
  const response = query("/api/subcategories/create", "POST", { nombre });
  return response;
}

export function getSubcategorias(page?: number, pageSize?: number) {
  const response = query(
    `/api/subcategories/list?page=${page}&pageSize=${pageSize}`,
    "GET"
  );
  return response;
}

export function deleteSubcategoria(id?: string) {
  const response = query(`/api/subcategories/delete/${id}`, "DELETE");
  return response;
}

export async function editSubcategory({
  id,
  nombre,
  subcategory,
}: {
  id?: string;
  nombre: string;
  subcategory: string;
}) {
  const response = await query(`/api/subcategories/edit/${id}`, "PUT", {
    nombre,
    subcategory,
  });
  return response;
}
