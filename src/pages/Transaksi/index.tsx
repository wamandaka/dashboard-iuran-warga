import { HiOutlineSearch } from "react-icons/hi";
import PageContainerDashboard from "../../components/PageContainerDashboard";
import { CiExport } from "react-icons/ci";
import TableDataTransaksi from "../../components/Transaksi/TableDataTransaksi";
import type { Transaksi } from "../../types/transaksi";
import { useEffect, useState } from "react";
import Pagination from "../../components/Pagination";
import { useAtom } from "jotai";
import { loadableTransaksiAtom, transaksiAtom } from "../../atoms/dataAtoms";
import logger from "../../utils/logger";

const Transaksi = () => {
  // const [dataTransaksi, setDataTransaksi] = useState<Transaksi[]>([]);
  const [dataTransaksi, setDataTransaksi] = useAtom(transaksiAtom);
  const [loadableTransaksi] = useAtom(loadableTransaksiAtom);
  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage, setPerPage] = useState<number>(10);

  useEffect(() => {
    if (loadableTransaksi.state === "loading") {
      setIsLoading(true);
    } else if (loadableTransaksi.state === "hasData") {
      setDataTransaksi(loadableTransaksi.data);
      setIsLoading(false);
    } else if (loadableTransaksi.state === "hasError") {
      logger.error("Error fetching data", loadableTransaksi.error);
      setIsLoading(false);
    }
  }, [loadableTransaksi, setDataTransaksi]);

  const filteredData = dataTransaksi.filter(
    (item) => item.nama.toLowerCase().includes(searchTerm.toLowerCase())
    // setCurrentPage(1)
  );

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };

  const totalPages = Math.ceil(filteredData.length / perPage);
  const indexOfLastItem = currentPage * perPage;
  const indexOfFirstItem = indexOfLastItem - perPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <PageContainerDashboard>
      <div className="p-4 bg-white rounded-t-md border-b border-slate-300 shadow-md mt-14">
        <div className="w-full flex flex-col md:flex-row md:justify-between md:items-center gap-3">
          <div>
            <p className="text-2xl font-semibold">Transaksi</p>
            <p className="text-sm text-slate-400">Lorem ipsum dolor sit amet</p>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-between p-4 bg-white">
        {/* search */}
        <div className="flex items-center border border-gray-300 rounded-md px-2 w-full md:w-1/2">
          <span className="text-slate-400">
            <HiOutlineSearch size={20} />
          </span>
          <input
            type="search"
            placeholder="Cari data transaksi"
            className="w-full p-2 outline-none bg-transparent"
            value={searchTerm}
            onChange={handleSearch}
          />
        </div>
        {/* export */}
        <button className="border border-gray-300 items-center gap-2 rounded-md py-1 px-3 cursor-pointer hidden md:flex">
          <CiExport />
          Export
        </button>
      </div>

      {/* table */}
      <div className="w-full bg-white">
        {isLoading ? (
          <>
            <p>loading...</p>
          </>
        ) : (
          <>
            <TableDataTransaksi dataTransaksi={currentItems} />
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
              indexOfFirstItem={indexOfFirstItem}
              indexOfLastItem={indexOfLastItem}
              filteredData={filteredData}
              perPage={perPage}
              setPerPage={setPerPage}
            />
          </>
        )}
      </div>
    </PageContainerDashboard>
  );
};

export default Transaksi;
