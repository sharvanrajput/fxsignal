import Downloadapp from '@/components/downloadapp/page.jsx';
import AdvertiseWithus from '@/components/advertiseWithUs/page.jsx';

import Marketdata2 from '@/components/widgets/marketdatawidget/page';
import Primum_card  from '@/components/unlock_premium_signal/Primum_card.jsx';
import Whychooseoursignal from '@/components/whychoosesignal/Whychooseoursignal';




const page = () => {
    return (
        <main>

            <section className="py-50">
                <div className="container">
                    <div className="grid lg:grid-cols-5 grid-cols-1 gap-4">
                        <div className="col-span-3">
                            <h2 className="text-4xl  text-heading-c1   font-bold inline-block relative z-10">Stay Ahead with Real-Time Market Data</h2>
                            <p className="text-para-dark mb-6 mt-5 text-lg">Get live updates on Forex, Stocks, Commodities, and Indices to make informed trading decisions.</p>

                            <div className="rounded-2xl overflow-hidden">
                                <Marketdata2 />
                            </div>
                                <Whychooseoursignal />
                                

                            

                        </div>
                        <div className="col-span-2">
                            {/* offer slider  */}


                            <AdvertiseWithus />
                            <Primum_card />
                            <Downloadapp />


                        </div>
                    </div>

                </div>


            </section>


        </main>
    )
}

export default page
