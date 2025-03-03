import { useEffect, useState } from "react";
import {
  HiOutlineUserGroup,
  HiOutlineBanknotes,
  HiOutlineUserCircle,
  HiOutlinePresentationChartLine,
  HiOutlineCog6Tooth,
} from "react-icons/hi2";
import { Link, useLocation } from "react-router-dom";
import { HiOutlineLogout } from "react-icons/hi";

const sidebarItems = [
  {
    id: 1,
    title: "Dashboard",
    path: "/dsb",
    icon: <HiOutlinePresentationChartLine size={20} />,
  },
  {
    id: 2,
    title: "Data Warga",
    path: "/dsb/dw",
    icon: <HiOutlineUserGroup size={20} />,
  },
  {
    id: 3,
    title: "Transaksi",
    path: "/dsb/trsksi",
    icon: <HiOutlineBanknotes size={20} />,
  },
  {
    id: 4,
    title: "Profil",
    path: "/dsb/prfl",
    icon: <HiOutlineUserCircle size={20} />,
  },
  {
    id: 5,
    title: "Pengaturan",
    path: "/dsb/pgtrn",
    icon: <HiOutlineCog6Tooth size={20} />,
  },
];

const Sidebar = ({
  isOpen,
  handleSelectedName,
  toggleSidebar,
}: {
  isOpen: boolean;
  handleSelectedName: (name: string) => void;
  toggleSidebar: () => void;
}) => {
  const [activeLink, setActiveLink] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const currentPath = location.pathname;
    const currentLink = sidebarItems.find((item) => item.path === currentPath);
    setActiveLink(currentLink?.id || 0);
    handleSelectedName(currentLink?.title || "");
  }, [handleSelectedName, location.pathname]);

  const handleActiveLink = (index: number) => {
    setActiveLink(index);
  };

  return (
    <aside
      id="logo-sidebar"
      className={`fixed top-0 left-0 z-40 w-full md:w-64 h-screen pt-16 transition-transform -translate-x-full bg-white border-r border-gray-200 lg:translate-x-0 ${
        isOpen ? "translate-x-0" : ""
      }`}
      aria-label="Sidebar"
    >
      <div className="w-full p-3 text-white bg-primary flex justify-center items-center mb-5">
        <p>Admin</p>
      </div>
      <div className="h-full px-3 pb-4 overflow-y-auto bg-white border-t border-gray-200 pt-6">
        {/* menu */}
        <ul className="space-y-2 font-medium">
          {sidebarItems.map((item) => (
            <li
              key={item.id}
              className={`flex items-center w-full text-base font-normal text-gray-900 transition duration-75  rounded-md  ${
                activeLink === item.id
                  ? "bg-primary hover:bg-primary text-white"
                  : "hover:bg-primary/30 hover:text-primary"
              }`}
            >
              <Link
                onClick={() => {
                  handleActiveLink(item.id);
                  handleSelectedName(item.title);
                  toggleSidebar();
                }}
                to={item.path}
                className="flex items-center w-full p-2"
              >
                <span className="w-6 h-6 flex items-center justify-center">
                  {item.icon}
                </span>
                <span className="ml-4">{item.title}</span>
              </Link>
            </li>
          ))}
        </ul>

        {/* logout */}
        <button className="flex items-center w-[calc(100%-1.5rem)] text-base font-normal text-gray-900 transition duration-75 hover:bg-primary rounded-md hover:text-white cursor-pointer absolute bottom-5">
          <div className="flex items-center p-2">
            <span className="w-6 h-6 flex items-center justify-center">
              <HiOutlineLogout size={20} />
            </span>
            <span className="ml-4">Keluar</span>
          </div>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
