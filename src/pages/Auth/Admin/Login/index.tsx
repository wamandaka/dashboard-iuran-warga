import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import ImgLogin from "@/assets/img-login.png";
import logger from "../../../../utils/logger";
import FormLupaPassword from "../../../../components/Auth/Admin/FormLupaPassword";
import {
  errorAtom,
  isLupaPasswordAtom,
  passwordAtom,
  emailAtom,
} from "../../../../atoms/authAtoms";
import { useAtom, useAtomValue, useSetAtom } from "jotai";
import FormLogin from "../../../../components/Auth/Admin/FormLogin";

const users = [
  {
    id: 1,
    name: "Admin User",
    email: "admin@gmail.com",
    password: "123123",
    role: "admin",
  },
  {
    id: 2,
    name: "Finance User",
    email: "finance@gmail.com",
    password: "123123",
    role: "finance",
  },
  {
    id: 3,
    name: "Operator User",
    email: "operator@gmail.com",
    password: "123123",
    role: "operator",
  },
];

const LoginDashboard = () => {
  const [isLupaPassword, setIsLupaPassword] = useAtom(isLupaPasswordAtom);
  const [animating, setAnimating] = useState(false);
  const username = useAtomValue(emailAtom);
  const password = useAtomValue(passwordAtom);
  const setError = useSetAtom(errorAtom);
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  // Cek token dan redirect ke dashboard jika sudah login
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/dsb");
    }
  }, [navigate]);

  // Periksa parameter URL untuk lupa password dan simpan status di localStorage
  useEffect(() => {
    // Periksa localStorage saat refresh
    const savedLupaPassword = localStorage.getItem("isLupaPassword");
    if (savedLupaPassword === "true") {
      setIsLupaPassword(true);
    }
  }, [searchParams, setIsLupaPassword]);

  // Fungsi untuk mengganti tampilan dengan animasi
  const toggleLupaPassword = (value: boolean) => {
    setAnimating(true);
    setIsLupaPassword(value);

    // Simpan status di localStorage
    if (value) {
      localStorage.setItem("isLupaPassword", "true");
    } else {
      localStorage.removeItem("isLupaPassword");
      localStorage.removeItem("currentStep");
    }
  };

  // Fungsi untuk generate token sederhana
  const generateToken = () => {
    return Math.random().toString(36).substring(2) + Date.now().toString(36);
  };

  const handleLogin = async () => {
    if (!username) {
      setError("Email wajib diisi");
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(username)) {
      setError("Email tidak valid");
      return;
    }
    if (!password) {
      setError("Password wajib diisi");
      return;
    }
    // Cari user berdasarkan email dan password
    const user = users.find(
      (u) => u.email === username && u.password === password
    );

    if (!user) {
      setError("Email atau password tidak valid");
      return;
    }
    setError(""); // Reset error jika login berhasil
    // Generate token
    const token = generateToken();

    // Simpan token dan data user di localStorage
    localStorage.setItem("token", token);
    localStorage.setItem("user", JSON.stringify(user));

    // Tampilkan pesan sukses
    toast.success("Login berhasil");
    logger.info("Login berhasil", user);

    if (user.role === "admin" || user.role === "operator") {
      // Redirect ke dashboard setelah 2 detik
      setTimeout(() => {
        // navigate("/dsb");
        window.location.href = "/dsb";
      }, 2000);
    } else if (user.role === "finance") {
      // Redirect ke dashboard setelah 2 detik
      setTimeout(() => {
        // navigate("/dsb/trsksi");
        window.location.href = "/dsb/trsksi";
      }, 2000);
    }
  };

  return (
    <>
      <section className="relative flex flex-wrap h-screen items-center">
        {/* gambar */}
        <div
          className={`relative hidden lg:block h-64 w-full sm:h-96 lg:h-full lg:w-1/2 p-10 z-50 ${
            animating ? "duration-300" : ""
          } ${isLupaPassword ? "lg:translate-x-full" : "lg:translate-x-0"}`}
          onTransitionEnd={() => setAnimating(false)}
        >
          <img
            alt=""
            src={ImgLogin}
            className="inset-0 h-full w-full object-cover rounded-md"
          />
        </div>

        {isLupaPassword ? (
          <FormLupaPassword onBackToLogin={() => toggleLupaPassword(false)} />
        ) : (
          <FormLogin
            onLogin={handleLogin}
            onForgotPassword={() => toggleLupaPassword(true)}
          />
        )}

        <ToastContainer position="top-right" autoClose={2000} hideProgressBar />
      </section>
    </>
  );
};

export default LoginDashboard;
