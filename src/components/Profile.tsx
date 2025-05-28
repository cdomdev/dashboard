"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { logoutAdmin } from "@/lib/logout";
import Link from "next/link";

export function DropProfileMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Avatar className="cursor-pointer">
          <AvatarImage src="https://github.com/shadcn.png" alt="avatar-admin" />
          <AvatarFallback>AD</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="center" className="w-44 text-center">
        <DropdownMenuLabel className="py-0">Admin</DropdownMenuLabel>
        <DropdownMenuSeparator className="m-0" />
        <DropdownMenuItem asChild className="py-1 cursor-pointer">
          <Link href="/dashboard">Dashboard</Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator className="p-0 m-0" />
        <DropdownMenuItem asChild className="py-1 cursor-pointer">
          <Link href="/dashboard/profile">Perfil</Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          className="text-red-600 hover:bg-red-600 hover:text-white cursor-pointer w-full  inline-flex  justify-center dark:hover:bg-red-600"
          onClick={async () => {
            await logoutAdmin();
          }}
        >
          Cerrar sesión
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
