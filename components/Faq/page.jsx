"use client";

import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: 'Who can register as a partner?',
    answer:
      'Any licensed Forex broker looking to expand their reach and attract more traders can register as a partner with FXSignals. Our platform is designed to help brokers gain visibility and credibility among active traders.',
  },
  {
    question: 'How does FXSignals promote registered brokers?',
    answer:
      'We offer featured placements, advertising, and direct lead support to help registered brokers grow their client base efficiently.',
  },
  {
    question: 'How does FXSignals promote registered brokers?',
    answer:
      'We offer featured placements, advertising, and direct lead support to help registered brokers grow their client base efficiently.',
  },
  {
    question: 'How does FXSignals promote registered brokers?',
    answer:
      'We offer featured placements, advertising, and direct lead support to help registered brokers grow their client base efficiently.',
  },
  {
    question: 'How does FXSignals promote registered brokers?',
    answer:
      'We offer featured placements, advertising, and direct lead support to help registered brokers grow their client base efficiently.',
  },
];

const FaqAccordion = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <section>
        <div className="container pb-20">
          <h2 className="text-4xl mb-3 font-bold ">How to Get Started?</h2>
          <p className="text-para-dark mb-4">
            Joining FXSignals as a partner is quick and hassle-free.
          </p>

          <div className=" mx-auto   space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-gray-200">
                <button
                  onClick={() => toggle(index)}
                  className="w-full flex justify-between items-center py-4 text-left"
                >
                  <h3
                    className={`text-lg font-semibold ${openIndex === index ? 'text-yellow-500' : 'text-gray-900'
                      }`}
                  >
                    {faq.question}
                  </h3>
                  <span className="text-yellow-500 border border-yellow-500 rounded-full p-2">
                    {openIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                  </span>
                </button>
                <div
                  className={`transition-all duration-300 overflow-hidden ${openIndex === index ? 'max-h-50' : 'max-h-0'
                    }`}
                >
                  <p className="text-gray-600 pb-4 pr-10">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default FaqAccordion;
