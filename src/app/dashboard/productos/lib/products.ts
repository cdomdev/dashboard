import { ProductSchema } from "@/interfaces";
import { query } from "@/lib/request";

export async function getProducts(page: number, pageSize: number) {
  const response = query(
    `/api/products/list?page=${page}&pageSize=${pageSize}`,
    "GET"
  );
  return response;
}

export async function getProductBy(id?: string) {
  const response = query(`/api/products/list/${id}`, "GET");
  return response;
}

export async function createProduct(product: ProductSchema) {
  const response = query("/api/products/create", "POST", {
    product,
  });
  return response;
}

export async function editProduct(product: ProductSchema) {
  const response = query(`/api/products/update/${product.id}`, "PUT", {
    product,
  });
  return response;
}

export async function deleteProduct(id?: string) {
  const response = query(`/api/products/delete/${id}`, "DELETE", {});
  return response;
}
