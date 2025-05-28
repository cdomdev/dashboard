"use client"
import { HeaderPagesSection } from "@/components/HeaderPagesSection";
import { OfertsList } from "./components/List";
import { useState } from "react";

export default function HomeVentas() {
  const [count, setCount] = useState<number>(0);
  return (
    <>
      <HeaderPagesSection
        href="/dashboard/ofertas/crear"
        title="Ofertas"
        url="/dashboard"
        viewCount={true}
        catCount={count}
      />
      <section className="w-full mt-10 max-w-screen">
        <OfertsList setCount={setCount} />
      </section>
    </>
  );
}
