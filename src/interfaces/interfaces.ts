export interface ProductSchema {
  marca: string;
  titulo: string;
  precio: number | string;
  referencia: string;
  cantidad: number | string;
  categoria: string;
  subcategoria: string;
  descripcion: string;
}

export interface categorySchema {
  id?: string;
  nombre: string;
  codigo?: string;
}
