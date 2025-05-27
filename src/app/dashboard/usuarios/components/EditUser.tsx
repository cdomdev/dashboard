"use client"
import { Editbutton } from "@/components/ui/custom/buttons";
import { Modal } from "@/components/ui/custom/Modals/Modal";
import { UserSchema } from "@/interfaces";
import { useState } from "react";

interface Props {
    user: UserSchema
}

export function EditUser({ user }: Props) {
    const [open, setOpen] = useState(false)
    return (
        <>
            <Editbutton onClick={() => setOpen(true)} />
            <Modal isOpen={open}
                onClose={() => setOpen(false)}
                modalTitle="¿Está seguro?"
                modalContent="Esta acción eliminará la el producto seleccionada. ¿Desea continuar?">
                <p>Este es el rol del usuario a editar : {user.roles.nombre}</p>
            </Modal>
        </>
    )
}