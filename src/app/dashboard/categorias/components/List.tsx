"use client";

import React from "react";
import { useEffect, useState } from "react";
import { getCategorias } from "../lib/categoria";
import type { CategorySchema } from "@/interfaces";
import { DeleteCategoria } from "./Delete";
import Loading from "../loading";
import { FormEditCat } from "./FormEditCat";
import { NoDataResponse } from "@/components/NoDataInResp";
import { TableItems } from "@/components/ui/custom/table/TableItems";
import { Pagination } from "@/components/Pagination";
import { itemsHeadCatAndSub } from "@/utils/headListForTables";

interface Props {
  setCatCount: React.Dispatch<React.SetStateAction<number>>;
}

export function List({ setCatCount }: Props) {
  const [categorias, setCategorias] = useState<CategorySchema[]>([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const pageSize = 10;

  useEffect(() => {
    const fetchData = async () => {
      const res = await getCategorias(page, pageSize);
      if (res?.status === 200 && Array.isArray(res.data?.categorias)) {
        setCatCount(res.data.categorias.length);
        setCategorias(res.data.categorias);
        setTotalPages(res.data.pagination.pageCount);
      } else {
        setCatCount(0);
        setCategorias([]);
      }
    };
    fetchData();
  }, [setCatCount, page]);


  if (!categorias) return <Loading />;

  if (categorias?.length === 0)
    return <NoDataResponse text="No hay categorias" />;

  return (
    <>
      <Pagination page={page} totalPages={totalPages} onPageChange={setPage} />

      <TableItems itemsHead={itemsHeadCatAndSub}>
        <>
          {categorias?.map((cat, index) => (
            <tr
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600"
              key={cat.id || index}
            >
              <th
                scope="row"
                className="px-2 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white text-center"
              >
                {index + 1}
              </th>
              <th
                scope="row"
                className="px-6 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white text-center"
              >
                {cat.nombre}
              </th>

              <td className=" py-3 text-center">
                <DeleteCategoria
                  setCategorias={setCategorias}
                  id={cat.id}
                  setCatCount={setCatCount}
                />
              </td>
              <td className=" py-3 flex items-center justify-center text-center">
                <FormEditCat category={cat} setCategorias={setCategorias} />
              </td>
            </tr>
          ))}
        </>
      </TableItems>
    </>
  );
}
