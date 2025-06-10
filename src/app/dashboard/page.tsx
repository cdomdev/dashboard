import "@/app/globals.css";
import Graficas from "../../components/Grafics";
import { SalesData } from "@/components/Sales";
import { Cardbalances } from "@/components/CardBalans";

export default async function Home() {
  return (
    <>
      <section className="w-full py-4">
        <Cardbalances />
      </section>

      <section className=" grid grid-cols-1 lg:grid-cols-2 gap-3">
        <div className="h-auto rounded-md p-2 bg-white shadow dark:text-black">
          <Graficas />
        </div>
        <div className="rounded-md p-5 bg-white shadow  dark:text-black ">
          <SalesData />
        </div>
      </section>
    </>
  );
}
