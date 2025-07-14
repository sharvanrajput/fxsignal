import Downloadapp from '@/components/downloadapp/page.jsx';
import AdvertiseWithus from '@/components/advertiseWithUs/page.jsx';

import Marketdata2 from '@/components/widgets/marketdatawidget/page';
import Primum_card from '@/components/unlock_premium_signal/Primum_card.jsx';
import Whychooseoursignal from '@/components/whychoosesignal/Whychooseoursignal';




const page = () => {
    return (
        <main>

            <section className="pt-40 pb-0 bg-[url('/img/tools_pages_banner_shape.png')] bg-cover bg-center bg-no-repeat">
                <div className="container">
                    <h5 className='text-light-yellow font-bold'>MARKET DATA</h5>
                    <h2 className="text-4xl  text-heading-c1   font-bold inline-block relative z-10">Stay Ahead with Real-Time Market Data</h2>
                    <p className="text-para-dark mb-6 mt-5 text-lg">Get live updates on Forex, Stocks, Commodities, and Indices to make informed trading decisions.</p>

                    <div className="grid lg:grid-cols-5 grid-cols-1 gap-4">
                        <div className="col-span-3">

                            <Marketdata2 />
                        </div>
                        <div className="col-span-2">
                            {/* offer slider  */}


                            <AdvertiseWithus />



                        </div>
                    </div>

                </div>


            </section>
            <section className="pt-10 ">
                <div className="container">
                    <div className="grid lg:grid-cols-5 grid-cols-1 gap-4">
                        <div className="col-span-3">

                            <Whychooseoursignal />


                        </div>
                        <div className="col-span-2">
                            {/* offer slider  */}


                            <Primum_card />


                        </div>
                    </div>

                </div>


            </section>
            <section className="pt-10 pb-10">
                <div className="container">
                    <div className="grid lg:grid-cols-5 grid-cols-1 gap-4">
                        <div className="col-span-3">


                        </div>
                        <div className="col-span-2">
                            {/* offer slider  */}


                            <Downloadapp />


                        </div>
                    </div>

                </div>


            </section>


        </main>
    )
}

export default page
