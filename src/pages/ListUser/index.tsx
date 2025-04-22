import { CiExport } from "react-icons/ci";
import TableListUser from "../../components/ListUser/TableListUser";
import PageContainerDashboard from "../../components/PageContainerDashboard";
import { HiOutlineChevronDown, HiOutlineSearch } from "react-icons/hi";
import { useAtom } from "jotai";
import { listUsersAtom, loadableListUsersAtom } from "../../atoms/dataAtoms";
import { useEffect, useState } from "react";
import logger from "../../utils/logger";
import Pagination from "../../components/Pagination";
import { ToastContainer, toast } from "react-toastify";

const ListUser = () => {
  const [dataListUser, setDataListUser] = useAtom(listUsersAtom);
  const [loadableListUsers] = useAtom(loadableListUsersAtom);
  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage, setPerPage] = useState<number>(10);
  const [generateLink, setGenerateLink] = useState<boolean>(false);

  useEffect(() => {
    document.title = "List User";
  }, []);

  useEffect(() => {
    if (loadableListUsers.state === "loading") {
      setIsLoading(true);
    } else if (loadableListUsers.state === "hasData") {
      setDataListUser(loadableListUsers.data);
      setIsLoading(false);
    } else if (loadableListUsers.state === "hasError") {
      logger.error("Error fetching data", loadableListUsers.error);
      setIsLoading(false);
    }
  }, [loadableListUsers, setDataListUser]);

  const filteredData = dataListUser.filter(
    (item) => item.nama.toLowerCase().includes(searchTerm.toLowerCase())
    // setCurrentPage(1)
  );

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };

  const handleCopyLink = (link: string): void => {
    navigator.clipboard.writeText(link).then(() => {
      toast.success("Link copied to clipboard!", {
        position: "top-right",
        autoClose: 2000,
      });
    });
  };

  const totalPages = Math.ceil(filteredData.length / perPage);
  const indexOfLastItem = currentPage * perPage;
  const indexOfFirstItem = indexOfLastItem - perPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div>
      <PageContainerDashboard>
        <div className="p-4 bg-white rounded-md shadow-md mt-14">
          <p className="text-2xl font-semibold">List User</p>
        </div>
        <div className="bg-white">
          {/* search & export */}
          <div className="w-full flex flex-col md:flex-row justify-between p-4 gap-5">
            {/* search */}
            <div className="flex items-center border border-gray-300 rounded-md px-2 w-full md:w-1/2">
              <span className="text-slate-400">
                <HiOutlineSearch size={20} />
              </span>
              <input
                type="search"
                placeholder="Cari data merchant"
                className="w-full p-2 outline-none bg-transparent"
                value={searchTerm}
                onChange={handleSearch}
              />
            </div>
            {/* export */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => setGenerateLink(true)}
                className="text-primary font-medium text-sm cursor-pointer"
              >
                Link Register
              </button>
              <button className="border border-gray-300 items-center gap-2 rounded-md py-1 px-3 cursor-pointer flex">
                <CiExport />
                Export
              </button>
            </div>
            {/* generate link modal */}
            {generateLink && (
              <div className="fixed top-0 left-0 w-full h-full bg-black/50 z-50 flex items-center justify-center">
                <div className="bg-white w-1/3 rounded-md p-5">
                  <div className="flex justify-between">
                    <p className="text-lg font-semibold text-center">
                      Generate Link Registrasi
                    </p>
                    <button
                      onClick={() => setGenerateLink(false)}
                      className="cursor-pointer text-2xl"
                    >
                      &times;
                    </button>
                  </div>
                  <div className="w-full h-0.5 bg-slate-200 mb-4"></div>
                  <p className="text-sm text-gray-500">
                    Anda sekarang dapat melihat detail penawaran Anda atau klik
                    'Kembali ke Beranda' untuk kembali ke halaman beranda
                  </p>
                  <div className="flex flex-col gap-3 mt-5">
                    <label htmlFor="rt" className="font-semibold">
                      RT
                    </label>
                    <div className="flex items-center gap-2 border border-gray-300 rounded-md p-2 justify-between">
                      <select
                        name="rt"
                        id="rt"
                        className="w-full outline-none bg-transparent"
                      >
                        <option value="1">RT 1</option>
                        <option value="2">RT 2</option>
                        <option value="3">RT 3</option>
                        <option value="4">RT 4</option>
                        <option value="5">RT 5</option>
                        <option value="6">RT 6</option>
                      </select>
                      <span>
                        <HiOutlineChevronDown />
                      </span>
                    </div>
                    <label htmlFor="linkRegistrasi" className="font-semibold">
                      Link Registrasi
                    </label>
                    <div className="flex items-center gap-2 border border-gray-300 rounded-md p-2">
                      <input
                        id="linkRegistrasi"
                        name="linkRegistrasi"
                        type="text"
                        value={`https://example.com/register?rt=1`}
                        readOnly
                        className="w-full outline-none bg-transparent"
                      />
                      <button
                        onClick={() => handleCopyLink("")}
                        className="bg-primary text-white rounded-md px-3 py-1 cursor-pointer"
                      >
                        Salin
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* end export */}
          </div>
          {/* table */}
          <div className="w-full">
            {isLoading ? (
              <>
                <p>loading...</p>
              </>
            ) : (
              <>
                <TableListUser dataListUser={currentItems} />
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
        <ToastContainer position="top-right" autoClose={2000} hideProgressBar />
      </PageContainerDashboard>
    </div>
  );
};

export default ListUser;
