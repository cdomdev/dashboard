"use client";
import { useState } from "react";
import { CategorySchema } from "@/interfaces";
import { deleteCategory } from "../lib/categoria";
import { useToastStore } from "@/context/global.context.app";
import { Modal } from "../../../../components/ui/custom/Modals/Modal";
import { Delete } from "@/components/icons";

interface deleProps {
  id?: string;
  setCategorias: React.Dispatch<React.SetStateAction<CategorySchema[]>>;
  setCatCount: React.Dispatch<React.SetStateAction<number>>;
}

export function DeleteCategoria({ id, setCategorias, setCatCount }: deleProps) {
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);

  async function handleDelete() {
    const seToast = useToastStore.getState().setToast;
    try {
      const res = await deleteCategory(id);
      if (res.status === 200) {
        setCategorias((prev) => {
          const nuevaLista = prev?.filter((cat) => cat.id !== id) || [];
          return nuevaLista;
        });
        setCatCount((prev) => prev - 1);
        seToast("Categoría eliminada con éxito", "toast-success");
      }
    } catch (error) {
      console.log("Error al intentar eliminar la categoria", error);
      seToast("Hubo un error al intenatr eliminar la categoria", "error");
    }
  }

  return (
    <>
      <button
        className="text-red-600 hover:underline font-medium text-sm cursor-pointer inline-flex gap-1 items-center"
        onClick={() => setIsDeleteOpen(true)}
      >
        <Delete />
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
