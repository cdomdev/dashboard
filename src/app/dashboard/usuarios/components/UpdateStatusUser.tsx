"use client";

import { Modal } from "@/components/ui/custom/Modals/Modal";
import { useState } from "react";
import { useToastStore } from "@/context/global.context.app";
import { useOrderStatusStore } from "@/context/global.context.app";
import { UserSchema } from "@/interfaces";
import { Editbutton } from "@/components/ui/custom/buttons";

const statusOptions = [
    { value: "activo", label: "Activar" },
    { value: "bloqueado", label: "Bloquear" },
    { value: "inactivo", label: "Deshabilitar" },
];

export function UpdateStateUser({ user }: { user: UserSchema }) {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedStatus, setSelectedStatus] = useState(statusOptions[0].value);

    const updateStatusInStore = useOrderStatusStore((state) => state.updateStatus);
    const seToast = useToastStore.getState().setToast;

    const handleStatusChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedStatus(event.target.value);
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(user.id, selectedStatus)
        //     const res = await UpdateStatusSaleBy(id, selectedStatus);
        //     if (res.status === 200) {
        //       updateStatusInStore(id, selectedStatus);
        //       seToast("Estado actualizado con éxito", "toast-success");
        //       setIsOpen(false);
        //     } else {
        //       setIsOpen(false);
        //       seToast("No fue posible actualizar el estado", "toast-fail");
        //     }
    };

    return (
        <>
            <Editbutton onClick={() => setIsOpen(true)}
            />
            <Modal
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
                modalTitle={`Actualizar el estado del usuario ${user.nombre}`}
            >
                <div className="flex gap-3 justify-center items-center flex-col">
                    <p>El usuario tiene un estado actual de: <strong>{user.estado}</strong></p>
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
