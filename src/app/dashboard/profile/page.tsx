import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Perfil de administrador",
  description: "Esta es la pagina de inicio de el layout",
};

export default function Home() {
  return (
    <>
      <h3 className="text-white">
        Su rol actul es de administrador, este le permite tener todo el control
        de las acciones del sistema, incluso crear nuevos usuarios y concedere
        persmisos para realizar ciertas tareas
      </h3>
    </>
  );
}
