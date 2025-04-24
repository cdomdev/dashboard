import axios from "axios";
import { getAccessToken, refreshAdminToken } from "./refreshToken";
const { HOST_API } = process.env;

axios.defaults.withCredentials = true;

export const api = axios.create({
  baseURL: HOST_API,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(
  async (config) => {
    const token = await getAccessToken(); 
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    } else {
      console.warn("No hay token en cookies");
    }
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

      const newToken = await refreshAdminToken();
      if (newToken) {
        originalRequest.headers.Authorization = `Bearer ${newToken}`;
        return api(originalRequest);
      }
    }

    return Promise.reject(error);
  }
);
