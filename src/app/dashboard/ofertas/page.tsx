import OfertsHome from './HomeOfertClient'
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ofertas",
  description: "Pagina de ofertas - ver o crear nuevas ofertas",
};

export default function OfertsPage() {
  return <OfertsHome />
}
