import React, { useState } from "react";
import { Menu } from "lucide-react";
import SeisoLogo from "../assets/SeisoLogo.svg";
import { Link } from "react-router-dom";
import Menue from "./Menue";
import { AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="fixed w-full top-0 left-0 text-white px-[3vw] xl:px-[8vw] py-10 flex justify-between items-center bg-[#151515] z-50">
        {/* Logo */}
        <div className="w-56 xl:w-1/5">
          <img src={SeisoLogo} alt="Seiso Logo" />
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6 text-lg">
          <Link to="/faq" className="hover:text-gray-300">
            FAQ
          </Link>
          <Link to="/verify-waste" className="hover:text-gray-300">
            Verify Waste
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(true)}
          aria-label="Open menu"
        >
          <Menu size={28} />
        </button>
      </nav>

      {/* Animated Mobile Menu */}
      <AnimatePresence>
        {isOpen && <Menue setIsOpen={setIsOpen} />}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
