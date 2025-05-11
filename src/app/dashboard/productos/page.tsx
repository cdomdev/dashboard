import { Metadata } from "next";
import Home from './HomProdClient'

export const metadata: Metadata = {
  title: "Productos",
  description: "Pagina de productos - crear un nuevo producto",
};

export default function ProductosPage() {
  return (
    <Home />
  );
}
