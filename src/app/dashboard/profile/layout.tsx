import Image from "next/image";
interface Item {
    id: number;
    title: string;
    href: string;
}
export default function LayoutProfileAdmin({ childrem }: { childrem: React.ReactNode }) {
    const profileData = {
        nombre: "Admin",
        email: "william.henry.harrison@example-pet-store.com",
        avatar: "/default-avatar-profile.webp",
        avatarDefaul: "/default-avatar-profile.webp"
    }
    const items = [
        {
            id: 1,
            title: "Persmisos",
            href: "/profile/persmisos"
        },
        {
            id: 2,
            title: "Ajustes",
            href: "/profile/settings"
        }, {
            id: 2,
            title: "Nuevo administrador",
            href: "/profile/registro"
        },
    ]
    return (
        <>
            <section className="grid md:grid-cols-2 p-5">
                <article className="flex flex-col justify-center items-center">
                    <Image src={`${profileData.avatar}` || `${profileData.avatarDefaul}`} alt={"profile-image"} width={100} height={100} className="rounded-full mb-1" />
                    <span className="text-sm text-slate-600 ">¡Hola!</span>
                    <h2 className="text-2xl font-bold ">{profileData.nombre}</h2>
                    <span className="text-sm text-slate-600 mb-2">¿Que quieres hacer hoy?</span>
                    <hr className="border-dashed border-gray-300 w-full" />
                    <article className="mt-3 flex flex-col gap-y-2 w-full">
                        {items.map((item) => (
                            <a key={item.id} href={item.href} className="border w-full bg-blue-500 hover:bg-blue-400 duration-150 py-2 inline-block rounded-sm text-white hover:text-gray-50 text-center">{item.title}</a>
                        ))}
                    </article>
                </article>
                <article className="bg-red-400">
                    {childrem}
                </article>
            </section>
        </>
    )
}
