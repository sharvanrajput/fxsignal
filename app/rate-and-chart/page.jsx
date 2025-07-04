
import Widgets1 from "@/components/widgets/widget1/page.jsx";
import AdvertiseWithus from '@/components/advertiseWithUs/page.jsx';
import CurencyConvertor from '@/components/currencyConverter/page.jsx';
import Topbrocker from '@/components/topbrockertable/page.jsx';
import Downloadapp from '@/components/downloadapp/page.jsx';
import Image from 'next/image'
import Currencypairschart from "@/components/currency-paires-chart/Currencypairschart";
import Cryptochart from "@/components/crypto-chart/Cryptochart";


const page = () => {
    return (
        <main  >
            <section className='pt-40 pb-20 relative'>
                <Image src="/img/marketoverview_shape.png" height={400} width={300} className='absolute h-[400px] w-[300px] right-0 top-[200px] z-0' alt="" />
                <div className="container z-10">
                    <h5 className='text-light-yellow font-bold'>Rates & Charts</h5>
                    <h2 className="text-4xl  text-heading-c1   font-bold inline-block relative z-10">Live Rates & Market Data</h2>
                    <p className="text-para-dark mb-10 mt-5 text-lg">Get up-to-the-second currency rates, trends, and fluctuations.</p>
                    <div className="grid lg:grid-cols-5 grid-cols-1 gap-5">
                        <div className="col-span-3">

                            <h2 className='text-3xl pb-5 font-semibold   bg-gradient-to-r from-heading-c1 to-heading-c2 bg-clip-text text-transparent'>Live streaming <span className="text-light-yellow">forex rates</span> for major currency pairs</h2>
                            <Currencypairschart />

                            <h2 className='text-3xl pb-5 mt-10 font-semibold   bg-gradient-to-r from-heading-c1 to-heading-c2 bg-clip-text text-transparent'>In-Depth   <span className="text-light-yellow">Cryptocurrency</span>Chart Analysis</h2>
                            <Cryptochart />

                        </div>
                        <div className="col-span-2">
                            <div className="space-y-5">

                                <Widgets1 />
                                <AdvertiseWithus />
                                <CurencyConvertor />
                                <Topbrocker />
                                <Downloadapp />
                            </div>



                        </div>
                    </div>
                </div>
            </section>

        </main>
    )
}

export default page
