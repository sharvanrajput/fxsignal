"use client"

import blogdata from "@/data/blogData.json"
import { FaArrowRight } from "react-icons/fa6";
import { MdOutlineDateRange } from "react-icons/md";
import { FaRegUser } from "react-icons/fa6";
import { apiUrl, useGetBlogsQuery } from "@/services/blogSlice";
import Link from "next/link";
import Image from "next/image";

const page = () => {
    const { data, isLoading, isError } = useGetBlogsQuery();

    if (isLoading) return <div className="loading"></div>
    if (isError) return <div className=""> Something Went wrong</div>

    const blog3 = data.blog.slice(0, 3)
    return (
        <>
            <section className="text-gray-600 body-font">
                <div className="container  pb-[80px] mx-auto">
                    <h2 className="text-4xl bg-gradient-to-br from-heading-c1 to-heading-c2 bg-clip-text text-transparent font-bold inline-block relative before:content-[''] before:absolute before:w-[200px] before:h-[30px] before:bg-gradient-to-r before:from-yellow-100 before:to-white before:left-0 before:top-1/2 before:-translate-y-1/4 before:-z-10">Learn Forex & Improve Your Trading</h2>
                    <p className="text-para-dark mt-5 mb-10 text-lg">Free trading guides, market analysis, and expert webinars to help you succeed!</p>

                    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">

                        {blog3.map((blog) => (
                            <div key={blog.id} className="bg-white rounded-2xl shadow-md overflow-hidden h-full">
                                <div className="relative w-full h-[200px]">
                                    <Image
                                        src={`${apiUrl}/uploads/blog-img/${blog.blog_image}`}
                                        alt={blog.blog_name}
                                        fill
                                        className="object-cover"
                                    />
                                    <span className="absolute top-2 left-2 bg-yellow-400 text-xs font-semibold text-black px-2 py-1 rounded">
                                        {blog.blog_category}
                                    </span>
                                    <Image
                                        src="/img/fxsignal-dark-logo.png"
                                        alt="Logo"
                                        width={40}
                                        height={40}
                                        className="absolute top-2 right-2"
                                    />
                                </div>

                                <div className="p-4">
                                    <div className="flex items-center justify-between text-sm text-gray-500 mb-2">
                                        <div className="flex items-center">
                                            <MdOutlineDateRange className='me-2 text-xl text-light-yellow' />
                                            <span className="text-para-dark">{blog.blog_date.split("T")[0]}</span>
                                        </div>
                                        <div>by - {blog.created_by}</div>
                                    </div>

                                    <h2 className="text-lg font-bold text-gray-800 line-clamp-2 mb-2">
                                        {blog.blog_name}...
                                    </h2>
                                    <p className="text-sm text-gray-500 mb-4">
                                        {blog.blog_desc.replace(/<[^>]*>/g, "").slice(0, 80)}
                                    </p>

                                    <Link href={`/blog/${blog.slug.toLowerCase().split(" ").join("-")}`} className="flex items-center content-between  gap-2 cursor-pointer bg-light-yellow w-fit text-black font-semibold px-4 py-2 rounded-full hover:bg-yellow-500 transition">

                                        Read More <span className="text-xl"><FaArrowRight /></span>

                                    </Link>
                                </div>
                            </div>
                        ))}




                    </div>
                </div>
            </section>
        </>
    )
}

export default page
