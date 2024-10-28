import React from "react";
import { ContactDetails } from "../constant/Contact";
import Image from "../assets/Contact/Contact.jpg";

function Contact() {
  return (
    <div
      className="w-[90%] md:w-[70%] lg:w-[60%] p-8 flex items-center justify-center mx-auto rounded-lg mt-32"
      style={{
        backgroundImage: `url(${Image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="w-full sm:w-4/5 bg-[#6D7179] bg-opacity-20 text-black px-6 py-8 sm:py-10 rounded-lg font-serif backdrop-blur-sm">
        <h2 className="text-2xl font-semibold mb-4 text-center text-white">
          Contact Us
        </h2>
        <form className="space-y-4 flex flex-col items-center">
          {ContactDetails.map((item, index) => (
            <div key={index} className="flex flex-col w-full">
              <label
                className="text-sm font-medium mb-1 text-white"
                htmlFor={item.name}
              >
                {item.label}
              </label>
              <input
                id={item.name}
                name={item.name}
                type={item.type}
                required={item.required}
                placeholder={item.placeholder}
                className="p-2 border border-[#1D3244] rounded focus:outline-none focus:border-[#1D3244]"
              />
            </div>
          ))}
          <button
            type="submit"
            className="mt-4 px-4 py-2 bg-[#1D3244] text-white rounded hover:bg-[#6D7179] mx-auto"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
