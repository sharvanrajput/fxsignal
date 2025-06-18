import React from 'react'
const steps = [
  {
    number: "1",
    title: "Choose & Subscribe",
    description: "Select your preferred plan and complete the secure payment.",
  },
  {
    number: "2",
    title: "Make a Secure Payment",
    description: "Complete your payment using our trusted methods.",
  },
  {
    number: "3",
    title: "Start Trading",
    description: "Receive top-quality signals and make informed trades.",
  },
];
const Howitwork = () => {
  return (
    <>
    <section className="py-20 bg-white text-center">
      <div className=" mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">How It Works?</h2>
        <p className="text-gray-500 mb-12">
          Follow These Simple Steps To Start Receiving Expert Trading Signals And Maximize Your Market Opportunities.
        </p>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-10">
          {steps.map((step, index) => (
            <div key={index} className="relative bg-white p-8 rounded-lg  duration-300">
              {/* Background number */}
              <div className="text-[120px] md:text-[240px] font-bold text-[#C0BAA619] absolute  top-0 right-0 left-1/2 translate-x-[-50%] translate-y-[-20%] select-none">
                {step.number}
              </div>

              {/* Content */}
              <div className="relative z-10 mt-16 ">
                <h3 className="text-2xl font-bold text-light-yellow ">{step.title}</h3>
                <p className="text-sm text-gray-600 mt-2">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
      
    </>
  )
}

export default Howitwork
