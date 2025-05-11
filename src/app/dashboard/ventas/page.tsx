import Home from './HomeVentasClient'
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ventas",
  description: "Pagina de ventas - ver nuevas ventas",
};

export default function HomeVentas() {
  return <Home />
}
