export function NoDataResponse({ text }: { text?: string }) {
  return (
    <div className=" shadow-sm mt-10 text-center text-md py-4 dark:text-black flex flex-col items-center dark:bg-white rounded-md">
      <p className="text-gray-700">{text ? text : "No hay datos"}</p>
    </div>
  );
}
