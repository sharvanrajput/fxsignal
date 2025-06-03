"use client";

import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import CountUp from 'react-countup';
import Toprightarrowbutton from '@/components/button_icon/page.jsx';
import { IoCallOutline } from "react-icons/io5";
import bg_shape_1 from "@/public/img/bg_shape_1.png";
import about_banner_right from "@/public/img/about_banner_right.png";

const Page = () => {
    const { ref, inView } = useInView({ threshold: 0.3 });
    const [hasAnimated, setHasAnimated] = useState(false);

    useEffect(() => {
        if (inView && !hasAnimated) {
            setHasAnimated(true);
        }
    }, [inView, hasAnimated]);

    return (
        <section
            className="about_banner pt-[150px] pb-[50px] bg-contain bg-center"
            style={{ backgroundImage: `url(${bg_shape_1.src})` }}
        >
            <div className="container">
                <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
                    <div className='self-center'>
                        <h1 className="text-4xl font-bold">
                            Empowering Traders with Accurate & <br />
                            <span className="text-light-yellow">Profitable Forex Signals</span>
                        </h1>
                        <p className="text-para-dark text-lg py-3 mb-4">
                            FXSignals is your trusted partner for real-time trading insights, helping traders maximize profits and minimize risks.
                        </p>
                        <Toprightarrowbutton btntext={"Get started"} />
                        <p className='text-para-dark flex items-center mt-4 '>
                            <IoCallOutline className='me-2' /> For equerries call: +971 503056430
                        </p>
                    </div>
                    <div>
                        <Image
                            src={about_banner_right}
                            alt="About Banner"
                            className="w-full aspect-3/2"
                            priority
                        />
                    </div>
                </div>

                {/* Counter Section */}
                <div
                    ref={ref}
                    className="bg-yellow-100 py-8 px-4 rounded-[30px] w-full mx-auto mt-5"
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 text-center items-center gap-4 md:gap-6">
                        <div className='relative before:content-[""] before:h-[100%] before:w-[2px] before:right-0 before:top-0 before:bg-heading-c1 before:absolute before:sm:block before:hidden'>
                            <h3 className="text-[32px] font-semibold text-[#3B371F]">
                                {hasAnimated && <CountUp end={1000} duration={2} />}+
                            </h3>
                            <p className="text-sm text-[#6B6762] mt-1">Acquired 1000+ subscribers</p>
                        </div>
                        <div className='relative before:content-[""] before:h-[100%] before:w-[2px] before:right-0 before:top-0 before:bg-heading-c1 before:absolute before:lg:block before:hidden '>
                            <h3 className="text-[32px] font-semibold text-[#3B371F]">
                                {hasAnimated && <CountUp end={4.5} decimals={1} duration={2} />} /5
                            </h3>
                            <p className="text-sm text-[#6B6762] mt-1">Customer Satisfaction Rate</p>
                        </div>
                        <div className='relative before:content-[""] before:h-[100%] before:w-[2px] before:right-0 before:top-0 before:bg-heading-c1 before:absolute before:sm:block before:hidden'>
                            <h3 className="text-[32px] font-semibold text-[#3B371F]">
                                {hasAnimated && <CountUp end={1000} duration={2} />}M+
                            </h3>
                            <p className="text-sm text-[#6B6762] mt-1">Average Trade Size</p>
                        </div>
                        <div className='relative '>
                            <h3 className="text-[32px] font-semibold text-[#3B371F]">
                                {hasAnimated && <CountUp end={3} duration={2} />}+
                            </h3>
                            <p className="text-sm text-[#6B6762] mt-1">Additional Languages</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Page;
