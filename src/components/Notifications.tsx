"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { getNotifications } from "@/lib/notifications";
import { useState, useEffect } from "react";

import { io } from "socket.io-client";
const HOST = process.env.NEXT_PUBLIC_HOST_API;

const socket = io(HOST, {
  withCredentials: true,
});

interface Prop {
  id: number;
  status: boolean;
  mensaje: string;
}
export function DropdNotications() {
  const [notificartions, setNotifications] = useState<Prop[]>([]);

  useEffect(() => {
    async function fetchData() {
      const res = await getNotifications();
      const data: Prop[] = await res.data.notifications;
      setNotifications(data);
    }

    fetchData();

    socket.on("new-notification", (data: Prop) => {
      setNotifications((prev) => [data, ...prev]);
    });

    return () => {
      socket.off("new-notification");
    };
  }, []);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        asChild
        className="m-0 hover:bg-transparent p-0 relative focus:outline-none focus:ring-0 ring-0 dark:hover:bg-transparent dark:ring-0"
      >
        <button className="cursor-pointer">
          <svg
            className="size-7"
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
          {notificartions.length > 0 && (
            <span className="absolute -top-1 -right-2 text-xs bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center">
              {notificartions.length}
            </span>
          )}
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-fit max-w-96">
        <DropdownMenuLabel className="py-0.5 text-center">
          Notificaciones
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        {notificartions.length === 0 ? (
          <span className="text-xs text-gray-300 text-center block p-2">
            No hay notificaciones
          </span>
        ) : (
          <ul className="max-h-60 overflow-auto space-y-1 text-sm">
            {notificartions.map((notif, i) => (
              <li
                key={i}
                className="p-1  text-gray-800 dark:bg-gray-50  rounded-xs"
              >
                {notif.mensaje}
              </li>
            ))}
          </ul>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
