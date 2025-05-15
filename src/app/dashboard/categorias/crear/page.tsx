import { FormCategory } from "../components/FormCategory";
import { HeaderPagesSection } from '@/components/HeaderPagesSection'
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Agregar nueva oferta",
    description: "Pagina para agregar nueva oferta - crear un nuevo oferta",
};

export default function CrearCategoria() {
  return (
    <>
      <HeaderPagesSection title="Agregar una nueva categoria" url="/dashboard/categorias" href="#" viewBtn={false} viewCount={false} />
      <section className="flex gap-4 mt-5">
        <FormCategory />
      </section>
    </>
  );
}
