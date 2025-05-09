import { Metadata } from "next";
import { Back } from "../../../components/ui/custom/buttons/Back";
import { ButtonGrs } from "../../../components/ui/custom/buttons/Button";
import { More } from "../../../components/icons";
import { ListProducts } from "./components/List";
export const metadata: Metadata = {
  title: "Productos",
  description: "Pagina de productos - crear un nuevo producto",
};

export default function ProductosPage() {
  return (
    <section className="w-full min-h-dvh p-7 flex flex-col gap-5 ">
      <section className="w-full px-10 pt-7 flex justify-between gap-5">
        <div>
          <Back url="/dashboard" />
          <h1 className="text-lg font-bold md:text-2xl">Productos</h1>
          <span className="text-xs md:text-sm text-black dark:text-gray-300">
            {0} productos
          </span>
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
      <section className="w-full">
        <ListProducts />
      </section>
    </section>
  );
}
