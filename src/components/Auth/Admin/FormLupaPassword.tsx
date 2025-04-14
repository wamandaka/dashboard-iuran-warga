import { useAtom } from "jotai";
import {
  emailAtom,
  errorAtom,
  isLupaPasswordAtom,
} from "../../../atoms/authAtoms";
import logo from "../../../assets/logo.png";
import { useEffect, useRef, useState } from "react";
import { HiEye, HiEyeOff } from "react-icons/hi";

const FormLupaPassword = ({ onBackToLogin }: { onBackToLogin: () => void }) => {
  const [email, setEmail] = useAtom(emailAtom);
  const [error] = useAtom(errorAtom);
  const [isLupaPassword] = useAtom(isLupaPasswordAtom);
  const [currentStep, setCurrentStep] = useState<string>(
    localStorage.getItem("currentStep") || "inputEmail" // Ambil langkah terakhir dari localStorage
  );
  const [otp, setOtp] = useState<string[]>(["", "", "", ""]); // State untuk OTP
  const inputRefs = useRef<HTMLInputElement[]>([]); // Referensi untuk input OTP
  const [showPassword, setShowPassword] = useState(false); // State untuk menampilkan kata sandi
  const [showConfirmPassword, setShowConfirmPassword] = useState(false); // State untuk menampilkan konfirmasi kata sandi
  const [resendTimer, setResendTimer] = useState<number>(60); // Timer untuk kirim ulang kode

  // Simpan langkah saat ini ke localStorage setiap kali currentStep berubah
  useEffect(() => {
    localStorage.setItem("currentStep", currentStep);
  }, [currentStep]);

  // Timer untuk kirim ulang kode
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (resendTimer > 0) {
      timer = setInterval(() => {
        setResendTimer((prev) => prev - 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [resendTimer]);

  const handleNextStep = () => {
    if (currentStep === "inputEmail") {
      setCurrentStep("inputOTP");
    } else if (currentStep === "inputOTP") {
      setCurrentStep("inputPassword");
    }
  };

  const handlePreviousStep = () => {
    if (currentStep === "inputOTP") {
      setCurrentStep("inputEmail");
    } else if (currentStep === "inputPassword") {
      setCurrentStep("inputOTP");
    }
  };

  const handleOtpChange = (value: string, index: number) => {
    if (!/^\d*$/.test(value)) return; // Hanya izinkan angka
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Pindah ke input berikutnya jika ada angka yang dimasukkan
    if (value && index < 3) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleOtpKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus(); // Pindah ke input sebelumnya jika Backspace ditekan
    }
  };
  const handleResendCode = () => {
    // Logika untuk mengirim ulang kode OTP
    console.log("Kode OTP dikirim ulang ke:", email);
    setResendTimer(60); // Reset timer ke 60 detik
  };

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
        {currentStep === "inputEmail" && (
          <>
            <h1 className="text-2xl font-bold sm:text-3xl">Lupa kata sandi?</h1>

            <p className="mt-3 text-gray-500 lg:w-md">
              Jangan khawatir kita akan mengirimkan instruksi untuk merubah kata
              sandi anda.
            </p>
          </>
        )}
        {currentStep === "inputOTP" && (
          <>
            <h1 className="text-2xl font-bold sm:text-3xl">
              Pengaturan Kata Sandi
            </h1>

            <p className="mt-3 text-gray-500 lg:w-md">
              Kami mengirimkan kode ke{" "}
              <span className="font-semibold text-black">{email}</span>
            </p>
          </>
        )}
        {currentStep === "inputPassword" && (
          <>
            <h1 className="text-2xl font-bold sm:text-3xl">
              Atur Ulang Kata Sandi
            </h1>

            <p className="mt-3 text-gray-500 lg:w-md">
              Silahkan atur ulang kata sandi anda dengan minimal 8 karakter
            </p>
          </>
        )}
      </div>
      <div>
        {error && (
          <p className="text-red-500 w-full text-center bg-red-100 py-2">
            {error}
          </p>
        )}
      </div>
      <form
        action="#"
        className="mx-auto mt-8 mb-0 max-w-md space-y-4"
        onSubmit={(e) => e.preventDefault()}
      >
        {currentStep === "inputEmail" && (
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
            </div>
          </div>
        )}

        {currentStep === "inputOTP" && (
          <div>
            <label htmlFor="otp" className="font-semibold">
              Masukkan Kode OTP
            </label>

            <div className="flex justify-between gap-2 mt-2">
              {otp.map((digit, index) => (
                <input
                  key={index}
                  type="text"
                  value={digit}
                  onChange={(e) => handleOtpChange(e.target.value, index)}
                  onKeyDown={(e) => handleOtpKeyDown(e, index)}
                  ref={(el) => {
                    inputRefs.current[index] = el!;
                  }}
                  // placeholder="-"
                  maxLength={1}
                  className="w-16 h-16 text-center text-lg font-semibold border border-gray-300 rounded-lg focus:outline-primary"
                />
              ))}
            </div>
          </div>
        )}

        {currentStep === "inputPassword" && (
          <div>
            <label htmlFor="password" className="font-semibold">
              Kata Sandi
            </label>

            <div className="relative mb-3">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm border mt-1 focus:outline-primary"
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

            <label htmlFor="konfirmasiPassword" className="font-semibold">
              Konfirmasi Kata Sandi
            </label>

            <div className="relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                id="konfirmasiPassword"
                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm border mt-1 focus:outline-primary"
                placeholder="Masukan ulang kata sandi anda"
              />
              <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                {showConfirmPassword ? (
                  <HiEyeOff
                    size={20}
                    className="cursor-pointer text-gray-400"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  />
                ) : (
                  <HiEye
                    size={20}
                    className="cursor-pointer text-gray-400"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  />
                )}
              </span>
            </div>
          </div>
        )}

        <div className="flex flex-col items-center justify-between gap-3">
          {currentStep !== "inputPassword" && (
            <button
              type="button"
              onClick={handleNextStep}
              className="inline-block rounded-lg bg-primary px-5 py-3 text-sm font-medium text-white w-full cursor-pointer"
            >
              {currentStep === "inputEmail"
                ? "Kirim OTP"
                : "Lanjutkan ke Kata Sandi"}
            </button>
          )}

          {currentStep === "inputOTP" && (
            <div className="flex items-center gap-1">
              <span>Tidak mendapatkan email?</span>
              {resendTimer > 0 ? (
                <p className="text-sm text-gray-500">
                  Kirim ulang kode dalam {resendTimer} detik
                </p>
              ) : (
                <button
                  type="button"
                  onClick={handleResendCode}
                  className="text-sm text-primary font-semibold underline cursor-pointer"
                >
                  Kirim Ulang
                </button>
              )}
            </div>
          )}

          {currentStep === "inputPassword" && (
            <button
              type="submit"
              className="inline-block rounded-lg bg-primary px-5 py-3 text-sm font-medium text-white w-full cursor-pointer"
            >
              Atur ulang kata sandi
            </button>
          )}

          <button
            type="button"
            onClick={
              currentStep === "inputEmail" ? onBackToLogin : handlePreviousStep
            }
            className="text-sm text-gray-500 cursor-pointer"
          >
            {currentStep === "inputEmail"
              ? "Kembali untuk masuk"
              : "Kembali ke langkah sebelumnya"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormLupaPassword;
