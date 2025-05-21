import { DeleteButton } from "@/components/ui/custom/buttons";
import { Modal } from "@/components/ui/custom/Modals/Modal";
import { useState } from "react";
import { deleteProduct } from "../lib/products";
import { ProductSchema } from "@/interfaces";
import { useToastStore } from "@/context/global.context.app";

interface Props {
  id?: string;
  setProducts: React.Dispatch<React.SetStateAction<ProductSchema[]>>;
  setCount: React.Dispatch<React.SetStateAction<number>>;
}

export function DeletProduct({ id, setProducts, setCount }: Props) {
  const [open, setOpen] = useState<boolean>(false);

  const seToast = useToastStore.getState().setToast;

  async function handleDelete() {
    const res = await deleteProduct(id);

    if (res.status === 201) {
      setOpen(false);
      setProducts((prev) => prev.filter((prod) => prod.id !== id));
      seToast("Producto eliminado con exitop", "toast-success");
      setCount((prev) => prev - 1);
    } else {
      setProducts([]);
    }
  }

  return (
    <>
      <DeleteButton onClick={() => setOpen(true)} />

      <Modal
        isOpen={open}
        onClose={() => setOpen(false)}
        modalTitle="¿Está seguro?"
        modalContent="Esta acción eliminará la el producto seleccionada. ¿Desea continuar?"
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
            onClick={() => setOpen(false)}
          >
            No, cancelar
          </button>
        </div>
      </Modal>
    </>
  );
}
