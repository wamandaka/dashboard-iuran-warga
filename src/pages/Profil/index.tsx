import { HiOutlinePencil } from "react-icons/hi2";
import PageContainerDashboard from "../../components/PageContainerDashboard";

const Profil = () => {
  return (
    <PageContainerDashboard>
      <div className="p-4 bg-white rounded-md shadow-md mt-14">
        <div className="w-full flex items-center justify-between gap-3">
          <p className="text-xl md:text-2xl font-semibold w-1/3 md:w-44">
            Akun Detail
          </p>
          <div className="h-0.5 bg-gray-200 w-1/3 md:w-full"></div>
          <button className="bg-primary text-white rounded-md py-2 px-2 cursor-pointer w-1/3 flex items-center justify-center gap-2 md:w-52">
            <span>
              <HiOutlinePencil />
            </span>
            <p className="text-sm">Ubah Data</p>
          </button>
        </div>
      </div>
    </PageContainerDashboard>
  );
};

export default Profil;
