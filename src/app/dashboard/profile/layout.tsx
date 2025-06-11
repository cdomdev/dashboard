import Image from "next/image";
import Link from "next/link";
export default function LayoutProfileAdmin({
  children,
}: {
  children: React.ReactNode;
}) {
  const profileData = {
    nombre: "Admin",
    email: "william.henry.harrison@example-pet-store.com",
    avatar: "/default-avatar-profile.webp",
    avatarDefaul: "/default-avatar-profile.webp",
  };
  const items = [
    {
      id: 1,
      title: "Nuevo administrador",
      href: "/dashboard/profile/registro",
    },
    {
      id: 2,
      title: "Gestionar persmisos",
      href: "/dashboard/profile/persmisos",
    },
    {
      id: 3,
      title: "Listado de administradores",
      href: "/dashboard/profile/listado-administradores",
    },
  ];
  return (
    <>
      <section className="grid grid-cols-1 md:flex p-5">
        <article className="flex flex-col justify-center items-center">
          <Image
            src={`${profileData.avatar}` || `${profileData.avatarDefaul}`}
            alt={"profile-image"}
            width={100}
            height={100}
            className="rounded-full mb-1"
          />
          <span className="text-sm text-slate-600 ">¡Hola!</span>
          <h2 className="text-2xl font-bold ">{profileData.nombre}</h2>
          <span className="text-sm text-slate-600 mb-2">
            ¿Que quieres hacer hoy?
          </span>
          <hr className="border-dashed border-gray-300 w-full md:pr-4" />
          <article className="mt-3 flex flex-col gap-y-2 w-full min-w-80  md:pr-4">
            <>
              {items.map((item) => (
                <Link
                  key={item.id}
                  href={item.href}
                  className="border w-full bg-blue-500 text-sm hover:bg-blue-400 duration-150 py-2 inline-block rounded-sm text-white hover:text-gray-50 text-center"
                >
                  {item.title}
                </Link>
              ))}
              <button className="border w-full bg-red-600 hover:bg-red-500 text-sm duration-150 py-2 inline-block rounded-sm text-white hover:text-gray-50 text-center cursor-pointer">
                Cerrar sesion
              </button>
            </>
          </article>
        </article>
        <article className="mt-10 md:mt-20 md:border-l dark:border-gray-600 pl-2 ">
          {children}
        </article>
      </section>
    </>
  );
}
