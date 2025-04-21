"use client";

import { Left } from "../../components/buttons/Left";
import { FormCategory } from "./components/FormCategory";
import { ButtonGrs } from "../../components/buttons/ButtonGrs";
import { Categorias } from "@/app/dashboard/components/icons";

export default function CrearCategoria() {
  return (
    <section className="w-full min-h-dvh p-7 flex flex-col gap-5 ">
      <section className="w-full px-10 pt-10 flex justify-between gap-5">
        <div>
          <Left url="/dashboard/categorias" />
          <h1 className="text-lg font-semibold">
            Agregar una nueva categoria{" "}
          </h1>
        </div>
      </section>
      <section className="flex gap-4">
        <div className="shadow-md w-[75%] rounded-md p-4 bg-white">
          <FormCategory />
        </div>
        <div className="shadow-md w-[25%] rounded-md p-4 bg-white h-20">
          <ButtonGrs text="Guardar categoria" icon={<Categorias />} />
        </div>
      </section>
    </section>
  );
}
