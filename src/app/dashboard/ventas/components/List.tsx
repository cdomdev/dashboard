"use client";
import { getAllSales } from "../lib/sales";
import { OrderSchema } from "@/interfaces";
import { useEffect, useState } from "react";
import { TableItems } from "@/components/ui/custom/table/TableItems";
import { DetailsButton } from "@/components/ui/custom/buttons";
import Image from "next/image";
import { NoDataResponse } from "@/components/NoDataInResp";
import { itemsHeadTableVentas } from "@/utils/headListForTables";
import { Pagination } from "@/components/Pagination";

interface Props {
  setCount: React.Dispatch<React.SetStateAction<number>>;
}

export function SalesList({ setCount }: Props) {
  const [sales, setSales] = useState<OrderSchema[]>([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const pageSize = 10;

  useEffect(() => {
    async function fechtData() {
      const res = await getAllSales(page, pageSize);
      if (res.status === 200) {
        const longitud = res?.data?.ventas.length
        setSales(res?.data.ventas);
        setCount(longitud);
        setTotalPages(longitud)
      } else {
        setCount(0);
        setSales([]);
      }
    }

    fechtData();
  }, [setCount, page]);



  if (sales.length === 0)
    return <NoDataResponse text="No hay ventas para mostrar" />;

  return (
    <>
    
    <Pagination page={page} totalPages={totalPages} onPageChange={setPage} />
    <TableItems itemsHead={itemsHeadTableVentas}>
      <>
        {sales.map((prod, index) => (
          <tr
            className="bg-white border-b  last:border-b-0 last:rounded-b  dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600"
            key={prod.id || index}
          >
            <th
              scope="row"
              className="px-2 py-4  not-first:font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              {index + 1}
            </th>

            <td
              scope="row"
              className="flex items-center   py-1 text-gray-900 whitespace-nowrap dark:text-white"
            >
              {
                <>
                  <Image
                    className="w-10 h-10 rounded-full"
                    src={prod.usuario.picture || "/default-avatar-profile.webp"}
                    alt="perfil de usuario"
                    width={50}
                    height={50}
                  />
                  <div className="ps-3">
                    <div className="text-base font-semibold">
                      {prod.usuario.nombre}
                    </div>
                    <div className="font-normal text-gray-500">
                      {prod.usuario.email}
                    </div>
                  </div>
                </>
              }
            </td>

            <td
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white text-center"
            >
              {prod.usuario.ciudad  || "No hay dato"}
            </td>
            <td
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white text-center"
            >
              {prod.usuario.departamento || "No hay dato"}
            </td>
            <td
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white text-center"
            >
              {prod.usuario.telefono}
            </td>

            <td className="px-4 pt-1.5 pb-1 text-center  ">
              <DetailsButton
                url={`/dashboard/ventas/user/${prod.usuario.id}`}
              />
            </td>
          </tr>
        ))}
      </>
    </TableItems>

    </>
  );
}
