"use client";
import { getAllSales } from "../lib/sales";
import { OrderSchema } from "@/interfaces";
import Link from "next/link";
import { useEffect, useState } from "react";

interface Props {
  setCount: React.Dispatch<React.SetStateAction<number>>;
}

export function SalesList({ setCount }: Props) {
  const [sales, setSales] = useState<OrderSchema[]>([]);

  useEffect(() => {
    async function fechtData() {
      const res = await getAllSales();
      if (res.status === 200) {
        setSales(res?.data.ventas);
        setCount(res?.data.ventas.length);
      } else {
        setCount(0);
        setSales([]);
      }
    }

    fechtData();
  }, [setCount]);

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
    <div className="relative overflow-x-auto shadow-md sm:rounded-sm">
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
          {sales?.map((prod, index) => (
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
                  href={`/dashboard/ventas/user/${prod.usuario.id}`}
                  className="hover:underline dark:text-blue-600"
                >
                  Ver pedido
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
  );
}
