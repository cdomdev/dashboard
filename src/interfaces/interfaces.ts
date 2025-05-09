export interface ProductSchema {
  id?: string ;
  cantidad: number;
  marca: string;
  titulo: string;
  precio: number;
  referencia: string;
  categoria: string;
  subcategoria: string;
  descripcion: string;
  image: string;
}

export interface categorySchema {
  id?: string;
  nombre: string;
  codigo?: string;
}
