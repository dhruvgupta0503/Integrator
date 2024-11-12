import React, { Suspense, lazy } from "react";
import './index.css';
import Navbar from './Components/Navbar';
import { Routes, Route } from "react-router-dom";



const Home = lazy(() => import("./pages/Home.jsx"));
const SearchRide = lazy(() => import("./pages/SearchRide.jsx"));
const ChooseRide = lazy(() => import("./pages/ChooseRide.jsx"));
const Login = lazy(() => import("./pages/Login.jsx"));
const Register = lazy(() => import("./pages/Register.jsx"));
const OTP = lazy(() => import("./pages/OTP.jsx"));
const Error = lazy(() => import("./pages/Error.jsx"));
const Contact = lazy(() => import("./pages/Contact.jsx"));
const About = lazy(() => import("./pages/About.jsx"));
const Policy = lazy(() => import("./pages/Policy.jsx"));
const Profile = lazy(() => import("./pages/Profile.jsx"));


function App() {
  return (
    <>
      <Navbar />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<SearchRide />} />
          <Route path="/choose" element={<ChooseRide />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/OTP" element={<OTP />} />
          <Route path="/policy" element={<Policy />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;