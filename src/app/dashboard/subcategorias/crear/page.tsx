"use client";

import { Back } from "../../../../components/ui/custom/buttons/Back";
import { FormSubcategory } from "../components/FormSubcategory";

export default function Crearsubcategoria() {
  return (
    <section className="w-full min-h-dvh p-7 flex flex-col gap-5 ">
      <section className="w-full px-10 pt-10 flex justify-between gap-5">
        <div>
          <Back url="/dashboard/subcategorias" />
          <h1 className="text-lg font-semibold">
            Agregar una nueva subcategoria{" "}
          </h1>
        </div>
      </section>
      <section className="flex gap-4">
        <FormSubcategory />
      </section>
    </section>
  );
}
