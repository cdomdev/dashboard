import { useToastStore } from "@/context/global.context.app";
import { NotificationSchema } from "@/interfaces";
import { tickRead } from "@/lib/notifications";

interface Prop {
  id: number;
  setNotifications: React.Dispatch<React.SetStateAction<NotificationSchema[]>>;
}
export const TickRead = ({ id, setNotifications }: Prop) => {
  const { showToast } = useToastStore();
  async function readNotitifacion() {
    const res = await tickRead(id);
    const { status } = res;
    if (status === 200) {
      setNotifications((prev) => prev.filter((not) => not.id !== id) || []);
      showToast("¡Listo! Has leído la notificación", "success");
    } else if (status === 400 || status === 404 || status === 500) {
      showToast(
        "Hubo un error al actualizar el estado de la notificacio. Intenta de nuevo.",
        "error"
      );
    }
  }

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      onClick={readNotitifacion}
      className="size-6 cursor-pointer hover:stroke-green-700 hover:scale-110 pl-1"
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
  );
};
