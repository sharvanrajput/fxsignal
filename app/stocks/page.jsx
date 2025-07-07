"use client"
import Widgets1 from "@/components/widgets/widget1/page.jsx";
import AdvertiseWithus from '@/components/advertiseWithUs/page.jsx';
import CurencyConvertor from '@/components/currencyConverter/page.jsx';
import Topbrocker from '@/components/topbrockertable/page.jsx';
import Downloadapp from '@/components/downloadapp/page.jsx';
import Image from "next/image";
import Cta3 from "@/components/Cta_3/Cta3";

import { useGetNewsQuery } from "@/services/newsreportSlice";
import { FaRegUser } from "react-icons/fa6";
import Link from "next/link";
import { MdOutlineDateRange } from "react-icons/md";
import { apiUrl } from "@/services/blogSlice";
const page = () => {
   

    const { data, isLoading } = useGetNewsQuery();

    const news = data?.news || []

    const filterednews = news.filter((ele) => ele.category_name === 'Stocks')

    console.log(news)

    if (isLoading) return <div className='loading'></div>;

    return (
        <main  >
            <section className='pt-40 pb-20 relative'>
                <Image src="/img/marketoverview_shape.png" height={400} width={300} className='absolute h-[400px] w-[300px] right-0 top-[200px] z-0' alt="" />
                <div className="container z-10">
                    <h5 className='text-light-yellow font-bold'>Forex Trading</h5>
                    <h2 className="text-4xl  text-heading-c1   font-bold inline-block relative z-10">Forex Market Trading Insights & Latest Updates</h2>
                    <p className="text-para-dark mb-10 mt-5 text-lg">Stay informed with the latest Forex news, expert analysis, and market trends to enhance your trading decisions.</p>
                    <div className="grid lg:grid-cols-5 grid-cols-1 gap-5">
                        <div className="col-span-3 ">
                            <div className="h-[2100px] overflow-y-scroll px-5">
                                {
                                    filterednews.map((item) => (
                                        <div className="bg-white shadow-md rounded-xl overflow-hidden  mb-8" key={item.id}>
                                            <div className="relative w-full h-[150px]">
                                                <Image
                                                    src={`${apiUrl}/uploads/news/${item.news_image}`}
                                                    alt={item.title}
                                                    fill
                                                    className="object-cover"
                                                />
                                            </div>
                                            <div className="p-4">
                                                <div className="flex items-center gap-4 text-sm text-gray-600 mb-2">
                                                    <div className="flex items-center gap-1">
                                                        <MdOutlineDateRange className="text-yellow-500" />
                                                        <span>{item.created_at}</span>
                                                    </div>
                                                    <div className="flex items-center gap-1">
                                                        <FaRegUser className="text-yellow-500" />
                                                        <span>By {item.author_name}</span>
                                                    </div>
                                                </div>
                                                <h3 className="text-2xl font-semibold mb-2">{item.title}</h3>
                                                <Link href={`forex/news-by-category/${item.title.toLowerCase().replace(/[^a-z0-9\s-]/g, '').replace(/\s+/g, '-').replace(/-+/g, '-')}`} className="text-blue-500 font-medium hover:underline">
                                                    Read Full Article
                                                </Link>
                                            </div>
                                        </div>

                                    ))
                                }
                            </div>


                        </div>
                        <div className="col-span-2">
                            <div className="space-y-5">

                                <Widgets1 />
                                <AdvertiseWithus />
                                <CurencyConvertor />
                                <Topbrocker />
                                <Downloadapp />
                            </div>



                        </div>
                    </div>
                </div>
            </section>
            <Cta3 />

        </main>
    )
}

export default page
