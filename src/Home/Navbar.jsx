import { FiSearch, FiMenu, FiChevronDown } from "react-icons/fi";

function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-5 bg-[#f8f3ee]">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <div className="h-8 w-8 rounded-full bg-[#b88b7c]"></div>
        <h1 className="text-xl font-bold">
          Dream <span className="text-[#b88b7c]">Home</span>
        </h1>
      </div>

      {/* Menu */}
      <ul className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
        <li className="cursor-pointer hover:text-[#b88b7c]">Home</li>
        <li className="cursor-pointer hover:text-[#b88b7c]">About Us</li>
        <li className="cursor-pointer hover:text-[#b88b7c]">Projects</li>
        <li className="cursor-pointer hover:text-[#b88b7c]">Services</li>
        <li className="cursor-pointer hover:text-[#b88b7c]">Pricing</li>
      </ul>

      {/* Right Side */}
      <div className="flex items-center gap-5 text-gray-700">
        <div className="hidden md:flex items-center gap-1 cursor-pointer">
          EN
          <FiChevronDown />
        </div>

        <FiSearch className="cursor-pointer text-lg" />
        <FiMenu className="cursor-pointer text-xl" />
      </div>
    </nav>
  );
}

export default Navbar;