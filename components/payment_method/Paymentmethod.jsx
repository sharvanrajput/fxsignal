"use client";
import React from "react";
import Image from "next/image";
import google_pay from "@/public/img/google_pay.png";
import paypal from "@/public/img/paypal.png";
import visa from "@/public/img/visa.png";
import mastercard from "@/public/img/mastercard.png";

const Paymentmethod = () => {
    return (
        <>
            <section className=" relative overflow-hidden pb-20">
                {/* Background Dotted Effect (you can use a SVG or absolute dot pattern here) */}
                <div className="container">

                    <div className="bg-[#2F2A14] rounded-2xl p-6 md:p-10 text-white text-center">
                        <div className="absolute left-0 top-0 w-1/2 h-full z-0">
                            {/* Optional: Add pattern/dots here */}  
                        </div>

                        <div className="relative z-10">
                            <h2 className="text-2xl md:text-3xl font-semibold mb-2">Payment Methods</h2>
                            <p className="text-sm md:text-base text-gray-300 mb-6">
                                Enjoy secure, fast transactions with multiple payment options, ensuring a <br className="hidden md:block" />
                                seamless and hassle-free subscription process.
                            </p>

                            <div className="flex flex-wrap justify-center items-center gap-4">
                                {/* Replace the src path below with actual image files in your public folder */}
                                <Image src={google_pay} alt="Google Pay" width={150} height={60} className="bg-white p-2 aspect-3/2 rounded-md shadow" />
                                <Image src={paypal} alt="PayPal" width={150} height={60} className="bg-white p-2 aspect-3/2 rounded-md shadow" />
                                <Image src={visa} alt="Visa" width={150} height={60} className="bg-white p-2 aspect-3/2 rounded-md shadow" />
                                <Image src={mastercard} alt="Mastercard" width={150} height={60} className="bg-white p-2 aspect-3/2 rounded-md shadow" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Paymentmethod
