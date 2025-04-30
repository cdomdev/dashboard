import { Back } from "../components/ui/buttons/Back";
import { ButtonGrs } from "../components/ui/buttons/Button";
import { More } from "../components/icons";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Subcategorias",
  description: "Pagina de subcategorias - ver o crear nuevas subcategorias",
};


export default function HomeSubcategoria() {
  return (
    <section className="w-full min-h-dvh p-7 flex flex-col gap-5 ">
      <section className="w-full px-10 pt-14 flex justify-between gap-5">
        <div>
          <Back url="/dashboard" />
          <h1 className="text-lg font-bold md:text-2xl">Subcategorias</h1>
        </div>
        <div>
          <ButtonGrs
            text="Agregar una nueva subcategoria"
            icon={<More />}
            href="/dashboard/subcategorias/crear"
          />
        </div>
      </section>
      <section className="shadow-md w-full rounded-md p-4 bg-white"></section>
    </section>
  );
}
