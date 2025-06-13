import Image from "next/image";
import partner_page_hero_img from "@/public/img/partner_started.png";
import getstarted_icon_1 from "@/public/img/getstarted_icon_1.png";
import getstarted_icon_2 from "@/public/img/getstarted_icon_2.png";
import getstarted_icon_3 from "@/public/img/getstarted_icon_3.png";
import getstarted_icon_4 from "@/public/img/getstarted_icon_4.png";

const PartnerGetStarted = () => {
    return (
        <section className="pb-20">
            <div className="container">
                <h2 className="text-4xl mb-3 font-bold ">How to Get Started?</h2>
                <p className="text-para-dark mb-5">
                    Joining FXSignals as a partner is quick and hassle-free.
                </p>
                <div className="grid xl:grid-cols-5 grid-cols-1 gap-10">
                    <div className="xl:col-span-2 col-span-1">
                        <Image src={partner_page_hero_img} alt="Partner Get Started" className="w-full h-auto" />
                    </div>
                    <div className="xl:col-span-3 col-span-1 flex flex-col justify-center md:px-5 px-0">
                        <div className="mb-5">
                            <div className="bg-[#fdf9eb] rounded-xl p-6 md:p-10  mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 shadow-sm border border-[#f3ead1]">

                                <div className="relative pr-4 before:content-[''] before:absolute before:top-0 before:right-0 before:rounded-[50%] before:w-[3px] before:h-full before:bg-[#f2e9cc]">
                                    <span className="absolute top-0 left-0 text-[72px] text-[#f2e9cc] font-bold leading-none -mt-2 -ml-2 select-none">
                                        01
                                        <Image
                                            src={getstarted_icon_1}
                                            alt="Register"
                                             className="w-10 h-10 mt-1 translate-x-[30%] translate-y-[-50%]"
                                        />
                                    </span>

                                    <div className="relative z-10 mt-30 flex items-start gap-3">

                                        <div>
                                            <h3 className="font-semibold text-2xl text-gray-900 mb-1">
                                                Register Your Brokerage
                                            </h3>
                                            <p className="text-sm text-gray-500">
                                                Sign up and submit your details on our platform.
                                            </p>
                                        </div>
                                    </div>
                                </div>


                                <div className="relative pl-4">
                                    <span className="absolute top-0 left-0 text-[72px] text-[#f2e9cc] font-bold leading-none -mt-2 -ml-2 select-none">
                                        02
                                        <Image
                                            src={getstarted_icon_2}
                                            alt="Get Approved"
                                             className="w-10 h-10 mt-1 translate-x-[30%] translate-y-[-50%]"
                                        />
                                    </span>
                                    <div className="relative z-10 mt-30 flex items-start gap-3">

                                        <div>
                                            <h3 className="font-semibold text-2xl text-gray-900 mb-1">Get Approved</h3>
                                            <p className="text-sm text-gray-500">
                                                Our team verifies your brokerage to ensure credibility.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="">
                            <div className="bg-[#fdf9eb] rounded-xl p-6 md:p-10 max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 shadow-sm border border-[#f3ead1]">
                                {/* Step 1 */}
                                <div className="relative pr-4 before:content-[''] before:absolute before:top-0 before:right-0 before:rounded-[50%] before:w-[3px] before:h-full before:bg-[#f2e9cc]">
                                    <span className="absolute top-0 left-0 text-[72px] text-[#f2e9cc] font-bold leading-none -mt-2 -ml-2 select-none">
                                        01
                                        <Image
                                            src={getstarted_icon_3}
                                            alt="Register"
                                             className="w-10 h-10 mt-1 translate-x-[30%] translate-y-[-50%]"
                                        />
                                    </span>

                                    <div className="relative z-10 mt-30 flex items-start gap-3">

                                        <div>
                                            <h3 className="font-semibold text-2xl text-gray-900 mb-1">
                                                Register Your Brokerage
                                            </h3>
                                            <p className="text-sm text-gray-500">
                                                Sign up and submit your details on our platform.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Step 2 */}
                                <div className="relative pl-4">
                                    <span className="absolute top-0 left-0 text-[72px] text-[#f2e9cc] font-bold leading-none -mt-2 -ml-2 select-none">
                                        02
                                        <Image
                                            src={getstarted_icon_4}
                                            alt="Get Approved"
                                            className="w-10 h-10 mt-1 translate-x-[30%] translate-y-[-50%]"
                                        />
                                    </span>
                                    <div className="relative z-10 flex mt-30 items-start gap-3">

                                        <div>
                                            <h3 className="font-semibold text-2xl text-gray-900 mb-1">Get Approved</h3>
                                            <p className="text-sm text-gray-500">
                                                Our team verifies your brokerage to ensure credibility.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>




            </div>
        </section>
    );
};

export default PartnerGetStarted;
