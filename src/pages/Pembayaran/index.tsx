import { useParams } from "react-router-dom";
import PembayaranPending from "../../components/Pembayaran/PembayaranPending";
import { useEffect, useState } from "react";
import PembayaranSuccess from "../../components/Pembayaran/PembayaranSuccess";

const Pembayaran = () => {
  const [statusPembayaran] = useState("success");
  const { nohp } = useParams();
  const noHpNumber = nohp ? parseInt(nohp) : null;

  useEffect(() => {
    document.title = "Pembayaran";
  }, []);

  return (
    <>
      {statusPembayaran === "pending" && (
        <PembayaranPending nohp={noHpNumber ?? 0} />
      )}
      {statusPembayaran === "success" && <PembayaranSuccess />}
    </>
  );
};

export default Pembayaran;
