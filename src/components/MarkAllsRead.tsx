import { useToastStore } from "@/context/global.context.app";
import { NotificationSchema } from "@/interfaces";
import { tickReadAlls } from "@/lib/notifications";

export function MarkAlls({
  setNotifications,
}: {
  setNotifications: React.Dispatch<React.SetStateAction<NotificationSchema[]>>;
}) {
  const { showToast } = useToastStore();
  async function handleRead() {
    const res = await tickReadAlls();
    const { success, status } = res;
    if (success) {
      showToast("¡Listo! Has leído toda las notificación", "success");
      setNotifications([]);
    } else if (status) {
      showToast(
        "Hubo un error al actualizar el estado de las notificaciones. Intenta de nuevo.",
        "error"
      );
    }
  }
  return (
    <div className="flex items-center gap-3">
      <p className="text-xs text-gray-400">Marcar todas como leidas</p>
      <button
        className="flex justify-center  border-l pl-2"
        onClick={handleRead}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="size-6 cursor-pointer hover:stroke-green-700 hover:scale-110 dark:stroke-white dark:hover:stroke-green-700 "
          width="44"
          height="44"
          viewBox="0 0 24 24"
          strokeWidth="1"
          stroke="#2c3e50"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M7 12l5 5l10 -10" />
          <path d="M2 12l5 5m5 -5l5 -5" />
        </svg>
        <span className="sr-only">read</span>
      </button>
    </div>
  );
}
