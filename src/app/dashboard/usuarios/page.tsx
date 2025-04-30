import { Back } from "../components/ui/buttons/Back";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Usuarios",
  description: "Pagina de usuarios",
};

export default function HomeUsuario() {
  return (
    <section className="w-full min-h-dvh p-7 flex flex-col gap-5 ">
      <section className="w-full px-10 pt-14 flex justify-between gap-5">
        <div>
          <Back url="/dashboard" />
          <h1 className="text-lg font-bold md:text-2xl">Usuarios</h1>
          <span>0</span>
        </div>
      </section>
      <section className="shadow-md w-full rounded-md p-4 bg-white">
      </section>
    </section>
  );
}
