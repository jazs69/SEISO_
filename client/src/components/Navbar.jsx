import React, { useState } from "react";
import { Menu } from "lucide-react";
import SeisoLogo from "../assets/SeisoLogo.svg";
import { Link } from "react-router-dom";
import Menue from "./Menue";
import { AnimatePresence } from "framer-motion";
import { useUser } from "../context/UserContext";

// Helper function to sanitize username (if displayed in the future)
// const sanitizeUsername = (username) =>
//   typeof username === "string" ? username.replace(/[^a-zA-Z0-9_]/g, "") : "";

const Navbar = () => {
  const { user } = useUser();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="fixed w-full top-0 left-0 text-white px-4 sm:px-8 md:px-[3vw] xl:px-[8vw] py-4 md:py-8 flex justify-between items-center bg-[#151515] opacity-99 z-50">
        {/* Logo */}
        <Link to="/" className="w-32 sm:w-40 md:w-56 xl:w-1/5 min-w-[100px]">
          <img src={SeisoLogo} alt="Seiso Logo" className="w-full h-auto" />
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-4 lg:space-x-6 text-base lg:text-lg">
          <Link
            to="/"
            className="hover:text-gray-300 transition-colors duration-200"
          >
            Home
          </Link>
          <Link
            to="/faq"
            className="hover:text-gray-300 transition-colors duration-200"
          >
            FAQ
          </Link>
          <Link
            to="/verify-waste"
            className="hover:text-gray-300 transition-colors duration-200"
          >
            Verify Waste
          </Link>
          <Link
            to={user ? "/profile" : "/login"}
            className="hover:text-gray-300 transition-colors duration-200"
          >
            {!user ? (
              "Login"
            ) : (
              <div className="h-10 w-10 border-2 border-white rounded-full flex items-center justify-center">
                {/* If you ever display username, use: {sanitizeUsername(user.username)} */}
              </div>
            )}
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
