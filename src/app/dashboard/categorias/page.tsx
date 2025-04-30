import { Metadata } from "next";
import HomeCategoriaClient from "./HomeCategoryClient"; 


export const metadata: Metadata = {
  title: "Categorias",
  description: "Pagina de categorias",
};

export default function HomeCategoriaPage() {
  return <HomeCategoriaClient />;
}
