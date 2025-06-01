import { query } from "./request";

export function getNotifications() {
  const res = query("/api/notifications/list", "GET");
  return res;
}

export function tickRead(id: number) {
  const res = query(`/api/notifications/read/${id}`, "PUT");
  return res;
}


export function tickReadAlls() {
  const res = query(`/api/notifications/read-alls`, "PUT");
  return res;
}

export function deleteNotification(id: number) {
  const res = query(`/api/notifications/delete/${id}`, "DELETE");
  return res;
}

