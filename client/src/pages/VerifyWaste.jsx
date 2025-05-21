import React, { useState } from "react";
import axios from "axios";
import { useUser } from "../context/UserContext";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

function VerifyWaste() {
  const { user } = useUser();
  const [wasteId, setWasteId] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleChange = (e) => {
    setWasteId(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/api/waste/verify-wast`,
        wasteId,
        {
          withCredentials: true,
        }
      );
      navigate("/dashboard");
    } catch (err) {
      setError(err.response?.data?.msg || "Verification failed");
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-[#151515] opacity-90 px-[8vw] ">
      <div className="flex flex-col justify-center items-center w-full max-w-xl mx-auto mt-20">
        <p className="font-mono tracking-wider leading-[1.75em] text-[18px] md:text-[28px] md:w-[50%] font-light max-w-[600px]">
          Hello {user.username}! please insert verification code.
        </p>
      </div>
      <div className="flex flex-col justify-center items-center w-full max-w-xl mx-auto md:p-8 mt-20">
        <form onSubmit={handleSubmit} className="">
          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
          <input
            type="text"
            name="wasteId"
            placeholder="wasteId"
            value={wasteId}
            onChange={handleChange}
            className="w-full mb-4 p-2 border border-gray-300 rounded"
            required
          />
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
          >
            Verify
          </button>
        </form>
      </div>
    </div>
  );
}

export default VerifyWaste;
