"use client";

import { HeaderPagesSection } from "@/components/HeaderPagesSection";
import { useState } from "react";
import { SalesList } from "./components/List";

export default function HomeVentas() {
  const [count, setCount] = useState<number>(0);
  return (
    <main>
      <HeaderPagesSection
        href="/dashboard/ofertas/crear"
        title="Ventas"
        url="/dashboard"
        viewCount={true}
        catCount={count}
      />
      <section className="mt-10">
        <SalesList setCount={setCount} />
      </section>
    </main>
  );
}
