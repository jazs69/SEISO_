import React from "react";
import { Link } from "react-router-dom";
import { X } from "lucide-react";
import { useUser } from "../context/UserContext";
/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import LogoutButton from "./LogoutButton";
import "animate.css";

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
      className="fixed bg-[#151515] w-screen h-screen top-0 left-0 z-50 text-white font-mono tracking-wider"
    >
      {/* Close Button */}
      <button
        className="absolute top-12 right-4 focus:outline-none"
        onClick={() => setIsOpen(false)}
        aria-label="Close menu"
      >
        <X size={28} />
      </button>
      <div className="pt-14 pl-4">
        <Link
          to={user ? "/profile" : "/login"}
          className="hover:text-gray-300 font-mono tracking-wider text-3xl"
          onClick={() => setIsOpen(false)}
        >
          {!user ? (
            "Login"
          ) : (
            <div className="flex items-center space-x-2 font-mono">
              <div className="h-10 w-10 border-2 border-lime-700 rounded-full flex items-center justify-center">
                {/* Avatar or icon can go here */}
              </div>
              <p>{sanitizeUsername(user.username)}</p>
            </div>
          )}
        </Link>
      </div>
      <div className="flex flex-col items-center justify-center h-full space-y-8 text-3xl mt-0">
        <Link
          to="/"
          onClick={() => setIsOpen(false)}
          className="animate__animated animate__backInLeft animate__delay-0s font-mono tracking-wider"
        >
          Home
        </Link>
        <Link
          to="/dashboard"
          onClick={() => setIsOpen(false)}
          className="animate__animated animate__backInLeft animate__delay-0s font-mono tracking-wider"
        >
          Dashboard
        </Link>
        <Link
          to="/verify-waste"
          onClick={() => setIsOpen(false)}
          className="animate__animated animate__backInLeft animate__delay-0.3s"
          style={{ animationDelay: "0.1s" }}
        >
          Verify Waste
        </Link>
        <Link
          to="/about-us"
          onClick={() => setIsOpen(false)}
          className="animate__animated animate__backInLeft animate__delay-0.2s"
          style={{ animationDelay: "0.2s" }}
        >
          About us
        </Link>
        <Link
          to="/faq"
          onClick={() => setIsOpen(false)}
          className="animate__animated animate__backInLeft animate__delay-0.2s"
          style={{ animationDelay: "0.3s" }}
        >
          FAQ's
        </Link>
        {/* <Link
          to="/jobs"
          onClick={() => setIsOpen(false)}
          className="animate__animated animate__backInLeft animate__delay-0.4s"
          style={{ animationDelay: "0.4s" }}
        >
          Jobs
        </Link> */}
        {user && (
          <LogoutButton
            className="animate__animated animate__backInLeft animate__delay-0.5s"
            style={{ animationDelay: "0.5s" }}
          />
        )}
      </div>
    </motion.div>
  );
}

export default Menue;
