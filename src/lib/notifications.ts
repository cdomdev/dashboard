import { query } from "./request";

export function getNotifications() {
  const res = query("api/notifications/list", "GET");
  return res;
}
