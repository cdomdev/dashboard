import { query } from "@/lib/request";
import { CategorySchema } from "@/interfaces";

export async function createCategoria({ nombre }: CategorySchema) {
  const response = await query("/api/categories/create", "POST", { nombre });
  return response;
}

export async function getCategorias(page?: number, pageSize?: number) {
  const response = await query(
    `/api/categories/list?page=${page}&pageSize=${pageSize}`,
    "GET"
  );
  return response;
}

export async function deleteCategory(id?: string) {
  const response = await query(`/api/categories/delete/${id}`, "DELETE");
  return response;
}

export async function editCategory({
  id,
  nombre,
  category,
}: {
  id?: string;
  nombre: string;
  category: string;
}) {
  const response = await query(`/api/categories/edit/${id}`, "PUT", {
    nombre,
    category,
  });
  return response;
}
