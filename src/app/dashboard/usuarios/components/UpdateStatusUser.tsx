"use client";

import { Modal } from "@/components/ui/custom/Modals/Modal";
import { useState } from "react";
import { useToastStore } from "@/context/global.context.app";
import { UserSchema } from "@/interfaces";
import { Editbutton } from "@/components/ui/custom/buttons";
import { updateStateOfUser } from "../lib/users";

const statusOptions = [
  { value: "", label: "Seleccionar nuevo estado" },
  { value: "activo", label: "Activar" },
  { value: "bloqueado", label: "Bloquear" },
  { value: "inactivo", label: "Deshabilitar" },
];

export function UpdateStateUser({ user }: { user: UserSchema }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState(statusOptions[0].value);

  const { showToast } = useToastStore();

  const handleStatusChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedStatus(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(user.id, selectedStatus);
    const res = await updateStateOfUser(user.id);
    if (res.status === 201) {
      showToast("Estado del usuario actualizado con éxito", "success");
      setIsOpen(false);
    } else if (res.status === 500) {
      showToast(
        "No fue posible actualizar el estado, intentelo mas tarde",
        "error"
      );
      setIsOpen(false);
    }
  };

  return (
    <>
      <Editbutton onClick={() => setIsOpen(true)} />
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        modalTitle={`Actualizar el estado del usuario ${user.nombre}`}
      >
        <div className="flex gap-3 justify-center items-center flex-col">
          <p className="text-black">
            El usuario tiene un estado actual de:{" "}
            <strong className="underline uppercase pl-1">{user.estado}</strong>
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <label htmlFor="status" className="text-gray-700">
              Selecciona el nuevo estado:
            </label>
            <select
              id="status"
              className="border border-gray-300 rounded-md p-2 dark:text-black"
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
