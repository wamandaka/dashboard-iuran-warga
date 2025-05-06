import { useCallback, useEffect, useState } from "react";
import PageContainerDashboard from "../../components/PageContainerDashboard";
import { HiCloudArrowUp } from "react-icons/hi2";
import { toast, ToastContainer } from "react-toastify";
import Select from "react-select";
import { useAtom } from "jotai";
import { userRoleAtom } from "../../atoms/authAtoms";
import { useDropzone } from "react-dropzone";
import logger from "../../utils/logger";

interface FileError {
  code: string;
  message: string;
}

interface FileValidator {
  (file: File): FileError | null;
}

const Penarikan = () => {
  const [showImage, setShowImage] = useState(false);
  const [image, setImage] = useState("");
  const [role] = useAtom(userRoleAtom);

  useEffect(() => {
    document.title = "Penarikan";
  }, []);

  useEffect(() => {
    if (role !== "finance") {
      window.location.href = "/dsb";
    }
  }, [role]);

  const sizeMaximum = 5 * 1024 * 1024; // 5MB
  // custom validator for file size
  const maxSize: FileValidator = (file) => {
    if (file.size > sizeMaximum) {
      toast.error("Ukuran file terlalu besar. Maksimum 5MB.");
      // logger.error("File size exceeds maximum limit:", file.size);
      return {
        code: "file-too-large",
        message: "File size is too large. Maximum 5MB.",
      };
    }
    return null;
  };

  // Validator untuk jumlah file
  // const validateSingleFile: FileValidator = (file) => {
  //   if (file instanceof File) {
  //     toast.error("Hanya satu file yang diperbolehkan.");
  //     return {
  //       code: "too-many-files",
  //       message: "Hanya satu file yang diperbolehkan.",
  //     };
  //   }
  //   return null;
  // };

  const customValidator: FileValidator = (file) => {
    const sizeError = maxSize(file);
    if (sizeError) {
      return sizeError;
    }
    // const singleFileError = validateSingleFile(file);
    // if (singleFileError) {
    //   return singleFileError;
    // }
    return null;
  };

  const onDrop = useCallback((acceptedFiles: File[]) => {
    if (acceptedFiles.length > 1) {
      toast.error("Hanya satu file yang diperbolehkan.");
      return;
    }
    logger.info("Accepted files:", acceptedFiles);
    const file = acceptedFiles[0];
    if (!(file instanceof Blob)) {
      console.error("The dropped file is not a valid Blob.");
      toast.error("File tidak valid.");
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      const binaryStr = reader.result;
      setImage(binaryStr as string);
      setShowImage(true);
      logger.info("File preview URL:", binaryStr);
    };
    reader.readAsDataURL(file);
  }, []);

  const { getRootProps, getInputProps, isDragActive, fileRejections } =
    useDropzone({
      onDrop,
      validator: customValidator,
      // maxFiles: 1,
      accept: {
        "image/*": [".jpeg", ".png", ".jpg"],
      },
    });

  const fileRejectionItems = fileRejections.map(({ file, errors }) => (
    <li key={file.path}>
      {/* {file.path} - {file.size} bytes */}
      <ul className="list-disc list-inside text-sm text-red-400">
        {errors.map((e) => (
          <li key={e.code}>{e.message}</li>
        ))}
      </ul>
    </li>
  ));

  // const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   const selectedFile = event.target.files ? event.target.files[0] : null;

  //   if (selectedFile) {
  //     // Validasi tipe file
  //     const validTypes = ["image/jpeg", "image/png"];
  //     if (!validTypes.includes(selectedFile.type)) {
  //       toast.warn("Format file tidak didukung! Hanya JPG dan PNG.");
  //       return;
  //     }

  //     // Validasi ukuran file (maks 5MB)
  //     if (selectedFile.size > 5 * 1024 * 1024) {
  //       toast.warn("Ukuran file terlalu besar! Maksimum 5MB.");
  //       return;
  //     }

  //     setFile(selectedFile);

  //     // Buat URL preview gambar
  //     const fileURL = URL.createObjectURL(selectedFile);
  //     setPreview(fileURL);
  //   }
  // };
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
        <div className="w-full p-4 bg-white space-y-5">
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
            <div {...getRootProps()}>
              <input {...getInputProps()} />
              {isDragActive ? (
                <p className="w-full bg-slate-100 border border-dashed p-20 rounded-md text-center cursor-pointer animate-pulse">
                  Lepas file untuk mengunggah
                </p>
              ) : (
                <div
                  className={`w-full bg-slate-100 border border-dashed border-gray-400 ${
                    image ? "p-1" : "p-11"
                  } rounded-md text-center cursor-pointer flex flex-col items-center`}
                >
                  {showImage ? (
                    <img
                      src={image}
                      alt="preview"
                      className="w-32 h-auto my-5 border border-gray-300 rounded-md"
                    />
                  ) : (
                    <>
                      <HiCloudArrowUp
                        size={24}
                        className="text-gray-300 mb-3"
                      />
                      <p>
                        <span className="text-primary font-semibold">
                          Pilih File
                        </span>{" "}
                        untuk diunggah
                      </p>
                      <p className="text-gray-500 mt-3">
                        format hanya jpg, jpeg, png (Maks 5MB)
                      </p>
                    </>
                  )}
                </div>
              )}
            </div>
            <ul>{fileRejectionItems}</ul>
            {/* <div className="border-2 border-dashed border-gray-300 rounded-md w-full mx-auto text-center">
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
                      <span className="text-primary font-medium">
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
            </div> */}
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
        <ToastContainer position="top-right" autoClose={4000} />
      </PageContainerDashboard>
    </div>
  );
};

export default Penarikan;
