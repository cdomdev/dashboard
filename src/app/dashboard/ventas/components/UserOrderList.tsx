"use client";

import { OrderSchema } from "@/interfaces";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { getSalesBy } from "../lib/sales";
import { TableItems } from "@/components/ui/custom/table/TableItems";
import { DetailsButton } from "@/components/ui/custom/buttons";
import Image from "next/image";
import { ButtonStatus } from "@/components/ui/custom/buttons/ButtonStatusOrder";
import { HeaderPagesSection } from "@/components/HeaderPagesSection";
import { itemsHeadTableOrdes } from "@/utils/headListForTables";
import { formatValue } from "@/utils/formatPayment";
import { Pagination } from "@/components/Pagination";

export function UserOrders() {
  const [sale, setSale] = useState<OrderSchema[]>([]);
  const [count, setCount] = useState<number>(0);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const pageSize = 10;

  const params = useParams();
  const id = typeof params?.id === "string" ? params.id : undefined;

  useEffect(() => {
    const fetchPedido = async () => {
      if (!id) return;
      const res = await getSalesBy(pageSize, page, id);
      if (res.status === 200) {
         const longitud = res?.data?.pedidos.length
        setSale(res?.data.pedidos);
        setCount(longitud);
        setTotalPages(longitud)
      }else {
        setCount(0);
        setSale([]);
      }
    };

    fetchPedido();
  }, [id, setCount, page]);

  if (!sale) return <p>Cargando pedido...</p>;

  return (
    <>
      <HeaderPagesSection
        href="#"
        title={`Listado de pedidos`}
        url="/dashboard/ventas"
        viewCount={true}
        textSpan={`El usuario tiene ${count} ${
          count > 1 ? "Pedidos" : "Pedido"
        }`}
      />

      <Pagination page={page} totalPages={totalPages} onPageChange={setPage} />
      <TableItems itemsHead={itemsHeadTableOrdes}>
        <>
          {sale?.map((prod, index) => (
            <tr
              className="bg-white border-b last:border-b-0 last:rounded-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600 "
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
                className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white"
              >
                {
                  <>
                    <Image
                      className="w-10 h-10 rounded-full"
                      src={
                        prod.usuario.picture || "/default-avatar-profile.webp"
                      }
                      alt="perfil de usuario"
                      width={50}
                      height={50}
                    />
                    <div className="ps-3">
                      <div className="text-base font-semibold">
                        {prod.usuario.nombre}
                      </div>
                    </div>
                  </>
                }
              </td>

              <td
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white text-center"
              >
                {formatValue(prod.pago_total)}
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
                {formatValue(prod.costo_de_envio)}
              </td>
              <td
                scope="row"
                className="py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white text-center"
              >
                {prod.status_mercadopago || "N/A"}
              </td>
              <td
                scope="row"
                className="py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white text-center"
              >
                <ButtonStatus id={prod.id} initialStatus={prod.estado_pedido} />
              </td>
              <td className="px-4 py-4 text-center">
                <DetailsButton
                  url={`/dashboard/ventas/user/detalle/${prod?.id}`}
                />
              </td>
            </tr>
          ))}
        </>
      </TableItems>
    </>
  );
}
