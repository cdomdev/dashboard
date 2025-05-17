"use client"

import { useEffect, useState } from "react";
import { OrderSchema } from "@/interfaces";
import { useParams } from "next/navigation";
import { getOneSaleBy } from "../lib/sales";
import { HeaderPagesSection } from "@/components/HeaderPagesSection";

export function TablerOrder() {
  const [sale, setSale] = useState<OrderSchema[]>([]);
  const [userId, setUserId] = useState<string | null>(null);

  const params = useParams();
  const id = typeof params?.id === "string" ? params.id : undefined;

  useEffect(() => {
    const fetchPedido = async () => {
      if (!id) return;
      const res = await getOneSaleBy(id);
      if (res.status === 200) {
        setSale(res.data.pedido);
        const userId = res.data.pedido.usuario?.id;
        if (userId) setUserId(userId);
      } else {
        setSale([]);
      }
    };

    fetchPedido();
  }, [id]);

  if (!sale) return <p>Cargando pedido...</p>;

  return (
    <>
      <HeaderPagesSection
        href="#"
        title={`Detalles del pedido id`}
        url={`/dashboard/ventas/user/${userId}`}
      />
      <section className="md:px-10 py-4 bg-white mt-7 rounded-sm shadow-sm">
        algo
      </section>
    </>
  );
}
