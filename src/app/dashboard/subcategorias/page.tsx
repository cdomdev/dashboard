import { Metadata } from "next";
import Home from "./HomeSubClient";

export const metadata: Metadata = {
  title: "Subcategorias",
  description: "Pagina de subcategorias - ver o crear nuevas subcategorias",
};

export default function HomeSubcategoria() {
  return <Home />;
}
