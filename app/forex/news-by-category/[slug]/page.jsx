'use client';

import AdvertiseWithus from '@/components/advertiseWithUs/page.jsx';
import Primum_card from '@/components/unlock_premium_signal/Primum_card.jsx';
import Downloadapp from '@/components/downloadapp/page.jsx';
import Blogdisc from '@/components/Blog_disc/Blogdisc';
import { useParams } from 'next/navigation';
import { apiUrl, useGetBlogsQuery } from '@/services/blogSlice';
import { MdOutlineDateRange } from 'react-icons/md';
import Image from 'next/image';
import Link from 'next/link';
import { useGetNewsQuery } from '@/services/newsreportSlice';
import Singlenews from '@/components/Singlenews/Singlenews';

const Page = () => {

    const params = useParams();
    console.log(params)
    const { data, isLoading, isError } = useGetNewsQuery();

    console.log("news data ", data)

    if (isLoading) return <div className='loading'>Loading...</div>;
    if (isError) return <div className='error'>Error loading blog</div>;

    const singlenews = data?.news?.find(
        (ele) => ele.title?.toLowerCase().replace(/[^a-z0-9\s-]/g, '').replace(/\s+/g, '-').replace(/-+/g, '-') === params?.slug?.toLowerCase()
    );

    if (!singlenews) return <div className="not-found">Blog not found</div>;




    return (
        <>
            <section className="blog_disc pt-40 pb-20">
                <div className="container">
                    <div className="grid lg:grid-cols-5 grid-cols-1 gap-4">
                        <div className="col-span-3">
                            <Singlenews news={singlenews} />
                        </div>

                        <div className="col-span-2 space-y-4">
                           
                            <AdvertiseWithus />
                            <Primum_card className="mt-4" />
                            <Downloadapp />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Page;
