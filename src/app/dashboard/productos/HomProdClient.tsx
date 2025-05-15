"use client"

import { ListProducts } from "./components/List";
import { HeaderPagesSection } from "@/components/HeaderPagesSection";
// import { useState } from "react";


export default function Home() {
    // const [count, setCount] = useState<number>(0)
    return (
        <>
            <HeaderPagesSection href="/dashboard/productos/crear" url="/dashboard" title="Productos" viewBtn={true}  textBtn="Nuevo producto" />
            <section className="w-full pt-10">
                <ListProducts />
            </section>
        </>
    );
}
