import { FaCheck } from "react-icons/fa6";

const page = () => {
    return (
        <>
            <section className="pricing bg-topbrocker-head py-[80px]">
                <div className="container">
                    <h2 className="text-4xl  bg-clip-text text-transparent font-bold inline-block relative bg-gradient-to-l from-yellow-200 to-white before:left-0 before:top-1/2 before:-translate-y-1/4 before:-z-10">Choose the Right Plan for Your Trading Success</h2>
                    <p className="text-para-dark my-5 text-xl">Find a plan that fits your trading needs, whether you're a beginner or a seasoned trader. Gain access to expert forex signals, real-time market insights, and premium trading strategies.</p>
                    <div className="grid md:grid-cols-8 lg:grid-cols-14  lg:gap-5 gap-4 ">
                        <div className="  md:col-span-4 lg:col-span-4">
                            <div className="prise_card bg-white   self-center h-full p-5 rounded-2xl">
                                <h3 className="text-2xl font-bold">Basic Plan</h3>
                                <p>Ideal for beginners seeking a simple forex strategy.</p>
                                <p><span className="text-4xl font-bold">AED 99</span><span>/ month</span></p>
                                <ul>
                                    <li className="flex mt-5"><FaCheck className="bg-yellow-200 me-2 w-[30px] h-[30px] p-2 font-bold rounded-full" />Access to 5-7 high-quality signals per week</li>
                                    <li className="flex mt-5"><FaCheck className="bg-yellow-200 me-2 w-[30px] h-[30px] p-2 font-bold rounded-full" />Signals with entry, exit, and stop-loss levels</li>
                                    <li className="flex mt-5"><FaCheck className="bg-yellow-200 me-2 w-[30px] h-[30px] p-2 font-bold rounded-full" />Suitable for traders looking to test the waters</li>
                                    <li className="flex mt-5"><FaCheck className="bg-yellow-200 me-2 w-[30px] h-[30px] p-2 font-bold rounded-full" />Email & Telegram notifications</li>
                                </ul>
                                <div className="inline-block bg-gradient-to-tl w-full mt-5 from-light-yellow to-black p-[1px] rounded-full">
                                    <button className="bg-white text-black w-full font-semibold py-2 px-4 rounded-full active:scale-[0.98] cursor-pointer">
                                        Get Basic Plan
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className=" md:col-span-4 lg:col-span-6 ">
                            <div className="prise_card bg-yellow-200 lg:scale-105 self-center   h-full  p-5 rounded-2xl">
                                <h3 className="text-2xl font-bold">Premium Plan</h3>
                                <p>Perfect for active traders seeking high-accuracy signals.</p>
                                <p><span className="text-4xl font-bold"> AED 199</span><span>/ month</span></p>
                                <ul>
                                    <li className="flex mt-5"><FaCheck className="bg-black me-2 text-white w-[30px] h-[30px] p-2 font-bold rounded-full" />Access to 15-20 premium forex signals per week</li>
                                    <li className="flex mt-5"><FaCheck className="bg-black me-2 text-white w-[30px] h-[30px] p-2 font-bold rounded-full" />Real-time notifications via Telegram & Email</li>
                                    <li className="flex mt-5"><FaCheck className="bg-black me-2 text-white w-[30px] h-[30px] p-2 font-bold rounded-full" />Signals cover major, minor, and exotic pairs</li>
                                    <li className="flex mt-5"><FaCheck className="bg-black me-2 text-white w-[30px] h-[30px] p-2 font-bold rounded-full" />Market insights & weekly trade analysis</li>
                                    <li className="flex mt-5"><FaCheck className="bg-black me-2 text-white w-[30px] h-[30px] p-2 font-bold rounded-full" />24/7 Customer Support</li>

                                </ul>

                                <button className="py-2 px-4 w-full text-center  cursor-pointer rounded-full bg-gradient-to-tl text-white text-lg mt-3 from-heading-c2 to-black active:scale-[0.98]">
                                    Get Premium Plan
                                </button>

                            </div>
                        </div>

                        <div className="  md:col-span-4 lg:col-span-4">
                            <div className="prise_card bg-white    self-center h-full p-5 rounded-2xl">
                                <h3 className="text-2xl font-bold">VIP Plan</h3>
                                <p>Designed for pros seeking top accuracy and expert support.</p>
                                <p><span className="text-4xl font-bold"> AED 299</span><span>/ month</span></p>
                                <ul>
                                    <li className="flex mt-5"><FaCheck className="bg-yellow-200 me-2 w-[30px] h-[30px] p-2 font-bold rounded-full" />Unlimited premium forex signals with detailed analysis</li>
                                    <li className="flex mt-5"><FaCheck className="bg-yellow-200 me-2 w-[30px] h-[30px] p-2 font-bold rounded-full" />VIP Priority support & direct expert consultation</li>
                                    <li className="flex mt-5"><FaCheck className="bg-yellow-200 me-2 w-[30px] h-[30px] p-2 font-bold rounded-full" />Access to high-probability trade setups</li>
                                    <li className="flex mt-5"><FaCheck className="bg-yellow-200 me-2 w-[30px] h-[30px] p-2 font-bold rounded-full" />Daily market reports & strategy insights</li>
                                    <li className="flex mt-5"><FaCheck className="bg-yellow-200 me-2 w-[30px] h-[30px] p-2 font-bold rounded-full" />Advanced risk management guidance</li>

                                </ul>
                                <div className="inline-block bg-gradient-to-tl w-full mt-5 from-light-yellow to-black p-[1px] rounded-full">
                                    <button className="bg-white text-black w-full font-semibold py-2 px-4 rounded-full active:scale-[0.98] cursor-pointer">
                                        Get VIP Plan
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}

export default page
