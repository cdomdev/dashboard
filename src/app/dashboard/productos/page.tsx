import { Metadata } from "next";
import { Back } from "../../../components/ui/custom/buttons/Back";
import { ButtonGrs } from "../../../components/ui/custom/buttons/Button";
import { More } from "../../../components/icons";

export const metadata: Metadata = {
  title: "Productos",
  description: "Pagina de productos - crear un nuevo producto",
};

export default function ProductosPage() {
  return (
    <section className="w-full min-h-dvh p-7 flex flex-col gap-5 ">
      <section className="w-full px-10 pt-14 flex justify-between gap-5">
        <div>
          <Back url="/dashboard" />
          <h1 className="text-lg font-bold md:text-2xl">Productos</h1>
        </div>
        <div>
          <ButtonGrs
            text="Agregar un nuevo producto"
            icon={<More />}
            href="/dashboard/productos/crear"
            type="button"
          />
        </div>
      </section>
      <section className="flex gap-4">
        <div className="shadow-md w-full rounded-md p-4 bg-white"></div>
      </section>
    </section>
  );
}
