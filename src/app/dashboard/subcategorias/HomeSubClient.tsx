"use client";
import { useState } from "react";
import { Back } from "../../../components/ui/custom/buttons/Back";
import { ButtonGrs } from "../../../components/ui/custom/buttons/Button";
import { More } from "../../../components/icons";
import { List } from "./components/List";

export default function HomeSubcategoria() {
  const [catCount, setCatCount] = useState(0);

  return (
    <section className="w-full min-h-dvh p-7 flex flex-col gap-5 ">
      <section className="w-full px-10 flex justify-between gap-5">
        <div>
          <Back url="/dashboard" />
          <h1 className="text-lg font-bold md:text-2xl">Subcategorias</h1>
          <span>
            Total categorias <strong>{catCount}</strong>
          </span>
        </div>
        <div>
          <ButtonGrs
            text="Agregar una nueva subcategoria"
            icon={<More />}
            href="/dashboard/subcategorias/crear"
          />
        </div>
      </section>
      <section className="shadow-md w-full rounded-md bg-white">
        <List setCatCount={setCatCount} />
      </section>
    </section>
  );
}
