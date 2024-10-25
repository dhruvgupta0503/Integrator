import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Authentication } from "../constant/Authentication";
import Image from "../assets/Login/Login.jpg";
import { GoogleLogin } from "@react-oauth/google";

const styles = {
  Style1: "flex flex-wrap mx-3 mb-1",
  Style2: "w-full px-3",
  Style3: "block uppercase tracking-wide text-gray-700 text-sm font-bold mb-1 ",
  Style4:
    "appearance-none block w-full bg-white text-gray-700 text-sm border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500",
  Style5: "flex justify-center text-lg items-center py-4",
  Style6:
    "bg-transparent hover:bg-[#6D7179] text-[#1D3244] text-lg font-semibold hover:text-white py-2 px-10 border border-[#1D3244] hover:border-transparent rounded",
};

function Login() {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  
  const handleOAuth = async (credential) => {
    try {
      const response = await fetch(
        "https://api.transitco.in/auth/google-oauth/authorize",
        {
          credentials: "include",
          mode: "cors", //remove after deployment
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ idToken: credential }),
        }
      );
      const data = await response.json();
      if (data.message === "Google Oauth login successful") {
        dispatch({ type: "USER", payload: true });
        window.alert("Successful using OAuth");
        console.log(data);
      } else if (response.status === 404) {
        navigate("/Register", { state: { user: data.user } });
        console.log(data.user);
      } else {
        window.alert("Failure using OAuth");
      }
    } catch (error) {
      console.error("Error:", error);
      window.alert("An error occurred during OAuth");
    }
  };

   const loginUser = async (e) => {
     e.preventDefault();
     try {
       const response = await fetch(
         "https://api.transitco.in/auth/login",
         {
           credentials: "include",
           mode: "cors", //remove after deployment
           method: "POST",
           headers: {
             "Content-Type": "application/json",
           },
           body: JSON.stringify(loginData),
         }
       );
       const data = await response.json();
       if (data.message === "User logged in successfully") {
         dispatch({ type: "USER", payload: true });
         navigate("/");
       } else {
         console.log(data);
         window.alert("User not logged in");
       }
     } catch (error) {
       console.error("Error:", error);
       window.alert("An error occurred while logging in.");
     }
   };

  return (
    <div className="flex flex-col items-start mt-32 mx-[15%] bg-slate-50 size-auto rounded-lg mb-10">
      <form
        className="w-full bg-slate-50 h-full p-6 rounded-lg shadow-lg"
        onSubmit={loginUser}
      >
        <div className="w-full h-80 object-cover rounded-lg mb-3">
          <img className="w-full h-full object-cover" src={Image} alt="Login" />
        </div>
        <div className={styles.Style1}></div>
        {Authentication.map((item, index) => (
          <div className={styles.Style2} key={index}>
            <label className={styles.Style3}>{item.label}</label>
            <input
              className={styles.Style4}
              id={item.name}
              type={item.type}
              placeholder={item.placeholder}
              value={loginData[item.name]}
              onChange={(ch) =>
                setLoginData({ ...loginData, [item.name]: ch.target.value })
              }
            />
          </div>
        ))}
        <div className={styles.Style5}>
          <button type="submit" className={styles.Style6}>
            Sign in
          </button>
        </div>
        {/* <div className="items-start ml-4">
          <GoogleLogin
            onSuccess={(response) => {
              console.log(response);
              handleOAuth(response.credential);
            }}
            onError={() => {
              console.log("Login Failed");
            }}
          />
        </div> */}
        <div className="flex justify-center items-center py-2">
          <Link to="/forgot-password">Forgot Password?</Link>
        </div>
        <div className="flex justify-center items-center py-2">
          <Link to="/register">Don't have an account? Sign up</Link>
        </div>
      </form>
    </div>
  );
}

export default Login;
