"use client";
import { HeaderPagesSection } from "@/components/HeaderPagesSection";
import { ListUsers } from "../components/List";
import { useEffect, useState } from "react";
import { getAdmin } from "../lib/users";

export default function UserPage() {
  const [res, setRes] = useState();
  useEffect(() => {
    const fetchData = async () => {
      const res = await getAdmin();
      setRes(res?.data?.users);
    };
    fetchData();
  }, []);

  const itemsHeadTable = [
    "#ID",
    "Nombre",
    "Email",
    "Estado",
    "Rol",
    "Imagen",
    "Telefono",
    "Ciudad",
    "Accion",
    "Accion",
    "Detalles",
  ];

  return (
    <>
      <HeaderPagesSection href="#" title="Administradores" url="/dashboard" />
      <h2 className="text-base md:text-xl">Listado de usuarios</h2>
      <hr className="w-full my-1" />
      <section className="mt-5">
        <ListUsers items={itemsHeadTable} users={res} />
      </section>
    </>
  );
}
