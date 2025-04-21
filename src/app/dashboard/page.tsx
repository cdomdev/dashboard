import { Box, SendBox, Sale, Time, Usuario } from "./components/icons";
import "@/app/globals.css";
import Graficas from "./components/Grafics";

export default function Home() {
  const dataBox = [
    {
      title: "Total ordenes",
      value: 0,
      text: "Ordenees sin despachar",
      icon: Box,
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
      <section className="flex gap-4 pt-5">
        <div className="flex gap-1 justify-center flex-wrap h-auto py-4 px-2 items-center w-full ">
          {dataBox.map((item, index) => (
            <div
              className="w-40 h-24 md:w-[240px] md:h-28 rounded-lg shadow-md flex justify-between p-3 bg-white"
              key={index}
            >
              <div className="flex justify-between flex-col">
                <h1 className="text-xs md:text-sm font-semibold">
                  {item.title}
                </h1>
                <p className="font-extrabold text-sm md:text-xl">
                  {item.value}
                </p>
                <span className="text-[6px] text-slate-500 md:text-xs">
                  {item.text}
                </span>
              </div>

              <div
                className={` ${item.bgBox} rounded-full w-10 h-10 md:h-12 md:w-12 flex justify-center items-center p-1`}
              >
                <item.icon />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className=" grid grid-cols-1 lg:grid-cols-2 gap-3 ">
        <div className="h-auto rounded-md p-2 bg-white shadow">
          <h2 className="text-lg md:text-xl font-semibold pl-1 md:pl-4">
            Productos mas vendidos
          </h2>
          <Graficas />
        </div>
        <div className="rounded-md sm:p-1 p-4 bg-white shadow">
          <Sale />
        </div>
      </section>
    </section>
  );
}
