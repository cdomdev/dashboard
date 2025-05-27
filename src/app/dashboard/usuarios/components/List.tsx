import Image from "next/image";
import Loading from "../loading";
import { NoDataResponse } from "@/components/NoDataInResp";
import { TableItems } from "@/components/ui/custom/table/TableItems";
import { UserSchema } from "@/interfaces"
import { DeleteUser } from './DeleteUser'
import { UpdateStateUser } from "./UpdateStatusUser";

interface PropTable {
  items: string[];
  users?: UserSchema[];
}

export function ListUsers({ items, users }: PropTable) {

  if (!users) return <Loading />;

  if (users.length === 0)
    return <NoDataResponse text="No hay datos para listar" />;
  return (
    <>
      <TableItems itemsHead={items}>
        {users?.map((user, index) => (
          <tr
            className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600"
            key={user.id || index}
          >
            <th
              scope="row"
              className="px-2 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              {index + 1}
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
              {user?.estado || "No hay datos"}
            </td>

            <td
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white text-center"
            >
              {user?.roles?.nombre || "No hay datos"}
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
                className="rounded-full w-7 h-7 mx-auto"
              />
            </td>

            <td
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white text-center"
            >
              {user.telefono || "No hay datos"}
            </td>
            <td
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white text-center"
            >
              {user.ciudad || "No hay datos"}
            </td>
            <td
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white text-center"
            >
              <UpdateStateUser user={user} />
            </td>
            <td
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white text-center"
            >
              <DeleteUser user={user} />
            </td>

          </tr>
        ))}
      </TableItems></>
  );
}
