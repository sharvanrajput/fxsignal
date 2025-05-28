"use client"

import { useState } from "react";
import Image from "next/image";
import { IoMdArrowDropup } from "react-icons/io";
import { MdOutlineWorkspacePremium } from "react-icons/md";
import Widgets1 from "@/components/widgets/widget1/page.jsx";


import paridata from "@/data/pair.json"

import pair1 from "@/public/img/pair_1.png"
import pair2 from "@/public/img/pair_2.png"

const page = () => {

    const [active, setActive] = useState("Forex");

    const tabs = ["Forex", "Indices", "Commodities", "Crypto", "Stocks"];

    const pairimages = {
        "EUR/USD": pair1,
        "GBP/USD": pair2
    }


    return (
        <>
            <section className="py-[80px]  md:px-12">
                <div className="container">
                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-2" >
                        <div className="col-span-3">
                            <h2 className="relative inline-block text-4xl font-bold 
                            before:content-[''] before:absolute before:w-[200px] before:h-[30px]
                            before:bg-gradient-to-r before:from-yellow-100 before:to-white  before:-z-10 before:left-0 before:top-1/2 before:-translate-y-1/4" >Live Forex Signals</h2>
                            <p className="text-para-dark my-5 text-lg">Latest forex trade recommendations updated in real-time!</p>

                        </div>
                        <div className="col-span-2"></div>
                        <div className="col-span-3">
                            <div className="overflow-x-auto md:overflow-x-visible">


                                <div className="signal_table w-[768px] md:w-full ">
                                    <div className="Table_btns_group">
                                        {
                                            tabs.map((tab) => {
                                                return <button key={tab}
                                                    onClick={() => setActive(tab)}
                                                    className={`text-lg cursor-pointer focus:scale-[1.03] ${active === tab ? "bg-black text-yellow-100" : "bg-[#f9f8f5]"}  px-8 py-2 me-3 rounded-md`}>{tab}</button>
                                            })
                                        }
                                    </div>
                                    <div className="signal_tables_wraper mt-4 relative">
                                        <table className="w-full table-auto shadow-xl shadow-gray-200/50">
                                            <thead className=" bg-[#8e9297]  p-3">
                                                <tr className="">
                                                    <th className="center  w-20 font-semibold px-4 text-xl text-white relative before:content-[''] before:absolute before:h-[35px] before:w-[2px] before:right-0 before:top-auto before:my-auto before:bg-white  py-2 rounded-tl-2xl">Currency Pair</th>
                                                    <th className="center  w-20 font-semibold px-4 text-xl text-white relative before:content-[''] before:absolute before:h-[35px] before:w-[2px] before:right-0 before:top-auto before:my-auto before:bg-white  py-2">Entry Price</th>
                                                    <th className="center  w-20 font-semibold px-4 text-xl text-white relative before:content-[''] before:absolute before:h-[35px] before:w-[2px] before:right-0 before:top-auto before:my-auto before:bg-white  py-2">Change</th>
                                                    <th className="center  w-20 font-semibold px-4 text-xl text-white relative before:content-[''] before:absolute before:h-[35px] before:w-[2px] before:right-0 before:top-auto before:my-auto before:bg-white  py-2">%</th>
                                                    <th className="center  w-20 font-semibold px-4 text-xl text-white relative   py-3 rounded-tr-2xl">Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    paridata.table_data.map((data, i) => {
                                                        return <tr key={i} className={`${i > 1 ? paridata.isPremiumclint ? "opacity-20" : "opacity-100" : null}`}>
                                                            <td className=" py-4 flex justify-center items-center"> <Image src={pairimages[data.pair_name]} alt="pari_1" className="w-[50px] me-3" /> <span>  EUR/USD </span></td>
                                                            <td className=" py-4 text-center ">{data.entry_prise} </td>
                                                            <td className=" py-4 text-center "> {data.change} </td>
                                                            <td className={` py-4  ${data.persantage < 0 ? "text-red-700 " : "text-green-500"} `}> <div className="flex items-center justify-center"> <span> {data.persantage} </span> <IoMdArrowDropup className={`ms-2 ${data.persantage < 0 ? "rotate-180" : "rotate-0"}`} /> </div></td>
                                                            <td className=" py-4 text-center "> <button className="py-2 px-4 text-black bg-yellow-300 rounded-lg cursor-pointer active:scale-[0.9]">Trade</button> </td>
                                                        </tr>
                                                    })
                                                }

                                            </tbody>


                                        </table>

                                        {
                                            paridata.isPremiumclint && (
                                                <button className="bg-gradient-to-tl cursor-pointer active:scale-[0.97] from-[#7e6b12] to-[#132f0c] text-white px-5 py-3 text-xl rounded-4xl absolute left-[50%] top-[50%] translate-x-[-50%] -translate-y-[50%] flex items-center justify-center">Subscribe  Now to get Full Access <MdOutlineWorkspacePremium className="ms-3 text-3xl " /></button>)
                                        }

                                    </div>

                                    <div className="flex md:flex-row flex-col mt-3  gap-3 text-lg md:justify-between justify-center">
                                        <p>Live (INDICATIVE) UPDATED: 12:14:39 GMT+5.5 </p>
                                        <a href="" className="text-blue-500 underline">See more</a>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="col-span-2">
                            <div className=" bg-[#1f1f1f] px-3 py-2 rounded-xl overflow-hidden">
                                <Widgets1 />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default page
