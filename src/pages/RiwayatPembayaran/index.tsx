import { Link } from "react-router-dom";
import PageContainer from "../../components/PageContainer";
import { HiChevronLeft } from "react-icons/hi2";
import { useEffect, useState } from "react";
import SudahBayar from "../../components/RiwayatPembayaran/SudahBayar";
import BelumBayar from "../../components/RiwayatPembayaran/BelumBayar";

const RiwayatPembayaran = () => {
  const [selectedTab, setSelectedTab] = useState("sudah-bayar");
  useEffect(() => {
    document.title = "Riwayat Pembayaran";
  }, []);
  return (
    <div className="md:flex md:justify-center md:items-center w-full h-screen">
      <PageContainer>
        <div className="flex flex-col w-full md:w-[430px]">
          <div className="w-full bg-primary text-white p-4 flex items-center gap-3">
            <Link to={"/"}>
              <HiChevronLeft size={20} />
            </Link>
            <p className="font-semibold">Info Warga</p>
          </div>

          <div>
            <div className="border-b border-gray-200">
              <nav className="flex w-full" aria-label="Tabs">
                <button
                  onClick={() => setSelectedTab("sudah-bayar")}
                  className={`shrink-0 border-b-2 border-transparent px-1 py-2 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700 w-1/2 text-center transition ease-in-out duration-300 ${
                    selectedTab === "sudah-bayar" &&
                    "border-primary text-primary border-b-primary border-b-2 transition ease-in-out duration-300 hover:border-primary hover:text-primary"
                  }`}
                >
                  Sudah Bayar
                </button>
                <button
                  onClick={() => setSelectedTab("belum-bayar")}
                  className={`shrink-0 border-b-2 border-transparent px-1 py-2 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700 w-1/2 text-center transition ease-in-out duration-300 ${
                    selectedTab === "belum-bayar" &&
                    "border-primary text-primary border-b-primary border-b-2 transition ease-in-out duration-300 hover:border-primary hover:text-primary"
                  }`}
                >
                  Belum Bayar
                </button>
              </nav>
            </div>
            {selectedTab === "sudah-bayar" && <SudahBayar />}
            {selectedTab === "belum-bayar" && <BelumBayar />}
          </div>
        </div>
      </PageContainer>
    </div>
  );
};

export default RiwayatPembayaran;
