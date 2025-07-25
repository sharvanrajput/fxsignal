import { apiUrl } from '@/services/blogSlice'
import Image from 'next/image'
import React, { useEffect } from 'react'
import { MdOutlineDateRange } from 'react-icons/md'



const Blogdisc = ({ blog }) => {



    useEffect(() => {
        // Set document title
        document.title = blog.blog_name;

        // Set meta description
        let metaDesc = document.querySelector("meta[name='description']");
        if (metaDesc) {
            metaDesc.setAttribute("content", blog.long_desc);
        } else {
            // If not found, create it
            metaDesc = document.createElement("meta");
            metaDesc.name = "description";
            metaDesc.content = blog.long_desc;
            document.head.appendChild(metaDesc);
        }
    }, [blog.long_desc, blog.blog_name]);



    return (
        <>

            <div>
                <div className="relative w-full xl:h-[500px] h-[300px]  rounded-2xl overflow-hidden">
                    <Image
                        src={`${apiUrl}/uploads/blog-img/${blog.blog_image}`}
                        alt={blog.blog_name}
                        fill
                        className="object-cover"
                    />

                </div>
                <div className="blog_metadata">
                    <div className="flex justify-between py-5">
                        <div>
                            <div className="flex items-center">
                                <MdOutlineDateRange className='me-2 text-xl text-light-yellow' />
                                <span className="text-para-dark">{blog.blog_date.split("T")[0]}</span>
                            </div>
                        </div>
                        <div>

                        </div>
                    </div>
                    <div className="disc">
                        <h2 className="text-2xl font-semibold text-gray-800">{blog.blog_name}</h2>
                        <div className="text-sm text-gray-500 mb-4 ">
                            <div dangerouslySetInnerHTML={{ __html: blog.long_desc }} className='grid gap-5' />

                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Blogdisc
