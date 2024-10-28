import React, { useState } from "react";
import image from "../assets/FAQ/FAQ.png";

const FAQ = () => {
  const faqData = [
    {
      question: "What services does this platform offer?",
      answer:
        "Our platform allows you to compare prices, travel times, and service options from multiple cab providers, helping you make the best choice for your travel needs.",
    },
    {
      question: "Do I need an account to compare cab services?",
      answer:
        "No, you don’t need an account to view and compare prices and options. However, signing up provides access to additional features like saved preferences and recent search history.",
    },
    {
      question: "Can I book a cab directly through this platform?",
      answer:
        "We are a comparison platform only, so we don’t handle bookings. Once you've chosen the best option, you’ll be directed to the provider’s app or website for booking.",
    },
    {
      question: "How accurate is the pricing information?",
      answer:
        "We strive to display the latest pricing and travel time estimates directly from the cab providers. However, final prices may vary based on real-time demand and availability.",
    },
    {
      question: "Are there any additional fees for using this platform?",
      answer:
        "No, our service is completely free for users. We provide comparisons at no additional cost.",
    },
  ];

  return (
    <>
      <h2 className="text-3xl font-serif text-center text-white mb-4">
        Frequently Asked Questions
      </h2>
      <section id="faq" className="py-4 px-6">
        <div className="faq-wrapper w-[95%] bg-[#6D7179] bg-opacity-50 shadow-lg rounded-lg p-8 mb-8 mx-auto flex flex-col lg:flex-row gap-4">
          <div className="flex-shrink-0 w-full lg:w-1/3">
            <img
              src={image}
              alt="FAQ Illustration"
              className="w-full h-auto rounded-lg"
            />
          </div>
          <div className="flex-grow space-y-4 w-full lg:w-2/3">
            {faqData.map((item, index) => (
              <FAQItem
                key={index}
                question={item.question}
                answer={item.answer}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full mx-auto lg:w-3/4 rounded-lg shadow-lg mb-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left px-4 py-3 bg-[#1D3244] text-white font-medium rounded-t-lg flex items-center justify-between focus:outline-none"
      >
        {question}
      </button>
      {isOpen && (
        <div className="px-4 py-3 text-white bg-[#6D7179]">{answer}</div>
      )}
    </div>
  );
};

export default FAQ;
