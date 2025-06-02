import Image from "next/image"
import Lightlogo from "@/public/img/light_logo.png"
import Link from "next/link"

import { FaLocationDot } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";

import { FaFacebookF } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { IoLogoTwitter } from "react-icons/io";


const page = () => {
    return (
        <>
            <footer className="bg-heading-c1 py-[50px]">
                <div className="container">
                    <div className="grid lg:grid-cols-10 grid-cols-1">
                        <div className="col-span-3">
                            <div className="w-full max-w-[150px] me-auto">
                                <Image
                                    src={Lightlogo}
                                    alt="Sample"
                                    width={600}
                                    height={400}
                                    layout="responsive"
                                />
                            </div>
                            <p className="text-white ">FXSignal provides high-accuracy forex signals, expert market insights, and real-time trade setups to help traders maximize their profitability. Join thousands of successful traders today!</p>
                        </div>
                        <div className="col-span-1"></div>
                        <div className="col-span-6 self-center mt-3">
                            <div className="grid lg:grid-cols-3 grid-cols-2 ">
                                <div className="col-span-1">
                                    <h5 className="text-white text-xl relative before:content-[''] before:left-0 before:bottom-0 before:h-[2px] before:translate-y-2 before:w-[50px] before:bg-light-yellow before:absolute">Quick Links</h5>
                                    <ul className="mt-5 text-para-dark">
                                        <li className="pt-2 "> <Link href={"/"}> About Us </Link></li>
                                        <li className="pt-2 "> <Link href={"/"}> Market Overview </Link></li>
                                        <li className="pt-2 "> <Link href={"/"}> Forex Live Signals </Link></li>
                                        <li className="pt-2 "> <Link href={"/"}> Pricing Plans </Link></li>
                                    </ul>
                                </div>
                                <div className="col-span-1">
                                    <h5 className="text-white text-xl relative before:content-[''] before:left-0 before:bottom-0 before:h-[2px] before:translate-y-2 before:w-[50px] before:bg-light-yellow before:absolute">Learnings</h5>
                                    <ul className="mt-5 text-para-dark">
                                        <li className="pt-2 "> <Link href={"/"}> Trading Academy </Link></li>
                                        <li className="pt-2 "> <Link href={"/"}> Forex Learnings </Link></li>
                                        <li className="pt-2 "> <Link href={"/"}> Risk Management Tips  </Link></li>
                                        <li className="pt-2 "> <Link href={"/"}> Trading Execution </Link></li>
                                        <li className="pt-2 "> <Link href={"/"}> Blogs </Link></li>
                                    </ul>
                                </div>
                                <div className="col-span-1">
                                    <h5 className="text-white text-xl relative before:content-[''] before:left-0 before:bottom-0 before:h-[2px] before:translate-y-2 before:w-[50px] before:bg-light-yellow before:absolute">Resources & Tools</h5>
                                    <ul className="mt-5 text-para-dark">
                                        <li className="pt-2 "> <Link href={"/"}> Trading Academy </Link></li>
                                        <li className="pt-2 "> <Link href={"/"}> Forex Learnings </Link></li>
                                        <li className="pt-2 "> <Link href={"/"}> Risk Management Tips  </Link></li>
                                        <li className="pt-2 "> <Link href={"/"}> Trading Execution </Link></li>
                                        <li className="pt-2 "> <Link href={"/"}> Blogs </Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="grid lg:grid-cols-10 grid-cols-1 md:mt-20 mt-10 border-b-2 border-b-neutral-500 pb-6">
                        <div className="col-span-6">
                            <div className="grid grid-cols-6">
                                <div className="sm:col-span-4  col-span-6 mt-4 ">
                                    <h3 className="text-para text-xl block">Stay Connected</h3>
                                    <ul className="">
                                        <li className="mt-3  flex"><FaLocationDot className="text-white border-2 border-gray-600 text-3xl p-1.5 rounded-full" /> <span className="ms-3 text-para-dark ">Email :  info@fxsignals.ae</span></li>
                                        <li className="mt-3  flex"><IoCall className="text-white border-2 border-gray-600 text-3xl p-1.5 rounded-full" /> <span className="ms-3  text-para-dark">Phone : +91 87XXXXXXXX </span></li>
                                    </ul>
                                </div>
                                <div className="sm:col-span-2  col-span-6 mt-4 ">
                                    <h4 className="text-para text-xl block">Stay Connected</h4>
                                    <div className="flex">

                                        <Link href={''}><FaFacebookF className="text-white border-2 border-gray-600 text-3xl p-1.5 rounded-full me-3 mt-3" /></Link>
                                        <Link href={''}><AiFillInstagram className="text-white border-2 border-gray-600 text-3xl p-1.5 rounded-full me-3 mt-3" /></Link>
                                        <Link href={''}><IoLogoTwitter className="text-white border-2 border-gray-600 text-3xl p-1.5 rounded-full me-3 mt-3" /></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-4">
                            <div className=" ">
                                <h3 className="text-white text-lg md:text-xl lg:text-end mt-3 font-medium mb-4">
                                    Subscribe To Our News Letter For Market Updates
                                </h3>

                                <form className="max-w-xl mx-auto flex flex-col sm:flex-row items-center bg-white rounded-md overflow-hidden shadow-md">
                                    <input
                                        type="email"
                                        placeholder="Enter your email"
                                        className="w-full sm:w-auto flex-grow px-4 py-3 text-gray-700 focus:outline-none"
                                    />
                                    <button
                                        type="submit"
                                        className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold px-6 py-3 lg:w-[30%] sm:w-[25%] w-full transition"
                                    >
                                        Subscribe Now
                                    </button>
                                </form>
                            </div>

                        </div>
                    </div>
                    <div className="py-10 border-b-2 border-b-neutral-500">
                        <h3 className="text-white text-xl mb-2">Risk Warning</h3>
                        <p className="text-para-dark"><strong className="text-white">Risk statement:</strong> Trading forex, cryptocurrencies, indices, and commodities are potentially high risk and may not be suitable for all investors. The high level of leverage can work both for and against traders. Before any investment in forex, cryptocurrencies, indices, and commodities you need to carefully consider your targets, previous experience, and risk level. Trading may result in the loss of your money; therefore, you should not invest capital that you cannot afford to lose.</p>
                    </div>
                    <div className=" md:flex  justify-between text-para-dark pt-8">
                        <p className="mt-5">© 2024 FX Signals. All rights reserved.</p>
                        <div className="links mt-5">

                            <Link href={''} className="px-5 md:text-xl inline-block text-sm  relative before:absolute before:content-[''] before:right-0 before:bottom-0 before:h-[100%] before:w-[2px] before:bg-para-dark">Media Kit</Link>
                            <Link href={''} className="px-5 md:text-xl inline-block text-sm  relative before:absolute before:content-[''] before:right-0 before:bottom-0 before:h-[100%] before:w-[2px] before:bg-para-dark">Terms & Conditions</Link>
                            <Link href={''} className="px-5 md:text-xl inline-block text-sm  relative before:absolute before:content-[''] before:right-0 before:bottom-0 before:h-[100%] before:w-[2px] before:bg-para-dark">Privacy Policy</Link>
                            <Link href={''} className="px-5 md:text-xl inline-block text-sm ">Disclaimer</Link>
                        </div>
                    </div>
                </div>
            </footer >
        </>
    )
}

export default page
