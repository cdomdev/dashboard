"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function DropdNotications() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="hover:bg-transparent cursor-pointer ring-0"
        >
          {" "}
          <svg
            className="size-6"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M17.133 12.632v-1.8a5.406 5.406 0 0 0-4.154-5.262.955.955 0 0 0 .021-.106V3.1a1 1 0 0 0-2 0v2.364a.955.955 0 0 0 .021.106 5.406 5.406 0 0 0-4.154 5.262v1.8C6.867 15.018 5 15.614 5 16.807 5 17.4 5 18 5.538 18h12.924C19 18 19 17.4 19 16.807c0-1.193-1.867-1.789-1.867-4.175ZM8.823 19a3.453 3.453 0 0 0 6.354 0H8.823Z" />
          </svg>
          <span className="sr-only">button drop-menu</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-fit max-w-80">
        <DropdownMenuLabel className="py-0.5 text-center">
          Notificaciones
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <span className="text-xs text-gray-300 text-center block p-2">
          No hay notificaciones
        </span>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
