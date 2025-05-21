import { query } from "@/lib/request";

export async function getAllSales() {
  const res = await query("/api/order/list", "GET");
  return res;
}

export async function getSalesBy(id: string) {
  const res = await query(`/api/order/list/${id}`, "GET");
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