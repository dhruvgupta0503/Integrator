import React, { useState } from "react";
import RegisterImage from "../assets/Register/Register.png";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";


const Style1 = "flex flex-wrap mb-1";
const Style2 = "w-full px-3";
const Style3 = "block tracking-wide text-gray-700 text-sm mb-2";
const Style4 =
  "appearance-none block w-full bg-white text-gray-700 text-sm border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500";

function OTP() {
  const [otp, setOtp] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const { user } = location.state;

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // If OTP verification successful, proceed with registration
      // Call API to send user information
      const response = await axios.post(
        "https://api.transitco.in/auth/otp/signup",
        {
          name: user.name,
          email: user.email,
          mobile: user.mobile,
          password: user.password,
          otp: otp,
          mode: "cors",
        }
      );
      console.log(response);
      if (response.data.ok === true || response.status === 201) {
        console.log("User registered");
        navigate("/");
      }
      // Redirect user to dashboard or home page
      // navigate("/Home");
    } catch (error) {
      console.error("Error verifying OTP:", error);
    }
  };
  return (
    <>
      <div className="flex flex-col md:flex-row bg-slate-50 rounded-xl mt-32 mx-[4%] mb-10 ">
        <div dir="rtl" className="w-full md:w-1/2 ps-4 flex-shrink-0 ">
          <img
            src={RegisterImage}
            alt="RegisterImage"
            className="h-auto w-full object-cover rounded-lg p-4 mt-2 md:mt-0 ml-[4%]"
          />
        </div>
        <div className="w-full md:w-1/2 px-4 py-8 flex flex-col justify-center ">
          <form className="w-full px-8" onSubmit={handleSubmit}>
            <div className="px-3 py-1">
              <div className="font-bold text-2xl py-2 text-gray-700 mb-6">
                Enter 6-digit OTP
              </div>
            </div>
            <div className={Style1}>
              <div className={Style2}>
                <label className={Style3}>
                  Enter the OTP sent on your phone/email
                </label>
                <input
                  className={Style4}
                  type="number"
                  placeholder="Enter OTP"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                />
              </div>
            </div>
            <div className="flex justify-center items-center mt-4">
              <button
                type="submit"
                className="bg-transparent hover:bg-[#6D7179] text-[#1D3244] text-lg font-semibold hover:text-white py-2 px-8 border border-[#1D3244] hover:border-transparent rounded"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default OTP;
