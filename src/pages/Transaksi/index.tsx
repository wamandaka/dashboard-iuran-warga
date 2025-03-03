import { HiOutlineSearch } from "react-icons/hi";
import PageContainerDashboard from "../../components/PageContainerDashboard";
import { CiExport } from "react-icons/ci";
import TableDataTransaksi from "../../components/Transaksi/TableDataTransaksi";
import type { Transaksi } from "../../types/transaksi";
import { useEffect, useState } from "react";
import Pagination from "../../components/Pagination";

const Transaksi = () => {
  const [dataTransaksi, setDataTransaksi] = useState<Transaksi[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage, setPerPage] = useState<number>(10);

  const fetchDataTransaksi = async () => {
    try {
      const resp = await fetch("/dataTransaksi.json");
      const data = await resp.json();
      setDataTransaksi(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchDataTransaksi();
  }, []);

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
        {/* {isLoading ? (
          <>
            <p>loading...</p>
          </>
        ) : (
          <> */}
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
        {/* </>
        )} */}
      </div>
    </PageContainerDashboard>
  );
};

export default Transaksi;
