"use client";
import Team_bg from "@/public/img/Team_bg.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import Image from "next/image";

const teamMembers = [
    {
        profile: "/img/user1.png",
        name: "Rekha Sharma",
        role: "Signal Manager",
        description:
            "Rekha Sharma, an expert in currency market research and analysis, empowers traders for success.",

    },
    {
        profile: "/img/user2.png",
        name: "Ruchit Thakur",
        role: "Signal Manager",
        description:
            "Ruchit Thakur, a Market Research Analyst, provides key insights in currency and commodities trading.",

    },
    {
        profile: "/img/user3.png",
        name: "Rajesh",
        role: "Signal Manager",
        description:
            "Rajesh, a Market Analyst, specializes in currencies, commodities, and trends, guiding informed investments.",

    },
    {
        profile: "/img/user3.png",
        name: "Rohit Tiko",
        role: "Content Editor",
        description:
            "Rekha Sharma, an expert in currency market research and analysis, empowers traders for success.",

    },
    {
        profile: "/img/user3.png",
        name: "Rohit Tiko",
        role: "Content Editor",
        description:
            "Rekha Sharma, an expert in currency market research and analysis, empowers traders for success.",

    },
];
const page = () => {


    return (
        <>
            <section
                className="meat_outteam    " style={{
                    backgroundImage: `linear-gradient(to right,rgba(35, 31, 12), rgba(35, 31, 12)) `
                }}>
                <div className="py-[80px] bg-bottom bg-cover bg-no-repeat" style={{
                    backgroundImage: ` url(${Team_bg.src})`
                }}>

                    <div className="container"    >
                        <h2 className="mb-5 bg-gradient-to-r font-bold from-white to-light-yellow text-transparent bg-clip-text text-3xl">Meet Our Team - The Experts Behind FXSignals</h2>
                        <p className="text-para-dark">At FXSignals, we take pride in our skilled professionals who work relentlessly to deliver accurate market insights, powerful trading strategies, and brokerage solutions. While we maintain their privacy, their expertise drives our success.</p>
                        <div className=" py-10">
                            <Swiper
                                modules={[Autoplay]}
                                spaceBetween={20}
                                slidesPerView={1}
                                autoplay={{ delay: 1000, disableOnInteraction: false }}
                                breakpoints={{
                                    640: { slidesPerView: 1.2 },
                                    768: { slidesPerView: 2 },
                                    1024: { slidesPerView: 3 },
                                    1280: { slidesPerView: 3.5 },
                                }}
                                className="px-6"
                            >
                                {teamMembers.map((member, idx) => (
                                    <SwiperSlide key={idx}>
                                        <div className="bg-[#1e1c0e00] hover:bg-team-hover group border border-white/20 rounded-xl p-6 text-center text-white min-h-[340px] flex flex-col justify-start items-center">
                                            <Image
                                                src={member.profile}
                                                alt={member.name}
                                                width={100}
                                                height={100}
                                                className="rounded-full mb-4"
                                            />
                                            <h3 className="text-2xl group-hover:text-black font-semibold text-white">
                                                {member.name}
                                            </h3>
                                            <p className="text-yellow-400 group-hover:text-gray-400 text-sm font-medium mb-2">
                                                {member.role}
                                            </p>
                                            <p className="text-gray-200 group-hover:text-para-dark text-sm">{member.description}</p>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>

                    </div>
                </div>

            </section>
        </>
    )
}

export default page
