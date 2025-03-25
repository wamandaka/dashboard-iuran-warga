import PageContainer from "../PageContainer";
import Lottie from "lottie-react";
import PaymentSuccess from "../../assets/success.json";
import { Link } from "react-router-dom";
const PembayaranSuccess = () => {
  return (
    <div className="md:flex md:justify-center md:items-center md:w-full md:h-screen">
      <PageContainer>
        <div className="flex w-full flex-col justify-center items-center mt-20 p-4 md:w-[430px]">
          <Lottie
            animationData={PaymentSuccess}
            loop={true}
            style={{ width: 200, height: 200 }}
          />
          <p className="text-2xl font-medium">Pembayaran Berhasil</p>
          <p className="text-sm text-gray-400">
            Selamat Pembayaran IPL anda berhasil dilakukan.
          </p>
          <div className="flex flex-col w-full gap-4 mt-20">
            <Link
              to={"/"}
              className="flex items-center justify-center bg-primary text-white py-2 rounded-md w-full cursor-pointer"
            >
              Kembali ke Beranda
            </Link>
            <Link
              to={"/info-warga"}
              className="flex justify-center items-center border border-primary text-primary py-2 rounded-md w-full cursor-pointer"
            >
              Cek Info Warga
            </Link>
          </div>
        </div>
      </PageContainer>
    </div>
  );
};

export default PembayaranSuccess;
