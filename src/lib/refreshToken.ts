export async function refreshAdmin() {
  try {
    const res = await fetch("/api/auth/refreshToken", {
      method: "GET",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) throw new Error("No se pudo renovar el token");

    const data = await res.json();

    return data;
  } catch (err) {
    console.error("Error al refrescar token:", err);
    return null;
  }
}

