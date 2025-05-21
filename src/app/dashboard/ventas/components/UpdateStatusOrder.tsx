"use client";

import { Modal } from "@/components/ui/custom/Modals/Modal";
import { useState } from "react";
import { UpdateStatusSaleBy } from "../lib/sales";
import { useToastStore } from "@/context/global.context.app";
import { useOrderStatusStore } from "@/context/global.context.app";

const statusOptions = [
  { value: "processing", label: "En proceso" },
  { value: "completed", label: "Completado" },
  { value: "cancelled", label: "Cancelado" },
];

export function UpdateState({ id }: { id: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState(statusOptions[0].value);

  const updateStatusInStore = useOrderStatusStore((state) => state.updateStatus);
  const seToast = useToastStore.getState().setToast;

  const handleStatusChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedStatus(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const res = await UpdateStatusSaleBy(id, selectedStatus);
    if (res.status === 200) {
      updateStatusInStore(id, selectedStatus);
      seToast("Estado actualizado con éxito", "toast-success");
      setIsOpen(false);
    } else {
      seToast("No fue posible actualizar el estado", "toast-fail");
    }
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="bg-blue-500 text-white px-4 py-2 rounded-md"
      >
        Actualizar estado del pedido
      </button>
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        modalTitle="Actualizar estado del pedido"
      >
        <div className="flex gap-3 justify-center items-center ">
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <label htmlFor="status" className="text-gray-700">
              Selecciona el nuevo estado:
            </label>
            <select
              id="status"
              className="border border-gray-300 rounded-md p-2"
              value={selectedStatus}
              onChange={handleStatusChange}
            >
              {statusOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>

            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-md"
            >
              Actualizar estado
            </button>
          </form>
        </div>
      </Modal>
    </>
  );
}
