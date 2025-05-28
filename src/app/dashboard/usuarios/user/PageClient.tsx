"use client";
import { HeaderPagesSection } from "@/components/HeaderPagesSection";
import { ListUsers } from "../components/List";
import { useEffect, useState } from "react";
import { getUsers } from "../lib/users";
import { itemsHeadTableUser } from "@/utils/headListForTables";
import { Pagination } from "@/components/Pagination";

export default function UserPage() {
  const [res, setRes] = useState();
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const pageSize = 10;

  useEffect(() => {
    const fetchData = async () => {
      const res = await getUsers(page, pageSize);
      setRes(res?.data?.users);
      setTotalPages(res?.data?.users?.length);
    };
    fetchData();
  }, [page]);

  
  return (
    <>
      <HeaderPagesSection href="#" title="Usuarios" url="/dashboard" />
      <h2 className="text-base md:text-xl pt-4">Listado de usuarios</h2>
      <hr className="w-full my-1" />
      <section className="mt-5">
        <Pagination
          page={page}
          totalPages={totalPages}
          onPageChange={setPage}
        />
        <ListUsers items={itemsHeadTableUser} users={res} />
      </section>
    </>
  );
}
