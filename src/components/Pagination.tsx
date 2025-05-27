import { ArrowLeft, ArrowRight } from "@/components/icons";

interface PaginationProps {
  page: number;
  totalPages: number;
  onPageChange: (newPage: number) => void;
}

export function Pagination({
  page,
  totalPages,
  onPageChange,
}: PaginationProps) {
  const handlePrev = () => {
    if (page > 1) onPageChange(page - 1);
  };

  const handleNext = () => {
    if (page < totalPages) onPageChange(page + 1);
  };

  return (
    <div className="flex gap-10 md:justify-between  items-center my-4 lg:px-4">
      <p className="text-gray-600 dark:text-gray-300">
        Página {page} de {totalPages}
      </p>
      <div className="flex gap-2">
        <button
          onClick={handlePrev}
          disabled={page === 1}
          className="bg-gray-300 text-gray-800 px-3 py-1 rounded disabled:opacity-50 flex items-center justify-center group cursor-pointer transition text-xs md:text-base"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 duration-200" /> Anterior
        </button>
        <button
          onClick={handleNext}
          disabled={page === totalPages}
          className="bg-gray-300 text-gray-800 px-3 py-1 rounded disabled:opacity-50 flex items-center justify-center group cursor-pointer transition text-xs md:text-base "
        >
          Siguiente
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 duration-200" />
        </button>
      </div>
    </div>
  );
}
