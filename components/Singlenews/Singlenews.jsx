import { apiUrl } from '@/services/blogSlice'
import Image from 'next/image'
import React from 'react'
import { MdOutlineDateRange } from 'react-icons/md'

const Singlenews = ({news}) => {
    return (
        <div>
            <div className="relative w-full xl:h-[500px] h-[300px]  rounded-2xl overflow-hidden">
                <Image
                    src={`${apiUrl}/uploads/news/${news.news_image}`}
                    alt={news.title}
                    fill
                    className="object-cover"
                />

            </div>
            <div className="news_metadata">
                <div className="flex justify-between py-5">
                    <div>
                        <div className="flex items-center">
                            <MdOutlineDateRange className='me-2 text-xl text-light-yellow' />
                            <span className="text-para-dark">{news.created_at.split("T")[0]}</span>
                        </div>
                    </div>
                    <div>

                    </div>
                </div>
                <div className="disc">
                    <h2 className="text-2xl font-semibold text-gray-800">{news.title}</h2>
                    <div className="text-sm text-gray-500 mb-4 ">
                        <div dangerouslySetInnerHTML={{ __html: news.news_desc }} className='grid gap-5' />

                    </div>

                </div>
            </div>
        </div>
    )
}

export default Singlenews
