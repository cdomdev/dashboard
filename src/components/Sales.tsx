"use client";

import { Sales } from "@/lib/balance";
import { useEffect, useState } from "react";
import { filterByDate } from "@/components/FilterByDate";
import { formatSinglePayment } from "@/utils/formatPayment";
import Image from "next/image";
import { OrderSchema } from "@/interfaces";

export const SalesData = () => {
  const [dataVentas, setDataVentas] = useState<OrderSchema[]>([]);
  const [filteredVentas, setFilteredVentas] = useState<OrderSchema[]>([]);
  const [filter, setFilter] = useState<string>("all");

  useEffect(() => {
    const fetchData = async () => {
      const ventasResponse = await Sales();
      if (ventasResponse.status === 200) {
        setDataVentas(ventasResponse.data.ventas);
        setFilteredVentas(ventasResponse.data.ventas);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (filter === "este-mes" || filter === "mes-pasado") {
      const filteredData = filterByDate(dataVentas, filter);
      setFilteredVentas(filteredData);
    } else {
      setFilteredVentas(dataVentas);
    }
  }, [filter, dataVentas]);

  return (
    <>
      <div className="flex justify-between p-1 md:p-0">
        <div>
          <h2 className="font-semibold text-lg md:text-xl ">
            Ventas recientes
          </h2>
          <p className="text-xs md:text-sm text-slate-500">
           Esta son algunas las ultimas ventas
          </p>
        </div>

        <div>
          <form className="max-w-sm mx-auto">
            <select
              id="filter"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-xs md:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 md:p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
            >
              <option value="all">Todos</option>
              <option value="este-mes">Este mes</option>
              <option value="mes-pasado">Mes pasado</option>
            </select>
          </form>
        </div>
      </div>
      <div className="pl-2 pt-4  max-h-[400px] overflow-y-auto">
        <ul className="flex flex-col gap-1">
          {filteredVentas.length > 0 ? (
            filteredVentas.map((order, index) => (
              <li
                key={order.id || index}
                className="flex justify-between gap-1 md:gap-7 py-2 px-1 items-center"
              >
                <div className="flex gap-4">
                  <div>
                    <Image
                      src={
                        order.usuario.picture || "/default-avatar-profile.webp"
                      }
                      alt="avatar del usuario"
                      className="rounded-full cursor-pointer relative w-14 h-10"
                      width={56}
                      height={40}
                      loading="lazy"
                    />
                  </div>
                  <div className="flex flex-col w-full leading-4">
                    <span className="text-sm md:text-base font-semibold">
                      {order.usuario.nombre}
                    </span>
                    <span className="text-xs md:text-sm text-gray-600">
                      {order.usuario.email}
                    </span>
                  </div>
                </div>
                <div>
                  <span className="text-base md:text-lg font-extrabold flex pesos gap-1 md:gap-2 items-center">
                    + {formatSinglePayment(order)}
                    <p className="font-light text-gray-700 hidden md:block md:text-sm">
                      COP
                    </p>
                  </span>
                </div>
              </li>
            ))
          ) : (
            <div className="w-full flex items-center justify-center">
              <span className="text-base text-gray-700">No hay ventas</span>
            </div>
          )}
        </ul>
      </div>
    </>
  );
};
