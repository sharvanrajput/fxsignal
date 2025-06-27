import { apiUrl, useGetBlogsQuery } from '@/services/blogSlice';
import Image from 'next/image';
import { MdOutlineDateRange } from "react-icons/md";

import React from 'react'

const Recentblog = () => {
    const { data, isLoading, isError } = useGetBlogsQuery();


    if (isLoading) return <div className='loading'></div>;
    if (isError) return <p>Something went wrong.</p>;

    const blogList = data?.blog || [];
    const recentFourBlogs = blogList.slice(0, 4); // ✅ cleaner than filter with index
    console.log(recentFourBlogs)
    return (
        <>
            <section className="recentblog pb-20">
                <div className="container">

                    <h2 className="text-4xl  text-heading-c1   font-bold inline-block relative z-10">Recent Blogs</h2>
                    <p className="text-para-dark mb-6 mt-5 text-lg">Explore the most recent trading insights, strategies, and news.</p>

                    <div className="grid md:grid-cols-2 grid-cols-1 gap-13">
                        {
                            recentFourBlogs.map((blog) => (
                                <div key={blog.id}>
                                    <div>

                                        <div className="flex gap-4 bg-white p-5 rounded-2xl">
                                            <div className="img relative flex-shrink-0 w-[212px] h-[144px]" >
                                                <Image src={`${apiUrl}/uploads/blog-img/${blog.blog_image}`} alt={blog.blog_name} fill
                                                    className="object-cover  rounded" />
                                            </div>
                                            <div className="disc self-center ">
                                                <div className='flex items-center mb-2' ><MdOutlineDateRange className='me-2 text-xl text-light-yellow' /> <span className="text-para-dark"> {blog.blog_date.split("T")[0]} </span></div>
                                                <h3 className="text-2xl font-semibold">{blog.blog_name}</h3>

                                            </div>
                                        </div>
                                        {/* <div className='w-full h-[1px] bg-[#78682C80] mt-5'></div> */}
                                    </div>

                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>

        </>
    )
}

export default Recentblog
