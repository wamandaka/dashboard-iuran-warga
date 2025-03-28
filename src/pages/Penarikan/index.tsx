import { useEffect, useState } from "react";
import PageContainerDashboard from "../../components/PageContainerDashboard";
import { HiCloudArrowUp } from "react-icons/hi2";
import { toast, ToastContainer } from "react-toastify";
import Select from "react-select";
import { useAtom } from "jotai";
import { userRoleAtom } from "../../atoms/authAtoms";

const Penarikan = () => {
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [role] = useAtom(userRoleAtom);

  useEffect(() => {
    document.title = "Penarikan";
  }, []);

  useEffect(() => {
    if (role !== "finance") {
      window.location.href = "/dsb";
    }
  }, [role]);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files ? event.target.files[0] : null;

    if (selectedFile) {
      // Validasi tipe file
      const validTypes = ["image/jpeg", "image/png"];
      if (!validTypes.includes(selectedFile.type)) {
        toast.warn("Format file tidak didukung! Hanya JPG dan PNG.");
        return;
      }

      // Validasi ukuran file (maks 5MB)
      if (selectedFile.size > 5 * 1024 * 1024) {
        toast.warn("Ukuran file terlalu besar! Maksimum 5MB.");
        return;
      }

      setFile(selectedFile);

      // Buat URL preview gambar
      const fileURL = URL.createObjectURL(selectedFile);
      setPreview(fileURL);
    }
  };
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];
  return (
    <div>
      <PageContainerDashboard>
        <div className="p-4 bg-white rounded-t-md border-b border-slate-300 shadow-md mt-14">
          <div className="w-full flex flex-col md:flex-row md:justify-between md:items-center gap-3">
            <div>
              <p className="text-2xl font-semibold">Penarikan</p>
              <p className="text-sm text-slate-400">
                Lorem ipsum dolor sit amet
              </p>
            </div>
          </div>
        </div>
        <div className="w-full p-4 bg-white space-y-3">
          <div className="flex flex-col w-full gap-1">
            <label htmlFor="NamaOrganisasi" className="font-medium">
              Nama Organisasi
            </label>
            <Select
              className="basic-single"
              classNamePrefix="select"
              placeholder="Pilih nama organisasi"
              // defaultValue={options[0]}
              // isDisabled={isDisabled}
              // isLoading={isLoading}
              isClearable={true}
              // isRtl={isRtl}
              isSearchable={true}
              name="color"
              options={options}
            />
          </div>
          <div className="flex flex-col w-full gap-1">
            <label htmlFor="Balance" className="font-medium">
              Balance
            </label>
            <input
              disabled
              placeholder="Rp"
              id="Balance"
              name="Balance"
              type="number"
              className="outline-none border border-gray-300 rounded-md p-2 w-full flex bg-gray-200"
            />
          </div>
          <div className="flex flex-col w-full gap-1">
            <label htmlFor="NominalPenarikan" className="font-medium">
              Nominal Penarikan
            </label>
            <input
              placeholder="Rp"
              id="NominalPenarikan"
              name="NominalPenarikan"
              type="number"
              className="outline-none bg-transparent border border-gray-300 rounded-md p-2 w-full flex"
            />
          </div>
          <div className="flex flex-col w-full gap-1">
            <label htmlFor="NomorRekening" className="font-medium">
              Nomor Rekening
            </label>
            <input
              placeholder="Nomor Rekening"
              id="NomorRekening"
              name="NomorRekening"
              type="number"
              className="outline-none bg-transparent border border-gray-300 rounded-md p-2 w-full flex"
            />
          </div>
          <div className="flex flex-col w-full gap-1">
            <label htmlFor="BuktiPembayaran" className="font-medium">
              Bukti Pembayaran
            </label>
            <div className="border-2 border-dashed border-gray-300 rounded-md w-full mx-auto text-center">
              <label
                htmlFor="file-upload"
                className="cursor-pointer flex flex-col items-center p-6"
              >
                {preview ? (
                  <img
                    src={preview}
                    alt="Preview"
                    className="w-32 h-32 object-cover rounded-md mb-3"
                  />
                ) : (
                  <HiCloudArrowUp size={20} className="text-slate-300" />
                )}
                {file ? (
                  <p className="text-gray-700 mt-2">{file.name}</p>
                ) : (
                  <>
                    <p className="text-gray-500 text-sm">
                      <span className="text-blue-400 font-medium">
                        Pilih file
                      </span>{" "}
                      untuk diunggah
                    </p>
                    <p className="text-gray-400 text-xs mt-1">
                      Format hanya jpg, png (Maks 5MB)
                    </p>
                  </>
                )}
              </label>
              <input
                id="file-upload"
                type="file"
                className="hidden"
                accept="image/jpeg, image/png"
                onChange={handleFileChange}
              />
            </div>
          </div>
        </div>
        <div className="w-full h-0.5 bg-gray-200"></div>
        <div className="w-full bg-white flex justify-between p-4">
          <button className="border border-red-400 px-3 py-1 text-red-500 font-medium rounded-md">
            Batalkan
          </button>
          <button className="bg-primary text-white px-3 py-1 font-medium rounded-md">
            Simpan Data
          </button>
        </div>
        <ToastContainer position="top-right" autoClose={2000} hideProgressBar />
      </PageContainerDashboard>
    </div>
  );
};

export default Penarikan;
