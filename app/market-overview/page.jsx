import NewsList from '@/components/news_list/page'
import Tradingideas from '@/components/trading-ideas/Tradingideas'
import Weeklyairtal from '@/components/weekly_artical/Weeklyairtal'
import Topstories from '@/components/widgets/top-stories/Topstories'
import Image from 'next/image'


const page = () => {
    return (
        <main  >
            <section className='pt-40 pb-20 relative'>
                <Image src="/img/marketoverview_shape.png" height={400} width={300} className='absolute h-[400px] w-[300px] right-0 top-[200px] z-0' alt="" />
                <div className="container z-10">
                    <h5 className='text-light-yellow font-bold'>Market Overview</h5>
                    <h2 className="text-4xl  text-heading-c1   font-bold inline-block relative z-10">Stay Ahead with Real-Time Insights</h2>
                    <p className="text-para-dark mb-6 mt-5 text-lg">Get real-time forex insights, expert trade ideas, and live market data to refine your trading strategy.</p>

                    <div className="grid lg:grid-cols-5 grid-cols-1 gap-5">
                        <div className="col-span-3">

                            <NewsList />

                        </div>
                        <div className="col-span-2">

                            <Weeklyairtal />
                            <Topstories />



                        </div>
                    </div>
                </div>
            </section>
            <Tradingideas />
        </main>
    )
}

export default page
