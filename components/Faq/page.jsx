"use client";

import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';



const FaqAccordion = ({ heading, subhead, faqs }) => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <section className='pt-20'>
        <div className="container pb-20">
          <h2 className="text-4xl mb-3 font-bold ">{heading}</h2>
          <p className="text-para-dark mb-4">
            {subhead}
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
