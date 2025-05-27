"use client"

import { DeleteButton } from "@/components/ui/custom/buttons";
import { Modal } from "@/components/ui/custom/Modals/Modal";
import { UserSchema } from "@/interfaces";
import { useState } from "react";

interface Props {
    user: UserSchema
}

export function DeleteUser({ user }: Props) {
    const [open, setOpen] = useState(false)

    async function handleDelete() {
        console.log(user)
    }

    return (
        <>
            <DeleteButton onClick={() => setOpen(true)} />

            <Modal isOpen={open}
                onClose={() => setOpen(false)}
                modalTitle="¿Está seguro?"
                modalContent="Esta acción eliminará la informacion del usuario seleccionado. ¿Desea continuar?">
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
    )
}