import { TablerOrder } from "../../../components/TableOrder";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Detalles del pedido",
  description: "Pagina para ver el detalle de un pedido",
};

export default function OrderDetail() {
  return <TablerOrder />;
}
