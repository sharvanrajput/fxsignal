"use client"

import Image from "next/image"
import Button from "../navbutton/page"
import googleplay from "@/public/img/google_play.png"
import appStore from "@/public/img/app_store.png"
// import banner_video from "@/public/video/banner_video.mp4"




const page = () => {
    return (
        <>
            <section className="bg-banner-green px-0 py-30 md:pt-25 pb-0 ">
                <div className="max-w-9xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 ">

                    {/* Left Text Content */}
                    <div className="space-y-6 lg:ps-[110px] sm:ps-[70px] ps-[10] overflow-x-hidden self-center">
                        <h1 className="  text-3xl  md:text-4xl font-bold text-white leading-tight">
                            Unlock Forex Signals <br className="xl:block hidden" /> to&nbsp;
                            <span className=" md:h-[38px] h-[25px]   overflow-hidden   inline-block">
                                <span className="animate-slide block bg-red">
                                    <div className="bg-linear-to-r from-light-yellow to-white bg-clip-text text-transparent">Maximize Your Profits</div>
                                    <div className="bg-linear-to-r from-light-yellow to-white bg-clip-text text-transparent">Laverage Market Conditions</div>
                                    <div className="bg-linear-to-r from-light-yellow to-white bg-clip-text text-transparent">Real Time Alerts</div>
                                </span>
                            </span>
                        </h1>
                        <p className="text-para text-lg">
                            We provide cutting-edge digital services to help you grow, innovate, and lead in your industry.
                        </p>
                        <div className=" flex gap-4">
                            <Button href="" variant="primary" withicon={false}>Watch Free Signals</Button>
                            <Button href="" variant="outline" withicon={false}>Explore More</Button>
                        </div>
                        
                        

                    </div>

                    {/* Right Image */}
                    <div className="flex justify-center md:justify-end">
                        {/* <video
                            className="w-full max-w-3xl rounded-lg shadow-lg"
                            src={'./public/video/banner_video.mp4'}
                            controls={false}
                            autoPlay
                            muted
                            loop
                        /> */}

                        <video className="w-full  mix-blend-lighten" controls={false} autoPlay muted loop>
                            <source src={'/video/banner_video.mp4'} type="video/mp4" />
                        </video>

                    </div>
                </div>

            </section>
        </>
    )
}

export default page
