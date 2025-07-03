"use client"
import { apiUrl } from '@/services/blogSlice'
import { useGetWeeklyArticalQuery } from '@/services/weeklyArticalSlice'
import Link from 'next/link'
import React, { useEffect } from 'react'
import { MdOutlineDateRange } from 'react-icons/md'
import { LuUserRound } from "react-icons/lu";
import Image from 'next/image'


const Weeklyairtal = () => {

    const { data, isLoading, isError } = useGetWeeklyArticalQuery()
    
    const analysiData = data?.analysis.slice(-3).reverse()




    console.log(analysiData)


    if (isLoading) return  <div className="loader mx-auto mt-5"></div>
    if (isError) return <div className="error">Error loading weekly artical</div>;

    return (
        <>
            <div>
                <h2 className="text-2xl font-semibold bg-gradient-to-r from-heading-c1 to-heading-c2 bg-clip-text text-transparent">Weekly Articles</h2>

                <div className="grid grid-cols-1">
                    {
                        analysiData?.map((artical, i) => (
                            <div className="artical_card" key={i}>
                                <div className="img">
                                    <div className="flex gap-4 bg-white py-5 rounded-2xl">
                                        <div className="img relative flex-shrink-0 w-[177px] h-[120px] shadow shadow-gray-200" >
                                            <Image src={`${apiUrl}/uploads/weekly-artical/${artical.analysis_image}`} alt={artical.analysis_image} fill
                                                className="object-cover  rounded" />
                                        </div>
                                        <div className="disc  self-center w-full">
                                            <Link href={`/weakly-airtal/${artical.heading.toLowerCase().replace(/[^a-z0-9\s]/g, "").trim().replace(/\s+/g, "-")}`} >
                                                <h3 className="text-lg mb-3 font-semibold cursor-pointer">{artical.heading}</h3>
                                            </Link>
                                            <div className="flex justify-between">
                                                <div className='flex items-center mb-2' ><MdOutlineDateRange className='me-2 text-xl text-light-yellow' /> <span className="text-para-dark"> {artical.date.split("T")[0]} </span></div>
                                                {
                                                    artical.author ?
                                                        <div className='flex items-center mb-2' ><LuUserRound className='me-2 text-xl text-light-yellow' /> <span className="text-para-dark"> {artical.author} </span></div>
                                                        : null
                                                }
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }


                </div>


            </div>

        </>
    )
}

export default Weeklyairtal
