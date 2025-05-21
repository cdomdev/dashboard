"use client";

import { HeaderPagesSection } from "@/components/HeaderPagesSection";
import { OrderSchema } from "@/interfaces";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { getSalesBy } from "../lib/sales";
import { TableItems } from "@/components/ui/custom/table/TableItems";
import { DetailsButton } from "@/components/ui/custom/buttons";
import { DeleteData } from "./DeleteData";
import Image from "next/image";

interface Props {
  setCount: React.Dispatch<React.SetStateAction<number>>;
}

export function UserOrders({ setCount }: Props) {
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
    "Usuario",
    "Total pagado",
    "Método de pago",
    "Estado del pedido",
    "Costo de envío",
    "Estado de Mercado Pago",
    "Detalles",
    "",
  ];

  return (
    <>
      <HeaderPagesSection
        href="#"
        title={`Listado de pedidos ${sale[0]?.usuario?.nombre}`}
        url="/dashboard/ventas"
        viewCount={true}
        textSpan={`El usuario tiene ${sale.length} ${
          sale.length > 1 ? "Pedidos" : "Pedido"
        }`}
      />

      <TableItems itemsHead={itemsHeadTable}>
        <>
          {sale?.map((prod, index) => (
            <tr
              className="bg-white border-b last:border-b-0 last:rounded-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600 "
              key={prod.id || index}
            >
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white rounded-bl-lg "
              >
                {prod?.id.slice(1, 6)}
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
              <td
                scope="row"
                className="py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white text-center"
              >
                {prod.costo_de_envio}
              </td>
              <td
                scope="row"
                className="py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white text-center"
              >
                {prod.status_mercadopago || "N/A"}
              </td>
              <td className="px-4 py-4 text-center">
                <DetailsButton
                  url={`/dashboard/ventas/user/detalle/${prod?.id}`}
                />
              </td>
              <td className="px-4 py-2 text-center rounded-br-lg">
                <DeleteData
                  id={prod.id}
                  setCount={setCount}
                  setSales={setSale}
                />
              </td>
            </tr>
          ))}
        </>
      </TableItems>
    </>
  );
}
