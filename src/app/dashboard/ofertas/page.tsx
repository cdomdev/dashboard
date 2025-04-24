import { Left } from "../components/ui/buttons/Left";
import { ButtonGrs } from "../components/ui/buttons/ButtonGrs";
import { More } from "../components/icons";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Ventas",
  description: "Pagina de ofertas - ver o crear nuevas ofertas",
};

export default function OfertasPage() {
  return (
    <section className="w-full min-h-dvh p-7 flex flex-col gap-5 ">
      <section className="w-full px-10 pt-14 flex justify-between gap-5">
        <div>
          <Left url="/dashboard" />
          <h1 className="text-lg font-semibold">Ofertas</h1>
          <span>0</span>
        </div>
        <div>
          <ButtonGrs
            text="Agregar una nueva oferta"
            icon={<More />}
            href="/dashboard/ofertas/crear"
          />
        </div>
      </section>
      <section className="shadow-md w-full rounded-md p-4 bg-white"></section>
    </section>
  );
}
