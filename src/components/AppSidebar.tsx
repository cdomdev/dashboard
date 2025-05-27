"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarFooter,
  SidebarMenuSub,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";

import { ChevronRight } from "lucide-react";
import { User } from "lucide-react";
import { ChevronUp } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuContent,
} from "./ui/dropdown-menu";
import {
  Categorias,
  Products,
  Subcategorias,
  Usuario,
  Ventas,
  Home,
  Ofertas
} from "./icons";
import Link from "next/link";
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "@radix-ui/react-collapsible";


const items = [
  {
    title: "Productos",
    url: "/dashboard/productos",
    icon: Products,
    subItems: [
      {
        url: "/dashboard/productos",
        nombre: "Listado de productos",
      },
      {
        url: "/dashboard/productos/crear",
        nombre: "Agregar nuevo producto",
      },
    ],
  },
  {
    title: "Ventas",
    url: "/dashboard/ventas",
    icon: Ventas,
    subItems: [
      {
        url: "/dashboard/ventas",
        nombre: "Listado de ventas",
      },
    ],
  },
  {
    title: "Categorias",
    url: "/dashboard/categorias",
    icon: Categorias,
    subItems: [
      {
        url: "/dashboard/categorias",
        nombre: "Listado de categorias",
      },
      {
        url: "/dashboard/categorias/crear",
        nombre: "Nueva categoria",
      },
    ],
  },
  {
    title: "Subcategorias",
    url: "/dashboard/subcategorias",
    icon: Subcategorias,
    subItems: [
      {
        url: "/dashboard/subcategorias",
        nombre: "Listado de subcategorias",
      },
      {
        url: "/dashboard/subcategorias/crear",
        nombre: "Nueva subcategoria",
      },
    ],
  },
  {
    title: "Usuarios",
    url: "/dashboard/usuarios",
    icon: Usuario,
    subItems: [
      {
        url: "/dashboard/usuarios",
        nombre: "Administradores",
      },
      {
        url: "/dashboard/usuarios/user",
        nombre: "Usuarios",
      },
    ],
  },
  {
    title: "Ofertas",
    url: "/dashboard/ofertas",
    icon: Ofertas,
    subItems: [
      {
        url: "/dashboard/ofertas/cupones",
        nombre: "Gestionar cupones",
      },
      {
        url: "/dashboard/ofertas/crear",
        nombre: "Agregar una nueva oferta",
      },
    ],
  },
];

export function AppSidebar() {
  return (
    <>
      <Sidebar collapsible="icon">
        <SidebarContent >
          <SidebarGroup className="pl-1">
            <SidebarGroupLabel className="text-sm">
              Panel de administracion
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu className="flex flex-col gap-y-5 pt-4 ">
                <SidebarMenuButton className="group flex items-center justify-between w-full">
                  <div className="flex items-center gap-2">
                    <Home />
                    <Link href="/dashboard" className="text-base">Dashboard</Link>
                  </div>
                </SidebarMenuButton>

                {items.map((item) => (
                  <Collapsible key={item.title}>
                    <SidebarMenuItem>
                      <CollapsibleTrigger asChild>
                        <SidebarMenuButton className="group flex items-center justify-between w-full cursor-pointer">
                          <div className="flex items-center gap-2">
                            <item.icon />
                            <span className="text-base ">{item.title}</span>
                          </div>
                          <ChevronRight className="transition-transform duration-200 group-data-[state=open]:rotate-90" />
                        </SidebarMenuButton>
                      </CollapsibleTrigger>
                    </SidebarMenuItem>

                    <CollapsibleContent >
                      <SidebarMenuSub className="text-slate-700 gap-y-3 pl-1 dark:text-slate-400">
                        {item.subItems.map((subItem) => (
                          <SidebarMenuSubItem key={subItem.nombre} className="cursor-pointer">
                            <Link href={subItem.url} > <strong className="pr-1">-</strong> {subItem.nombre}</Link>
                          </SidebarMenuSubItem>
                        ))}
                      </SidebarMenuSub>
                    </CollapsibleContent>
                  </Collapsible>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
        <SidebarFooter>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton>
                <User /> Administrador
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarFooter>
      </Sidebar>
    </>
  );
}
