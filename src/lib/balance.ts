// funciones para la peticion de datos que corresponden a la pagina principal

import { query } from "./request";

export function getMorSalled() {
  const res = query("/api/balance/see-best-sallers", "GET");
  return res;
}


export function Sales(){
  const res = query("/api/balance/sales-month", "GET")
  return res
}