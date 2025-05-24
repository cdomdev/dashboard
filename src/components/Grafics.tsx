"use client";

import { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

import { getMorSalled } from "@/lib/balance";
import { ProductSchema } from "@/interfaces";
import Image from "next/image";
import { LoadingSpinner } from "./LoadingSpiner";

interface TooltipPayload {
  value: number;
  payload: ProductSchema & { index: number; sales_count?: number };
  dataKey: string;
  color: string;
  name: string;
}

interface CustomTooltipProps {
  active?: boolean;
  payload?: TooltipPayload[];
  label?: string;
}

export default function Grafics() {
  const [products, setProducts] = useState<
    (ProductSchema & { index: number; sales_count: number })[]
  >([]);
  const [loading, setLoading] = useState(true);

  const CustomTooltip = ({ active, payload }: CustomTooltipProps) => {
    if (active && payload && payload.length > 0) {
      const data = payload[0];

      return (
        <div className="bg-white p-2 flex flex-col items-center justify-center max-w-44 rounded-lg shadow-md border">
          <p className="label text-xs text-wrap text-center font-semibold bg-gray-200 p-2 rounded-md">
            {data.payload.titulo}
          </p>
          <Image
            src={data.payload.image}
            alt="imagen de producto"
            className="h-24 w-24 object-cover rounded mt-2"
            width={96}
            height={96}
          />
          <p className="label text-lg font-semibold text-wrap bg-white text-black flex mt-2">
            {`Ventas: ${data.value}`}
          </p>
        </div>
      );
    }
    return null;
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await getMorSalled();
        if (response && response.status === 200 && response.data?.data) {
          const productsWithIndex = response.data.data.map(
            (product: ProductSchema, index: number) => ({
              ...product,
              index: index + 1,
            })
          );
          setProducts(productsWithIndex);
        } else {
          setProducts([]);
        }
      } catch (err) {
        console.error("Error al obtener datos:", err);
        setProducts([]);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-96">
        <LoadingSpinner text="Cargando datos del garfico..." />
      </div>
    );
  }

  if (products.length === 0) {
    return (
      <div className="flex items-center justify-center h-96">
        <p>No hay datos para mostrar</p>
      </div>
    );
  }

  const totalSales = products.reduce((acc, p) => acc + p.sales_count, 0);
  const topProduct = products.reduce((top, current) =>
    current.sales_count > (top?.sales_count || 0) ? current : top
  );

  return (
    <div className="w-full">
      <div className="mb-4 p-4 bg-gray-100 rounded text-sm space-y-1">
        <p className="font-medium pb-2">Resumen de productos más vendidos</p>
        <p className="flex items-center gap-2">
          <span>🛒 </span>
          Total unidades vendidas: <strong>{totalSales}</strong>
        </p>

        <p className="flex items-center gap-2 text-pretty">
          <span>⭐ </span>
          El producto más vendido:{" "}
          {topProduct.sales_count > 0
            ? topProduct?.titulo
            : "No hay productos"}{" "}
          ({topProduct.sales_count > 0 ? topProduct?.sales_count : 0} ventas)
        </p>
      </div>

      <ResponsiveContainer width="100%" height={400}>
        <BarChart
          data={products}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 4" />
          <XAxis dataKey="index" />
          <YAxis />
          <Tooltip content={<CustomTooltip />} />
          <Legend />
          <Bar dataKey="sales_count" barSize={40} fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
