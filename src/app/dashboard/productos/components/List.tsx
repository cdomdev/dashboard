"use client";

import { ProductSchema } from "@/interfaces";
import { useEffect, useState } from "react";
import Loading from "../loading";
import { getProducts } from "../lib/products";
import Image from "next/image";
import { Pagination } from "@/components/Pagination";
import { TableItems } from "@/components/ui/custom/table/TableItems";
import { Editbutton } from "@/components/ui/custom/buttons";
import Link from "next/link";
import { DeletProduct } from "./DeleteProduct";
import { useToastStore } from "@/context/global.context.app";
import { NoDataResponse } from "@/components/NoDataInResp";
import { itemsHeadTableProducts } from "@/utils/headListForTables";
import { formatValue } from "@/utils/formatPayment";

interface Props {
  setCount: React.Dispatch<React.SetStateAction<number>>;
}

export function ListProducts({ setCount }: Props) {
  const [products, setProducts] = useState<ProductSchema[]>([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const { showToast } = useToastStore();
  const pageSize = 10;

  useEffect(() => {
    async function fetchData() {
      const res = await getProducts(page, pageSize);
      const { status, data } = res;
      if (res.status === 200) {
        setProducts(res.data.data);
        setTotalPages(res.data.pagination.pageCount);
        setCount(res.data.pagination.total);
      } else if (status === 401 || status === 403) {
        const message =
          data?.message || "No tienes permisos para ver los productos";
        showToast("toast-fail", message);
      } else if (status === 404) {
        const message = data?.message || "No hay productos para listar";
        showToast("toast-fail", message);
      }
    }
    fetchData();
  }, [page, setCount, showToast]);

  if (!products) return <Loading />;

  if (products?.length === 0) return <NoDataResponse text="No hay productos" />;

  return (
    <>
      <Pagination page={page} totalPages={totalPages} onPageChange={setPage} />

      <TableItems itemsHead={itemsHeadTableProducts}>
        <>
          {products?.map((prod, index) => (
            <tr
              className="bg-white border-b  last:border-b-0 last:rounded-b  dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600"
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
                className="py-4 font-medium  text-gray-900 whitespace-nowrap dark:text-white text-center text-wrap"
              >
                {prod.titulo}
              </td>
              <td
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white text-center"
              >
                {prod.marca}
              </td>
              <td
                scope="row"
                className={`${
                  prod.cantidad < 10
                    ? "text-red-600 font-extrabold"
                    : "text-gray-900"
                } px-6 py-4 font-medium  whitespace-nowrap dark:text-white text-center`}
              >
                {prod.cantidad}
              </td>
              <td
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white text-center"
              >
                {prod.descuento ? prod.descuento : "0"} %
              </td>
              <td
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white text-center"
              >
                {formatValue(prod.precio)}
              </td>
              <td
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text- text-center"
              >
                <Image
                  src={prod.image}
                  width={40}
                  height={40}
                  alt={`${prod.titulo}`}
                  className="rounded-full "
                />
              </td>
              <td
                scope="row"
                className="py-4 font-medium  text-gray-900 whitespace-nowrap dark:text-white text-center"
              >
                {prod.referencia}
              </td>
              <td className="px-4 py-4 text-center">
                <Link href={`/dashboard/productos/editar/${prod.id}`}>
                  <Editbutton />
                </Link>
              </td>
              <td className="px-4 py-4">
                <DeletProduct
                  id={prod.id}
                  setProducts={setProducts}
                  setCount={setCount}
                />
              </td>
            </tr>
          ))}
        </>
      </TableItems>
    </>
  );
}
