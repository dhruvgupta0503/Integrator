import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

const Policy = () => {
  const [openSection, setOpenSection] = useState(null);

  const handleToggle = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-[#1D3244] text-white py-12 px-6">
      <div className="max-w-4xl w-full bg-[#6D7179] bg-opacity-50 rounded-lg shadow-lg p-8">
        <h1 className="text-4xl font-bold text-center mb-8">Privacy Policy</h1>

        {/* Section 1 */}
        <div className="mb-6">
          <button
            onClick={() => handleToggle(1)}
            className="w-full text-left font-semibold text-2xl py-4 px-6 flex items-center justify-between bg-[#1D3244] hover:bg-[#6D7179] transition-colors duration-300 rounded"
          >
            Information We Collect
            <FontAwesomeIcon icon={openSection === 1 ? faChevronUp : faChevronDown} className="ml-2 text-lg" />
          </button>
          {openSection === 1 && (
            <div className="p-4 text-lg bg-white text-[#1D3244] rounded mt-2">
              <ul className="space-y-2">
                <li><strong>Personal Information:</strong> We may collect your name, email, phone number, and payment information when you register or contact us.</li>
                <li><strong>Usage Data:</strong> This includes your IP address, browser type, access times, and pages viewed.</li>
                <li><strong>Cookies:</strong> We use cookies to enhance your experience. Manage preferences via your browser settings.</li>
              </ul>
            </div>
          )}
        </div>

        {/* Section 2 */}
        <div className="mb-6">
          <button
            onClick={() => handleToggle(2)}
            className="w-full text-left font-semibold text-2xl py-4 px-6 flex items-center justify-between bg-[#1D3244] hover:bg-[#6D7179] transition-colors duration-300 rounded"
          >
            How We Use Your Information
            <FontAwesomeIcon icon={openSection === 2 ? faChevronUp : faChevronDown} className="ml-2 text-lg" />
          </button>
          {openSection === 2 && (
            <div className="p-4 text-lg bg-white text-[#1D3244] rounded mt-2">
              <ul className="space-y-2">
                <li>To provide and maintain our services.</li>
                <li>To process and manage your bookings.</li>
                <li>To communicate with you about your account or transactions.</li>
                <li>To improve our website and services.</li>
                <li>To send you promotional materials, if opted in.</li>
              </ul>
            </div>
          )}
        </div>

        {/* Section 3 */}
        <div className="mb-6">
          <button
            onClick={() => handleToggle(3)}
            className="w-full text-left font-semibold text-2xl py-4 px-6 flex items-center justify-between bg-[#1D3244] hover:bg-[#6D7179] transition-colors duration-300 rounded"
          >
            Sharing and Disclosure
            <FontAwesomeIcon icon={openSection === 3 ? faChevronUp : faChevronDown} className="ml-2 text-lg" />
          </button>
          {openSection === 3 && (
            <div className="p-4 text-lg bg-white text-[#1D3244] rounded mt-2">
              <ul className="space-y-2">
                <li>We may share your information with third-party service providers.</li>
                <li>We may disclose information if legally required to protect rights and safety.</li>
                <li>In case of a business transfer, your data may be part of the assets transferred.</li>
              </ul>
            </div>
          )}
        </div>
        
        {/* Additional sections can follow the same pattern */}
      </div>
    </div>
  );
};

export default Policy;
