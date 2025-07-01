"use client"

import { useGetNewsQuery } from "@/services/newsreportSlice";
import Image from "next/image";
import { useParams } from "next/navigation"
import { MdOutlineDateRange } from "react-icons/md";
import Offerslider from '@/components/offerslider/page.jsx';
import Widgets1 from "@/components/widgets/widget1/page.jsx";
import Primum_card from '@/components/unlock_premium_signal/Primum_card.jsx';



const page = () => {

    const param = useParams()
    const { data, isLoading } = useGetNewsQuery();


    const singleNews = data?.news.find((item) => item.title.toLowerCase() === param.slug.toLowerCase().split("-").join(" "))

    console.log(singleNews)

    if (isLoading) return <div className='loading'></div>;

    return (
        <>
            <section className="pt-50 pb-20">
                <div className="container">
                    <div className="grid lg:grid-cols-5 grid-cols-1 gap-5" >
                        <div className="col-span-3">
                            <div className="w-full relative  h-[300px]  overflow-hidden mb-2 rounded-lg">
                                <Image
                                    src={`${process.env.NEXT_PUBLIC_BASEURL}/uploads/news/${singleNews.news_image}`}
                                    width={710}
                                    height={300}
                                    className="w-full h-auto object-cover rounded-lg"
                                    alt="news"
                                />
                            </div>
                            <div className="disc self-center ">
                                <div className='flex items-center mb-2' ><MdOutlineDateRange className='me-2 text-xl text-light-yellow' /> <span className="text-para-dark"> {singleNews.publish_date.split("T")[0]} </span></div>

                                <h2 className="text-3xl font-semibold text-gray-800">{singleNews.title}</h2>
                                <div className="text-sm text-gray-500 mb-4 ">
                                    <div dangerouslySetInnerHTML={{ __html: singleNews.news_desc }} className='grid gap-5' />

                                </div>

                            </div>
                        </div>
                        <div className="col-span-2">
                            <div className="space-y-5">

                                <Offerslider />
                                <Widgets1 />
                                <Primum_card className="mt-4" />

                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default page
