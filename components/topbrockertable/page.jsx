"use client"

import topbrocker_icon from "@/public/img/topbrocker_icon.png"
import Image from "next/image"

import topborcker_data from "@/data/topbrocker.json"


const page = () => {


    return (
        <>
            <div className="topbrocker bg-[#f9f9f9]  pb-10 rounded-bl-2xl px-5  rounded-br-2xl">
                <div className="border-t-2 border-gray-300">
                    <div className="flex justify-between items-center mb-3 py-3 ">
                        <h2 className="text-xl font-semibold bg-gradient-to-r from-heading-c1 to-heading-c2 bg-clip-text text-transparent">Top Brocker</h2>
                        <div className=" rounded-full">
                            <Image src={topbrocker_icon} width={40} height={40} alt="convertor iocn" />
                        </div>
                    </div>

                    <div className="topBrocker_table_wraper rounded-2xl overflow-hidden">
                        <table className="table-auto w-full ">
                            <thead className="bg-topbrocker-head">
                                <tr>
                                    <th className="text-start border border-white text-white px-3 py-4 rounded-tl-2xl">Broker</th>
                                    <th className="text-start border border-white text-white px-3 py-4">Company</th>
                                    <th className="text-start border border-white text-white px-3 py-4 rounded-tr-2xl">Action</th>
                                </tr>
                            </thead>
                            <tbody className="">
                                {
                                    topborcker_data.map((ele, i) => {
                                        if (i < 1) {
                                            return <tr key={i} className="bg-topbrocker-body" >
                                                <td className="border border-white px-3 py-4">
                                                    <Image src={ele.url} width={130} height={50} alt="logo" />
                                                </td>
                                                <td className="border border-white text-white px-3 py-4">{ele.company_name}</td>
                                                <td className="border border-white px-3 py-4">
                                                    <button className="py-2 px-4 text-black bg-yellow-300 rounded-lg cursor-pointer active:scale-[0.9]">Trade</button>
                                                </td>
                                            </tr>
                                        }

                                    })
                                }

                            </tbody>
                        </table>
                    </div>
                    <a href="" className="text-blue-500 underline inline-block pt-4"> See All</a>


                </div>
            </div>
        </>
    )
}

export default page
