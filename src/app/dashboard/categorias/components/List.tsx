"use client";

import React from "react";
import { useEffect, useState } from "react";
import { getCategorias } from "../lib/categoria";
import type { categorySchema } from "@/interfaces";
import { DeleteCategoria } from "./Delete";
import Loading from "../loading";
import { FormEditCat } from "./FormEditCat";
import { DbNotResult } from "@/components/icons";

interface Props {
  setCatCount: React.Dispatch<React.SetStateAction<number>>;
}

export function List({ setCatCount }: Props) {
  const [categorias, setCategorias] = useState<categorySchema[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await getCategorias();
      if (res?.status === 200 && Array.isArray(res.data?.categorias)) {
        setCatCount(res.data.categorias.length);
        setCategorias(res.data.categorias);
      } else {
        setCatCount(0);
        setCategorias([]);
      }
    };
    fetchData();
  }, [setCatCount]);

  if (!categorias) return <Loading />;

  if (categorias?.length === 0)
    return (
      <div className=" shadow-sm mt-10 text-center text-md py-4 dark:text-black flex flex-col items-center dark:bg-white rounded-md">
        <DbNotResult className="text-gray-400"/>
        <p className="text-gray-700">No hay subcategorias para listar</p>
      </div>
    );

  return (
    <div className="mt-10 relative overflow-x-auto shadow-md sm:rounded-sm">
      <table className="w-full text-sm text-Back rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="p-4">
              #ID
            </th>
            <th scope="col" className="px-6 py-3">
              Nombre de la categoria
            </th>

            <th scope="col" className="pr-12 py-3">
              acción
            </th>
            <th scope="col" className="px-6 py-3 ">
              acción
            </th>
          </tr>
        </thead>
        <tbody>
          {categorias?.map((cat, index) => (
            <tr
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600"
              key={cat.id || index}
            >
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {cat.id?.slice(1, 7) || index}
              </th>
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {cat.nombre}
              </th>

              <td className="pl-20 py-4">
                <DeleteCategoria
                  setCategorias={setCategorias}
                  id={cat.id}
                  setCatCount={setCatCount}
                />
              </td>
              <td className="px-6 py-4 flex items-center justify-center">
                <FormEditCat category={cat} setCategorias={setCategorias} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
