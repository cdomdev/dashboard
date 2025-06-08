import { DeleteButton } from "@/components/ui/custom/buttons";
import { Modal } from "@/components/ui/custom/Modals/Modal";
import { useState } from "react";
import { deleteProduct } from "../lib/products";
import { ProductSchema } from "@/interfaces";
import { useToastStore } from "@/context/global.context.app";
import { Alert } from "@/components/icons";

interface Props {
  id?: string;
  setProducts: React.Dispatch<React.SetStateAction<ProductSchema[]>>;
  setCount: React.Dispatch<React.SetStateAction<number>>;
}

export function DeletProduct({ id, setProducts, setCount }: Props) {
  const [open, setOpen] = useState<boolean>(false);

  const { showToast } = useToastStore();

  async function handleDelete() {
    const res = await deleteProduct(id);

    if (res.status === 201) {
      setOpen(false);
      setProducts((prev) => prev.filter((prod) => prod.id !== id));
      showToast("Producto eliminado con exito", "success");
      setCount((prev) => prev - 1);
    } else if (res.status === 404) {
      setOpen(false);
      showToast(res.message, "error");
    } else if (res.status === 500) {
      showToast(res.message, "error");
      setProducts([]);
    }
  }

  return (
    <>
      <DeleteButton onClick={() => setOpen(true)} />

      <Modal
        isOpen={open}
        onClose={() => setOpen(false)}
        modalTitle="Esta acción eliminará el producto"
        modalContent=""
      >
        <div className="flex items-center justify-center pb-1 gap-2">
          <p className="text-red-500 font-semibold text-center">
            ¡Atención! Esta acción no se puede deshacer.
          </p>
        </div>
        <p className="text-black">
          No podrá eliminar productos que estén asociados a una venta.
        </p>
        <span className="text-black font-semibold">¿Desea continuar? </span>
        <div className="flex gap-3 justify-center items-center pt-7">
          <button
            className="bg-red-600 text-white py-1.5 px-6 rounded-md cursor-pointer hover:bg-red-800 duration-200 "
            onClick={handleDelete}
          >
            Sí, eliminar
          </button>
          <button
            className="text-black  py-1.5 px-5 rounded-md hover:bg-gray-400 dark:hover:text-black cursor-pointer duration-200 border dark:border-black"
            onClick={() => setOpen(false)}
          >
            No, cancelar
          </button>
        </div>
      </Modal>
    </>
  );
}
