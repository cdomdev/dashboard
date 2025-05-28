import Link from "next/link";
import { Metadata } from "next";
import { AlertTriangle } from "lucide-react";

export const metadata: Metadata = {
  title: "Not fount - La pagina no existe",
};

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-black px-4 text-center">
      <div className="bg-white p-8 rounded-2xl shadow-lg max-w-lg w-full">
        <div className="flex justify-center mb-4">
          <AlertTriangle className="h-16 w-16 text-yellow-500" />
        </div>
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          ¡Página no encontrada!
        </h1>
        <p className="text-gray-600 mb-6">
          La ruta a la que estás intentando acceder no existe o fue movida.
        </p>
        <Link
          href="/dashboard"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-xl transition"
        >
          Volver al inicio
        </Link>
      </div>
    </div>
  );
}
