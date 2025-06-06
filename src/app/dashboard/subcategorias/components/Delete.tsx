import { CategorySchema } from "@/interfaces";
import { deleteSubcategoria } from "../lib/subcategoria";
import { useToastStore } from "@/context/global.context.app";
import { useState } from "react";
import { Modal } from "@/components/ui/custom/Modals/Modal";
import { DeleteButton } from "@/components/ui/custom/buttons";

interface deleProps {
  id?: string;
  setSubcategorias: React.Dispatch<React.SetStateAction<CategorySchema[]>>;
  setCatCount: React.Dispatch<React.SetStateAction<number>>;
}

export function DeleteSubcategoria({
  id,
  setSubcategorias,
  setCatCount,
}: deleProps) {
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const { showToast } = useToastStore();
  async function handleDelete() {
    try {
      const res = await deleteSubcategoria(id);
      if (res.status === 200) {
        setSubcategorias((prev) => {
          const nuevaLista = prev?.filter((cat) => cat.id !== id) || [];
          return nuevaLista;
        });
        setCatCount((prev) => prev - 1);
        showToast("Subcategoría eliminada con éxito", "success");
        setIsDeleteOpen(false);
      } else if (res.status === 404) {
        showToast(
          `${
            res.message ||
            "No se pudo eliminar la subcategoria, intentelo mas tarde"
          }`,
          "error"
        );
        setIsDeleteOpen(false);
      } else if (res.status === 500) {
        showToast(
          "No se pudo eliminar la subcategoria, intentelo mas tarde",
          "error"
        );
        setIsDeleteOpen(false);
      }
    } catch (error) {
      console.log("Error al intentar eliminar la suncategoria", error);
      showToast("Algo salio mal al intenatr eliminar la subcategoria", "error");
    }
  }
  return (
    <>
      <DeleteButton onClick={() => setIsDeleteOpen(true)} />

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
            className="text-black border py-1.5 px-5 rounded-md hover:bg-gray-400 dark:hover:text-black cursor-pointer duration-200 dark:border-black"
            onClick={() => setIsDeleteOpen(false)}
          >
            No, cancelar
          </button>
        </div>
      </Modal>
    </>
  );
}
