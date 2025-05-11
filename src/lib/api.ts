import axios from "axios";
import { refreshAdminTokenClient } from "./refreshToken";
const HOST = process.env.NEXT_PUBLIC_HOST_API;

axios.defaults.withCredentials = true;

export const api = axios.create({
  baseURL: HOST,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(
  async (config) => {
    return config;
  },
  (error) => Promise.reject(error)
);

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (
      (error.response?.status === 401 || error.response?.status === 403) &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true;

      const refreshResponse = await refreshAdminTokenClient();

      console.log('interceptor ----> ', refreshResponse)
      const { newAccessToken } = refreshResponse;
      
      if (refreshResponse) {
        originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
        return api(originalRequest);
      }
    }

    return Promise.reject(error);
  }
);
