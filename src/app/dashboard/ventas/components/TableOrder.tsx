"use client";

import { useEffect, useState } from "react";
import { OrderSchema } from "@/interfaces";
import { useParams } from "next/navigation";
import { getOneSaleBy } from "../lib/sales";
import { HeaderPagesSection } from "@/components/HeaderPagesSection";

export function TablerOrder() {
  const [sale, setSale] = useState<OrderSchema>();
  const [userId, setUserId] = useState<string | null>(null);

  const params = useParams();
  const id = typeof params?.id === "string" ? params.id : undefined;

  useEffect(() => {
    const fetchPedido = async () => {
      if (!id) return;
      const res = await getOneSaleBy(id);
      if (res.status === 200) {
        setSale(res?.data?.pedido);
        const userId = res.data.pedido.usuario?.id;
        if (userId) setUserId(userId);
      } else {
        setSale({} as OrderSchema);
      }
    };

    fetchPedido();
  }, [id]);

  console.log("sale", sale);
  if (!sale)
    return (
      <div className="text-center flex items-center justify-center mt-10 gap-1">
        {" "}
        <div role="status">
          <svg
            aria-hidden="true"
            className="inline w-4 h-4 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>
          <span className="sr-only">Loading...</span>
        </div>{" "}
        Cargando pedido...
      </div>
    );

  return (
    <>
      <HeaderPagesSection
        href="#"
        title={`Detalles del pedido id`}
        url={`/dashboard/ventas/user/${userId}`}
      />
      <section className="md:px-10 py-4 dark:bg-white dark:text-black mt-7 rounded-sm shadow-sm">
        <h1 className="font-semibold text-base md:text-lg">
          Información del cliente
        </h1>
        <hr className="my-2" />

        <div className="relative overflow-x-auto">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-900 uppercase dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Nombre del cliente
                </th>
                <th scope="col" className="px-6 py-3">
                  Telefono
                </th>
                <th scope="col" className="px-6 py-3">
                  Correo electrónico
                </th>
                <th scope="col" className="px-6 py-3">
                  Dirección
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {sale?.usuario?.nombre}
                </th>
                <td className="px-6 py-4">{sale?.usuario?.telefono}</td>
                <td className="px-6 py-4">{sale?.usuario?.email}</td>
                <td className="px-6 py-4">{sale?.usuario?.direccion}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="md:px-10 py-4 dark:bg-white dark:text-black mt-7 rounded-sm shadow-sm">
        <h1 className="font-semibold text-base md:text-lg">
          Información del pedido
        </h1>
        <hr className="my-2" />

        <div className="relative overflow-x-auto">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-900 uppercase dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Nombre del producto
                </th>
                <th scope="col" className="px-6 py-3">
                  Cantidad
                </th>
                <th scope="col" className="px-6 py-3">
                  Descuento
                </th>
                <th scope="col" className="px-6 py-3">
                  Precio unitario
                </th>
                <th scope="col" className="px-6 py-3">
                  Subtotal
                </th>
                <th scope="col" className="px-6 py-3">
                  Descuento
                </th>
              </tr>
            </thead>
            <tbody>
              {sale?.detalles_pedido?.map((pro, index) => (
                <tr
                  className="bg-white border-b last:border-b-0 last:rounded-b  border-gray-200 hover:bg-gray-50 "
                  key={pro.id || index}
                >
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap  rounded-bl-lg"
                  >
                    {pro.Producto.titulo}
                  </th>
                  <td className="px-6 py-4">{pro.cantidad}</td>
                  <td className="px-6 py-4">{pro.descuento}</td>
                  <td className="px-6 py-4">{pro.precio_unitario}</td>
                  <td className="px-6 py-4">{pro.sub_total}</td>
                  <td className="px-6 py-4">
                    {pro.descuento || "No hay descuento"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}
