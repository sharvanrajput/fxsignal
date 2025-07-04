'use client';

import { apiUrl, useGetBlogsQuery } from '@/services/blogSlice';
import 'swiper/css';
import 'swiper/css/pagination'; // ✅ Add this line
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules'; // ✅ Import Swiper Pagination module


const Blogslider = () => {
  const { data, isLoading, isError } = useGetBlogsQuery();
  

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Something went wrong.</p>;

  const blogList = data?.blog || [];
  const recentFourBlogs = blogList.slice(0, 4); // ✅ cleaner than filter with index
console.log(recentFourBlogs)

  return (
    <section className='pt-40 pb-20'>
      <div className="container px-5 py-10">
        <h5 className='text-light-yellow font-bold'>FXSignals Blog</h5>
        <h2 className="text-4xl  text-heading-c1   font-bold inline-block relative z-10">Stay Ahead with Expert Market Insights</h2>
        <p className="text-para-dark mb-6 mt-5 text-lg">Get the latest Forex market updates, trading tips, and expert insights to refine your strategy.</p>

        <div className="w-full mx-auto rounded-2xl overflow-hidden">
          <Swiper
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            modules={[Pagination]} 
            pagination={{ clickable: true }}
          >
            {recentFourBlogs.map((blog) => (

              <SwiperSlide key={blog.id} >
                <div className="relative w-full h-[300px]">
                  <img
                    src={`${apiUrl}/uploads/blog-img/${blog.blog_image}`}
                    alt="Master Forex"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent bg-opacity-40 flex items-end p-6">
                    <h2 className="text-white text-2xl md:text-3xl font-bold">
                      {blog.blog_name}
                    </h2>
                    <img
                      src="/img/fxsignal-dark-logo.png"
                      alt="FX Signals"
                      className="absolute bottom-4 right-4 w-14"
                    />
                  </div>
                </div>
              </SwiperSlide>

            ))}


          </Swiper>
        </div>
      </div>
    </section>
  )
}

export default Blogslider;
