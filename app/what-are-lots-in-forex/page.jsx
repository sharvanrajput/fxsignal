import History_And_Evaluation from '@/public/img/History_And_Evaluation.webp';
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
                                    <h2 className='text-3xl mb-5 font-semibold'>The World Of Lots</h2>
                                    <p className='mb-10'>Hey there, fellow trader! Ever heard of lots in Forex and felt like it's some secret code only the elites understand? Well, fear not, because I'm about to break it down for you in simple terms.</p>
                                    <p className='mb-10'>So, what the heck are lots anyway? In the wild world of Forex trading, a lot is basically the unit size you use to place your trades. Think of it like ordering pizza – you can either get a slice (a small lot) or the whole pie (a big lot).</p>
                                    <p className='mb-10'>Lots are the basic unit of measurement in Forex trading. They're like the building blocks you use to place your trades. The size of the lot you choose can have a big impact on your potential profits and losses, so it's important to get a handle on how they work.</p>
                                    <h2 className='text-3xl mb-5 font-semibold'>Types of Lots: From Tiny to Titanic</h2>
                                    <p className='mb-10'>
                                        <strong> Standard Lot:</strong>The big kahuna, a whopping 100,000 units of the base currency (the first currency in a pair like EUR/USD). Imagine buying 100,000 Euros – that's a serious stack!
                                    </p>
                                    <p className='mb-10'>
                                        <strong>Mini Lot: </strong> A smaller dude, just 10,000 units of the base currency. Perfect if you're new to the game or want to test the waters without going all in.
                                    </p>
                                    <p className='mb-10'>
                                        <strong>Micro Lot:  </strong>The tiniest tot, with a mere 1,000 base currency units. These are Ideal for beginners with limited capital or those who want to make super-precise trades.
                                    </p>
                                    <p className='mb-10'>
                                        In simple terms, Standard lots are like the Big guns of trading – they're massive, typically consisting of 100,000 units of the base currency. Mini lots are, well, smaller – they're one-tenth the size of standard lots.
                                    </p>


                                    <Image src={History_And_Evaluation} alt="Learn Forex" width={600} height={600} className='mb-10' />

                                    <p className='mb-10'>
                                        Now, let's put this into action with a daily example. Imagine you're trading EUR/USD (Euro/US Dollar), and the current exchange rate is 1.2000. You're feeling bullish on the Euro and decide to buy one standard lot of EUR/USD. That means you're buying 100,000 Euros, which will cost you $120,000 (100,000 * 1.2000).
                                    </p>
                                    <p className='mb-10'>
                                        But hey, what if you're not ready to go all-in with a standard lot? No problem! You can opt for a mini lot instead. So, let's say you buy one mini lot of EUR/USD. That's 10,000 Euros, costing you $12,000 (10,000 * 1.2000).And if you're just dipping your toes into the trading pool, micro lots are your best bud. Buying one micro lot of EUR/USD means you're getting 1,000 Euros, which will set you back $1,200 (1,000 * 1.2000).


                                    </p>
                                    <p className='mb-10'>
                                        <strong> Micro Lot </strong> is ideal for beginners with limited capital or those who want to make super-precise trades.
                                    </p>
                                    <p className='mb-10'>
                                        Understanding lots is essential for navigating the exciting world of Forex trading. By choosing the right lot size for your risk tolerance and account size, you can unlock a world of possibilities. Remember, it's not about buying the biggest stack; it's about making smart trades and managing your risk effectively. So, grab your metaphorical shopping cart and start exploring the world of Forex – with the power of lots by your side!


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
