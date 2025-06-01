import { NotificationSchema } from "@/interfaces/interfaces";
import { Delete } from "./icons";
import { useToastStore } from "@/context/global.context.app";
import { deleteNotification } from "@/lib/notifications";

interface Prop {
  id: number;
  setNotifications: React.Dispatch<React.SetStateAction<NotificationSchema[]>>;
}
export function DeleteNoti({ id, setNotifications }: Prop) {
  const { showToast } = useToastStore();
  async function handleDelete() {
    setNotifications((prev) => prev.filter((not) => not.id !== id) || []);
    const res = await deleteNotification(id);
    if (res.status === 200) {
      showToast("¡Listo! se elimino la notificación.", "success");
    } else if (res.status === 400 || res.status === 404 || res.status === 500) {
      showToast(
        "Hubo un error al actualizar el estado de la notificacion. Intenta de nuevo.",
        "error"
      );
    }
  }
  return (
    <>
      <Delete
        onClick={handleDelete}
        className="hover:text-red-500 duration-150 border-l mr-1 pl-1"
      />
    </>
  );
}
