import React from 'react'

import { useState } from "react";

const FAQ = () => {
  const faqData = [
    {
      question: "What services does this platform offer?",
      answer: "Our platform allows you to compare prices, travel times, and service options from multiple cab providers, helping you make the best choice for your travel needs.",
    },
    {
      question: "Do I need an account to compare cab services?",
      answer: "No, you don’t need an account to view and compare prices and options. However, signing up provides access to additional features like saved preferences and recent search history.",
    },
    {
      question: "Can I book a cab directly through this platform?",
      answer: "We are a comparison platform only, so we don’t handle bookings. Once you've chosen the best option, you’ll be directed to the provider’s app or website for booking.",
    },
    {
      question: "How accurate is the pricing information?",
      answer: "We strive to display the latest pricing and travel time estimates directly from the cab providers. However, final prices may vary based on real-time demand and availability.",
    },
    {
      question: "Are there any additional fees for using this platform?",
      answer: "No, our service is completely free for users. We provide comparisons at no additional cost.",
    },
  ];

  return (
    <section id="faq" className="py-10 px-4">
      <div className="faq-wrapper bg-white/80 shadow-lg rounded-lg p-6 mb-4 max-w-3xl mx-auto">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqData.map((item, index) => (
            <FAQItem key={index} question={item.question} answer={item.answer} />
          ))}
        </div>
      </div>
    </section>
  );
};

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-gray-300 rounded-lg shadow-sm mb-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left px-4 py-3 bg-gray-800 text-white font-medium rounded-t-lg focus:outline-none"
      >
        {question}
      </button>
      {isOpen && (
        <div className="px-4 py-3 text-gray-700 bg-white">
          {answer}
        </div>
      )}
    </div>
  );
};

export default FAQ;
