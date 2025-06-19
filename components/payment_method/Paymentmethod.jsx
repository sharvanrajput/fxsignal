"use client";
import React from "react";
import Image from "next/image";
import google_pay from "@/public/img/google_pay.png";
import paypal from "@/public/img/paypal.png";
import visa from "@/public/img/visa.png";
import mastercard from "@/public/img/mastercard.png";
import payment_dot_bg from "@/public/img/payment_dot_shape.png";

const Paymentmethod = () => {
    return (
        <>
            <section className=" relative overflow-hidden pb-20">
                {/* Background Dotted Effect (you can use a SVG or absolute dot pattern here) */}
                <div className="container">

                    <div className="bg-[#2F2A14] rounded-2xl p-6 md:p-10 text-white relative text-center">
                        <div className="">
                            <Image src={payment_dot_bg} alt="Google Pay" width={150} height={60} className=" shadow absolute left-0 top-0 w-[30%]  h-full z-0" />
                        </div>

                        <div className="relative z-10">
                            <h2 className="text-2xl md:text-3xl font-semibold mb-2">Payment Methods</h2>
                            <p className="text-sm md:text-base text-gray-300 mb-6">
                                Enjoy secure, fast transactions with multiple payment options, ensuring a <br className="hidden md:block" />
                                seamless and hassle-free subscription process.
                            </p>

                            <div className="flex flex-wrap justify-center items-center gap-2">
                                {/* Replace the src path below with actual image files in your public folder */}
                                <Image src={google_pay} alt="Google Pay" width={150} height={60} className=" p-2  rounded-md shadow" />
                                <Image src={paypal} alt="PayPal" width={150} height={60} className=" p-2  rounded-md shadow" />
                                <Image src={visa} alt="Visa" width={150} height={60} className=" p-2  rounded-md shadow" />
                                <Image src={mastercard} alt="Mastercard" width={150} height={60} className=" p-2  rounded-md shadow" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Paymentmethod
