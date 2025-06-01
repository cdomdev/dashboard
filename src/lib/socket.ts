import { io } from "socket.io-client";
const HOST = process.env.NEXT_PUBLIC_HOST_API;

export const socket = io(HOST, {
  withCredentials: true,
});
