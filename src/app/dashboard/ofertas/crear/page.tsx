import { HeaderPagesSection } from "@/components/HeaderPagesSection";
import { FormOferts } from "../components/FomrOferts";
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Agregar nueva oferta",
    description: "Pagina para agregar nueva oferta - crear un nuevo oferta",
};

export default function PageFomrCreateOferts() {
    return (
        <>
            <HeaderPagesSection href="#" title="Agregar campaña de ofertas" url="/dashboard/ofertas" />
            <section className="mt-10">
              <FormOferts />
            </section>
        </>
    )
}