import { OrderSchema } from "@/interfaces";

// FUNCIÓN 1: Suma total de pagos de múltiples órdenes
export const formatPayments = (orders: OrderSchema[]) => {
  const totalPayment = orders.reduce((acc, ord) => {
    // Convertir pago_total a número si es string
    const payment =
      typeof ord.pago_total === "string"
        ? parseFloat(ord.pago_total)
        : ord.pago_total;

    return acc + (payment || 0);
  }, 0);

  return formatValue(totalPayment);
};

// FUNCIÓN 2: Formatear pago de una sola orden
export const formatSinglePayment = (order: OrderSchema) => {
  const payment =
    typeof order.pago_total === "string"
      ? parseFloat(order.pago_total)
      : order.pago_total;

  return formatValue(payment || 0);
};

// FUNCIÓN 3: Formatear valor con puntos
const formatValue = (value: number | string) => {
  // Convertir a número si es string
  const numericValue = typeof value === "string" ? parseFloat(value) : value;

  // Verificar que sea un número válido
  if (isNaN(numericValue)) return "0";

  // Formatear con puntos como separadores de miles
  return Math.round(numericValue)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ".");
};

export const formatPrice = (value: string | number): string => {
  if (!value) return "";
  return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
};
