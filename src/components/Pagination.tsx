import React from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";
import { Warga } from "../types/warga";
import { Transaksi } from "../types/transaksi";
import { ListUser } from "../types/listUser";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  indexOfFirstItem: number;
  indexOfLastItem: number;
  filteredData: Warga[] | Transaksi[] | ListUser[];
  perPage: number;
  setPerPage: React.Dispatch<React.SetStateAction<number>>;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
  indexOfFirstItem,
  indexOfLastItem,
  filteredData,
  perPage,
  setPerPage,
}) => {
  const generatePageNumbers = () => {
    const pages = [];
    const maxDisplayedPages = 5; // Jumlah halaman yang ditampilkan sebelum muncul "..."

    if (totalPages <= maxDisplayedPages) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      pages.push(1);
      if (currentPage > 3) pages.push("...");

      const startPage = Math.max(2, currentPage - 1);
      const endPage = Math.min(totalPages - 1, currentPage + 1);

      for (let i = startPage; i <= endPage; i++) pages.push(i);

      if (currentPage < totalPages - 2) pages.push("...");
      pages.push(totalPages);
    }

    return pages;
  };

  return (
    <div className="w-full flex flex-col md:flex-row gap-2 md:gap-0 items-center justify-between p-4">
      <p>
        {indexOfFirstItem + 1}-{indexOfLastItem} of {filteredData.length} items
      </p>

      <div className="flex items-center gap-1 md:gap-2">
        <button
          className={`w-10 h-10 flex justify-center items-center border rounded disabled:opacity-50 ${
            currentPage === 1 ? "text-slate-400" : "cursor-pointer"
          }`}
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          <HiChevronLeft size={24} />
        </button>

        {generatePageNumbers().map((page, index) =>
          typeof page === "number" ? (
            <button
              key={index}
              className={`w-10 h-10 border rounded cursor-pointer ${
                currentPage === page
                  ? "bg-primary text-white border border-primary"
                  : ""
              }`}
              onClick={() => onPageChange(page)}
            >
              {page}
            </button>
          ) : (
            <span key={index}>...</span>
          )
        )}

        <button
          className={`w-10 h-10 flex justify-center items-center border rounded disabled:opacity-50 ${
            currentPage === totalPages ? "text-slate-400" : "cursor-pointer"
          }`}
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          <HiChevronRight size={24} />
        </button>
      </div>

      <select
        name="perPage"
        id="perPage"
        className="p-2 border rounded-lg border-gray-300 text-gray-700 sm:text-sm"
        value={perPage}
        onChange={(e) => setPerPage(Number(e.target.value))}
      >
        <option value="5">5 / page</option>
        <option value="10">10 / page</option>
      </select>
    </div>
  );
};

export default Pagination;
