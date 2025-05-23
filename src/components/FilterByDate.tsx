import { OrderSchema } from "@/interfaces";

// // Versión alternativa si necesitas filtrar por fecha específica del pedido
// export const filterByDate = (data: OrderSchema[], period: string) => {
//   const now = new Date();
//   let startDate: Date, endDate: Date;

//   if (period === "este-mes") {
//     startDate = new Date(now.getFullYear(), now.getMonth(), 1);
//     endDate = new Date(now.getFullYear(), now.getMonth() + 1, 0);
//   } else if (period === "mes-pasado") {
//     startDate = new Date(now.getFullYear(), now.getMonth() - 1, 1);
//     endDate = new Date(now.getFullYear(), now.getMonth(), 0);
//   } else {
//     return data;
//   }

//   return data?.filter((order) => {
//     const orderDate = new Date(order.createdAt);
//     return orderDate >= startDate && orderDate <= endDate;
//   });
// };

export const filterByDate = (data: OrderSchema[], period: string) => {
  const now = new Date();
  let startDate: Date, endDate: Date;

  if (period === "este-mes") {
    startDate = new Date(now.getFullYear(), now.getMonth(), 1);
    endDate = new Date(now.getFullYear(), now.getMonth() + 1, 0);
  } else if (period === "mes-pasado") {
    startDate = new Date(now.getFullYear(), now.getMonth() - 1, 1);
    endDate = new Date(now.getFullYear(), now.getMonth(), 0);
  } else {
    return data;
  }

  return data.filter((order) => {
    if ("createdAt" in order) {
      const orderDate = new Date(order.createdAt as string);
      return orderDate >= startDate && orderDate <= endDate;
    }

    // // Opción 2: Si solo tienes createdAt en los detalles del pedido
    // return order.detalles_pedido.some((detalle) => {
    //   if ('createdAt' in detalle) {
    //     const detalleDate = new Date(detalle.createdAt as string);
    //     return detalleDate >= startDate && detalleDate <= endDate;
    //   }
    //   return false;
    // });
  });
};
