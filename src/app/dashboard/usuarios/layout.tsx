import { Back } from "@/components/ui/custom/buttons/Back"
import Link from "next/link"

export default function LayoutUsers({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <section className="w-full min-h-dvh p-7 flex flex-col gap-5 ">
            <section className="w-full lg:px-10  flex flex-col">
                <Back url="/dashboard" />
                <h1 className="text-lg font-bold md:text-2xl">Usuarios</h1>
            </section>
            <div className="flex items-center gap-2">
                <Link href="/dashboard/usuarios" className="hover:underline duration-150 flex items-center">Administradores</Link>
                <Link href="/dashboard/usuarios/user" className="hover:underline duration-150 flex items-center justify-center  ">Usuarios</Link>
            </div>
            <hr className="w-full" />
            <section className="shadow-md w-full rounded-md p-4 bg-white">
                {children}
            </section>
        </section>
    )
}