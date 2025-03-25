import Lottie from "lottie-react";
import NotFoundAnimation from "../assets/notFoundPage.json";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col gap-5 justify-center items-center h-screen">
      <Lottie
        animationData={NotFoundAnimation}
        loop={true}
        style={{ width: 350, height: 350 }}
      />
      <div className="px-4 py-3 bg-primary text-white rounded-md">
        <Link to="/">Kembali ke Beranda</Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
