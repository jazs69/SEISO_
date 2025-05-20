import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    username: "",
    phone: "",
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
      await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/users/register`,
        formData
      );
      navigate("/register");
    } catch (err) {
      setError(err.response?.data?.msg || "Registration failed");
    }
  };

  return (
    <div className="min-h-screen flex flex-col-reverse md:flex-row bg-[#151515] opacity-90 px-[8vw] ">
      <div className="hidden md:flex flex-col justify-center items-center w-full max-w-xl mx-auto mt-20">
        <p className="font-mono tracking-wider leading-[1.75em] text-[18px] md:text-[28px] md:w-[50%] font-light max-w-[600px]">
          Seiso rewards you for the responsible disposal of your waste, Creating
          waste into opportunity.
        </p>
      </div>
      <div className="flex flex-col justify-center items-center w-full max-w-xl mx-auto md:p-8 mt-20">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col w-full max-w-md md:p-8"
        >
          <p className="mt-[10%] sm:mt-[46px] text-[25px] md:text-[50px] lg:text-[58px] leading-snug sm:leading-tight w-[80%] sm:w-[100%] lg:max-w-[1024px] mb-10">
            Sign up
          </p>
          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
          <input
            type="text"
            name="firstname"
            placeholder="First Name"
            value={formData.firstname}
            onChange={handleChange}
            className="w-full mb-4 p-2 border border-gray-300 rounded"
            required
          />
          <input
            type="text"
            name="lastname"
            placeholder="First Name"
            value={formData.lastname}
            onChange={handleChange}
            className="w-full mb-4 p-2 border border-gray-300 rounded"
          />
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
            type="text"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
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
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
