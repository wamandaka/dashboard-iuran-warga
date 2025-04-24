import { useAtom } from "jotai";
import { emailAtom, passwordAtom, errorAtom } from "../../../atoms/authAtoms";
import { HiEye, HiEyeOff } from "react-icons/hi";
import { useState } from "react";
import logo from "../../../assets/logo.png";
// import { useNavigate } from "react-router-dom";

const FormLogin = ({
  onLogin,
  onForgotPassword,
}: {
  onLogin: () => void;
  onForgotPassword: () => void;
}) => {
  const [username, setUsername] = useAtom(emailAtom);
  const [password, setPassword] = useAtom(passwordAtom);
  const [error] = useAtom(errorAtom);
  const [showPassword, setShowPassword] = useState(false);
  // const [, setIsLupaPassword] = useAtom(isLupaPasswordAtom);
  // const navigate = useNavigate();

  // const handleLupaPassword = () => {
  //   navigate("/lgdsb?lks=true");
  //   setIsLupaPassword(true);
  // };

  return (
    <div className="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-lg text-center">
        <div className="flex justify-center items-center mb-10">
          <img src={logo} alt="Logo JakMen" className="w-52" />
        </div>
        <h1 className="text-2xl font-bold sm:text-3xl">Selamat Datang!</h1>

        <p className="mt-3 text-gray-500">Silakan masuk ke akun JakMen-mu</p>
      </div>
      <div>
        {error && (
          <p className="text-red-500 w-full text-center bg-red-100 py-2">
            {error}
          </p>
        )}
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onLogin();
        }}
        className="mx-auto mt-8 mb-0 max-w-md space-y-4"
      >
        <div>
          <label htmlFor="email" className="font-semibold">
            Alamat Email
          </label>

          <div className="relative">
            <input
              type="email"
              id="email"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm border mt-1 focus:outline-primary"
              placeholder="Masukan alamat email anda"
            />

            <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
              {/* icon */}
            </span>
          </div>
        </div>

        <div>
          <label htmlFor="password" className="font-semibold">
            Kata sandi
          </label>

          <div className="relative">
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm border my-1 focus:outline-primary"
              placeholder="Masukan kata sandi anda"
            />

            <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
              {showPassword ? (
                <HiEyeOff
                  size={20}
                  className="cursor-pointer text-gray-400"
                  onClick={() => setShowPassword(!showPassword)}
                />
              ) : (
                <HiEye
                  size={20}
                  className="cursor-pointer text-gray-400"
                  onClick={() => setShowPassword(!showPassword)}
                />
              )}
            </span>
          </div>
          <div className="flex justify-end">
            <button
              // onClick={onForgotPassword}
              onMouseDown={onForgotPassword}
              className="text-primary font-semibold cursor-pointer"
            >
              Lupa kata sandi?
            </button>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="inline-block rounded-lg bg-primary px-5 py-3 text-sm font-medium text-white w-full cursor-pointer"
          >
            Masuk
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormLogin;
