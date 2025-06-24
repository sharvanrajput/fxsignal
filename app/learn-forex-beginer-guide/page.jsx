import beginner_guide_forex_img from '@/public/img/beginner_guide_forex_img.png';
import Image from 'next/image';
import Widgets1 from "@/components/widgets/widget1/page.jsx";
import AdvertiseWithus from '@/components/advertiseWithUs/page.jsx';
import Primum_card from '@/components/unlock_premium_signal/Primum_card.jsx';
import Forex_related_article from '@/components/biginner_guide_learn_forex_related_artical/Forex_related_article';


const page = () => {
    return (
        <main>
            <section className="learnforex pt-50 pb-10">
                <div className="container">
                    <div className="grid lg:grid-cols-5 grid-cols-1 gap-10">
                        <div className='col-span-3'>
                            <h5 className='text-light-yellow font-bold'>LEARN FOREX</h5>
                            <h2 className="text-4xl  text-heading-c1   font-bold inline-block relative z-10">Beginner’s Guide to Forex</h2>
                            <p className="text-para-dark mb-6 mt-5 text-lg">Start Your Trading Journey with Confidence</p>

                            <Image src={beginner_guide_forex_img} alt="Learn Forex" width={500} height={500} />

                            <div className="disc ">
                                <h2 className='text-3xl mb-5 font-semibold'>What is Forex?</h2>
                                <p className='mb-10'>Forex, also known as foreign exchange, represents the global platform where currencies are traded. It stands as the largest and most fluid financial market globally, witnessing trillions of dollars changing hands daily. In Forex trading, individuals speculate on currency pair price movements with the aim of capitalizing on these fluctuations.</p>
                                <h2 className='text-3xl mb-5 font-semibold'>What Constitutes a Currency Pair?</h2>
                                <p className='mb-10'>Currencies are always traded in pairs while trading Forex. The initial currency in the pair is termed the base currency, while the subsequent one is the quote currency. For instance, in the EUR/USD pair, the euro acts as the base currency, and the US dollar serves as the quote currency.</p>
                                <h2 className='text-3xl mb-5 font-semibold'>How Does Forex Trading Operate?</h2>
                                <p className='mb-10'>Engaging in a currency pair purchase involves acquiring the base currency while selling the quote currency. Should one anticipate the base currency strengthening against the quote currency, purchasing the pair is advisable. Conversely, if the belief is in the base currency's weakening, selling the pair is preferable.</p>
                                <h2 className='text-3xl mb-5 font-semibold'>Factors Driving Forex Movements:</h2>
                                <p className='mb-10'>Numerous elements influence currency exchange rates, including interest rates, economic strength, political stability, and supply and demand dynamics. For instance, a flourishing US economy prompting interest rate hikes might attract foreign investors, thus elevating the value of the USD compared to EUR (EUR/USD).</p>
                            </div>

                        </div>
                        <div className='col-span-2'>
                            <div className="mb-5">
                                <Widgets1 />
                            </div>
                            <div className="mb-5">
                                <Forex_related_article className="mt-4" />
                            </div>
                            <div className="mb-5">
                                <AdvertiseWithus className="mt-4" />
                            </div>
                            <div className="mb-5">
                                <Primum_card />
                            </div>

                        </div>
                    </div>
                </div>
            </section>

        </main>
    )
}

export default page
