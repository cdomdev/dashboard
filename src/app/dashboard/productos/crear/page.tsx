"use client";

import { HeaderPagesSection } from "@/components/HeaderPagesSection";
import { FormProducts } from "../components/FormProducts";

export default function CreateProduct() {
  return (
    <main>
      <HeaderPagesSection href="#" viewBtn={false} title="Agregar un nuevo producto" url="/dashboard/productos" />
      <section className="flex gap-4 mt-10">
        <FormProducts />
      </section>
    </main>
  );
}
