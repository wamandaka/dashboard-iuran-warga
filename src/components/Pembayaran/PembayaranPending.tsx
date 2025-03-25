import { Link } from "react-router-dom";
import PageContainer from "../../components/PageContainer";
import { HiChevronLeft } from "react-icons/hi2";
import logoBarcode from "@/assets/qrcode.png";
const PembayaranPending = ({ nohp }: { nohp: number }) => {
  return (
    <div className="md:flex md:justify-center md:items-center w-full h-screen">
      <PageContainer>
        <div className="flex flex-col w-full md:w-[430px]">
          <div className="w-full bg-primary text-white p-4 flex items-center gap-3 md:rounded-t-2xl">
            <Link to={`/checkout/${nohp}`}>
              <HiChevronLeft size={20} />
            </Link>
            <p className="font-semibold">Pembayaran</p>
          </div>

          <div className="pt-4 px-4 bg-white h-full">
            <div className="flex flex-col items-center">
              <img src={logoBarcode} alt="" />
              <button className="text-sm text-white my-2 cursor-pointer bg-blue-500 py-2 px-4 rounded-lg">
                Download QRCODE
              </button>
            </div>
            <p className="text-sm text-center my-1">
              Selesaikan pembayaran dalam{" "}
              <span className="text-primary">4:20</span>
            </p>
            <div className="w-full mt-7 flex flex-col gap-3 text-sm">
              <div className="flex justify-between">
                <p className="text-gray-500">Nama Lengkap</p>
                <p className="font-semibold">Nanda Syaisarrani Rahanda</p>
              </div>
              <div className="flex justify-between">
                <p className="text-gray-500">No Hp</p>
                <p className="font-semibold">08123456789</p>
              </div>
              <div className="flex justify-between">
                <p className="text-gray-500">Biaya Kebersihan</p>
                <p className="font-semibold">Rp100.000</p>
              </div>
              <div className="flex justify-between">
                <p className="text-gray-500">Biaya Keamanan</p>
                <p className="font-semibold">Rp100.000</p>
              </div>
              <div className="flex justify-between">
                <p className="text-gray-500">Infaq</p>
                <p className="font-semibold">Rp100.000</p>
              </div>
              <div className="flex justify-between">
                <p className="text-gray-500">Fee Qris</p>
                <p className="font-semibold">Rp1.000</p>
              </div>
              <div className="flex justify-between border-t pt-5 border-slate-300">
                <p className="text-gray-500">Total</p>
                <p className="font-semibold text-lg">Rp301.000</p>
              </div>
            </div>
          </div>
          <div className="w-full bg-white p-4 absolute bottom-0 md:rounded-b-2xl">
            <button className="bg-primary text-white py-2 rounded-md w-full cursor-pointer">
              Selesai
            </button>
          </div>
        </div>
      </PageContainer>
    </div>
  );
};

export default PembayaranPending;
