import Link from "next/link";
import {
  Products,
  Categorias,
  Inventario,
  Ofertas,
  Subcategorias,
  Usuario,
  Ventas,
  Home,
} from "./icons";
import { Profile } from "./Profile";

export default function Aside() {
  const itemsAside = [
    { name: "Dashboard", path: "/", icon: Home },
    { name: "Productos", path: "/productos", icon: Products },
    { name: "Inventario", path: "/inventario", icon: Inventario },
    { name: "Ventas", path: "/pedidos", icon: Ventas },
    { name: "Ofertas", path: "/ofertas", icon: Ofertas },
    { name: "Categorias", path: "/categorias", icon: Categorias },
    { name: "Subcategorias", path: "/subcategorias", icon: Subcategorias },
    { name: "Usuarios", path: "/gestion-usuarios/usuarios", icon: Usuario },
  ];
  return (
    <aside
      id="sidebar"
      className="fixed lg:block top-0 left-0 z-40 w-64 h-screen pt-10 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
      aria-label="Sidebar"
    >
      <div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800 flex flex-col justify-between">
        <ul className="space-y-2 font-medium">
          {itemsAside.map((item) => (
            <li key={item.name}>
              <Link
                href={item.path}
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-slate-200 hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                 <item.icon />
                <span className="ms-2">{item.name}</span>
              </Link>
            </li>
          ))}
        </ul>

        
      <div className="border-t border-b border-t-white border-b-white "><Profile/></div>
      </div>
      
    </aside>
  );
}
