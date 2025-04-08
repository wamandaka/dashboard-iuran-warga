import logo from "../../../../assets/logo.png";
import ImgRegis from "../../../../assets/img-register.png";
import { ToastContainer } from "react-toastify";
import { useState } from "react";
import { HiEye, HiEyeOff } from "react-icons/hi";
const RegisterDashboard = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  return (
    <div>
      <section className="relative flex flex-wrap h-screen items-center">
        <div
          className={`relative hidden lg:block h-64 w-full sm:h-96 lg:h-full lg:w-1/2 p-10 z-50`}
          // onTransitionEnd={() => setAnimating(false)}
        >
          <img
            alt=""
            src={ImgRegis}
            className="inset-0 h-full w-full object-cover rounded-md"
          />
        </div>

        <div className="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-5">
          <div className="mx-auto max-w-lg text-center">
            <div className="flex justify-center items-center mb-10 lg:mb-5">
              <img src={logo} alt="Logo JakMen" className="w-52" />
            </div>
            <h1 className="text-2xl font-bold sm:text-3xl">
              Buat Akun Anda Sekarang!
            </h1>

            <p className="mt-3 text-gray-500">
              Daftar sekarang untuk mendapatkan akses penuh ke semua fitur kami.
            </p>
          </div>
          <div>
            {/* {error && (
            <p className="text-red-500 w-full text-center bg-red-100 py-2">
              {error}
            </p>
          )} */}
          </div>
          <form
            // onSubmit={onLogin}
            action="#"
            className="mx-auto mt-8 mb-0 max-w-lg space-y-4"
          >
            {/* nama */}
            <div>
              <label htmlFor="nama" className="font-semibold">
                Nama
              </label>

              <div className="relative">
                <input
                  type="text"
                  id="nama"
                  // value={username}
                  // onChange={(e) => setUsername(e.target.value)}
                  className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm border mt-1 focus:outline-primary"
                  placeholder="Masukan nama anda"
                />

                <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                  {/* icon */}
                </span>
              </div>
            </div>

            {/* email */}
            <div>
              <label htmlFor="email" className="font-semibold">
                Email
              </label>

              <div className="relative">
                <input
                  type="email"
                  id="email"
                  // value={username}
                  // onChange={(e) => setUsername(e.target.value)}
                  className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm border mt-1 focus:outline-primary"
                  placeholder="Masukan email anda"
                />

                <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                  {/* icon */}
                </span>
              </div>
            </div>

            {/* Nomor Telepon */}
            <div>
              <label htmlFor="noTelepon" className="font-semibold">
                Nomor Telepon
              </label>

              <div className="relative">
                <input
                  type="number"
                  id="noTelepon"
                  // value={username}
                  // onChange={(e) => setUsername(e.target.value)}
                  className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm border mt-1 focus:outline-primary"
                  placeholder="Masukan nomor telepon anda"
                />

                <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                  {/* icon */}
                </span>
              </div>
            </div>

            {/* Alamat */}
            <div>
              <label htmlFor="alamat" className="font-semibold">
                Alamat
              </label>

              <div className="relative">
                <input
                  type="text"
                  id="alamat"
                  // value={username}
                  // onChange={(e) => setUsername(e.target.value)}
                  className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm border mt-1 focus:outline-primary"
                  placeholder="Masukan alamat anda"
                />

                <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                  {/* icon */}
                </span>
              </div>
            </div>

            {/* rt rw */}
            <div className="flex w-full gap-3 justify-between">
              {/* rt */}
              <div className="w-full">
                <label htmlFor="rt" className="font-semibold">
                  RT
                </label>

                <div className="relative">
                  <input
                    type="number"
                    id="rt"
                    // value={username}
                    // onChange={(e) => setUsername(e.target.value)}
                    className="w-full rounded-lg border-gray-200 p-4 text-sm border mt-1 focus:outline-primary"
                    placeholder="Masukan RT anda"
                  />
                </div>
              </div>

              {/* rw */}
              <div className="w-full">
                <label htmlFor="rw" className="font-semibold">
                  RW
                </label>

                <div className="relative">
                  <input
                    type="number"
                    id="rw"
                    // value={username}
                    // onChange={(e) => setUsername(e.target.value)}
                    className="w-full rounded-lg border-gray-200 p-4 text-sm border mt-1 focus:outline-primary"
                    placeholder="Masukan RW anda"
                  />
                </div>
              </div>
            </div>

            {/* kata sandi */}
            <div>
              <label htmlFor="password" className="font-semibold">
                Kata sandi
              </label>

              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  // value={password}
                  // onChange={(e) => setPassword(e.target.value)}
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
            </div>

            {/* konfirmasi kata sandi */}
            <div>
              <label htmlFor="confirmPassword" className="font-semibold">
                Konfirmasi Kata sandi
              </label>

              <div className="relative">
                <input
                  id="confirmPassword"
                  type={showConfirmPassword ? "text" : "password"}
                  // value={password}
                  // onChange={(e) => setPassword(e.target.value)}
                  className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm border my-1 focus:outline-primary"
                  placeholder="Konfirmasi kata sandi anda"
                />

                <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                  {showConfirmPassword ? (
                    <HiEyeOff
                      size={20}
                      className="cursor-pointer text-gray-400"
                      onClick={() =>
                        setShowConfirmPassword(!showConfirmPassword)
                      }
                    />
                  ) : (
                    <HiEye
                      size={20}
                      className="cursor-pointer text-gray-400"
                      onClick={() =>
                        setShowConfirmPassword(!showConfirmPassword)
                      }
                    />
                  )}
                </span>
              </div>
            </div>

            <div className="flex items-center justify-between">
              {/* <p className="text-sm text-gray-500">
                No account?
                <a className="underline" href="#">
                  Sign up
                </a>
              </p> */}

              <button
                type="submit"
                className="inline-block rounded-lg bg-primary px-5 py-3 mt-5 text-sm font-medium text-white w-full cursor-pointer"
              >
                Daftar Sekarang
              </button>
            </div>
          </form>
        </div>
        <ToastContainer position="top-right" autoClose={2000} hideProgressBar />
      </section>
    </div>
  );
};

export default RegisterDashboard;
