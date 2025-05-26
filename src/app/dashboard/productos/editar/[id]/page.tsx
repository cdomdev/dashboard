import { HeaderPagesSection } from "@/components/HeaderPagesSection";
import { FormEditProduct } from "../../components/FormEditProduct";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Editar producto",
  description: "Pagina para editar productos existentes",
};

export default function PageEdit() {
  return (
    <main>
      <HeaderPagesSection
        href="#"
        viewBtn={false}
        title="Editar producto"
        url="/dashboard/productos"
      />
      <section className="flex gap-4 mt-10">
        <FormEditProduct />
      </section>
    </main>
  );
}
