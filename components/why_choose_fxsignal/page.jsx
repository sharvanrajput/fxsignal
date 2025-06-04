"use client";
import Image from "next/image";
import whychoose1 from "@/public/img/why_choose_1.png"
import whychoose2 from "@/public/img/why_choose_2.png"
import whychoose3 from "@/public/img/why_choose_3.png"
import whychoose4 from "@/public/img/why_choose_4.png"
import whychoose5 from "@/public/img/why_choose_5.png"
import whychoose6 from "@/public/img/why_choose_6.png"


const page = () => {
    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-4">
                    Why Choose FXSignals?
                </h2>
                <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
                    At FXSignals, we go beyond just providing trade signals—we equip
                    traders and brokers with the tools and insights needed to excel in
                    the competitive forex market. Here’s why we stand out:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">

                    <div className=" p-6 text-center  transition-shadow xl:px-20 md:px-10 py-10 bg-white relative after:absolute after:content-[''] after:h-[2px] after:w-[100%] after:bottom-0 after:left-0 after:bg-gray-300 before:absolute before:content-[''] before:h-[100%] before:w-[2px] before:right-0 before:top-0 before:bg-gray-300 before:md:block before:hidden">
                        <div className="flex justify-center mb-4">
                            <Image src={whychoose1} alt="" width={40} height={40} />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">
                            Proven Accuracy
                        </h3>
                        <p className=" text-gray-600">
                            High-performance trade signals with real-time execution.
                        </p>
                    </div>
                    <div className=" p-6 text-center  transition-shadow xl:px-20 md:px-10 py-10 bg-white relative after:absolute after:content-[''] after:h-[2px] after:w-[100%] after:bottom-0 after:left-0 after:bg-gray-300 before:absolute before:content-[''] before:h-[100%] before:w-[2px] before:right-0 before:top-0 before:bg-gray-300 before:md:hidden before:lg:block before:hidden">
                        <div className="flex justify-center mb-4">
                            <Image src={whychoose2} alt="" width={40} height={40} />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">
                            Expert Analysts
                        </h3>
                        <p className=" text-gray-600">
                            Backed by professional traders & market experts.
                        </p>
                    </div>
                    <div className=" p-6 text-center  transition-shadow xl:px-20 md:px-10 py-10 bg-white relative after:absolute after:content-[''] after:h-[2px] after:w-[100%] after:bottom-0 after:left-0 after:bg-gray-300  before:absolute before:content-[''] before:h-[100%] before:w-[2px] before:right-0 before:top-0 before:bg-gray-300 before:md:block before:lg:hidden before:hidden">
                        <div className="flex justify-center mb-4">
                            <Image src={whychoose3} alt="" width={40} height={40} />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">
                            24/5 Market Coverage
                        </h3>
                        <p className=" text-gray-600">
                            Signals for Forex, Crypto, Commodities, Stocks, and Indices.
                        </p>
                    </div>
                    <div className=" p-6 text-center  transition-shadow xl:px-20 md:px-10 py-10 bg-white relative after:absolute after:content-[''] after:h-[2px] after:w-[100%] after:bottom-0 after:left-0 after:bg-gray-300 after:lg:hidden after:block  before:absolute before:content-[''] before:h-[100%] before:w-[2px] before:right-0 before:top-0 before:bg-gray-300 before:md:hidden before:lg:block before:hidden">
                        <div className="flex justify-center mb-4">
                            <Image src={whychoose4} alt="" width={40} height={40} />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">
                            Risk Management Tools
                        </h3>
                        <p className=" text-gray-600">
                            Helping traders minimize losses and maximize profits.
                        </p>
                    </div>
                    <div className=" p-6 text-center  transition-shadow xl:px-20 md:px-10 py-10 bg-white relative after:absolute after:content-[''] after:h-[2px] after:w-[100%] after:bottom-0 after:left-0 after:bg-gray-300 after:md:hidden after:block  before:absolute before:content-[''] before:h-[100%] before:w-[2px] before:right-0 before:top-0 before:bg-gray-300 before:md:block before:hidden">
                        <div className="flex justify-center mb-4">
                            <Image src={whychoose5} alt="" width={40} height={40} />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">
                            Seamless Integration
                        </h3>
                        <p className=" text-gray-600">
                            Works with top forex brokers & trading platforms.
                        </p>
                    </div>
                    <div className=" p-6 text-center  transition-shadow xl:px-20 md:px-10 py-10 bg-white relative after:absolute after:content-[''] after:h-[2px] after:w-[100%] after:bottom-0 after:left-0 after:bg-gray-300 after:md:hidden after:block  ">
                        <div className="flex justify-center mb-4">
                            <Image src={whychoose6} alt="" width={40} height={40} />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">
                            Engaging Trader Community
                        </h3>
                        <p className=" text-gray-600">
                            Connect, share insights, and stay ahead with real-time market discussions.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default page