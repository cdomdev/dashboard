// ButtonStatus.tsx
"use client";

import { Check, Cancel, Clock, Alert } from "@/components/icons";
import { useOrderStatusStore } from "@/context/global.context.app";

const statusItems = [
  {
    status: "processing",
    bgColor: "bg-yellow-500",
    textColor: "text-white",
    textContent: "En proceso",
    icon: <Clock />,
  },
  {
    status: "completed",
    bgColor: "bg-green-500",
    textColor: "text-white",
    textContent: "Despachado",
    icon: <Check />,
  },
  {
    status: "cancelled",
    bgColor: "bg-red-500",
    textColor: "text-white",
    textContent: "Cancelado",
    icon: <Cancel />,
  },
  {
    status: "sin estado",
    bgColor: "bg-gray-500",
    textColor: "text-white",
    textContent: "Sin estado",
    icon: <Alert />,
  },
];

export function ButtonStatus({ id, initialStatus }: { id: string; initialStatus: string }) {
  const currentStatus = useOrderStatusStore((state) => state.statusMap[id] || initialStatus);
  const statusItem = statusItems.find((item) => item.status === currentStatus) || statusItems[3];

  return (
    <button
      type="button"
      className={`inline-flex items-center px-4 py-2 text-sm gap-1 font-medium text-center ${statusItem.bgColor} ${statusItem.textColor} rounded-lg`}
    >
      {statusItem.icon}
      {statusItem.textContent}
    </button>
  );
}
