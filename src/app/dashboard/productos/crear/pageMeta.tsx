import Home from './page'
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Agregar nuevo producto",
    description: "Pagina para agregar nuevos productos - crear un nuevo producto",
  };

export default function HomeServer() {
    return  <Home />
    
}