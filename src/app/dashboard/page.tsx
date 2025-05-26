import {
  BoxComponent,
  SendBox,
  Sale,
  Time,
  Usuario,
} from "../../components/icons";
import "@/app/globals.css";
import Graficas from "../../components/Grafics";
import { SalesData } from "@/components/Sales";

export default async function Home() {
  const dataBox = [
    {
      title: "Total ordenes",
      value: 0,
      text: "Ordenes sin despachar",
      icon: BoxComponent,
      bgBox: "bg-orange-200",
    },
    {
      title: "Ordenes despachadas",
      value: 0,
      text: "Entregado",
      icon: SendBox,
      bgBox: "bg-green-200",
    },
    {
      title: "Pendientes por envio",
      value: 0,
      text: "Pendientes",
      icon: Time,
      bgBox: "bg-indigo-200",
    },
    {
      title: "Total vendido",
      value: 0,
      text: "Balance",
      icon: Sale,
      bgBox: "bg-rose-200",
    },
    {
      title: "Total usuarios",
      value: 0,
      text: "Usuarios",
      icon: Usuario,
      bgBox: "bg-teal-200",
    },
  ];

  return (
    <main className="min-h-dvh">
      <section className="w-full py-4">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 place-items-center">
          {dataBox.map((item, index) => (
            <div
              key={index}
              className={`text-black w-full min-w-[10rem] sm:min-w-[12rem] h-24 sm:h-28 rounded-xl shadow-md flex justify-between p-3 ${item.bgBox} `}
            >
              <div className="flex flex-col justify-between">
                <h1 className="text-xs sm:text-sm font-semibold">
                  {item.title}
                </h1>
                <p className="font-semibold text-sm sm:text-xl">{item.value}</p>
                <span className="text-xs text-slate-600 sm:text-md ">
                  {item.text}
                </span>
              </div>

              <div
                className={`bg-white rounded-full w-9 h-9 sm:h-10 sm:w-10 flex justify-center items-center `}
              >
                <item.icon className="stroke-1 w-8 h-8" />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className=" grid grid-cols-1 lg:grid-cols-2 gap-3">
        <div className="h-auto rounded-md p-2 bg-white shadow dark:text-black">
          <Graficas />
        </div>
        <div className="rounded-md p-5 bg-white shadow  dark:text-black ">
          <SalesData />
        </div>
      </section>
    </main>
  );
}
