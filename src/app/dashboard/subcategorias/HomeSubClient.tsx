"use client";
import { useState } from "react";
import { List } from "./components/List";
import { HeaderPagesSection } from "@/components/HeaderPagesSection";

export default function HomeSubcategoria() {
  const [catCount, setCatCount] = useState(0);

  return (
    <>
      <HeaderPagesSection
        href="/dashboard/subcategorias/crear"
        title="Subcategorias"
        url="/dashboard"
        catCount={catCount}
        textBtn="Nueva subcategoria"
        viewCount={true}
        viewBtn={true}
      />
      <section className="w-full pt-5 max-w-screen">
        <List setCatCount={setCatCount} />
      </section>
    </>
  );
}
