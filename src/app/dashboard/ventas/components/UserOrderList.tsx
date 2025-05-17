"use client";

import { HeaderPagesSection } from "@/components/HeaderPagesSection";
import { OrderSchema } from "@/interfaces";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { getSalesBy } from "../lib/sales";

export function UserOrders() {
  const [sale, setSale] = useState<OrderSchema[]>([]);

  const params = useParams();
  const id = typeof params?.id === "string" ? params.id : undefined;

  useEffect(() => {
    const fetchPedido = async () => {
      if (!id) return;
      const res = await getSalesBy(id);
      if (res.status === 200) {
        setSale(res.data.pedido);
      }
    };

    fetchPedido();
  }, [id]);

  if (!sale) return <p>Cargando pedido...</p>;

  const itemsHeadTable = [
    "#ID",
    "Nombre de usuario",
    "Email",
    "telefono",
    "Total pagado",
    "Metodo de pago",
    "Estado del pedido",
    "Mas detalles",
    "Accion",
    "Accion",
  ];

  return (
    <>
      <HeaderPagesSection
        href="#"
        title={`Listado de pedidos de ${sale[0]?.usuario?.nombre}`}
        url="/dashboard/ventas"
      />

      <div className="relative overflow-x-auto shadow-md sm:rounded-sm pt-5">
        <table className="w-full text-sm text-Back rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              {itemsHeadTable.map((item, idx) => (
                <th key={idx} scope="col" className="p-4 text-center">
                  {item}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="overflow-y-auto">
            {sale?.map((prod, index) => (
              <tr
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600"
                key={prod.id || index}
              >
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {prod?.id.slice(1, 6)}
                </th>
                <td
                  scope="row"
                  className="py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white text-center"
                >
                  {prod.usuario.nombre}
                </td>
                <td
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white text-center"
                >
                  {prod.usuario.email}
                </td>
                <td
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white text-center"
                >
                  {prod.usuario.telefono}
                </td>
                <td
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white text-center"
                >
                  {prod.pago_total}
                </td>

                <td
                  scope="row"
                  className="py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white text-center"
                >
                  {prod.metodo_de_pago}
                </td>
                <td
                  scope="row"
                  className="py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white text-center"
                >
                  {prod.estado_pedido}
                </td>
                <td className="px-4 py-4">
                  <Link
                    href={`/dashboard/ventas/user/detalle/${prod?.id}`}
                    className="hover:underline dark:text-blue-600"
                  >
                    Ver detalles
                  </Link>
                </td>
                <td className="px-4 py-4">Eliminar</td>
                <td className="px-4 py-4 flex items-center justify-center">
                  Editar
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
