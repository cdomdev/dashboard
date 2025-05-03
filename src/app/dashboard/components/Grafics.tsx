export default function Grafics() {
  return (
    <section className="flex gap-4 pt-5">
      <div className="flex gap-1 justify-center flex-wrap h-auto py-4 px-2 items-center w-full ">
        <div className="w-40 h-24 md:w-[240px] md:h-28 rounded-lg shadow-md flex justify-between p-3">
          <div className="flex justify-between flex-col">
            <h1 className="text-xs md:text-sm font-semibold">Total ordenes</h1>
            <p className="font-extrabold text-sm md:text-xl">0</p>
            <span className="text-[6px] text-slate-500 md:text-xs">
              Ordenees sin despachar
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
