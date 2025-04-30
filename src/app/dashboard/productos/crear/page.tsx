"use client";

import { Back } from "../../components/ui/buttons/Back";
import { FormProducts } from "./components/FormProducts";

export default function CreateProduct() {
  return (
    <section className="w-full min-h-dvh p-7 flex flex-col gap-5 ">
      <section className="w-full px-10 pt-10 flex justify-between gap-5">
        <div>
          <Back url="/dashboard/productos" />
          <h1 className="text-lg font-semibold">Agregar un nuevo producto</h1>
        </div>
      </section>
      <section className="flex gap-4">
        <FormProducts />
      </section>
    </section>
  );
}
