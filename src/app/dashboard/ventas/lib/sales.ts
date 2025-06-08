import { query } from "@/lib/request";

export async function getAllSales(page: number, pageSize: number) {
  const res = await query(
    `/api/order/list?page=${page}&pageSize=${pageSize}`,
    "GET"
  );
  return res;
}

export async function getSalesBy( page: number, pageSize: number, id: string,) {
  const res = await query(
    `/api/order/list/${id}?page=${page}&pageSize=${pageSize}`,
    "GET"
  );
  return res;
}

export async function getOneSaleBy(id: string) {
  const res = await query(`/api/order/list-one/${id}`, "GET");
  return res;
}

export async function modifedSatatusSaleBy(id: string) {
  const res = await query(`/api/update/state-orders/${id}`, "PUT");
  return res;
}

export async function deleteSaleBy(id: string) {
  const res = await query(`/api/order/delete/${id}`, "DELETE");
  return res;
}

export async function UpdateStatusSaleBy(id: string, status: string) {
  const res = await query(`api/order/update-state/${id}`, "PUT", { status });
  return res;
}
