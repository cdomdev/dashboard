"use client";

import React from "react";
import { useEffect, useState } from "react";
import { getSubcategorias } from "../lib/subcategoria";
import type { categorySchema } from "@/interfaces";
import { DeleteSubcategoria } from "./Delete";
import Loading from "../loading";
import { DbNotResult } from "@/components/icons/DbNotResult";

interface Props {
  setCatCount: React.Dispatch<React.SetStateAction<number>>;
}

export function List({ setCatCount }: Props) {
  const [subcategoria, setSubcategoria] = useState<categorySchema[]>();

  useEffect(() => {
    const fetchData = async () => {
      const res = await getSubcategorias();
      console.log(res)
      if (res?.status === 200 && Array.isArray(res.data?.subcategorias)) {
        setCatCount(res.data.subcategorias.length);
        setSubcategoria(res.data.subcategorias);
      } else {
        setCatCount(0);
        setSubcategoria([]);
      }
    };
    fetchData();
  }, [setCatCount]);

  if (!subcategoria) return <Loading />;

  if (subcategoria?.length === 0)
    return (
      <div className="text-center text-md text-gray- py-4 dark:text-black flex flex-col items-center">
        <DbNotResult className="" />
        <p className="text-gray-700">No hay subcategorias para listar</p>
      </div>
    );
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-sm animate-fadeIn">
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
              Action
            </th>
            <th scope="col" className="px-6 py-3 ">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {subcategoria?.map((cat, index) => (
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
                <DeleteSubcategoria
                  id={cat.id}
                  setSubcategorias={setSubcategoria}
                  setCatCount={setCatCount}
                />
              </td>
              <td className="px-6 py-4 flex items-center justify-center">
                <a
                  href="#"
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Edit
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
