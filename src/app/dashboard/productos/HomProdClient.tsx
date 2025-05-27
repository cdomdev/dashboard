"use client";

import { ListProducts } from "./components/List";
import { HeaderPagesSection } from "@/components/HeaderPagesSection";
import { useState } from "react";

export default function Home() {
  const [count, setCount] = useState<number>(0);
  return (
    < >
      <HeaderPagesSection
        href="/dashboard/productos/crear"
        url="/dashboard"
        title="Productos"
        viewBtn={true}
        textBtn="Nuevo producto"
        catCount={count}
        viewCount={true}
      />
      <section className="w-full pt-5 max-w-screen">
        <ListProducts setCount={setCount} />
      </section>
    </>
  );
}
