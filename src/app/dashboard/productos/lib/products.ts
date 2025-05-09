import { ProductSchema } from "@/interfaces";
import { query } from "@/lib/request";

export async function createProduct(product: ProductSchema) {
  const response = query("/api/products/create", "POST", {
    product,
  });
  return response;
}

export async function getProducts() {
  const response = query("/api/products/list", "GET");
  return response;
}
