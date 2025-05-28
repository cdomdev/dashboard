"use client";
import { itemsHeadTableProducts } from "@/utils/headListForTables";
import Image from "next/image";
import { TableItems } from "@/components/ui/custom/table/TableItems";
import { useEffect, useState } from "react";
import { getProductWithDiscount } from "../lib/lib";
import Loading from "../loading";
import { NoDataResponse } from "@/components/NoDataInResp";
import { ProductSchema } from "@/interfaces";
import { Pagination } from "@/components/Pagination";
import { formatPrice } from "@/utils/formatPayment";
import Link from "next/link";
import { Editbutton } from "@/components/ui/custom/buttons";
import { DeletProduct } from "../../productos/components/DeleteProduct";

interface Prop {
  setCount: React.Dispatch<React.SetStateAction<number>>;
}

export function OfertsList({ setCount }: Prop) {
  const [products, setProducts] = useState<ProductSchema[]>([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const pageSize = 10;

  useEffect(() => {
    async function fetchData() {
      const res = await getProductWithDiscount(page, pageSize);
      if (res.status === 200) {
        setProducts(res?.data.data);
        setTotalPages(res?.data.data.length);
      } else {
        setProducts([]);
      }
    }

    fetchData();
  }, [page]);

  if (!products) return Loading();
  if (!products.length)
    return <NoDataResponse text="No hay datos para mostrar" />;

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
                {formatPrice(prod.precio)}
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
