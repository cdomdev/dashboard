import {
  BoxComponent,
  SendBox,
  Sale,
  Time,
  Usuario,
} from "../../components/icons";
import "@/app/globals.css";
import Graficas from "../../components/Grafics";

export default async function Home() {
  const dataBox = [
    {
      title: "Total ordenes",
      value: 0,
      text: "Ordenees sin despachar",
      icon: BoxComponent,
      bgBox: "bg-[#fbddb9]",
    },
    {
      title: "Ordenes despachadas",
      value: 0,
      text: "Con estado de entregado",
      icon: SendBox,
      bgBox: "bg-[#6ee35e]",
    },
    {
      title: "Pendientes por envio",
      value: 0,
      text: "Pendientes",
      icon: Time,
      bgBox: "bg-[#cd76d8]",
    },
    {
      title: "Total vendido",
      value: 0,
      text: "Balance total de ventas",
      icon: Sale,
      bgBox: "bg-[#c86464]",
    },
    {
      title: "Total usuarios",
      value: 0,
      text: "Usuarios e invitados",
      icon: Usuario,
      bgBox: "bg-[#33ddc0]",
    },
  ];

  return (
    <section className="min-h-dvh">
      <section className="w-full py-4">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 place-items-center">
          {dataBox.map((item, index) => (
            <div
              key={index}
              className="w-full min-w-[10rem] sm:min-w-[12rem] h-24 sm:h-28 rounded-xl shadow-md flex justify-between p-3 bg-white dark:text-black dark:bg-gray-200 "
            >
              <div className="flex flex-col justify-between">
                <h1 className="text-xs sm:text-sm font-semibold">
                  {item.title}
                </h1>
                <p className="font-extrabold text-sm sm:text-xl">
                  {item.value}
                </p>
                <span className="text-[8px] text-slate-500 sm:text-xs">
                  {item.text}
                </span>
              </div>

              <div
                className={`${item.bgBox} rounded-full w-10 h-10 sm:h-12 sm:w-12 flex justify-center items-center p-1`}
              >
                <item.icon />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className=" grid grid-cols-1 lg:grid-cols-2 gap-3">
        <div className="h-auto rounded-md p-2 bg-white shadow dark:text-black dark:bg-gray-200">
          <h2 className="text-lg md:text-xl font-semibold pl-1 md:pl-4">
            Productos mas vendidos
          </h2>
          <Graficas />
        </div>
        <div className="rounded-md sm:p-1 p-4 bg-white shadow  dark:text-black dark:bg-gray-200">
          <Sale />
        </div>
      </section>
    </section>
  );
}
