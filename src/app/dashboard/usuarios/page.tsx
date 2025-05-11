"use client"
import { useEffect, useState } from 'react';
import { getAdmin } from './lib/users'

export default function AdminPage() {
  const [res, setRes] = useState()
  useEffect(() => {
    const fetchData = async () => {
      const res = await getAdmin()
      console.log('response ---> ', res)
      setRes(res?.data?.users)
    }
    fetchData()
  }, [])

  console.log(res)

  return (
    <>
      <h2 className="">Listado de administradores</h2>
      <span className="">Aqio el conteido o tabla de administradores</span>
    </>
  );
}
