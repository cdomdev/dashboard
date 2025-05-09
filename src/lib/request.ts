import { api } from "./api";
import { AxiosError } from "axios";

export async function query(
  url: string,
  method: "GET" | "POST" | "PUT" | "DELETE" = "GET",
  body?: object,
  withCredentials: boolean = true
) {
  try {
    const response = await api({
      url,
      method,
      data: body,
      withCredentials,
    });

    return {
      success: true,
      status: response.status,
      data: response.data,
    };
  } catch (error) {
    if (error instanceof AxiosError) {
      console.error("Error en la solicitud:", error);

      if (error.response?.data?.error) {
        const { status, name, message, details } = error.response.data.error;
        return {
          success: false,
          status,
          name,
          message,
          details,
        };
      }

      return {
        success: false,
        status: error.response?.status || 500,
        message:
          error.response?.data?.message || "Error desconocido en la solicitud",
        details: error.response?.data || {},
      };
    }

    return {
      error: error,
      success: false,
      status: 500,
      message: error || "Error desconocido en la solicitud",
    };
  }
}
