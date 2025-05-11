import { HeaderPagesSection } from "@/components/HeaderPagesSection"
import Link from "next/link"

import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Usuarios",
    description: "Pagina para agregar listar usuarios y adminisradores",
};

export default function LayoutUsers({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
            <HeaderPagesSection href="#" title="Usuarios" url="/dashboard" />
            <section className="mt-5">
                <div className="flex items-center gap-4 pb-2">
                    <Link href="/dashboard/usuarios" className="hover:underline duration-150 flex items-center">Administradores</Link>
                    <Link href="/dashboard/usuarios/user" className="hover:underline duration-150 flex items-center justify-center  ">Usuarios</Link>
                </div>
                <hr className="w-full" />
            </section>
            <section className="mt-5">
                {children}
            </section>
        </>
    )
}