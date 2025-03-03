import { Link, useNavigate } from "react-router-dom";
import Logo from "../../../../assets/logo.png";
const LoginWarga = () => {
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate("/checkout/081234567890");
  };
  return (
    <div className="w-full h-screen">
      <div className="flex justify-center min-h-[800px] max-w-[430px] mx-auto bg-white p-4 md:shadow-2xl ">
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
                // inputMode="numeric"
                className="border border-gray-300 rounded-md p-2 mt-2 outline-primary"
                placeholder="Nomor Telepon"
              />
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
              to="/daftar-warga"
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
