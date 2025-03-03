import { Link, useParams } from "react-router-dom";
import PageContainer from "../../components/PageContainer";
import { HiChevronLeft } from "react-icons/hi2";

const Pembayaran = () => {
  const { nohp } = useParams();
  return (
    <div>
      <PageContainer>
        <div className="w-full bg-primary text-white p-4 flex items-center gap-3">
          <Link to={`/checkout/${nohp}`}>
            <HiChevronLeft size={20} />
          </Link>
          <p className="font-semibold">Pembayaran</p>
        </div>
        <div className="w-full bg-white p-4 absolute bottom-0">
          <button
            // onClick={handleCheckout}
            className="bg-primary text-white py-2 rounded-md w-full cursor-pointer"
          >
            Selesai
          </button>
        </div>
      </PageContainer>
    </div>
  );
};

export default Pembayaran;
