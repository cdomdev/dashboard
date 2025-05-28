import { UserOrders } from "../../components/UserOrderList";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pedidos de usuario",
};

export default function Home() {
  return <UserOrders />;
}
