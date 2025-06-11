import Image from "next/image";
import Loading from "../loading";
import { NoDataResponse } from "@/components/NoDataInResp";
import { TableItems } from "@/components/ui/custom/table/TableItems";
import { UserSchema } from "@/interfaces";
import { DeleteUser } from "./DeleteUser";
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
              className="px-2 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white text-center"
            >
              {index + 1}
            </th>
            <td
              scope="row"
              className="flex items-center   py-1 text-gray-900 whitespace-nowrap dark:text-white"
            >
              {
                <>
                  <Image
                    className="w-10 h-10 rounded-full"
                    src={user.picture || "/default-avatar-profile.webp"}
                    alt="perfil de usuario"
                    width={50}
                    height={50}
                  />
                  <div className="ps-3">
                    <div className="text-base font-semibold">{user.nombre}</div>
                    <div className="font-normal text-gray-500">
                      {user.email}
                    </div>
                  </div>
                </>
              }
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
      </TableItems>
    </>
  );
}
