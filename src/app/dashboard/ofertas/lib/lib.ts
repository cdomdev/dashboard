import { query } from "@/lib/request";

export function getProductWithDiscount(page: number, pageSize: number) {
  const res = query(
    `/api/oferts/list/products?page=${page}&pagesize=${pageSize}`,
    "GET"
  );
  return res;
}
