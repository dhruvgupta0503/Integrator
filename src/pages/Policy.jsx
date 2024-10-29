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
      <div className="max-w-4xl w-full bg-[#6D7179] bg-opacity-50 rounded-lg shadow-lg p-8 mt-12"> {/* Added mt-12 for margin-top */}
        <h1 className="text-4xl font-bold text-center mb-8">Privacy Policy</h1>
        <p className="text-center text-lg mb-8">*Last Updated: 28th of October 2024*</p>
        <p className="mb-6">
          At Transit, we are committed to protecting your privacy. This Privacy Policy outlines how we collect, use, disclose, 
          and safeguard your information when you visit our website www.transitco.in or use our mobile application.
        </p>

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
                <li><strong>Personal Information:</strong> We may collect personal information that you provide to us, such as your name, email address, phone number, and payment information when you register, make a booking, or contact us.</li>
                <li><strong>Usage Data:</strong> We collect information about how you use our website and app, including your IP address, browser type, access times, and pages viewed.</li>
                <li><strong>Cookies:</strong> We use cookies and similar tracking technologies to enhance your experience on our site. You can manage your cookie preferences through your browser settings.</li>
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
                <li>To provide and maintain our services</li>
                <li>To process and manage your bookings</li>
                <li>To communicate with you about your account or transactions</li>
                <li>To improve our website and services</li>
                <li>To send you promotional materials if you have opted in</li>
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
            Disclosure of Your Information
            <FontAwesomeIcon icon={openSection === 3 ? faChevronUp : faChevronDown} className="ml-2 text-lg" />
          </button>
          {openSection === 3 && (
            <div className="p-4 text-lg bg-white text-[#1D3244] rounded mt-2">
              <ul className="space-y-2">
                <li>We do not sell or rent your personal information to third parties.</li>
                <li>We may share your information with service providers who assist us in operating our services.</li>
                <li>We may disclose information to comply with legal obligations or respond to legal requests.</li>
                <li>In connection with a merger, sale, or other business transfer, your data may be included in the transferred assets.</li>
              </ul>
            </div>
          )}
        </div>

        {/* Section 4 */}
        <div className="mb-6">
          <button
            onClick={() => handleToggle(4)}
            className="w-full text-left font-semibold text-2xl py-4 px-6 flex items-center justify-between bg-[#1D3244] hover:bg-[#6D7179] transition-colors duration-300 rounded"
          >
            Data Security
            <FontAwesomeIcon icon={openSection === 4 ? faChevronUp : faChevronDown} className="ml-2 text-lg" />
          </button>
          {openSection === 4 && (
            <div className="p-4 text-lg bg-white text-[#1D3244] rounded mt-2">
              <p>We implement reasonable security measures to protect your personal information from unauthorized access, use, or disclosure. However, no method of transmission over the internet or method of electronic storage is 100% secure.</p>
            </div>
          )}
        </div>

        {/* Section 5 */}
        <div className="mb-6">
          <button
            onClick={() => handleToggle(5)}
            className="w-full text-left font-semibold text-2xl py-4 px-6 flex items-center justify-between bg-[#1D3244] hover:bg-[#6D7179] transition-colors duration-300 rounded"
          >
            Your Rights
            <FontAwesomeIcon icon={openSection === 5 ? faChevronUp : faChevronDown} className="ml-2 text-lg" />
          </button>
          {openSection === 5 && (
            <div className="p-4 text-lg bg-white text-[#1D3244] rounded mt-2">
              <ul className="space-y-2">
                <li>The right to access your personal data</li>
                <li>The right to request correction of your data</li>
                <li>The right to request deletion of your data</li>
                <li>The right to withdraw consent to data processing</li>
              </ul>
            </div>
          )}
        </div>

        {/* Section 6 */}
        <div className="mb-6">
          <button
            onClick={() => handleToggle(6)}
            className="w-full text-left font-semibold text-2xl py-4 px-6 flex items-center justify-between bg-[#1D3244] hover:bg-[#6D7179] transition-colors duration-300 rounded"
          >
            Changes to This Privacy Policy
            <FontAwesomeIcon icon={openSection === 6 ? faChevronUp : faChevronDown} className="ml-2 text-lg" />
          </button>
          {openSection === 6 && (
            <div className="p-4 text-lg bg-white text-[#1D3244] rounded mt-2">
              <p>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes.</p>
            </div>
          )}
        </div>

        {/* Section 7 */}
        <div className="mb-6">
          <button
            onClick={() => handleToggle(7)}
            className="w-full text-left font-semibold text-2xl py-4 px-6 flex items-center justify-between bg-[#1D3244] hover:bg-[#6D7179] transition-colors duration-300 rounded"
          >
            Contact Us
            <FontAwesomeIcon icon={openSection === 7 ? faChevronUp : faChevronDown} className="ml-2 text-lg" />
          </button>
          {openSection === 7 && (
            <div className="p-4 text-lg bg-white text-[#1D3244] rounded mt-2">
              <p>If you have any questions or concerns about this Privacy Policy, please contact us at:</p>
              <p className="mt-4"><strong>Transit</strong></p>
              <p>Shubh Technologies</p>
              <p>Lucknow, Uttar Pradesh 226022</p>
              <p>Email: dhruv@transitco.in</p>
              <p>Phone: 9999499825</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Policy;
