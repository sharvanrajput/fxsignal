"use client"

import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Image from 'next/image'

// Icons
import { FaGlobe, FaMoneyBillWave, FaBullhorn } from "react-icons/fa";
import { FaChartLine } from "react-icons/fa6";
import { MdOutlineDateRange } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { TbCaretUpDownFilled } from "react-icons/tb";
import { useGetNewsQuery } from '@/services/newsreportSlice';
import Link from 'next/link';

const NewsList = () => {

    const [active, setActive] = useState("All");
    const [newsRange, setNewsRange] = useState("Today");

    const { data, isLoading } = useGetNewsQuery();
    const newsData = data?.news || []; // ✅ FIXED LINE





    const tabs = [
        { label: "All", icon: <FaGlobe /> },
        { label: "Trading News", icon: <FaChartLine className="text-blue-500" /> },
        { label: "Market Movers", icon: <FaMoneyBillWave className="text-green-500" /> },
        { label: "Market Updates", icon: <FaBullhorn className="text-red-500" /> },
    ];


    // Date filter setup
    const today = new Date();
    const todayDate = today.toISOString().split('T')[0];

    const sevenDaysAgo = new Date();
    sevenDaysAgo.setDate(today.getDate() - 7);
    const weekStartDate = sevenDaysAgo.toISOString().split('T')[0];

    // Date filter logic
    const isInDateRange = (dateStr) => {
        const date = new Date(dateStr).toISOString().split('T')[0];
        if (newsRange === "Today") return date === todayDate;
        if (newsRange === "Weekly") return date >= weekStartDate && date <= todayDate;
        return true;
    };

    // Filter by category and date
    const filteredNews = newsData.filter((item) => {
        const categoryMatch = active === "All" || item.news_type_name?.toLowerCase() === active.toLowerCase();
        return categoryMatch;
    });



    // Toggle range button
    const toggleRange = () => {
        setNewsRange((prev) => (prev === "Today" ? "Weekly" : "Today"));
    };

    if (isLoading) return <div className='loading'></div>;

    return (
        <div className="py-6 px-3 lg:px-6 border-2 border-gray-200 rounded-2xl">
            {/* Header */}
            <div className="flex justify-between items-center mb-5">
                <h2 className="text-2xl font-semibold">Market News & Events</h2>
                <button
                    onClick={toggleRange}
                    className="text-blue-500 flex items-center gap-1 font-medium text-sm"
                >
                    {newsRange} <TbCaretUpDownFilled />
                </button>
            </div>

            {/* Filter Tabs */}
            <div className="flex flex-wrap gap-3 mb-6">
                {tabs.map((tab) => (
                    <button
                        key={tab.label}
                        onClick={() => setActive(tab.label)}
                        className={`flex items-center gap-2 cursor-pointer px-4 py-2 rounded-full text-sm font-medium transition-all
              ${active === tab.label ? 'bg-[#3c2f00] text-white' : 'bg-gray-100 text-black'}`}
                    >
                        {tab.label} {tab.icon}
                    </button>
                ))}
            </div>

            {/* Scrollable News List */}
            <div className="h-[1100px] overflow-y-scroll mt-4 pr-2">
                {(
                    filteredNews.map((ele, index) => (
                        <div key={index} className="mb-6 border-b border-b-gray-300 pb-4">
                            {/* Image */}
                            <div className="w-full md:w-[200px] h-auto overflow-hidden mb-2 rounded-lg">
                                <Image
                                    src={`${process.env.NEXT_PUBLIC_BASEURL}/uploads/news/${ele.news_image}`}
                                    width={200}
                                    height={100}
                                    className="w-full h-auto object-cover rounded-lg"
                                    alt="news"
                                />
                            </div>

                            {/* Title */}
                            <Link href={`newsdetail/${ele.title.toLowerCase().split(" ").join("-")}`}>
                                <h4 className="text-xl font-bold mb-2 cursor-pointer">{ele.title}</h4>



                                {/* Description */}
                                <p className="bg-gray-100 p-3 pb-1 rounded mb-2 line-clamp-2">
                                    {ele.news_desc?.replace(/<[^>]+>/g, '').replace(/&[^;]+;/g, '')}
                                </p>
                            </Link>
                            {/* Meta Info */}
                            <div className="text-sm text-gray-600 flex flex-wrap gap-4 items-center">
                                <span className="flex items-center">
                                    <MdOutlineDateRange className="mr-1 text-yellow-400" />
                                    {ele.created_at.split('T')[0]}
                                </span>
                                <span className="flex items-center">
                                    <FaRegUser className="mr-1 text-yellow-400" />
                                    {ele.author_name}
                                </span>
                                <span className="text-white px-4 py-1 rounded-2xl bg-gradient-to-tl from-light-yellow to-black">
                                    {ele.news_type_name}
                                </span>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default NewsList;
