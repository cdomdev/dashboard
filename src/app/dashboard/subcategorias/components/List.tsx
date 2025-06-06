"use client";

import React from "react";
import { useEffect, useState } from "react";
import { getSubcategorias } from "../lib/subcategoria";
import type { CategorySchema } from "@/interfaces";
import { DeleteSubcategoria } from "./Delete";
import Loading from "../loading";
import { FormEditSubcat } from "./FormEditSubcat";
import { NoDataResponse } from "@/components/NoDataInResp";
import { TableItems } from "@/components/ui/custom/table/TableItems";
import { Pagination } from "@/components/Pagination";
import { itemsHeadCatAndSub } from "@/utils/headListForTables";

interface Props {
  setCatCount: React.Dispatch<React.SetStateAction<number>>;
}

export function List({ setCatCount }: Props) {
  const [subcategoria, setSubcategoria] = useState<CategorySchema[]>([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const pageSize = 10;

  useEffect(() => {
    const fetchData = async () => {
      const res = await getSubcategorias(page, pageSize);
      if (res?.status === 200 && Array.isArray(res.data?.subcategorias)) {
        setCatCount(res.data.subcategorias.length);
        setTotalPages(res.data.pagination.pageCount);
        setSubcategoria(res.data.subcategorias);
      } else {
        setCatCount(0);
        setSubcategoria([]);
      }
    };
    fetchData();
  }, [setCatCount, page]);

  if (!subcategoria) return <Loading />;

  if (subcategoria?.length === 0)
    return <NoDataResponse text="No hay subcategorias" />;

  return (
    <>
      <Pagination page={page} totalPages={totalPages} onPageChange={setPage} />
      <TableItems itemsHead={itemsHeadCatAndSub}>
        {subcategoria?.map((cat, index) => (
          <tr
            className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600"
            key={cat.id || index}
          >
            <th
              scope="row"
              className="px-2 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              {index + 1}
            </th>
            <th
              scope="row"
              className="px-6 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              {cat.nombre}
            </th>

            <td className=" py-3">
              <DeleteSubcategoria
                setSubcategorias={setSubcategoria}
                id={cat.id}
                setCatCount={setCatCount}
              />
            </td>
            <td className=" py-3 flex items-center justify-center">
              <FormEditSubcat
                subcategory={cat}
                setSubCategoria={setSubcategoria}
              />
            </td>
          </tr>
        ))}
      </TableItems>
    </>
  );
}
