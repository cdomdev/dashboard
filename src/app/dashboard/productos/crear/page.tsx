"use client";

import { Left } from "../../components/buttons/Left";
import { ButtonGrs } from "../../components/buttons/ButtonGrs";
import { Dataabase } from "../../components/icons";
import {FormProducts} from "./components/FormProducts";

export default function CreateProduct() {
  return (
    <section className="w-full min-h-dvh p-7 flex flex-col gap-5 ">
      <section className="w-full px-10 pt-10 flex justify-between gap-5">
        <div>
          <Left url="/dashboard/productos" />
          <h1 className="text-lg font-semibold">Agregar un nuevo producto</h1>
        </div>
      </section>
      <section className="flex gap-4">
        <div className="shadow-md w-[75%] rounded-md p-4 bg-white">
          <FormProducts />
        </div>
        <div className="shadow-md w-[25%] rounded-md p-4 bg-white h-20">
          <ButtonGrs text="Guardar producto" icon={<Dataabase />} />
        </div>
      </section>
    </section>
  );
}
