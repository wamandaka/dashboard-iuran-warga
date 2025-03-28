import { useEffect, useState } from "react";
import { CiExport } from "react-icons/ci";
import { HiOutlineSearch } from "react-icons/hi";
import { HiOutlinePlus } from "react-icons/hi2";
import Pagination from "../../components/Pagination";
import FormTambahWarga from "../../components/DataWarga/FormTambahWarga";
import { Warga } from "../../types/warga";
import TableDataWarga from "../../components/DataWarga/TableDataWarga";
import PageContainerDashboard from "../../components/PageContainerDashboard";
import { useAtom } from "jotai";
import { loadableWargaAtom, wargaAtom } from "../../atoms/dataAtoms";
import logger from "../../utils/logger";

const DataWarga = () => {
  const [data, setData] = useAtom(wargaAtom);
  const [loadableWarga] = useAtom(loadableWargaAtom);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage, setPerPage] = useState<number>(10);
  const [isLoading, setIsLoading] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [editData, setEditData] = useState<Warga | null>(null);
  // State untuk input form
  const [newWarga, setNewWarga] = useState<Warga>({
    id: 0,
    nama: "",
    alamat: "",
    noHp: 0,
    noKK: 0,
    biayaKebersihan: 0,
    biayaKeamanan: 0,
    infaq: 0,
  });

  useEffect(() => {
    document.title = "Data Warga";
  }, []);

  const handleShowForm = (warga?: Warga) => {
    if (warga) {
      setEditData(warga);
      setNewWarga(warga);
    } else {
      setEditData(null);
      setNewWarga({
        id: 0,
        nama: "",
        alamat: "",
        noHp: 0,
        noKK: 0,
        biayaKebersihan: 0,
        biayaKeamanan: 0,
        infaq: 0,
      });
    }
    setShowForm(!showForm);
  };

  // Load data warga dari atom
  useEffect(() => {
    if (loadableWarga.state === "loading") {
      setIsLoading(true);
    } else if (loadableWarga.state === "hasData") {
      setData(loadableWarga.data);
      setIsLoading(false);
    } else if (loadableWarga.state === "hasError") {
      logger.error("Error fetching warga", loadableWarga.error);
      setIsLoading(false);
    }
  }, [loadableWarga, setData]);

  // Handler input form
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setNewWarga({ ...newWarga, [id]: value });
  };

  // Tambah Data Warga
  const tambahWarga = (e: React.FormEvent) => {
    e.preventDefault();
    const newData = {
      ...newWarga,
      id: data.length + 1, // ID otomatis
      biayaKebersihan: Number(newWarga.biayaKebersihan),
      biayaKeamanan: Number(newWarga.biayaKeamanan),
      infaq: Number(newWarga.infaq),
    };

    setData([...data, newData]); // Tambah ke data utama
    setShowForm(!showForm); // Tutup form
  };

  // Edit Data Warga
  const editWarga = (e: React.FormEvent) => {
    e.preventDefault();
    const updatedData = data.map((w) => (w.id === newWarga.id ? newWarga : w));
    setData(updatedData);
    setShowForm(!showForm); // Tutup form
  };

  const deleteWarga = (id: number) => {
    const updatedData = data.filter((w) => w.id !== id);
    setData(updatedData);
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };

  const filteredData = data.filter(
    (item) => item.nama.toLowerCase().includes(searchTerm.toLowerCase())
    // setCurrentPage(1)
  );

  const totalPages = Math.ceil(filteredData.length / perPage);
  const indexOfLastItem = currentPage * perPage;
  const indexOfFirstItem = indexOfLastItem - perPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <PageContainerDashboard>
      {showForm ? (
        <FormTambahWarga
          tambahWarga={editData ? editWarga : tambahWarga}
          newWarga={newWarga}
          handleInputChange={handleInputChange}
          onCancel={handleShowForm}
          isEdit={!!editData}
        />
      ) : (
        <>
          <div className="p-4 bg-white rounded-t-md border-b border-slate-300 shadow-md mt-14">
            <div className="w-full flex flex-col md:flex-row md:justify-between md:items-center gap-3">
              <div>
                <p className="text-2xl font-semibold">Data Warga</p>
                <p className="text-sm text-slate-400">
                  Lorem ipsum dolor sit amet
                </p>
              </div>
              <div className="flex gap-2 items-center">
                <button
                  onClick={() => handleShowForm()}
                  className="bg-primary flex items-center gap-2 text-white rounded-md py-2 px-3 cursor-pointer"
                >
                  <HiOutlinePlus size={20} />
                  Tambah Data Warga
                </button>
                <button className="border border-slate-300 flex items-center gap-2 text-slate-500 rounded-md py-1 px-3 cursor-pointer md:hidden">
                  <CiExport size={20} />
                  Export
                </button>
              </div>
            </div>
          </div>

          <div className="bg-white">
            {/* search $ export */}
            <div className="w-full flex justify-between p-4">
              {/* search */}
              <div className="flex items-center border border-gray-300 rounded-md px-2 w-full md:w-1/2">
                <span className="text-slate-400">
                  <HiOutlineSearch size={20} />
                </span>
                <input
                  type="search"
                  placeholder="Cari data warga"
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
            <div className="w-full">
              {isLoading ? (
                <>
                  <p>loading...</p>
                </>
              ) : (
                <>
                  <TableDataWarga
                    deleteWarga={deleteWarga}
                    currentItems={currentItems}
                    onEdit={handleShowForm}
                  />
                </>
              )}
              {/* pagination */}
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
            </div>
          </div>
        </>
      )}
    </PageContainerDashboard>
  );
};

export default DataWarga;
