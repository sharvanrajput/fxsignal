import NewsList from '@/components/news_list/page'
import Topstories from '@/components/widgets/top-stories/Topstories'
import React from 'react'

const page = () => {
    return (
        <main >
            <section className='pt-50 pb-20'>
                <div className="container">
                    <h5 className='text-light-yellow font-bold'>Market Overview</h5>
                    <h2 className="text-4xl  text-heading-c1   font-bold inline-block relative z-10">Stay Ahead with Real-Time Insights</h2>
                    <p className="text-para-dark mb-6 mt-5 text-lg">Get real-time forex insights, expert trade ideas, and live market data to refine your trading strategy.</p>

                    <div className="grid lg:grid-cols-5 grid-cols-1 gap-5">
                        <div className="col-span-3">

                            <NewsList />

                        </div>
                        <div className="col-span-2">

                            <Topstories />

                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default page
