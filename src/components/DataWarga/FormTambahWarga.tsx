import { HiChevronLeft, HiOutlineCheckCircle } from "react-icons/hi2";
import { Warga } from "../../types/warga";

const FormTambahWarga = ({
  tambahWarga,
  handleInputChange,
  newWarga,
  onCancel,
  isEdit,
  showModalSuccessAddData,
  // setShowModalSuccessAddData,
  setShowForm,
}: {
  tambahWarga: (e: React.FormEvent) => void;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  newWarga: Warga;
  onCancel: () => void;
  isEdit: boolean;
  showModalSuccessAddData: boolean;
  // setShowModalSuccessAddData: React.Dispatch<React.SetStateAction<boolean>>;
  setShowForm: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <div>
      {/* Form Tambah Warga */}
      <div className="p-4 bg-white rounded-t-md border-b border-slate-300 shadow-md mt-14">
        <div className="w-full flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span>
              <HiChevronLeft className="cursor-pointer" onClick={onCancel} />
            </span>
            <p className="text-2xl font-semibold">
              {isEdit ? "Tambah Data Warga" : "Ubah Data Warga"}
            </p>
          </div>
        </div>
        <form
          onSubmit={tambahWarga}
          className="bg-white py-4 rounded-b-md flex flex-col gap-2"
        >
          <div className="flex flex-col md:flex-row w-full gap-2 md:gap-5">
            <div className="flex flex-col gap-2 md:w-1/2">
              <label htmlFor="nama">Nama Warga</label>
              <input
                type="text"
                id="nama"
                placeholder="Masukan Nama"
                className="outline-none bg-transparent border border-gray-300 rounded-md py-2 px-3 w-full"
                required
                value={newWarga.nama}
                onChange={handleInputChange}
              />
            </div>
            <div className="flex flex-col gap-2 md:w-1/2">
              <label htmlFor="alamat">Alamat</label>
              <input
                type="text"
                id="alamat"
                placeholder="Masukan Alamat"
                required
                value={newWarga.alamat}
                onChange={handleInputChange}
                className="outline-none bg-transparent border border-gray-300 rounded-md py-2 px-3 w-full"
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row w-full gap-2 md:gap-5">
            <div className="flex flex-col gap-2 md:w-1/2">
              <label htmlFor="noHp">No. Hp</label>
              <input
                type="number"
                id="noHp"
                placeholder="Masukan No. HP"
                required
                value={newWarga.noHp}
                onChange={handleInputChange}
                className="outline-none bg-transparent border border-gray-300 rounded-md py-2 px-3 w-full"
              />
            </div>
            <div className="flex flex-col gap-2 md:w-1/2">
              <label htmlFor="noKK">No. Kartu Keluarga</label>
              <input
                type="number"
                id="noKK"
                placeholder="Masukan No. KK"
                required
                value={newWarga.noKK}
                onChange={handleInputChange}
                className="outline-none bg-transparent border border-gray-300 rounded-md py-2 px-3 w-full"
              />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="biayaKebersihan">Biaya Kebersihan</label>
            <input
              type="number"
              id="biayaKebersihan"
              placeholder="Masukan Biaya Kebersihan"
              value={newWarga.biayaKebersihan}
              onChange={handleInputChange}
              className="outline-none bg-transparent border border-gray-300 rounded-md py-2 px-3 w-full"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="biayaKeamanan">Biaya Keamanan</label>
            <input
              type="number"
              id="biayaKeamanan"
              placeholder="Masukan Biaya Keamanan"
              value={newWarga.biayaKeamanan}
              onChange={handleInputChange}
              className="outline-none bg-transparent border border-gray-300 rounded-md py-2 px-3 w-full"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="infaq">Infaq</label>
            <input
              type="number"
              id="infaq"
              placeholder="Masukan Infaq"
              value={newWarga.infaq}
              onChange={handleInputChange}
              className="outline-none bg-transparent border border-gray-300 rounded-md py-2 px-3 w-full"
            />
          </div>

          <div className="flex items-center justify-between mt-3 w-full gap-3">
            <button
              onClick={onCancel}
              className="border border-red-500 text-red-500 px-4 py-2 rounded-md cursor-pointer w-1/2 md:w-1/8 hover:bg-red-500/10"
            >
              Batalkan
            </button>
            <button
              type="submit"
              className="bg-primary text-white px-4 py-2 rounded-md cursor-pointer w-1/2 md:w-1/8 hover:bg-primary/90"
            >
              {isEdit ? "Tambah data" : "Simpan data"}
            </button>
          </div>
        </form>
      </div>
      {/* Modal Success Add Data */}
      {showModalSuccessAddData && (
        <div className="w-full h-screen flex justify-center items-center bg-black/30 absolute top-0 left-0 z-50">
          <div className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 fixed">
            <div className="w-sm bg-white rounded-md p-4">
              <div className="flex my-3">
                <span className="text-green-400 mr-3">
                  <HiOutlineCheckCircle size={30} />
                </span>
                <div>
                  <p className="text-lg font-semibold">
                    Data Warga Berhasil {isEdit ? "Ditambahkan" : "Diubah"}
                  </p>
                  <p className="text-gray-500 text-sm mt-2">
                    Anda telah berhasil {isEdit ? "menambahkan" : "mengubah"}{" "}
                    data warga. Klik ‘kembali ke beranda’ untuk melanjutkan
                  </p>
                  <div className="flex justify-end">
                    <button
                      onClick={() => setShowForm(false)}
                      className="text-primary rounded-md cursor-pointer mt-4 font-medium"
                    >
                      Kembali ke Beranda
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FormTambahWarga;
