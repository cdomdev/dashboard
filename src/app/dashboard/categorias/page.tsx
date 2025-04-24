import { Left } from "../components/ui/buttons/Left";
import { ButtonGrs } from "../components/ui/buttons/ButtonGrs";
import { More } from "../components/icons";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Categorias",
  description: "Pagina de categorias",
};

export default function HomeCategoria() {
  return (
    <section className="w-full min-h-dvh p-7 flex flex-col gap-5 ">
      <section className="w-full px-10 pt-14 flex justify-between gap-5">
        <div>
          <Left url="/dashboard" />
          <h1 className="text-lg font-semibold">Categorias</h1>
        </div>
        <div>
          <ButtonGrs
            text="Agregar una nueva categoria"
            icon={<More />}
            href="/dashboard/categorias/crear"
          />
        </div>
      </section>
      <section className="shadow-md w-full rounded-md p-4 bg-white">
      </section>
    </section>
  );
}
