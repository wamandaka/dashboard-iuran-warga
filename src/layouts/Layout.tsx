import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { useEffect, useState } from "react";
import { userRoleAtom } from "../atoms/authAtoms";
import { useAtom } from "jotai";

const Layout = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedNameLink, setSelectedNameLink] = useState("");
  const token = localStorage.getItem("token");
  const [userRole] = useAtom(userRoleAtom);

  useEffect(() => {
    if (!token) {
      window.location.href = "/lgdsb";
    }
  }, [token]);

  const handleSelectedName = (name: string) => {
    setSelectedNameLink(name);
  };

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <div className="font-display bg-background min-h-screen">
      <Header
        toggleSidebar={toggleSidebar}
        isOpen={isOpen}
        selectedNameLink={selectedNameLink}
      />
      <Sidebar
        isOpen={isOpen}
        handleSelectedName={handleSelectedName}
        toggleSidebar={toggleSidebar}
        role={userRole}
      />
      <div className="w-full lg:pl-64">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
