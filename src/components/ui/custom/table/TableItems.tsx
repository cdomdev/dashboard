interface PropsTable {
  itemsHead: string[];
  children?: React.ReactNode;
  className?: string;
}

export function TableItems({ itemsHead, children }: PropsTable) {
  return (
    <div className="mt-5 relative shadow-md overflow-x-auto sm:rounded-lg animate-fadeIn">
      <div className="w-full overflow-x-auto">
        <table className="min-w-[800px] w-full text-sm text-Back rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              {itemsHead.map((item, idx) => (
                <th
                  key={idx}
                  scope="col"
                  className="p-4 text-center first:rounded-tl-lg last:rounded-tr-lg"
                >
                  {item}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>{children}</tbody>
        </table>
      </div>
    </div>
  );
}
