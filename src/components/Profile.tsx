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
      <DropdownMenuContent align="end" className="w-44">
        <DropdownMenuLabel className="uppercase">Admin</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <Link href="/dashboard">Dashboard</Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          className="text-red-600 hover:bg-red-600 hover:text-white cursor-pointer"
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

 