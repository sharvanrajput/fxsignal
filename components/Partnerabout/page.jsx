"use client";


import Image from 'next/image';

import Toprightarrowbutton from '@/components/button_icon/page.jsx';
import { IoCallOutline } from "react-icons/io5";
import bg_shape_1 from "@/public/img/bg_shape_1.png";
import partner_page_hero_img from "@/public/img/partner-page-hero-img.png";

const PartnerAbout = () => {

    return (
        <section
            className="about_banner pt-[150px] pb-[50px] bg-contain bg-center"
            style={{ backgroundImage: `url(${bg_shape_1.src})` }}
        >
            <div className="container">
                <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
                    <div className='self-center'>
                        <h1 className="text-4xl text-pretty font-bold">
                           Partner with FXSignals & 
                            <span className="text-light-yellow"> Grow Your Business</span>
                        </h1>
                        <p className="text-para-dark text-lg py-3 mb-4">
                           Expand your reach, attract more traders, and maximize your revenue with our exclusive partner and brokerage solutions.
                        </p>
                        <Toprightarrowbutton btntext={"Register as Partner"} />
                        <p className='text-para-dark flex items-center mt-4 '>
                            <IoCallOutline className='me-2' /> For equerries call: +971 503056430
                        </p>
                    </div>
                    <div>
                        <Image
                            src={partner_page_hero_img}
                            alt="About Banner"
                            className="w-[75%] mx-auto "
                            priority
                        />
                    </div>
                </div>

            
            </div>
        </section>
    );
};

export default PartnerAbout;
