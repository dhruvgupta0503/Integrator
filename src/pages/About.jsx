import React from 'react';
import aboutUsImage from '../assets/About/aboutus.png'; 

const About = () => {
  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-6 mt-16" style={{ backgroundColor: '#1D3244' }}>
      <div className="bg-[#6D7179] bg-opacity-50 shadow-2xl rounded-3xl p-10 flex flex-col md:flex-row items-center max-w-6xl mx-auto space-y-8 md:space-y-0 md:space-x-10">
        
       
        <div className="flex-1 space-y-8 text-white">
          <h1 className="text-4xl font-extrabold text-white">About Us</h1>
          
          <section className="space-y-4">
            <p className="leading-relaxed text-lg text-white">
              Welcome to <span className="font-semibold">Transit</span>, the one-stop platform for comparing rides across major cab providers. Our mission is to empower users with information and transparency, helping you find the most cost-effective, convenient rides that suit your needs.
            </p>
           
            <div className="flex justify-center mt-6">
              <svg width="100" height="100" className="text-white">
                <circle cx="50" cy="50" r="45" stroke="white" strokeWidth="5" fill="transparent" />
                <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fontSize="20" fill="white">75%</text>
              </svg>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">Our Vision</h2>
            <p className="leading-relaxed text-lg text-white">
              We aim to make ride choices easier and more transparent for users in today's fast-paced world. Our platform ensures accessibility and reliability.
            </p>
            
            <div className="flex justify-center mt-6">
              <svg width="200" height="100" className="text-white">
                <line x1="0" y1="80" x2="50" y2="40" stroke="white" strokeWidth="4"/>
                <line x1="50" y1="40" x2="100" y2="60" stroke="white" strokeWidth="4"/>
                <line x1="100" y1="60" x2="150" y2="20" stroke="white" strokeWidth="4"/>
                <line x1="150" y1="20" x2="200" y2="50" stroke="white" strokeWidth="4"/>
              </svg>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">Why Choose Us?</h2>
            <ul className="list-disc list-inside space-y-2 text-lg text-white">
              <li><span className="font-semibold">Transparency:</span> Real-time information from trusted cab services.</li>
              <li><span className="font-semibold">Simplicity:</span> User-friendly interface to streamline decision-making.</li>
              <li><span className="font-semibold">Efficiency:</span> Instant access to fare and availability details.</li>
            </ul>
          
            <div className="flex justify-center mt-6">
              <svg width="200" height="100" className="text-white">
                <rect x="20" y="50" width="30" height="50" fill="white" />
                <rect x="70" y="30" width="30" height="70" fill="white" />
                <rect x="120" y="20" width="30" height="80" fill="white" />
                <rect x="170" y="60" width="30" height="40" fill="white" />
              </svg>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">Contact Us</h2>
            <p className="leading-relaxed text-lg text-white">
              Have questions or feedback? We’d love to hear from you! Reach out via our <a href="/contact" className="underline text-white">Contact Us</a> page.
            </p>
          </section>
        </div>
        
       
        <div className="flex-1">
          <img src={aboutUsImage} alt="About Us" className="w-full rounded-3xl shadow-lg object-cover" />
        </div>
      </div>
    </div>
  );
}

export default About;