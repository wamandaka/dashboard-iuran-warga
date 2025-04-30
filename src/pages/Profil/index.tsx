import {
  HiOutlineCheckCircle,
  HiOutlinePencil,
  HiPencilSquare,
} from "react-icons/hi2";
import PageContainerDashboard from "../../components/PageContainerDashboard";
import { useEffect, useRef, useState } from "react";
import { useAtom } from "jotai";
import { userRoleAtom } from "../../atoms/authAtoms";
import ImageCropper from "../../components/Profil/ImageCropper";

const Profil = () => {
  const imgUrl = useRef<string | null>(
    "https://randomuser.me/api/portraits/men/1.jpg"
  );
  const [ubahSandi, setUbahSandi] = useState(false);
  const [ubahData, setUbahData] = useState(false);
  const [role] = useAtom(userRoleAtom);
  const [modalSuccessChangePassword, setModalSuccessChangePassword] =
    useState(false);
  const [image, setImage] = useState<string | null>(imgUrl.current);
  const [showModalCropImage, setShowModalCropImage] = useState<boolean>(false);

  const onImageSelected = (image: string) => {
    setImage(image);
    setShowModalCropImage(true);
  };

  const onCropDone = (croppedImage: string) => {
    setImage(croppedImage);
    setShowModalCropImage(false);
  };

  const onCropCancel = () => {
    setShowModalCropImage(false);
    setImage(imgUrl.current);
  };

  // const handleDelete = () => {
  //   setImage("");
  //   setCurrentPage("");
  // };

  const handleOnCHange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        onImageSelected(reader.result as string);
      };
    }
  };

  // State untuk menyimpan data profil
  const [profilData, setProfilData] = useState({
    nama: "RT 03",
    noHp: "+6281234567890",
    noRek: "1234567890",
    kodePos: "12345",
    alamat: "123 Ang Mo Kio Avenue 3, #08-456, Singapore 567789",
  });

  useEffect(() => {
    document.title = "Profil";
  }, []);

  const handleUbahSandi = () => {
    setUbahSandi(!ubahSandi);
    setModalSuccessChangePassword(true);
  };

  const handleUbahData = () => {
    setUbahData(!ubahData);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProfilData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // const handleSimpanData = () => {
  //   setUbahData(false);
  //   console.log("Data profil disimpan:", profilData);
  //   // Tambahkan logika untuk menyimpan data ke server jika diperlukan
  // };

  return (
    <PageContainerDashboard>
      <div className="p-4 bg-white rounded-md shadow-md mt-14 pb-20  md:h-full">
        <div className="flex flex-col w-full">
          <div className="w-full flex items-center justify-between gap-3">
            <p className="text-lg md:text-xl font-semibold w-1/3 md:w-44">
              Akun Detail
            </p>
            <div className="h-0.5 bg-gray-200 w-1/3 md:w-full"></div>
            <button
              onClick={handleUbahData}
              className="bg-primary text-white rounded-md py-2 px-2 cursor-pointer w-28 flex items-center justify-center gap-1 md:w-52"
            >
              <span>
                <HiOutlinePencil />
              </span>
              <p className="text-sm">
                {ubahData ? "Simpan Data" : "Ubah Data"}
              </p>
            </button>
          </div>

          <div className="flex flex-col md:flex-row mt-5">
            {/* avatar */}
            <div className="w-full flex flex-col items-center md:w-1/3">
              <div className="my-4 flex justify-center items-center w-[100px] h-[100px] md:w-[120px] md:h-[120px] rounded-full overflow-hidden border-2 border-primary">
                <img
                  src={image || ""}
                  alt="Profile Image"
                  className="w-[90px] h-[90px] md:w-[100px] md:h-[100px] object-cover rounded-full"
                />
              </div>
              {/* <p>
                kevin.jpg{" "}
                <span className="text-gray-500 text-sm">(1.275kb)</span>
              </p> */}
              {ubahData && (
                <>
                  <label
                    htmlFor="ubah-foto"
                    className="flex items-center gap-2 text-primary font-medium border border-primary py-2 px-10 rounded-lg mt-2 hover:bg-primary/10 cursor-pointer"
                  >
                    <HiPencilSquare size={20} />
                    Pilih Foto
                  </label>
                  <input
                    type="file"
                    accept="image/jpeg, image/png"
                    id="ubah-foto"
                    className="hidden"
                    onChange={handleOnCHange}
                  />
                </>
              )}
              <button
                onClick={() => setUbahSandi(true)}
                className="text-primary text-sm font-medium mt-2 cursor-pointer"
              >
                Ganti Kata Sandi
              </button>
            </div>

            {/* detail */}
            <div className="w-full p-3 py-5 border border-gray-300 rounded-md mt-3 md:mt-0 md:w-2/3">
              <div className="flex flex-col justify-between gap-3 h-full w-full">
                <div className="flex flex-col md:flex-row md:justify-between w-full gap-3 md:gap-3">
                  <div className="md:w-1/2">
                    <p className="text-gray-400 text-sm font-medium">Nama RT</p>
                    {ubahData ? (
                      <input
                        type="text"
                        name="nama"
                        value={profilData.nama}
                        onChange={handleInputChange}
                        className="border border-gray-300 rounded-md p-2 w-full"
                      />
                    ) : (
                      <p className="font-semibold">{profilData.nama}</p>
                    )}
                  </div>
                  <div className="md:w-1/2">
                    <p className="text-gray-400 text-sm font-medium">
                      Nomor Handphone
                    </p>
                    {ubahData ? (
                      <input
                        type="text"
                        name="noHp"
                        value={profilData.noHp}
                        onChange={handleInputChange}
                        className="border border-gray-300 rounded-md p-2 w-full"
                      />
                    ) : (
                      <p className="font-semibold">{profilData.noHp}</p>
                    )}
                  </div>
                </div>
                <div className="flex flex-col md:flex-row md:justify-between w-full gap-3 md:gap-3">
                  {role === "admin" && (
                    <>
                      <div className="md:w-1/2">
                        <p className="text-gray-400 text-sm font-medium">
                          Nomor Rekening
                        </p>
                        {ubahData ? (
                          <input
                            type="text"
                            name="noRek"
                            value={profilData.noRek}
                            onChange={handleInputChange}
                            className="border border-gray-300 rounded-md p-2 w-full"
                          />
                        ) : (
                          <p className="font-semibold">{profilData.noRek}</p>
                        )}
                      </div>
                      <div className="md:w-1/2">
                        <p className="text-gray-400 text-sm font-medium">
                          Role
                        </p>
                        <p className="font-semibold capitalize">{role}</p>
                      </div>
                    </>
                  )}
                  {role === "operator" && (
                    <>
                      <div className="md:w-1/2">
                        <p className="text-gray-400 text-sm font-medium">
                          Role
                        </p>
                        {ubahData ? (
                          <input
                            type="text"
                            name="role"
                            value={role}
                            className="border border-gray-300 rounded-md p-2 w-full cursor-not-allowed bg-slate-200 capitalize"
                            disabled
                          />
                        ) : (
                          <p className="font-semibold capitalize">{role}</p>
                        )}
                      </div>
                      <div className="md:w-1/2">
                        <p className="text-gray-400 text-sm font-medium">
                          Kode Pos
                        </p>
                        {ubahData ? (
                          <input
                            type="text"
                            name="kodePos"
                            value={profilData.kodePos}
                            onChange={handleInputChange}
                            className="border border-gray-300 rounded-md p-2 w-full"
                          />
                        ) : (
                          <p className="font-semibold">{profilData.kodePos}</p>
                        )}
                      </div>
                    </>
                  )}
                </div>
                {role === "admin" && (
                  <div className="flex flex-col md:flex-row md:justify-between w-full gap-3 md:gap-3">
                    <>
                      <div className="md:w-1/2">
                        <p className="text-gray-400 text-sm font-medium">
                          Kode Pos
                        </p>
                        {ubahData ? (
                          <input
                            type="text"
                            name="kodePos"
                            value={profilData.kodePos}
                            onChange={handleInputChange}
                            className="border border-gray-300 rounded-md p-2 w-full"
                          />
                        ) : (
                          <p className="font-semibold">{profilData.kodePos}</p>
                        )}
                      </div>
                      <div className="md:w-1/2">
                        <p className="text-gray-400 text-sm font-medium">
                          Alamat
                        </p>
                        {ubahData ? (
                          <input
                            type="text"
                            name="alamat"
                            value={profilData.alamat}
                            onChange={handleInputChange}
                            className="border border-gray-300 rounded-md p-2 w-full"
                          />
                        ) : (
                          <p className="font-semibold">{profilData.alamat}</p>
                        )}
                      </div>
                    </>
                  </div>
                )}
                {role === "operator" && (
                  <div className="flex flex-col md:flex-row md:justify-between w-full gap-3 md:gap-3">
                    <>
                      <div className="w-full">
                        <p className="text-gray-400 text-sm font-medium">
                          Alamat
                        </p>
                        {ubahData ? (
                          <input
                            type="text"
                            name="alamat"
                            value={profilData.alamat}
                            onChange={handleInputChange}
                            className="border border-gray-300 rounded-md p-2 w-full"
                          />
                        ) : (
                          <p className="font-semibold">{profilData.alamat}</p>
                        )}
                      </div>
                    </>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {ubahSandi && (
        <>
          <div
            onClick={() => setUbahSandi(false)}
            className="w-full h-screen flex justify-center items-center bg-black/30 absolute top-0 left-0 z-50"
          ></div>
          <div className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 fixed">
            <div className="w-sm md:w-lg bg-white rounded-md">
              {/* header */}
              <div className="w-full p-4 flex items-center justify-between">
                <p className="text-lg font-semibold">Ganti Kata Sandi</p>
                <button
                  onClick={() => setUbahSandi(false)}
                  className="text-gray-500 text-2xl cursor-pointer"
                >
                  &times;
                </button>
              </div>
              <div className="w-full h-0.5 bg-gray-200"></div>
              {/* form */}
              <form onSubmit={handleUbahSandi} action="">
                <div className="p-4">
                  <div className="flex flex-col">
                    <label
                      htmlFor="password"
                      className="text-sm font-medium mb-1"
                    >
                      Kata Sandi Lama
                    </label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      className="border border-gray-300 rounded-md p-2 outline-none"
                    />
                  </div>
                  <div className="flex flex-col mt-3">
                    <label
                      htmlFor="password"
                      className="text-sm font-medium mb-1"
                    >
                      Kata Sandi Baru
                    </label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      className="border border-gray-300 rounded-md p-2 outline-none"
                    />
                  </div>
                  <div className="flex flex-col mt-3">
                    <label
                      htmlFor="password"
                      className="text-sm font-medium mb-1"
                    >
                      Konfirmasi Kata Sandi Baru
                    </label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      className="border border-gray-300 rounded-md p-2 outline-none"
                    />
                  </div>
                </div>
                <div className="w-full flex justify-end p-4 gap-5">
                  <button
                    onClick={() => setUbahSandi(false)}
                    className="text-red-500 cursor-pointer"
                  >
                    Batalkan
                  </button>
                  <button className="bg-primary text-white px-5 py-2 rounded-md cursor-pointer">
                    Ubah Kata Sandi
                  </button>
                </div>
              </form>
            </div>
          </div>
        </>
      )}

      {modalSuccessChangePassword && (
        <div className="w-full h-screen flex justify-center items-center bg-black/30 absolute top-0 left-0 z-50">
          <div className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 fixed">
            <div className="w-sm bg-white rounded-md p-4">
              <div className="flex my-3">
                <span className="text-green-400 mx-3">
                  <HiOutlineCheckCircle size={30} />
                </span>
                <div>
                  <p className="text-lg font-semibold">
                    Kata Sandi Anda Berhasil Diubah!
                  </p>
                  <p className="text-gray-500 text-sm mt-2">
                    Kata sandi anda telah berhasil diubah klik ‘kembali ke
                    beranda’ untuk melanjutkan
                  </p>
                  <div className="flex justify-end">
                    <button
                      onClick={() => setModalSuccessChangePassword(false)}
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

      {showModalCropImage && (
        <>
          <ImageCropper
            image={image || ""}
            onCropCancel={onCropCancel}
            onCropDone={onCropDone}
          />
        </>
      )}
    </PageContainerDashboard>
  );
};

export default Profil;
