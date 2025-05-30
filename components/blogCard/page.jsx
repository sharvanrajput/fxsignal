"use client"

import blogdata from "@/data/blogData.json"
import { FaArrowRight } from "react-icons/fa6";
import { MdOutlineDateRange } from "react-icons/md";
import { FaRegUser } from "react-icons/fa6";

const page = () => {
    const blog3 = blogdata.slice(0, 3)
    return (
        <>
            <section className="text-gray-600 body-font">
                <div className="container  pb-[80px] mx-auto">
                    <h2 className="text-4xl bg-gradient-to-br from-heading-c1 to-heading-c2 bg-clip-text text-transparent font-bold inline-block relative before:content-[''] before:absolute before:w-[200px] before:h-[30px] before:bg-gradient-to-r before:from-yellow-100 before:to-white before:left-0 before:top-1/2 before:-translate-y-1/4 before:-z-10">Success Stories</h2>
                    <p className="text-para-dark my-5 text-lg">Real Results. Real Traders. See how FX Signals is transforming trading journeys worldwide!</p>

                    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 -m-4">
                        {
                            blog3.map((ele, i) => {
                                return <div className="p-4 col-span-1" key={i}>
                                    <div className="h-full shadow-md border-opacity-60 rounded-lg overflow-hidden">
                                        <img className="lg:h-48 md:h-36 w-full object-cover object-center" src={ele.thumb} alt="blog" />
                                        <div className="p-6">
                                            <div className="flex justify-between">
                                                <span className="flex items-center me-2"><MdOutlineDateRange className='me-2 text-2xl text-yellow-400 ' /> {ele.date}</span>
                                                <span className="flex items-center me-2"><FaRegUser className='me-2 text-xl  text-yellow-400' /> {ele.admin}</span>
                                            </div>
                                            <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">{ele.data}</h2>
                                            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">{ele.heading}</h1>
                                            <p className="leading-relaxed mb-3">{ele.para}</p>
                                            <div className="flex items-center flex-wrap ">
                                                <a className="bg-light-yellow text-heading px-4 py-2 rounded-full flex items-center  md:mb-2 lg:mb-0">Learn More <FaArrowRight className="ms-2" /></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            })
                        }



                    </div>
                </div>
            </section>
        </>
    )
}

export default page
