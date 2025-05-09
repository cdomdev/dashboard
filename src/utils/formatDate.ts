import { formatDistanceToNow, parseISO } from "date-fns";
import { es } from "date-fns/locale";

export const formatTimestamp = (date: string) => {
  return formatDistanceToNow(parseISO(date), { addSuffix: true, locale: es });
};
