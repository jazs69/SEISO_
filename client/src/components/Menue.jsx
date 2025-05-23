import React from "react";
import { Link } from "react-router-dom";
import { X } from "lucide-react";
import { useUser } from "../context/UserContext";
/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import LogoutButton from "./LogoutButton";

function Menue({ setIsOpen }) {
  const { user } = useUser();

  // Helper function to sanitize username (if displayed in the future)
  const sanitizeUsername = (username) =>
    typeof username === "string" ? username.replace(/[^a-zA-Z0-9_]/g, "") : "";

  return (
    <motion.div
      initial={{ opacity: 0, y: "100%" }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, x: "100%" }}
      transition={{ type: "tween", duration: 0.3 }}
      className="fixed bg-[#151515] w-screen h-screen top-0 left-0 z-50 text-white"
    >
      {/* Close Button */}
      <button
        className="absolute top-12 right-4 focus:outline-none"
        onClick={() => setIsOpen(false)}
        aria-label="Close menu"
      >
        <X size={28} />
      </button>

      {/* Navigation Links */}
      <div className="flex flex-col items-center justify-center h-full space-y-8 text-3xl">
        <Link to="/" onClick={() => setIsOpen(false)}>
          Home
        </Link>
        <Link
          to="/Login"
          onClick={() => setIsOpen(false)}
          className={`${user ? "hidden" : ""}`}
        >
          Login
        </Link>
        <Link to="/faq" onClick={() => setIsOpen(false)}>
          FAQ
        </Link>
        <Link to="/verify-waste" onClick={() => setIsOpen(false)}>
          Verify Waste
        </Link>
        <Link to="/jobs" onClick={() => setIsOpen(false)}>
          Jobs
        </Link>
        <LogoutButton />
      </div>
    </motion.div>
  );
}

export default Menue;
