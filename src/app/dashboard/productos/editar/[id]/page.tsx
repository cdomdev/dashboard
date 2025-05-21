import { HeaderPagesSection } from "@/components/HeaderPagesSection";
import { FormEditProduct } from "../../components/FormEditProduct";

export default function PageEdit() {
  return (
    <>
      <HeaderPagesSection
        href="#"
        viewBtn={false}
        title="Editar producto"
        url="/dashboard/productos"
      />
      <section className="flex gap-4 mt-10">
        <FormEditProduct />
      </section>
    </>
  );
}
