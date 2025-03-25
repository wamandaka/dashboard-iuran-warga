import { Link, useNavigate } from "react-router-dom";
import Logo from "../../../../assets/logo.png";
import { useState } from "react";
const LoginWarga = () => {
  const [nomorTelepon, setNomorTelepon] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const validateNomorTelepon = (nomor: string) => {
    if (!nomor) {
      return "Nomor Telepon tidak boleh kosong";
    }
    if (nomor.length < 10 || nomor.length > 13) {
      return "Nomor Telepon harus antara 10 hingga 13 digit";
    }
    if (!/^\d+$/.test(nomor)) {
      return "Nomor Telepon hanya boleh mengandung angka";
    }
    return "";
  };

  const handleLogin = () => {
    const validationError = validateNomorTelepon(nomorTelepon);
    if (validationError) {
      setError(validationError);
      return;
    }
    setError("");
    navigate(`/checkout/${nomorTelepon}`);
  };
  return (
    <div className="md:w-full md:h-screen md:flex md:justify-center md:items-center">
      <div className="flex justify-center md:min-h-[768px] max-w-[430px] mx-auto bg-white p-4 md:shadow-2xl rounded-2xl">
        <div className="flex flex-col pt-20">
          <div className="flex flex-col items-center">
            <img src={Logo} alt="Logo" className="w-56" />
            <p className="font-[600] text-center mt-6 px-5">
              Pelayanan Pengelolaan Lingkungan RT07/RW03. Kel Kelapa Dua. Kec
              Kebon Jeruk. Jakarta Barat
            </p>
          </div>

          <div className="flex flex-col mt-20">
            <div className="flex flex-col w-full">
              <label htmlFor="nomorTelepon" className="font-semibold">
                Nomor Telepon
              </label>
              <input
                id="nomorTelepon"
                type="number"
                value={nomorTelepon}
                onChange={(e) => setNomorTelepon(e.target.value)}
                // inputMode="numeric"
                className="border border-gray-300 rounded-md p-2 mt-2 outline-primary"
                placeholder="Nomor Telepon"
              />
              {error && <p className="text-red-500 text-sm">{error}</p>}
            </div>
          </div>

          <div className="w-full flex flex-col justify-center items-center mt-6">
            <button
              onClick={handleLogin}
              className="bg-primary text-white rounded-md py-2 px-4 w-full cursor-pointer"
            >
              Masuk
            </button>
            <Link
              to="/info-warga"
              className="text-primary font-semibold mt-7 text-sm"
            >
              Info Warga
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginWarga;
