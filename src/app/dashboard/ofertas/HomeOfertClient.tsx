import { HeaderPagesSection } from "@/components/HeaderPagesSection";
import { OfertsList } from './components/List'

export default function HomeVentas() {
    return (
        <>
            <HeaderPagesSection href="/dashboard/ofertas/crear" title="Ofertas" url="/dashboard" textBtn="Nuevas ofertas" viewBtn={true} />
            <section className="w-full mt-10 max-w-screen">
                <OfertsList />
            </section>
        </>
    );
}