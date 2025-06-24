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
import NewsList from '../news_list/page';



const page = () => {



    return (
        <>

            <section className="nesw_and_report pb-[80px]  ">
                <div className="container">
                    <div className="grid lg:grid-cols-5 grid-cols-1 gap-4">
                        <div className="col-span-3">
                            <h2 className="text-4xl bg-gradient-to-br from-heading-c1 to-heading-c2 bg-clip-text text-transparent font-bold inline-block relative before:content-[''] before:absolute before:w-[200px] before:h-[30px] before:bg-gradient-to-r before:from-yellow-100 before:to-white before:left-0 before:top-1/2 before:-translate-y-1/4 before:-z-10">Market Overview</h2>
                            <p className="text-para-dark my-5 text-lg">Stay ahead of the markets with real-time insights, expert analysis, and trending updates.</p>

                            <NewsList />


                        </div>
                        <div className="col-span-2">
                            {/* offer slider  */}
                            <Offerslider />
                            <CurencyConvertor />
                            <Topbrocker />
                            <Downloadapp />
                            <AdvertiseWithus className="mt-4" />


                        </div>
                    </div>
                </div>

            </section>

        </>
    )
}

export default page
