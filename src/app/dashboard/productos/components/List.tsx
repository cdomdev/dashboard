"use client";

import { ProductSchema } from "@/interfaces";
import { useEffect, useState } from "react";
import Loading from "../loading";
import { DbNotResult } from "@/components/icons";
import { getProducts } from "../lib/products";
import Image from "next/image";

export function ListProducts() {
  const [products, setProducts] = useState<ProductSchema[]>();

  useEffect(() => {
    async function fechData() {
      const res = await getProducts();
      console.log("productos", res);
      if (res.status === 200) {
        setProducts(res.data.data);
      }else{
        setProducts([])
      }
    }
    fechData();
  }, []);

  if (!products) return <Loading />;
  
  if (products?.length === 0)
    return (
      <div className="text-center text-md text-gray- py-4 dark:text-black flex flex-col items-center dark:bg-white rounded-md">
        <DbNotResult className="" />
        <p className="text-gray-700">No hay products para listar</p>
      </div>
    );
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-sm">
      <table className="w-full text-sm text-Back rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="p-4">
              #ID
            </th>
            <th scope="col" className="px-6 py-3">
              Nombre
            </th>
            <th scope="col" className="px-6 py-3">
              Marca
            </th>
            <th scope="col" className="px-6 py-3">
              Cantidad
            </th>
            <th scope="col" className="px-6 py-3">
              Precio
            </th>
            <th scope="col" className="pr-12 py-3">
              Imagen
            </th>
            <th scope="col" className="pr-12 py-3">
              Referencia
            </th>

            <th scope="col" className="px-6 py-3 ">
              acción
            </th>
            <th scope="col" className="pr-12 py-3">
              acción
            </th>
          </tr>
        </thead>
        <tbody>
          {products?.map((prod, index) => (
            <tr
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600"
              key={prod.id || index}
            >
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {prod?.id?.slice(1, 7)}
              </th>
              <th
                scope="row"
                className="py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {prod.titulo}
              </th>
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {prod.marca}
              </th>
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {prod.cantidad}
              </th>
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {prod.precio}
              </th>
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                <Image
                  src={prod.image}
                  width={40}
                  height={40}
                  alt={`${prod.titulo}`}
                  className="rounded-full "
                />
              </th>
              <th
                scope="row"
                className="py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {prod.referencia}
              </th>
              <td className="px-4 py-4">Eliminar</td>
              <td className="px-4 py-4 flex items-center justify-center">
                Editar
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
