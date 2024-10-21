import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { RegisterAuth } from "../constant/RegisterAuth";
import RegisterImage from "../assets/Register/Register.png";

const Style1 = "flex flex-wrap mx-3 mb-1";
const Style2 = "w-full px-3";
const Style3 =
  "block uppercase tracking-wide text-gray-700 text-sm font-bold mb-1";
const Style4 =
  "appearance-none block w-full bg-white text-gray-700 text-sm border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500";

function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const navigate = useNavigate();
  const location = useLocation();
  const user = location.state?.user;

  useEffect(() => {
    if (user) {
      setFormData({
        ...formData, 
        name: user.name,
        email: user.email,
      });
    }
  }, [user]);

  const handleChange = (key, val) => {
    setFormData({
      ...formData,
      [key]: val,
    });
    console.log(formData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    // try {
    //   // Call API to send OTP to user's phone number
    //   const response = await axios.post(
    //     "https://api.drive-zone.co.in/v1/n/public/auth/user/send-otp",
    //     {
    //       email: formData.email,
    //       phoneNumber: formData.phone,
    //       otpType: "register",
    //       mode: "cors",
    //     }
    //   );
    //   // Redirect to OTP page with user information in location state
    //   console.log(response);
    //   navigate("/OTP", { state: { user: formData } });
    // } catch (error) {
    //   console.error("Error sending OTP:", error);
    // }
  };

  return (
    <>
      <div className="flex flex-col md:flex-row bg-slate-50 rounded-xl mt-32 mx-[4%] mb-10">
        <div dir="rtl" className="w-full md:w-1/2 ps-4 flex-shrink-0">
          <img
            src={RegisterImage}
            alt="RegisterImage"
            className="h-auto w-full object-cover rounded-lg p-4 mt-2 md:mt-0 ml-[4%]"
          />
        </div>
        <div className="w-full md:w-1/2 px-4 py-8 flex flex-col justify-center ">
          <form className="w-full px-8" onSubmit={handleSubmit}>
            <div className="px-3 py-1 text-center">
              <div className="font-bold text-2xl py-2 text-gray-700 mb-1">
                Welcome to Transit!
              </div>
            </div>
            {user ? (
              <div className={Style1}>
                {RegisterAuth.map((item, index) => (
                  <div className={Style2} key={index}>
                    <label className={Style3} htmlFor={item.name}>
                      {item.label}
                    </label>
                    <input
                      className={Style4}
                      id={item.name}
                      type={item.type}
                      placeholder={item.placeholder}
                      value={
                        item.name === "name"
                          ? user.name
                          : item.name === "email"
                          ? user.email
                          : formData[item.name]
                      }
                      onChange={(ch) =>
                        handleChange(item.name, ch.target.value)
                      }
                      disabled={
                        item.name === "name"
                          ? true
                          : item.name === "email"
                          ? true
                          : false
                      }
                    />
                  </div>
                ))}
              </div>
            ) : (
              <div className={Style1}>
                {RegisterAuth.map((item, index) => (
                  <div className={Style2} key={index}>
                    <label className={Style3} htmlFor={item.name}>
                      {item.label}
                    </label>
                    <input
                      className={Style4}
                      id={item.name}
                      type={item.type}
                      placeholder={item.placeholder}
                      value={formData[item.name]}
                      onChange={(ch) =>
                        handleChange(item.name, ch.target.value)
                      }
                    />
                  </div>
                ))}
              </div>
            )}
            <div className="flex justify-center items-center mt-4">
              <button
                type="submit"
                className="bg-transparent hover:bg-[#6D7179] text-[#1D3244] text-lg font-semibold hover:text-white py-2 px-10 border border-[#1D3244] hover:border-transparent rounded"
              >
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Register;
