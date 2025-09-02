import { AiOutlineDollarCircle } from "react-icons/ai";
import {  HiTrendingUp } from "react-icons/hi";
import {  HiOutlineUserCircle } from "react-icons/hi2";
import DashboardChart from "../../components/Dashboard/DashboardChart";
import { DataChart } from "../../types/dashboard";
import { useEffect, useState } from "react";
import PageContainerDashboard from "../../components/PageContainerDashboard";
import logger from "../../utils/logger";
import { loadableDataChartDashboardAtom } from "../../atoms/dataAtoms";
import { useAtom } from "jotai";
import { userRoleAtom } from "../../atoms/authAtoms";

const Dashboard = () => {
  const [chartData, setChartData] = useState<DataChart[]>([]);
  const [loadableDataChartDashboard] = useAtom(loadableDataChartDashboardAtom);
  const [isLoading, setIsLoading] = useState(false);
  const [role] = useAtom(userRoleAtom);

  useEffect(() => {
    document.title = "Dashboard";
  }, []);

  useEffect(() => {
    if (role !== "admin" && role !== "operator") {
      window.location.href = "/dsb/trsksi";
    }
  }, [role]);

  // const fetchDataChart = async () => {
  //   try {
  //     const resp = await fetch("/chartDashboard.json");
  //     const data = await resp.json();
  //     setChartData(data);
  //   } catch (error) {
  //     logger.error("Error fetching chart data", error);
  //   }
  // };

  useEffect(() => {
    if (loadableDataChartDashboard.state === "loading") {
      setIsLoading(true);
    } else if (loadableDataChartDashboard.state === "hasData") {
      setIsLoading(false);
      setChartData(loadableDataChartDashboard.data);
    } else if (loadableDataChartDashboard.state === "hasError") {
      setIsLoading(false);
      logger.error(
        "Error loading chart data",
        loadableDataChartDashboard.error
      );
    }
  }, [loadableDataChartDashboard, setChartData]);

  return (
    <PageContainerDashboard>
      <div className="p-4 bg-white rounded-md shadow-md mt-14">
        <p className="text-2xl">Selamat Datang, Kevin!</p>

        {/* card statistic */}
        <div className="w-full mt-5 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 pt-4 pb-6 border-b border-gray-200">
          <div className="border border-gray-300 rounded-md p-4">
            <div className="flex gap-2 items-center mb-3">
              <span className="text-secondary">
                <AiOutlineDollarCircle size={24} />
              </span>
              <p className="font-semibold">Total Pembayaran</p>
            </div>
            <h1 className="font-bold text-xl mb-2">Rp5.000.000</h1>
            <div className="flex items-center text-sm gap-1">
              <div className="flex items-center gap-1 text-green-500">
                <span>
                  <HiTrendingUp />
                </span>
                <span>+5.5%</span>
              </div>
              <span className="text-slate-400 font-semibold">
                vs last month
              </span>
            </div>
          </div>
          <div className="border border-gray-300 rounded-md p-4">
            <div className="flex gap-2 items-center mb-3">
              <span className="text-accent">
                <HiOutlineUserCircle size={24} />
              </span>
              <p className="font-semibold">Total Warga Bayar</p>
            </div>
            <h1 className="font-bold text-xl mb-2">1536</h1>
            <div className="flex items-center text-sm gap-1">
              <div className="flex items-center gap-1 text-green-500">
                <span>
                  <HiTrendingUp />
                </span>
                <span>+5.5%</span>
              </div>
              <span className="text-slate-400 font-semibold">
                vs last month
              </span>
            </div>
          </div>
          <div className="border border-gray-300 rounded-md p-4">
            <div className="flex gap-2 items-center mb-3">
              <span className="text-accent">
                <HiOutlineUserCircle size={24} />
              </span>
              <p className="font-semibold">Total Warga Belum Bayar</p>
            </div>
            <h1 className="font-bold text-xl mb-2">236</h1>
            <div className="flex items-center text-sm gap-1">
              <div className="flex items-center gap-1 text-green-500">
                <span>
                  <HiTrendingUp />
                </span>
                <span>+5.5%</span>
              </div>
              <span className="text-slate-400 font-semibold">
                vs last month
              </span>
            </div>
          </div>
        </div>

        {/* chart */}
        <div className="w-full mt-5">
          <p className="font-semibold text-2xl my-5">Total Pembayaran</p>
          <div className="border border-gray-300 rounded-md p-4">
            <div className="flex gap-2 items-center mb-3">
              <span className="text-primary">
                <AiOutlineDollarCircle size={24} />
              </span>
              <p>April 2023 Revenue</p>
            </div>
            <div className="flex flex-col gap-3 mt-7 md:flex-row md:items-center md:justify-between">
              <div className="flex items-center gap-5">
                <button className="bg-secondary text-white rounded-md py-1 px-2 cursor-pointer">
                  Bulan Ini
                </button>
                <button className="text-secondary cursor-pointer">
                  Bulan Lalu
                </button>
              </div>
              {/* <button className="flex items-center gap-2 px-3 py-1 border rounded-md text-secondary border-secondary hover:bg-secondary/10 transition w-56">
                <HiCalendarDays size={20} />
                <p>Pilih Bulan & Tahun</p>
                <HiOutlineChevronDown />
              </button> */}
            </div>
            <p className="my-5">Dalam Rupiah</p>
            {isLoading && <p>Loading...</p>}
            <DashboardChart chartData={chartData} />
          </div>
        </div>
      </div>
    </PageContainerDashboard>
  );
};

export default Dashboard;
