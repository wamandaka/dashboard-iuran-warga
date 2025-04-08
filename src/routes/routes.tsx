import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../layouts/Layout";
import DataWarga from "../pages/DataWarga";
import Transaksi from "../pages/Transaksi";
import Profil from "../pages/Profil";
import Pengaturan from "../pages/Pengaturan";
import Dashboard from "../pages/Dashboard";
import LoginDashboard from "../pages/Auth/Admin/Login";
import LoginWarga from "../pages/Auth/Warga/Login";
import Checkout from "../pages/Checkout";
import Pembayaran from "../pages/Pembayaran";
import RiwayatPembayaran from "../pages/RiwayatPembayaran";
import NotFoundPage from "../components/NotFoundPage";
import Penarikan from "../pages/Penarikan";
import ListUser from "../pages/ListUser";
import RegisterDashboard from "../pages/Auth/Admin/Register";

const AppRoutes = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginWarga />} />
          <Route path="/checkout/:nohp" element={<Checkout />} />
          <Route path="/pembayaran/:nohp" element={<Pembayaran />} />
          <Route path="/info-warga" element={<RiwayatPembayaran />} />
          <Route path="/lgdsb" element={<LoginDashboard />} />
          <Route path="/dftr" element={<RegisterDashboard />} />
          <Route path="/dsb" element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="dw" element={<DataWarga />} />
            <Route path="trsksi" element={<Transaksi />} />
            <Route path="prfl" element={<Profil />} />
            <Route path="pgtrn" element={<Pengaturan />} />
            <Route path="pnrkan" element={<Penarikan />} />
            <Route path="lusr" element={<ListUser />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default AppRoutes;
