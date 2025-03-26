import { CiExport } from "react-icons/ci";
import TableListUser from "../../components/ListUser/TableListUser";
import PageContainerDashboard from "../../components/PageContainerDashboard";
import { HiOutlineSearch } from "react-icons/hi";
import { useAtom } from "jotai";
import { listUsersAtom, loadableListUsersAtom } from "../../atoms/dataAtoms";
import { useEffect, useState } from "react";
import logger from "../../utils/logger";
import Pagination from "../../components/Pagination";

const ListUser = () => {
  const [dataListUser, setDataListUser] = useAtom(listUsersAtom);
  const [loadableListUsers] = useAtom(loadableListUsersAtom);
  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage, setPerPage] = useState<number>(10);

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
              <button className="text-primary font-medium text-sm cursor-pointer">
                Link Register
              </button>
              <button className="border border-gray-300 items-center gap-2 rounded-md py-1 px-3 cursor-pointer flex">
                <CiExport />
                Export
              </button>
            </div>
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
      </PageContainerDashboard>
    </div>
  );
};

export default ListUser;
