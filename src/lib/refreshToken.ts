const HOST = process.env.NEXT_PUBLIC_HOST_API;

export async function refreshAdminTokenClient() {
  try {
    
    const res = await fetch(`${HOST}/api/auth/refresh-token`, {
      method: 'POST',
      credentials: 'include',
    });

    if (!res.ok) throw new Error("No se pudo renovar el token");

    const data = await res.json();

    return data;
  } catch (err) {
    console.error("Error al refrescar token:", err);
    return null;
  }
}
