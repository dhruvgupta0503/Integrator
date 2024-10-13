import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#1D3244] text-gray-300 py-6 mt-auto">
      <div className="container mx-auto flex flex-wrap items-center justify-between">
        
       
        <div className="flex items-center space-x-4 px-4">
         
          <img src="https://via.placeholder.com/80" alt="Company Logo" className="h-10" />
          <div>
            <h2 className="text-white text-2xl font-bold mb-2">Company Name</h2>
            <p>1234 Street Name, City, Country</p>
            <p>Email: kuchbhi@company.com</p>
            <p>Phone: 9999999999</p>
          </div>
        </div>

      
        <div className="flex-1 text-center hidden md:flex justify-center space-x-6">
          <a href="/help" className="text-gray-300 hover:text-white">Help/Support</a>
          <a href="/privacy" className="text-gray-300 hover:text-white">Privacy Policy</a>
          <a href="/contact" className="text-gray-300 hover:text-white">Contact Us</a>
        </div>

        <div className="flex items-center justify-end px-4">
          <a href="/sos" className="bg-red-500 text-white py-2 px-6 rounded-lg font-bold hover:bg-red-600 transition duration-300">
            SOS
          </a>
        </div>
      </div>
    </footer>
  );
};

const Page = () => {
  return (
    <div className="flex flex-col min-h-screen">
      
      <div className="container mx-auto py-10">
        <h1 className="text-3xl text-center text-gray-700"></h1>
        {/* <p className="text-center text-gray-500">future work.</p> */}
      </div>

   
      <Footer />
    </div>
  );
};

export default Page;
