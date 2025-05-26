"use client";

import { useState } from "react";
import { List } from "./components/List";
import { HeaderPagesSection } from "@/components/HeaderPagesSection";

export default function HomeCategoriaClient() {
  const [catCount, setCatCount] = useState<number>(0);

  return (
    <main>
      <HeaderPagesSection title="Categorias" url="/dashboard" catCount={catCount} viewBtn={true} textBtn="Nueva categoria" href="/dashboard/categorias/crear" viewCount={true}/>
      <section className="w-full">
        <List setCatCount={setCatCount} />
      </section>
    </main>
  );
}
