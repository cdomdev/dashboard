interface PropsTable<T> {
    itemsHead: string[];
    itemsBody: T[];
    renderRow: (item: T, index: number) => React.ReactNode;
    className?: string;
}

export function TableItems<T>({ itemsHead, itemsBody, renderRow, className }: PropsTable<T>) {
    return (
        <div className={`mt-10 relative shadow-md sm:rounded-sm animate-fadeIn ${className}`}>
            <table className="w-full text-sm text-Back rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        {itemsHead.map((item, idx) => (
                            <th key={idx} scope="col" className="p-4 text-center">
                                {item}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {itemsBody.map((item, index) => (
                        <tr
                            key={(item as any).id || index}
                            className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600"
                        >
                            {renderRow(item, index)}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
