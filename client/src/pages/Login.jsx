import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useUser } from "../context/UserContext";
import { Link } from "react-router-dom";

const Login = () => {
  const { setUser } = useUser();

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Helper function to sanitize input (alphanumeric and underscore only for username)
  const isSafeUsername = (username) => /^[a-zA-Z0-9_]+$/.test(username);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isSafeUsername(formData.username)) {
      setError("Username contains invalid characters.");
      return;
    }
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/users/login`,
        formData,
        { withCredentials: true }
      );
      const data = await res.data;
      // localStorage.setItem("token", res.data.token);
      setUser(data.user);
      navigate("/dashboard");
    } catch (err) {
      setError(err.response?.data?.msg || "Login failed");
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-[#151515] opacity-90 px-4 sm:px-8 md:px-[8vw] py-8">
      <div className="flex flex-col justify-center items-center w-full max-w-xl mx-auto mt-12 md:mt-20 px-2 sm:px-4">
        <p className="font-mono tracking-wider leading-[1.75em] text-base sm:text-lg md:text-[28px] md:w-[70%] font-light max-w-[600px] text-center md:text-left">
          Join the movement. Clean the world, one waste submission at a time.
        </p>
      </div>
      <div className="flex flex-col justify-center items-center w-full max-w-xl mx-auto md:p-8 mt-12 md:mt-20 px-2 sm:px-4">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md bg-[#222] rounded-lg shadow-lg p-6 sm:p-8"
        >
          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
            className="w-full mb-4 p-2 sm:p-3 border border-gray-300 rounded text-base bg-[#151515] text-white focus:outline-none focus:ring-2 focus:ring-green-600"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full mb-4 p-2 sm:p-3 border border-gray-300 rounded text-base bg-[#151515] text-white focus:outline-none focus:ring-2 focus:ring-green-600"
            required
          />
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 sm:py-3 rounded hover:bg-green-700 transition-colors text-base font-semibold"
          >
            Login
          </button>
        </form>
        <div className="w-full max-w-md mt-6 sm:mt-7">
          <p className="font-mono text-center sm:text-left">
            Don't have an account yet?
          </p>
          <Link to="/register">
            <button
              type="button"
              className="w-full mt-2 bg-green-600 text-lime-700 py-2 sm:py-3 rounded hover:bg-green-700 transition-colors text-base font-semibold"
            >
              Sign up
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
