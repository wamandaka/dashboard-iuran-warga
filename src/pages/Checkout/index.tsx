import { useState } from "react";
import { HiChevronLeft } from "react-icons/hi2";
import { Link, useNavigate, useParams } from "react-router-dom";
import PageContainer from "../../components/PageContainer";

const Checkout = () => {
  const [infaq, setInfaq] = useState("");
  const { nohp } = useParams();
  const navigate = useNavigate();
  const handleCheckout = () => {
    navigate(`/pembayaran/${nohp}`);
  };
  const handleInfaq = (value: string) => {
    setInfaq(value);
  };

  return (
    <>
      <div className="w-full h-screen md:flex md:justify-center md:items-center">
        <PageContainer variant="bg-gray-100">
          <div className="flex flex-col w-full md:w-[430px]">
            <div className="w-full bg-primary text-white p-4 flex items-center gap-3 md:rounded-t-2xl">
              <Link to={"/"}>
                <HiChevronLeft size={20} />
              </Link>
              <p className="font-semibold">Pembayaran</p>
            </div>
            <div className="pt-4 px-4 w-full ">
              <div className="bg-white w-full p-3 flex flex-col gap-5 rounded-md">
                <div className="flex flex-col">
                  <p className="text-gray-500 text-sm mb-1">Nama Lengkap</p>
                  <p className="font-semibold text-sm">
                    Nanda Syaisarrani Rahanda
                  </p>
                </div>
                <div className="flex flex-col">
                  <p className="text-gray-500 text-sm mb-1">Alamat</p>
                  <p className="font-semibold text-sm">
                    112 East Coast Road B2-07 Katong Mall, Jakarta
                  </p>
                </div>
                <div className="flex flex-col">
                  <p className="text-gray-500 text-sm mb-1">No HP</p>
                  <p className="font-semibold text-sm">{nohp}</p>
                </div>
                <div className="flex flex-col">
                  <p className="text-gray-500 text-sm mb-1">
                    No Kartu Keluarga
                  </p>
                  <p className="font-semibold text-sm">0167458789100324</p>
                </div>
                <div className="flex flex-col">
                  <p className="text-gray-500 text-sm mb-1">Biaya Kebersihan</p>
                  <p className="font-semibold text-sm">Rp 100.000</p>
                </div>
                <div className="flex flex-col">
                  <p className="text-gray-500 text-sm mb-1">Biaya Keamanan</p>
                  <p className="font-semibold text-sm">Rp 100.000</p>
                </div>
                <div className="flex flex-col">
                  <p className="text-gray-500 text-sm mb-1">Infaq</p>
                  <div className="flex items-center border-b border-gray-300 font-semibold text-sm">
                    <span>Rp</span>
                    <input
                      type="number"
                      placeholder="Masukkan nominal infaq"
                      className="py-2 px-1 w-full outline-none bg-transparent"
                      // value={infaq}
                      onChange={(e) => handleInfaq(e.target.value)}
                    />
                  </div>
                </div>
                <div className="flex justify-between text-primary">
                  <p>Total</p>
                  <p className="font-semibold">Rp 200.000</p>
                </div>
              </div>
            </div>

            <div className="w-full bg-white p-4 absolute bottom-0 md:rounded-b-2xl">
              <button
                disabled={infaq === "" ? true : false}
                onClick={handleCheckout}
                className={`bg-primary text-white py-2 rounded-md w-full  ${
                  infaq === ""
                    ? "opacity-50 cursor-not-allowed"
                    : "opacity-100 cursor-pointer"
                } `}
              >
                Lanjutkan Pembayaran
              </button>
            </div>
          </div>
        </PageContainer>
      </div>
    </>
  );
};

export default Checkout;
