"use client";

import { HeaderPagesSection } from "@/components/HeaderPagesSection";
import { FormProducts } from "../components/FormProducts";
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Agregar nuevo producto",
  description: "Pagina para agregar nuevos productos",
};

export default function CreateProduct() {
  return (
    <>
      <HeaderPagesSection href="#" viewBtn={false} title="Agregar un nuevo producto" url="/dashboard/productos" />
      <section className="flex gap-4 mt-10">
        <FormProducts />
      </section>
    </>
  );
}
