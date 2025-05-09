"use client";

import { Back } from "../../../../components/ui/custom/buttons/Back";
import { FormCategory } from "../components/FormCategory";



export default function CrearCategoria() {
  return (
    <section className="w-full min-h-dvh p-7 flex flex-col gap-5 ">
      <section className="w-full px-10 pt-10 flex justify-between gap-5">
        <div>
          <Back url="/dashboard/categorias" />
          <h1 className="text-lg font-semibold">
            Agregar una nueva categoria{" "}
          </h1>
        </div>
      </section>
      <section className="flex gap-4">
        <FormCategory  />
      </section>
    </section>
  );
}
