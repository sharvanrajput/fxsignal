import How_Currency from '@/public/img/How_Currency.webp';
import Image from 'next/image';
import Widgets1 from "@/components/widgets/widget1/page.jsx";
import AdvertiseWithus from '@/components/advertiseWithUs/page.jsx';
import Primum_card from '@/components/unlock_premium_signal/Primum_card.jsx';
import Forex_related_article from '@/components/biginner_guide_learn_forex_related_artical/Forex_related_article';

const page = () => {
    return (
        <div>
            <main>
                <section className="learnforex pt-50 pb-10">
                    <div className="container">
                        <div className="grid lg:grid-cols-5 grid-cols-1 gap-10">
                            <div className='col-span-3'>
                                <h5 className='text-light-yellow font-bold'>LEARN FOREX</h5>
                                <h2 className="text-4xl  text-heading-c1   font-bold inline-block relative z-10">Beginner’s Guide to Forex</h2>
                                <p className="text-para-dark mb-6 mt-5 text-lg">Start Your Trading Journey with Confidence</p>


                                <div className="disc ">
                                    <h2 className='text-3xl mb-5 font-semibold'>Basics Of Currency Trading</h2>
                                    <p className='mb-5'>You work hard for your money, but is your money working hard enough for you? With currency trading, you can tap into the massive global Forex market and potentially turn your savings into a wealth-building machine.</p>
                                    <h2 className='text-3xl mb-5 font-semibold'>What is Currency Trading?</h2>
                                    <p className='mb-5'>Currency Trading, also known as Forex or FX trading, is the buying and selling of global currencies. The Forex market is the largest and most liquid market in the world, with a staggering $6.6 trillion traded each day.</p>
                                    <p className='mb-5'>Just ponder that enormous figure for a little while. $6.6 trillion surpasses the GDP of the majority of nations! For lone traders like you, this sea of money that is constantly moving across the world offers a fantastic opportunity.</p>
                                    <h2 className='text-3xl mb-5 font-semibold'>How Currency Trading Works?</h2>
                                    <p className='mb-5'>The influence of Forex stretches far beyond international travel and investments. Here are some everyday examples:</p>
                                    <p className='mb-5'>At its core, currency trading involves speculating on whether the value of one currency will rise or fall compared to another currency. You are essentially betting that the currency you buy will increase in value versus the currency you sell.</p>
                                    <p className='mb-5'>For example, imagine you believe the U.S. dollar will strengthen against the euro in the coming weeks. You would buy U.S. dollars and sell euros. If the dollar does indeed rise in value versus the euro, you could then sell your dollars for more euros than you originally spent—pocketing the difference as profit.</p>


                                    <Image src={How_Currency} alt="Learn Forex" width={600} height={600} className='mb-10' />

                                    <h2 className='text-3xl mb-5 font-semibold'>Getting Started With Currency Trading</h2>
                                    <p className='mb-5'>
                                        The best part about currency trading is that you can get started with a relatively small investment, thanks to leverage. Leverage allows you to control a larger exposure in the markets than what your capital can normally afford. This means currency trading can offer greater profit potential on a smaller initial investment compared to other assets like stocks.
                                    </p>
                                    <p className='mb-5'>
                                        Of course, leverage is a double-edged sword, as it can also amplify losses if your trades don't go as planned. That's why it's crucial for new currency traders to develop a trading plan, implement wise risk management, and never risk more than you can afford to lose.
                                    </p>
                                    <h2 className='text-3xl mb-5 font-semibold'>Remember, the Foreign Exchange Market Never Sleeps!</h2>
                                    <p className='mb-5'>
                                        The beauty (and maybe the beast?) of currency trading is that it's a 24-hour market. News events happening anywhere in the world can cause currency values to fluctuate. This means you have the potential to trade day and night, but it also requires constant vigilance.
                                    </p>
                                    <Image src={How_Currency} alt="Learn Forex" width={600} height={600} className='mb-10' />
                                    <h2 className='text-3xl mb-5 font-semibold'>Ready to Test Your Trading Mettle?</h2>
                                    <p className='mb-5'>
                                        Remember, currency trading can be risky, so it's crucial to start with a demo account and learn the ropes before venturing into real markets. This thrilling adventure awaits the informed and courageous.


                                    </p>

                                    <h2 className='text-3xl mb-5 font-semibold'>Your First Step Towards Financial Freedom
                                    </h2>
                                    <p className='mb-5'>
                                        While currency trading does involve risk, it can also be an incredibly rewarding endeavor—both financially and personally. Imagine having the freedom to create your own schedule, travel the world, and achieve your dreams. With patience, discipline, and the right mindset, currency trading could be your first step towards that reality.


                                    </p>
                                    <p className='mb-5'>
                                        If you've been looking for a way to potentially grow your wealth and gain more financial independence, currency trading is an opportunity worth exploring. Take that first step towards currency trading mastery today and begin unlocking your money's full potential.


                                    </p>





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
        </div>
    )
}

export default page
