"use client";
import { useEffect, useState } from "react";
import { getAdmin } from "./lib/users";
import { ListUsers } from "./components/List";
import { HeaderPagesSection } from "@/components/HeaderPagesSection";
import { itemsHeadTableUser } from "@/utils/headListForTables";
import { Pagination } from "@/components/Pagination";

export default function AdminPage() {
  const [res, setRes] = useState();
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const pageSize = 10;

  useEffect(() => {
    const fetchData = async () => {
      const res = await getAdmin();
      setRes(res?.data?.users);
    };
    fetchData();
  }, []);


  return (
    <>
      <HeaderPagesSection href="#" title="Administradores" url="/dashboard" />
      <h2 className="text-base md:text-xl pt-4">Listado de administradores</h2>
      <hr className="w-full my-1" />
      <section className="mt-5 max-w-screen w-full">
        <Pagination page={page} totalPages={totalPages} onPageChange={setPage} />
        <ListUsers items={itemsHeadTableUser} users={res} />
      </section>
    </>
  );
}
