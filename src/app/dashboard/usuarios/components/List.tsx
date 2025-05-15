import Image from "next/image";

interface UserInterface {
  id: string;
  nombre: string;
  email: string;
  estado: string;
  roles?: Roles;
  direccion?: string;
  telefono?: string;
  ciudad?: string;
  picture?: string;
}

interface Roles {
  id: string;
  nombre: string;
}

interface PropTable {
  items: string[];
  users?: UserInterface[];
}
export function ListUsers({ items, users }: PropTable) {
  return (
    <div className="mt-5 relative overflow-x-auto shadow-md sm:rounded-sm animate-fadeIn">
      <table className="w-full text-sm text-Back rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            {items.map((item, idx) => (
              <th key={idx} scope="col" className="p-4">
                {item}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {users?.map((user, index) => (
            <tr
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600"
              key={user.id || index}
            >
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {user.id?.slice(1, 7) || index}
              </th>
              <td
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white text-center"
              >
                {user.nombre}
              </td>

              <td
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white text-center"
              >
                {user.email}
              </td>
              <td
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white text-center"
              >
                {user?.estado || "No hay dato"}
              </td>
              <td
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white text-center"
              >
                {user?.roles?.nombre || "No hay dato"}
              </td>

              <td
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white text-center"
              >
                <Image
                  src={user.picture || "/default-avatar-profile.webp"}
                  width={20}
                  height={60}
                  alt="perfil de usuario"
                  className="rounded-full w-7 h-7"
                />
              </td>
              <td
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white text-center"
              >
                {user.ciudad || "No hay dato"}
              </td>

              <td
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white text-center"
              >
                Editar
              </td>
              <td
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white text-center"
              >
                Eliminar
              </td>
              <td
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white text-center"
              >
                Eliminar
              </td>
              <td
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white text-center"
              >
               Ver usuario
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
