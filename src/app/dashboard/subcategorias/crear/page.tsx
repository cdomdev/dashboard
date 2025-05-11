import { HeaderPagesSection } from "@/components/HeaderPagesSection";
import { FormSubcategory } from "../components/FormSubcategory";

import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Agregar nueva oferta",
    description: "Pagina para agregar nueva oferta - crear un nuevo oferta",
};

export default function Crearsubcategoria() {
  return (
    <>
      <HeaderPagesSection href="#" title="Agregar nueva subcategoria" url="/dahsboard/subcategoria" viewCount={false} />
      <section className="flex gap-4">
        <FormSubcategory />
      </section>
    </>
  );
}
