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
import { useEffect } from 'react';

const Page = () => {

  const params = useParams();
  const { data, isLoading, isError } = useGetBlogsQuery();

  console.log("blog data ", data)

  if (isLoading) return <div className='loading'>Loading...</div>;
  if (isError) return <div className='error'>Error loading blog</div>;

  const singleblog = data?.blog?.find(
    (ele) => ele.slug?.toLowerCase() === params?.slug?.toLowerCase().split("-").join(" ")
  );
  if (!singleblog) return <div className="not-found">Blog not found</div>;


  const recentTowBlog = data?.blog?.slice(1, 3); // ✅ cleaner than filter with index


  return (
    <>
      <section className="blog_disc pt-40 pb-20">
        <div className="container">
          <div className="grid lg:grid-cols-5 grid-cols-1 gap-4">
            <div className="col-span-3">
              <Blogdisc blog={singleblog} />
            </div>
            <div className="col-span-2 space-y-4">
              <h2 className="text-3xl  font-bold ">Recent Blogs</h2>
              <p>Explore the most recent trading insights, strategies, and news.</p>
              <div className="grid grid-cols-1 gap-3">
                {
                  recentTowBlog.map((blog) => (
                    <div key={blog.id}>
                      <div>
                        <Link href={`/blog/${blog.slug.toLowerCase().split(" ").join("-")}`}>
                          <div className="flex gap-4 bg-white py-5 rounded-2xl">
                            <div className="img relative flex-shrink-0 w-[177px] h-[120px] shadow shadow-gray-200" >
                              <Image src={`${apiUrl}/uploads/blog-img/${blog.blog_image}`} alt={blog.blog_name} fill
                                className="object-cover  rounded" />
                            </div>
                            <div className="disc self-center ">
                              <div className='flex items-center mb-2' ><MdOutlineDateRange className='me-2 text-xl text-light-yellow' /> <span className="text-para-dark"> {blog.blog_date.split("T")[0]} </span></div>
                              <h3 className="text-lg font-semibold">{blog.blog_name}</h3>

                            </div>
                          </div>
                        </Link>
                        {/* <div className='w-full h-[1px] bg-[#78682C80] mt-5'></div> */}
                      </div>

                    </div>
                  ))
                }
              </div>
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
