// import { marcarTodas } from "@/services/notificaciones";

// export const Read = ({ toggleDropdown, setMessages }) => {
//   const marcarComoLeidas = async () => {
//     const response = await marcarTodas();
//     if (response.status === 200) {
//       toggleDropdown(false);
//       setMessages([]);
//     }
//   };

//   return (
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       onClick={marcarComoLeidas}
//       className="size-6 cursor-pointer hover:stroke-green-700 hover:scale-110"
//       width="44"
//       height="44"
//       viewBox="0 0 24 24"
//       strokeWidth="1"
//       stroke="#2c3e50"
//       fill="none"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path stroke="none" d="M0 0h24v24H0z" fill="none" />
//       <path d="M7 12l5 5l10 -10" />
//       <path d="M2 12l5 5m5 -5l5 -5" />
//     </svg>
//   );
// };
