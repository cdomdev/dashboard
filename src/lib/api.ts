import axios from "axios";
import {getToken} from './getToken'
import { refreshAdmin } from "./refreshToken";
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
    const token = await getToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
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
      try {

        const refreshResponse = await refreshAdmin();
        
        if (refreshResponse?.newAccessToken) {
          originalRequest.headers.Authorization = `Bearer ${refreshResponse.newAccessToken}`;
          return api(originalRequest);
        } else {
          window.location.href = "/login";
          return Promise.reject(error);
        }
      } catch (error) {
        console.error("Error al renovar la sesion");
        window.location.href = "/login";
        return Promise.reject(error);
      }
    }

    return Promise.reject(error);
  }
);
