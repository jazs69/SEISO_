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

  const handleSubmit = async (e) => {
    e.preventDefault();
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
    <div className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-[#151515] opacity-90 px-[8vw] ">
      <div className="flex flex-col justify-center items-center w-full max-w-xl mx-auto mt-40">
        <p className="font-mono tracking-wider leading-[1.75em] text-[18px] md:text-[28px] md:w-[50%] font-light max-w-[600px]">
          Join the movement. Clean the world, one waste submission at a time.
        </p>
      </div>
      <div className="flex flex-col justify-center items-center w-full max-w-xl mx-auto md:p-8 mt-20">
        <form onSubmit={handleSubmit} className="w-full max-w-md">
          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
            className="w-full mb-4 p-2 border border-gray-300 rounded"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full mb-4 p-2 border border-gray-300 rounded"
            required
          />
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
          >
            Login
          </button>
        </form>
        <div className="w-full max-w-md mt-7">
          <p className="font-mono">Dont have an acount yet?</p>
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
          >
            <Link
              to="/register"
              className="text-green-600 hover:text-green-700"
            >
              Sign up
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
