"use client";

import { BoxComponent, SendBox, Time, Sale, Usuario } from "@/components/icons";
import { useEffect, useState } from "react";
import { balans } from "@/lib/balance";
import { BalanceSchema } from "@/interfaces";
import { formatValue } from "@/utils/formatPayment";

const initialData: BalanceSchema = {
  totalOrders: 0,
  totalShipped: 0,
  totalPending: 0,
  totalSales: 0,
  users: 0,
};

export function Cardbalances() {
  const [data, setData] = useState<BalanceSchema>(initialData);

  useEffect(() => {
    async function fechtData() {
      const res = await balans();
      if (res.status === 200 && res.data) {
        setData(res.data);
      }
    }
    fechtData();
  }, []);

  const { totalOrders, totalShipped, totalPending, totalSales, users } = data;

  const dataBox = [
    {
      title: "Total ordenes",
      value: totalOrders,
      text: "Ordenes sin despachar",
      icon: BoxComponent,
      bgBox: "bg-orange-200",
    },
    {
      title: "Ordenes despachadas",
      value: totalShipped,
      text: "Entregado",
      icon: SendBox,
      bgBox: "bg-green-200",
    },
    {
      title: "Pendientes por envio",
      value: totalPending,
      text: "Pendientes",
      icon: Time,
      bgBox: "bg-indigo-200",
    },
    {
      title: "Total vendido",
      value: formatValue(totalSales),
      text: "Balance",
      icon: Sale,
      bgBox: "bg-rose-200",
    },
    {
      title: "Total usuarios",
      value: users,
      text: "Usuarios",
      icon: Usuario,
      bgBox: "bg-teal-200",
    },
  ];

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 place-items-center">
      {dataBox.map((item, index) => (
        <div
          key={index}
          className={`text-black w-full min-w-[10rem] sm:min-w-[12rem] h-24 sm:h-28 rounded-xl shadow-md flex justify-between p-3 ${item.bgBox} `}
        >
          <div className="flex flex-col justify-between">
            <h1 className="text-xs sm:text-sm font-semibold">{item.title}</h1>
            <p className="font-semibold text-sm sm:text-xl">{item.value}</p>
            <span className="text-xs text-slate-600 sm:text-md ">
              {item.text}
            </span>
          </div>

          <div
            className={`bg-white rounded-full w-9 h-9 sm:h-10 sm:w-10 flex justify-center items-center `}
          >
            <item.icon className="stroke-1 w-8 h-8" />
          </div>
        </div>
      ))}
    </div>
  );
}
