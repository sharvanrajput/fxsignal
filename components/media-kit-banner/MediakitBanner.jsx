"use client"
import Image from 'next/image';
import Toprightarrowbutton from '@/components/button_icon/page.jsx';
import { IoCallOutline } from "react-icons/io5";
import bg_shape_1 from "@/public/img/bg_shape_1.png";
import partner_page_hero_img from "@/public/img/partner-page-hero-img.png";
import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';
import CountUp from 'react-countup';
import { FaUsers, FaGlobe, FaChartLine, FaBriefcase } from "react-icons/fa";
import mediakit_banner from "@/public/img/mediakit_banner.png"
const MediakitBanner = () => {
      const { ref, inView } = useInView({ threshold: 0.4 });
    const [hasAnimated, setHasAnimated] = useState(false);

    useEffect(() => {
        if (inView && !hasAnimated) {
            setHasAnimated(true);
        }
    }, [inView, hasAnimated]);
    return (
        <section
            className="about_banner pt-40 pb-20 bg-contain bg-center"
            style={{ backgroundImage: `url(${bg_shape_1.src})` }}
        >
            <div className="container">
                <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 mb-20">
                    <div className='self-center'>
                        <h5 className='text-light-yellow'>FXSignals Media Kit</h5>
                        <h1 className="text-4xl text-pretty font-bold">
                            Your Gateway to a Global Forex Audience
                        </h1>
                        <p className="text-para-dark text-lg py-3 mb-4">
                            Discover FXSignals’ brand essence, reach, and collaboration opportunities. Download our media resources or connect with our media team to elevate your campaign.
                        </p>
                        <Toprightarrowbutton btntext={"Know More"} />

                    </div>
                    <div>
                        <Image
                            src={mediakit_banner}
                            alt="About Banner"
                            className="w-[75%] mx-auto "
                            priority
                        />
                    </div>
                </div>

                <div
                    ref={ref}
                    className="bg-yellow-100 py-8 px-4 rounded-[30px] w-full mx-auto mt-5"
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 text-center items-center gap-4 md:gap-6">
                        <div className='relative  before:content-[""] before:h-[100%] before:w-[2px] before:right-0 before:top-0 before:bg-heading-c1 before:absolute before:sm:block before:hidden'>
                            <FaUsers className='mx-auto text-2xl' />
                            <h3 className="text-[32px] font-semibold text-[#3B371F]">
                                {hasAnimated && <CountUp end={50} duration={2} />}k+
                            </h3>
                            <p className="text-sm text-[#6B6762] mt-1">Unique Visitors</p>
                        </div>
                        <div className='relative  before:content-[""] before:h-[100%] before:w-[2px] before:right-0 before:top-0 before:bg-heading-c1 before:absolute before:lg:block before:hidden '>
                            <FaGlobe className='mx-auto text-2xl' />
                            <h3 className="text-[32px] font-semibold text-[#3B371F]">
                                {hasAnimated && <CountUp end={100}  duration={2} />}+
                            </h3>
                            <p className="text-sm text-[#6B6762] mt-1">Countries</p>
                        </div>
                        <div className='relative  before:content-[""] before:h-[100%] before:w-[2px] before:right-0 before:top-0 before:bg-heading-c1 before:absolute before:sm:block before:hidden'>
                            <FaChartLine className='mx-auto text-2xl' />
                            <h3 className="text-[32px] font-semibold text-[#3B371F]">
                                {hasAnimated && <CountUp end={150} duration={2} />}+
                            </h3>
                            <p className="text-sm text-[#6B6762] mt-1">Projects</p>
                        </div>
                        <div className='relative  '>
                            <FaBriefcase className='mx-auto text-2xl' />
                            <h3 className="text-[32px] font-semibold text-[#3B371F]">
                                {hasAnimated && <CountUp end={500} duration={2} />}+
                            </h3>
                            <p className="text-sm text-[#6B6762] mt-1">Clients</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MediakitBanner
