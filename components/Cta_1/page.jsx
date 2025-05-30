
import cta1_bg from "@/public/img/cta_1_bg.png"
import cta1_right from "@/public/img/cta_1_right.png"
import Image from "next/image";
import { FaCheck } from "react-icons/fa6";

const page = () => {
    return (
        <>
            <section className="cta1 pb-[80px]">
                <div className="container">
                    <div style={{
                        backgroundImage: `linear-gradient(to right , #ffe25b33 , #ffffff00 , #ffe25b33) , url(${cta1_bg.src})`
                    }} className="overflow-hidden rounded-xl">
                        <div className="grid lg:grid-cols-2 grid-cols-1 gap-5  bg-contain bg-center  lg:px-[50px] lg:py-[30px] md:px-[25px] md:py-[20px]  p-5" >
                            <div className="grid-span-1 self-center">
                                <div className="">
                                    <h2 className="text-4xl font-bold">Trade Smarter, Earn More</h2>
                                    <p className="text-xl text-para-dark my-2">Unlock the power of expert forex signals & trade with confidence!</p>
                                    <ul className="lg:flex justify-between">
                                        <li className="flex  mt-5 "><FaCheck className="bg-light-yellow me-2 w-[30px] h-[30px] p-2 font-bold rounded-full" />  Free Trial Available</li>
                                        <li className="flex mt-5 "><FaCheck className="bg-light-yellow me-2 w-[30px] h-[30px] p-2 font-bold rounded-full" />  No Hidden Fees, No Contracts</li>
                                        <li className="flex mt-5 "><FaCheck className="bg-light-yellow me-2 w-[30px] h-[30px] p-2 font-bold rounded-full" />  Cancel Anytime</li>
                                    </ul>

                                    <div className="cta_btns gap-4">
                                        <button className="py-2 px-4 lg:w-[49%]   w-full text-center  cursor-pointer rounded-full bg-gradient-to-tl text-white text-lg mt-3 from-heading-c2 to-black active:scale-[0.98]">
                                            Get Premium Plan
                                        </button>
                                        <div className="inline-block bg-gradient-to-tl mt-3 ms-0 lg:ms-1 lg:w-[49%]  w-full  from-light-yellow to-black p-[1px] rounded-full">
                                            <button className="bg-white text-black w-full font-semibold py-2 px-4 rounded-full active:scale-[0.98] cursor-pointer">
                                                Get Basic Plan
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="grid-span-1">
                                <div className="w-full max-w-[300px] mx-auto ">
                                    <Image
                                        src={cta1_right}
                                        alt="Sample"
                                        width={600}
                                        height={400}
                                        layout="responsive"
                                    />
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
