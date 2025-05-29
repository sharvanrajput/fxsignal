"use client"

import React, { useState } from 'react'
import { TbCaretUpDownFilled } from "react-icons/tb";
import { CiGlobe } from "react-icons/ci";
import { MdOutlineDateRange } from "react-icons/md";
import { FaRegUser } from "react-icons/fa6";

import newsdata from "@/data/NewsandReport";
import Image from 'next/image';

import Offerslider from '@/components/offerslider/page.jsx';
import CurencyConvertor from '@/components/currencyConverter/page.jsx';
import Topbrocker from '@/components/topbrockertable/page.jsx';
import Downloadapp from '@/components/downloadapp/page.jsx';
import AdvertiseWithus from '@/components/advertiseWithUs/page.jsx';



const page = () => {

    const [active, setActive] = useState("All");

    const tabs = ["All", "Trading News", "Markets Movers", "Markets Update"];
    const [Newsrange, setNewsRange] = useState("Weekly")


    const tabsicons = {
        icon1: <CiGlobe />
    }

    // Get today's date
    const today = new Date();
    const currentdate = today.toISOString().split('T')[0]; // 'YYYY-MM-DD'

    // Get date 7 days ago
    const sevenDaysAgoDate = new Date();
    sevenDaysAgoDate.setDate(today.getDate() - 7);
    const sevendayback = sevenDaysAgoDate.toISOString().split('T')[0]; // 'YYYY-MM-DD'

    const filterednews = newsdata.filter((ele) => {
        // Match the category or "All"
        const matchCategory = active === "All" || ele.category.toLowerCase() === active.toLowerCase();

        // Match the date
        const newsDate = new Date(ele.date);
        const isToday = Newsrange === "Today" && ele.date === currentdate;

        const isWithin7Days = Newsrange === "Weekly" && newsDate >= new Date(sevendayback) && newsDate <= today;

        return matchCategory && (isToday || isWithin7Days);
    });

    const limitednews = filterednews.slice(0,4)

    const toggleRange = () => {
        if (Newsrange == "Weekly") {
            setNewsRange("Today")
        } else {
            setNewsRange("Weekly")
        }
    }

    return (
        <>

            <section className="nesw_and_report pb-[80px]  ">
                <div className="container">
                    <div className="grid lg:grid-cols-5 grid-cols-1 gap-4">
                        <div className="col-span-3">
                            <h2 className="text-4xl bg-gradient-to-br from-heading-c1 to-heading-c2 bg-clip-text text-transparent font-bold inline-block relative before:content-[''] before:absolute before:w-[200px] before:h-[30px] before:bg-gradient-to-r before:from-yellow-100 before:to-white before:left-0 before:top-1/2 before:-translate-y-1/4 before:-z-10">Market Overview</h2>
                            <p className="text-para-dark my-5 text-lg">Stay ahead of the markets with real-time insights, expert analysis, and trending updates.</p>
                            <div className="news-and-report-wraper border-2 border-gray-200/50 p-4 rounded-3xl">

                                <div className="flex justify-between">
                                    <h3 className='text-2xl font-semibold'>Market News &  Events</h3>
                                    <button onClick={toggleRange} className='flex justify-between items-center text-blue-600 text-xl font-semibold  cursor-pointer'><span>{Newsrange}</span> <TbCaretUpDownFilled /></button>
                                </div>

                                <div className="flex mt-8">
                                    {

                                        tabs.map((tab) => {
                                            return <button key={tab}
                                                onClick={() => setActive(tab)}
                                                className={`text-md cursor-pointer focus:scale-[1.03] ${active === tab ? "bg-black text-yellow-100" : "bg-[#f9f8f5]"}  px-4 py-2 me-3  rounded-full`}>{tab}</button>
                                        })
                                    }
                                </div>


                                <div className="news_box_wraper">
                                    {


                                        limitednews.map((ele, i) => {
                                            return <div className="news_box mt-4 border-b-2 border-b-gray-200/80 p-3" key={i}>
                                                <div className="rounded-lg w-fit mb-3 h-fit overflow-hidden">
                                                    <Image src={ele.thumb_nail} width={200} height={100} alt={ele.heading} />
                                                </div>
                                                <h4 className='pb-3 text-2xl font-semibold'>{ele.heading}</h4>
                                                <div className="bg-[#f1f1f1] p-3 rounded-lg">

                                                    <p className=' line-clamp-2'>{ele.para}</p>
                                                </div>
                                                <div className="date_wraper my-3 grid md:grid-cols-3 grid-cols-1">
                                                    <div className='col-span-2'>
                                                        <div className="flex items-center ">

                                                            <span className="flex items-center me-2"><MdOutlineDateRange className='me-2 text-2xl text-yellow-400 ' /> {ele.date}</span>
                                                            <span className="flex items-center me-2"><FaRegUser className='me-2 text-xl  text-yellow-400' /> {ele.admin}</span>
                                                            <span className='me-2 text-white px-4 py-1 rounded-2xl bg-gradient-to-tl from-light-yellow to-black'>{ele.type}  </span>
                                                        </div>
                                                    </div>
                                                    <div className='col-span-1 text-end'>
                                                        <a href="" className='text-blue-600 underline'>Read Full Article</a>
                                                    </div>
                                                </div>
                                            </div>
                                        })
                                    }
                                </div>




                            </div>


                        </div>
                        <div className="col-span-2">
                            {/* offer slider  */}
                             <Offerslider />
                             <CurencyConvertor />
                             <Topbrocker />
                             <Downloadapp />
                             <AdvertiseWithus />


                        </div>
                    </div>
                </div>

            </section>

        </>
    )
}

export default page
