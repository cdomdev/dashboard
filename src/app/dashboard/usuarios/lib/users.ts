import { query } from "@/lib/request";

export async function getAdmin(page: number, pageSize: number) {
  const res = await query(
    `/api/users/list-admins?page=${page}&pageSize=${pageSize}`,
    "GET"
  );
  return res;
}

export async function getUsers(page: number, pageSize: number) {
  const res = await query(
    `/api/users/list-users?page=${page}&pageSize=${pageSize}`,
    "GET"
  );
  return res;
}

export async function updateStateOfUser(id: string) {
  const res = await query(`/api/users/modifed-state-user/${id}`, "PUT");
  return res;
}

export async function deleteUser(id: string) {
  const res = await query(`/api/users/delete-user/${id}`, "DELETE");
  return res;
}
