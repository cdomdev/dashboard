import { itemsHeadCatAndSub } from "@/utils/headListForTables";

export default function Loading() {
    const filasFalsas = Array.from({ length: 5 });
  
    return (
      <div className="relative overflow-x-auto shadow-md sm:rounded-sm animate-pulse">
        <table className="w-full text-sm text-gray-500 dark:text-gray-400">
          <thead className="text-xs uppercase bg-gray-100 dark:bg-gray-600 dark:text-gray-400">
            <tr>
            {itemsHeadCatAndSub.map((item, idx) => (
                <th
                  key={idx}
                  scope="col"
                  className="py-4 text-center first:rounded-tl-lg last:rounded-tr-lg"
                >
                  {item}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="relative overflow-x-auto shadow-md sm:rounded-sm animate-pulse">
            {filasFalsas.map((_, idx) => (
              <tr
                key={idx}
                className="bg-white border-b dark:bg-gray-400 dark:border-gray-700 "
              >
                <td className="px-6 py-4">
                  <div className="h-4 bg-gray-300 rounded w-16"></div>
                </td>
                <td className="px-6 py-4">
                  <div className="h-4 bg-gray-300 rounded w-32"></div>
                </td>
                <td className="px-6 py-4">
                  <div className="h-4 bg-gray-300 rounded w-20"></div>
                </td>
                <td className="px-6 py-4">
                  <div className="h-4 bg-gray-300 rounded w-20"></div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  