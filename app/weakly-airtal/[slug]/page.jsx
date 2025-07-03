"use client"
import { apiUrl } from '@/services/blogSlice'
import { useGetWeeklyArticalQuery } from '@/services/weeklyArticalSlice'
import Image from 'next/image'
import { useParams } from 'next/navigation'
import React from 'react'

const page = () => {

    const params = useParams()
    console.log(params.slug)


    const { data, isLoading, isError } = useGetWeeklyArticalQuery()
    console.log(data)
    const analysiData = data?.analysis?.find(item =>
        item.heading.toLowerCase().replace(/[^a-z0-9\s]/g, "").trim().replace(/\s+/g, "-")  === params.slug
    );





    console.log(analysiData)


    if (isLoading) return <div className="loader mx-auto mt-5"></div>
    if (isError) return <div className="error">Error loading weekly artical</div>;


    return (
        <>
            <section className="pt-50 pb-20">
                <div className="container">
                    <div className="relative w-full h-[500px] text-start mb-5">

                        <Image src={`${apiUrl}/uploads/weekly-artical/${analysiData.analysis_image}`} alt={analysiData.analysis_image} fill className="object-cover bg-center   rounded " />

                    </div>
                    <div className="space-y-5">
                        <h1 className="text-2xl font-semibold">{analysiData.heading}</h1>


                        <div className="text-sm text-gray-500 mb-4 ">
                            <div dangerouslySetInnerHTML={{ __html: analysiData.description }} className='grid gap-5' />

                        </div>
                    </div>



                </div>
            </section>

        </>
    )
}

export default page
