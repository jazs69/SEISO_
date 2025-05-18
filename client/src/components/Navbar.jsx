import React, { useState } from "react";
import { AlignJustify } from "lucide-react";
import SeisoLogo from "../assets/SeisoLogo.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full top-0 left-0 text-white px-[3vw] xl:px-[8vw] pt-8 xl:py-10 flex justify-between items-center bg-[#151515]">
      {/* Logo */}
      <div className="w-52 xl:w-1/5">
        <img src={SeisoLogo} alt="" />
      </div>

      {/* Links */}
      <div className="hidden md:flex space-x-6 text-lg">
        <Link to="/faq" className="hover:text-gray-300">
          FAQ
        </Link>
        <Link to="/verify-waste" className="hover:text-gray-300">
          Verify Waste
        </Link>
      </div>

      {/* Hamburger Menu - Mobile */}
      <button
        className="md:hidden focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        {/* <Menu size={28} /> */}
        <AlignJustify />
      </button>
    </nav>
  );
};

export default Navbar;
