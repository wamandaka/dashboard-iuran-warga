import { useParams } from "react-router-dom";
import PembayaranPending from "../../components/Pembayaran/PembayaranPending";
import { useState } from "react";
import PembayaranSuccess from "../../components/Pembayaran/PembayaranSuccess";

const Pembayaran = () => {
  const [statusPembayaran] = useState("pending");
  const { nohp } = useParams();
  const noHpNumber = nohp ? parseInt(nohp) : null;

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
