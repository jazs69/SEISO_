import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useUser } from "../context/UserContext";

const LogoutButton = () => {
  const navigate = useNavigate();
  const { setUser } = useUser();

  // Helper function to sanitize token (defensive)
  const isSafeToken = (token) =>
    typeof token === "string" &&
    /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+$/.test(token);

  const handleLogout = async () => {
    try {
      const token = localStorage.getItem("token");
      if (token && !isSafeToken(token)) {
        // Remove suspicious token
        localStorage.removeItem("token");
        setUser(null);
        navigate("/login");
        return;
      }

      await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/users/logout`,
        {},
        {
          headers: {
            Authorization: token ? `Bearer ${token}` : "",
          },
          withCredentials: true,
        }
      );

      // Clear localStorage and context
      localStorage.removeItem("token");
      setUser(null);

      // Navigate to login or home page
      navigate("/login");
    } catch (err) {
      console.error("Logout failed:", err);
    }
  };

  return (
    <button
      onClick={handleLogout}
      className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
    >
      Logout
    </button>
  );
};

export default LogoutButton;
