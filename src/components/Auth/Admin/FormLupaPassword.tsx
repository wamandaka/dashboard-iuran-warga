import { useAtom } from "jotai";
import {
  emailAtom,
  errorAtom,
  isLupaPasswordAtom,
} from "../../../atoms/authAtoms";
import logo from "../../../assets/logo.png";

const FormLupaPassword = ({ onBackToLogin }: { onBackToLogin: () => void }) => {
  const [email, setEmail] = useAtom(emailAtom);
  const [error] = useAtom(errorAtom);
  const [isLupaPassword] = useAtom(isLupaPasswordAtom);
  // const navigate = useNavigate();

  // const handleKembaliKeLogin = () => {
  //   // onBackToLogin();
  //   navigate("/lgdsb");
  //   setIsLupaPassword(false);
  // };

  return (
    <div
      className={`w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24 ${
        isLupaPassword && "lg:-translate-x-full"
      }`}
    >
      <div className="mx-auto max-w-lg text-center flex flex-col items-center">
        <div className="flex justify-center items-center mb-10">
          <img src={logo} alt="Logo JakMen" className="w-52" />
        </div>
        <h1 className="text-2xl font-bold sm:text-3xl">Lupa kata sandi?</h1>

        <p className="mt-3 text-gray-500 lg:w-md">
          Jangan khawatir kita akan mengirimkan instruksi untuk merubah kata
          sandi anda.
        </p>
      </div>
      <div>
        {error && (
          <p className="text-red-500 w-full text-center bg-red-100 py-2">
            {error}
          </p>
        )}
      </div>
      <form
        // onSubmit={handleLogin}
        action="#"
        className="mx-auto mt-8 mb-0 max-w-md space-y-4"
      >
        <div>
          <label htmlFor="email" className="font-semibold">
            Alamat Email
          </label>

          <div className="relative">
            <input
              type="text"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm border mt-1 focus:outline-primary"
              placeholder="Masukan alamat email anda"
            />

            <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
              {/* icon */}
            </span>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-3">
          <button
            type="submit"
            className="inline-block rounded-lg bg-primary px-5 py-3 text-sm font-medium text-white w-full cursor-pointer"
          >
            Atur ulang kata sandi
          </button>
          <button
            onClick={onBackToLogin}
            className="text-sm text-gray-500 cursor-pointer"
          >
            Kembali untuk masuk
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormLupaPassword;
