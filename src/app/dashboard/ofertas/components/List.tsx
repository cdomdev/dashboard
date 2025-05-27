import { itemsHeadTableOferts } from "@/utils/headListForTables";
import Image from "next/image";
import { TableItems } from "@/components/ui/custom/table/TableItems";
import Loading from "../loading";
import { useState } from "react";
import { NoDataResponse } from "@/components/NoDataInResp";


export function OfertsList() {
  const [oferts, setOferts] = useState(null)

  if (!oferts) return Loading()

  // if(!oferts.length) return <NoDataResponse text="No hay datos para mostrar"/>)
  const ofertsItems = [
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
    <TableItems itemsHead={itemsHeadTableOferts}>
      {ofertsItems?.map((ofr, index) => (
        <tr
          className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600"
          key={ofr.id || index}
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
    </TableItems>

  );
}
