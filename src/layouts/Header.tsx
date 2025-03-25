import Logo from "../assets/logo.png";
import { HiChevronDown, HiMenu, HiX } from "react-icons/hi";
import { HiBell } from "react-icons/hi2";
const Header = ({
  toggleSidebar,
  isOpen,
  selectedNameLink,
}: {
  toggleSidebar: () => void;
  isOpen: boolean;
  selectedNameLink: string;
}) => {
  return (
    <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200 shadow-md">
      <div className="px-3 py-3 lg:px-5 lg:pl-3 lg:flex lg:items-center">
        <div className="flex items-center justify-between lg:min-w-60">
          {/* logo */}
          <div className="flex items-center justify-start border-gray-200">
            <a href="/dsb" className="flex ml-2">
              <img src={Logo} className="h-10" alt="JakMen Logo" />
            </a>
          </div>
          {/* menu */}
          <button
            onClick={toggleSidebar}
            type="button"
            className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 "
          >
            <span className="sr-only">Open sidebar</span>
            {isOpen ? (
              <HiX className="w-6 h-6" />
            ) : (
              <HiMenu className="w-6 h-6" />
            )}
          </button>
        </div>
        <div className="w-full h-10 items-center hidden lg:flex border-l border-gray-200 px-5 justify-between lg:max-w-[1980px] mx-auto">
          {selectedNameLink && (
            <h1 className="text-lg font-semibold text-gray-800 hidden lg:block">
              {selectedNameLink}
            </h1>
          )}
          <div className="flex items-center justify-center gap-5">
            <span className="flex items-center justify-center text-primary p-2 border border-primary rounded-md cursor-pointer">
              <HiBell size={20} />
            </span>
            <div className="flex items-center px-5 gap-5 border-l border-gray-200 cursor-pointer">
              <div className="flex items-center gap-2">
                <p>Kevin McCalister</p>
                <HiChevronDown />
              </div>
              <div className="flex items-center justify-center">
                <img
                  src="https://randomuser.me/api/portraits/men/1.jpg"
                  className="w-10 h-10 rounded-full"
                  alt="User"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
