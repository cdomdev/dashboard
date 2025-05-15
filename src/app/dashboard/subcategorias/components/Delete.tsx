import { categorySchema } from "@/interfaces";
import { deleteSubcategoria } from "../lib/subcategoria";
import { useToastStore } from "@/context/global.context.app";
import { useState } from "react";
import { Modal } from "@/components/ui/custom/Modals/Modal";
import { Delete } from "@/components/icons";

interface deleProps {
  id?: string;
  setSubcategorias: React.Dispatch<
    React.SetStateAction<categorySchema[]>
  >;
  setCatCount: React.Dispatch<React.SetStateAction<number>>;
}

export function DeleteSubcategoria({
  id,
  setSubcategorias,
  setCatCount,
}: deleProps) {
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);

  async function handleDelete() {
    const seToast = useToastStore.getState().setToast;
    try {
      const res = await deleteSubcategoria(id);
      if (res.status === 200) {
        setSubcategorias((prev) => {
          const nuevaLista = prev?.filter((cat) => cat.id !== id) || [];
          return nuevaLista;
        });
        setCatCount((prev) => prev - 1);
        seToast("Subcategoría eliminada con éxito", "toast-success");
      }
    } catch (error) {
      console.log("Error al intentar eliminar la suncategoria", error);
      seToast("Hubo un error al intenatr eliminar la subcategori", "error");
    }
  }
  return (
    <>
      <button
        className="flex items-center gap-1 justify-center text-red-600 hover:underline font-medium text-sm cursor-pointer w-full"
        onClick={() => setIsDeleteOpen(true)}
      >
       <Delete/>
        Eliminar
      </button>

      <Modal
        isOpen={isDeleteOpen}
        onClose={() => setIsDeleteOpen(false)}
        modalTitle="¿Está seguro?"
        modalContent="Esta acción eliminará la categoría seleccionada. ¿Desea continuar?"
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
