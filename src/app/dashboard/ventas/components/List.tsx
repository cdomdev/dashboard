"use client";

export function SalesList() {
  const itemsHeadTable = [
    "#ID",
    "Nombre de usuario",
    "Email",
    "telefono",
    "Total pagado",
    "Metodo de pago",
    "Estado del pedido",
    "Mas detalles",
    "Accion",
    "Accion",
  ];

  const items = [
    {
      id: "1",
      nombre: "Carlos",
      email: "carlos@gmail.com",
      telefono: "3215678902",
      pago_total: "120.000",
      metodo_de_pago: "linea",
      estado_pedido: "En alistamiento",
    },
    {
      id: "2",
      nombre: "Carlos",
      email: "carlos@gmail.com",
      telefono: "3215678902",
      pago_total: "120.000",
      metodo_de_pago: "linea",
      estado_pedido: "En alistamiento",
    },
    {
      id: "3",
      nombre: "Carlos",
      email: "carlos@gmail.com",
      telefono: "3215678902",
      pago_total: "120.000",
      metodo_de_pago: "linea",
      estado_pedido: "En alistamiento",
    },
  ];
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-sm">
      <table className="w-full text-sm text-Back rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            {itemsHeadTable.map((item, idx) => (
              <th key={idx} scope="col" className="p-4 text-center">
                {item}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="overflow-y-auto">
          {items?.map((prod, index) => (
            <tr
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600"
              key={prod.id || index}
            >
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {prod?.id?.slice(1, 7)}
              </th>
              <td
                scope="row"
                className="py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white text-center"
              >
                {prod.nombre}
              </td>
              <td
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white text-center"
              >
                {prod.email}
              </td>
              <td
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white text-center"
              >
                {prod.telefono}
              </td>
              <td
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white text-center"
              >
                {prod.pago_total}
              </td>

              <td
                scope="row"
                className="py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white text-center"
              >
                {prod.metodo_de_pago}
              </td>
              <td
                scope="row"
                className="py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white text-center"
              >
                {prod.estado_pedido}
              </td>
              <td className="px-4 py-4">Detalles</td>
              <td className="px-4 py-4">Eliminar</td>
              <td className="px-4 py-4 flex items-center justify-center">
                Editar
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
