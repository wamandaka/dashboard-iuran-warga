import PageContainerDashboard from "../../components/PageContainerDashboard";
import logo from "../../assets/logo.png";
import favicon from "../../assets/favicon.png";
import { useEffect } from "react";

const Pengaturan = () => {
  useEffect(() => {
    document.title = "Pengaturan";
  }, []);
  return (
    <PageContainerDashboard>
      <div className="p-4 bg-white rounded-md shadow-md mt-14">
        <p className="text-2xl font-semibold">Pengaturan</p>
        <div className="w-full h-0.5 bg-gray-200 my-4"></div>

        {/* favicon */}
        <div className="flex items-center justify-between w-full">
          <div className="flex flex-col md:flex-row md:items-center gap-5 justify-between w-1/2">
            <div className="">
              <p className="text-lg font-semibold">Fav Icon</p>
              <p className="text-sm text-slate-400">
                Update fav icon anda di sini
              </p>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 flex items-center">
                <img src={favicon} alt="Favicon" />
              </div>
              <div className="">
                <label
                  htmlFor="upload-favicon"
                  className="border border-primary text-primary rounded-md py-1 px-3 cursor-pointer text-sm"
                >
                  Upload Favicon
                </label>
                <input
                  type="file"
                  accept="image/jpeg, image/png"
                  id="upload-favicon"
                  className="hidden"
                />
                <p className="text-sm text-slate-400">Ukuran maks 5mb</p>
              </div>
            </div>
          </div>
          <div className="w-1/2 flex items-center justify-end text-red-700">
            <button className="cursor-pointer">Hapus Icon</button>
          </div>
        </div>
        <div className="w-full h-0.5 bg-gray-100 my-4"></div>

        {/* logo */}
        <div className="flex items-center justify-between w-full">
          <div className="flex flex-col md:flex-row md:items-center gap-5 justify-between w-1/2">
            <div className="">
              <p className="text-lg font-semibold">Company Logo</p>
              <p className="text-sm text-slate-400">Update logo anda di sini</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-14 h-14 flex items-center">
                <img src={logo} alt="Logo" />
              </div>
              <div className="">
                <label
                  htmlFor="upload-logo"
                  className="border border-primary text-primary rounded-md py-1 px-3 cursor-pointer text-sm"
                >
                  Upload Logo
                </label>
                <input
                  type="file"
                  accept="image/jpeg, image/png"
                  id="upload-logo"
                  className="hidden"
                />
                <p className="text-sm text-slate-400">Ukuran maks 5mb</p>
              </div>
            </div>
          </div>
          <div className="w-1/2 flex items-center justify-end text-red-700">
            <button className="cursor-pointer">Hapus Logo</button>
          </div>
        </div>
        <div className="w-full h-0.5 bg-gray-100 my-4"></div>

        {/* teks pembukaan */}
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center justify-between w-full gap-3">
            <div className="w-1/3">
              <p className="text-lg font-semibold">Teks pembuka</p>
              <p className="text-sm text-slate-400">
                Update teks pembuka anda di sini
              </p>
            </div>
            <div className="flex items-center w-2/3">
              <textarea
                id="Notes"
                className="mt-0.5 w-full md:w-md resize-none rounded border border-gray-300 shadow-sm sm:text-sm p-1 outline-primary"
                rows={3}
              ></textarea>
            </div>
          </div>
        </div>
        <div className="w-full h-0.5 bg-gray-100 my-4"></div>
        <div className="w-full flex justify-between">
          <button className="text-red-500 border-red-500 border px-3 py-1 rounded-md">
            Batalkan
          </button>
          <button className="bg-primary text-white px-3 py-1 rounded-md">
            Simpan Data
          </button>
        </div>
      </div>
    </PageContainerDashboard>
  );
};

export default Pengaturan;
