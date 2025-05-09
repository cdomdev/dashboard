import { categorySchema } from "@/interfaces";
import { deleteSubcategoria } from "../lib/subcategoria";
import { useToastStore } from "@/context/global.context.app";

interface deleProps {
  id?: string;
  setCategorias: React.Dispatch<
    React.SetStateAction<categorySchema[] | undefined>
  >;
}

export function DeleteSubcategoria({ id, setCategorias }: deleProps) {
  async function handleDelete() {
    const seToast = useToastStore.getState().setToast;
    try {
      const res = await deleteSubcategoria(id);
      if (res.status === 200) {
        setCategorias((prev) => prev?.filter((cat) => cat.id !== id));
        seToast("Subcategoría eliminada con éxito", "toast-success");
      }
    } catch (error) {
      console.log("Error al intentar eliminar la suncategoria", error);
      seToast("Hubo un error al intenatr eliminar la subcategori", "error");
    }
  }

  return (
    <button
      className="font-medium text-red-600 dark:text-red-500 hover: cursor-pointer"
      onClick={handleDelete}
    >
      Eliminar
    </button>
  );
}
