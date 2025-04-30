import { Back } from "../components/ui/buttons/Back";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Ventas",
  description: "Pagina de ventas - ver nuevas ventas",
};
export default function HomeVentas() {
  return (
    <section className="w-full min-h-dvh p-7 flex flex-col gap-5 ">
      <section className="w-full px-10 pt-14 flex justify-between gap-5">
        <div>
          <Back url="/dashboard" />
          <h1 className="text-lg font-bold md:text-2xl">Ventas</h1>
          <span className="text-sm text-gray-600">Total ventas: <strong>0</strong></span>
        </div>
      </section>
      <section className="shadow-md w-full rounded-md p-4 bg-white"></section>
    </section>
  );
}
