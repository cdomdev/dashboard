"use client";

import { useEffect, useState } from "react";
import { OrderSchema } from "@/interfaces";
import { useParams } from "next/navigation";
import { getOneSaleBy } from "../lib/sales";
import { HeaderPagesSection } from "@/components/HeaderPagesSection";
import { LoadingSpinner } from "@/components/LoadingSpiner";
import { ButtonStatus } from "@/components/ui/custom/buttons/ButtonStatusOrder";
import { UpdateState } from "./UpdateStatusOrder";

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

  if (!sale)
    return LoadingSpinner({
      text: "Cargando información del pedido...",
    });

  return (
    <>
      <HeaderPagesSection
        href="#"
        title={`Detalles del pedido -  ${sale?.id.slice(0, 6)}`}
        url={`/dashboard/ventas/user/${userId}`}
      />

      <section className="flex flex-col shadow-sm bg-white dark:bg-slate-300 dark:text-black  rounded-md mt-4">
        <div className="md:px-5 pt-4  mt-4 ">
          <h1 className="font-semibold text-base md:text-lg">
            Información del cliente
          </h1>
          <hr className="my-2 border-gray-400  dark:border-gray-600" />

          <div className="relative overflow-x-auto">
            <table className="w-full text-sm text-left rtl:text-right text-gray-600 dark:text-gray-700">
              <thead className="text-xs text-gray-900 uppercase dark:text-gray-700 border-b border-gray-300">
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
                  <th scope="row" className="px-6 py-3">
                    {sale?.usuario?.nombre}
                  </th>
                  <td className="px-6 py-4">{sale?.usuario?.telefono}</td>
                  <td className="px-6 py-4">{sale?.usuario?.email}</td>
                  <td className="px-6 py-4">{sale?.usuario?.direccion}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="md:px-5 pt-1 pb-4 ">
          <h1 className="font-semibold text-base md:text-lg">
            Información del pedido
          </h1>
          <hr className="my-2 border-gray-400  dark:border-gray-600" />

          <div className="md:px-10 py-4 ">
            <div className="flex items-center justify-between gap-x-3">
              <div className="flex items-center gap-x-3">
                <h3 className="font-semibold ">Estado del pedido: </h3>
                <ButtonStatus id={sale?.id} initialStatus={sale?.estado_pedido} />
              </div>
              <div>
                <UpdateState id={sale?.id} />
              </div>
            </div>
          </div>

          <hr className="my-2 border-gray-400  dark:border-gray-600" />

          <div className="relative w-full">
            <table className="w-full text-sm text-left rtl:text-right text-gray-600 dark:text-gray-700">
              <thead className="text-xs text-gray-900 uppercase dark:text-gray-700 border-b border-gray-300">
                <tr>
                  <th className="px-6 py-3 text-center">Nombre del producto</th>
                  <th className="px-6 py-3 text-center">Cantidad</th>
                  <th className="px-6 py-3 ">Precio unitario</th>
                  <th className="px-6 py-3 ">Descuento</th>
                  <th className="px-6 py-3 text-center">Subtotal</th>
                </tr>
              </thead>
            </table>

            <div className="overflow-y-auto max-h-72">
              <table className="w-full text-sm text-left rtl:text-right text-gray-600 dark:text-gray-700">
                <tbody>
                  {sale?.detalles_pedido?.map((pro, index) => (
                    <tr
                      key={pro.id || index}
                      className="border-b last:border-b-0 border-gray-200 hover:bg-gray-50"
                    >
                      <th className="px-6 py-4 font-normal text-gray-900  text-wrap max-w-[200px] break-words">
                        {pro.Producto.titulo}
                      </th>
                      <td className="px-6 py-4 text-center">{pro.cantidad}</td>
                      <td className="px-6 py-4 text-center">{pro.precio_unitario}</td>
                      <td
                        className={`${
                          pro.descuento ? "text-red-400" : "text-black text-xs"
                        } px-6 py-4 text-center`}
                      >
                        {pro.descuento || "No hay descuento"}
                        <span className={pro.descuento ? "" : "hidden"}>%</span>
                      </td>
                      <td className="px-6 py-4 text-center">{pro.sub_total}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
