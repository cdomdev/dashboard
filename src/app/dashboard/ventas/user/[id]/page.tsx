import { UserOrders } from "../../components/UserOrderList";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ventas",
  description: "Pagina para ver el detalles de las compras de un usuario",
};

export default function OrderUserHome() {
  return <UserOrders />;
}
