import { Left } from "../components/buttons/Left";


export default function HomeUsuario() {
  return (
    <section className="w-full min-h-dvh p-7 flex flex-col gap-5 ">
      <section className="w-full px-10 pt-14 flex justify-between gap-5">
        <div>
          <Left url="/dashboard" />
          <h1 className="text-lg font-semibold">Usuarios</h1>
          <span>0</span>
        </div>
      </section>
      <section className="shadow-md w-full rounded-md p-4 bg-white">
      </section>
    </section>
  );
}
