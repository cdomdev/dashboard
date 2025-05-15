import Image from "next/image";

export function OfertsList() {
  const itemsHeadTable = [
    "#ID",
    "Titulo de la oferta",
    "Fecha de inicio",
    "Fecha finalizacion",
    "Imagen",
    "Accion",
    "Accion",
  ];

  const oferts = [
    {
      id: "1",
      title: "Oferta 1",
      start_date: "10/06/2023",
      end_date: "10/06/2023",
      products: [
        {
          title: "Descripción de la oferta 1",
          price: 120.0,
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSR1tuoWOaXqZsb6z_in8zN1VsfTFHZUzvSIA&s",
        },
        {
          title: "Descripción de la oferta 2",
          price: 120.0,
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSR1tuoWOaXqZsb6z_in8zN1VsfTFHZUzvSIA&s",
        },
        {
          title: "Descripción de la oferta 3 ",
          price: 120.0,
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSR1tuoWOaXqZsb6z_in8zN1VsfTFHZUzvSIA&s",
        },
      ],
      image:
        "https://www.tarjetaalkosto.com.co/sites/default/files/u569/banner.png",
    },
    {
      id: "2",
      title: "Oferta 1",
      start_date: "10/06/2023",
      end_date: "10/06/2023",
      products: [
        {
          title: "Descripción de la oferta 1",
          price: 120.0,
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSR1tuoWOaXqZsb6z_in8zN1VsfTFHZUzvSIA&s",
        },
        {
          title: "Descripción de la oferta 2",
          price: 120.0,
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSR1tuoWOaXqZsb6z_in8zN1VsfTFHZUzvSIA&s",
        },
        {
          title: "Descripción de la oferta 3 ",
          price: 120.0,
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSR1tuoWOaXqZsb6z_in8zN1VsfTFHZUzvSIA&s",
        },
      ],
      image:
        "https://www.tarjetaalkosto.com.co/sites/default/files/u569/banner.png",
    },
    {
      id: "3",
      title: "Oferta 1",
      start_date: "10/06/2023",
      end_date: "10/06/2023",
      products: [
        {
          title: "Descripción de la oferta 1",
          price: 120.0,
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSR1tuoWOaXqZsb6z_in8zN1VsfTFHZUzvSIA&s",
        },
        {
          title: "Descripción de la oferta 2",
          price: 120.0,
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSR1tuoWOaXqZsb6z_in8zN1VsfTFHZUzvSIA&s",
        },
        {
          title: "Descripción de la oferta 3 ",
          price: 120.0,
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSR1tuoWOaXqZsb6z_in8zN1VsfTFHZUzvSIA&s",
        },
      ],
      image:
        "https://www.tarjetaalkosto.com.co/sites/default/files/u569/banner.png",
    },
  ];

  return (
    <div className="mt-10 relative overflow-x-auto shadow-md sm:rounded-sm animate-fadeIn">
      <table className="w-full text-sm text-Back rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            {itemsHeadTable.map((item, idx) => (
              <th key={idx} scope="col" className="p-4">
                {item}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {oferts?.map((ofr, index) => (
            <tr
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600"
              key={ofr.id || index}
            >
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {ofr.id?.slice(1, 7) || index}
              </th>
              <td
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white text-center"
              >
                {ofr.title}
              </td>

              <td
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white text-center"
              >
                {ofr.start_date}
              </td>

              <td
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white text-center"
              >
                {ofr.end_date}
              </td>
              <td
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white text-center"
              >
                <Image
                  src={ofr.image}
                  width={20}
                  height={60}
                  alt={`Imagen de la oferta ${ofr.title}`}
                  className=" rounded-full w-5 h-5"
                />
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
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
