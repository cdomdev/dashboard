import { OrderSchema } from "@/interfaces";
import { DeleteButton } from "@/components/ui/custom/buttons";
import { Modal } from "@/components/ui/custom/Modals/Modal";
import { useToastStore } from "@/context/global.context.app";
import { useState } from "react";
import { deleteSaleBy } from "../lib/sales";

interface deleProps {
  id: string;
  setSales: React.Dispatch<React.SetStateAction<OrderSchema[]>>;
  setCount: React.Dispatch<React.SetStateAction<number>>;
}

export function DeleteData({ id, setCount, setSales }: deleProps) {
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);

  async function handleDelete() {
    const seToast = useToastStore.getState().setToast;

    const res = await deleteSaleBy(id);
    if (res.status === 200) {
      setSales((prev) => {
        const nuevaLista = prev?.filter((cat) => cat.id !== id) || [];
        return nuevaLista;
      });
      setCount((prev) => prev - 1);
      seToast("Categoría eliminada con éxito", "toast-success");
    }
  }
  return (
    <>
      <DeleteButton onClick={() => setIsDeleteOpen(true)}  className="hover:bg-red-700 dark:hover:bg-red-700"/>
      <Modal
        isOpen={isDeleteOpen}
        onClose={() => setIsDeleteOpen(false)}
        modalTitle="¿Está seguro?"
        modalContent="Esta acción eliminará la venta seleccionada. ¿Desea continuar?"
      >
        <div className="flex gap-3 justify-center items-center pt-4">
          <button
            className="bg-red-600 text-white py-1.5 px-6 rounded-md cursor-pointer hover:bg-red-800 duration-200 "
            onClick={handleDelete}
          >
            Sí, eliminar
          </button>
          <button
            className="text-black border py-1.5 px-5 rounded-md hover:bg-gray-400 dark:hover:text-black cursor-pointer duration-200"
            onClick={() => setIsDeleteOpen(false)}
          >
            No, cancelar
          </button>
        </div>
      </Modal>
    </>
  );
}
