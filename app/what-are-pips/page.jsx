import what_are_pip from '@/public/img/what_are_pip.webp';
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
                                    <h2 className='text-3xl mb-5 font-semibold'>Conquering The Pips: The Mini Moves Making Big Money In Forex</h2>
                                    <p className='mb-5'>Imagine you're at a flea market, haggling over a vintage watch. Every penny counts and the smallest price change can tip the scales. That's the world of Forex trading, where fortunes are won and lost on tiny movements called pips.</p>


                                    <Image src={what_are_pip} alt="Learn Forex" width={600} height={600} className='mb-10' />

                                    <h2 className='text-3xl mb-5 font-semibold'>What are Pips?</h2>
                                    <p className='mb-5'>
                                        Think of pips as the building blocks of currency movements. A pip (short for "percentage in point") represents the smallest possible change in a currency pair's exchange rate. For most major currencies, it's the fourth decimal place, equivalent to a minuscule 0.0001.


                                    </p>
                                    <h2 className='text-3xl mb-5 font-semibold'>Let's Decipher Pips with a Grocery Analogy:
                                    </h2>
                                    <p className='mb-5'>
                                        Picture yourself at the supermarket, meticulously comparing prices. You notice a carton of milk priced at $2.3450. Now, imagine the store can adjust prices by fractions of a cent! That's the realm of pips in Forex. A tiny movement of 0.0001, though seemingly insignificant, can significantly impact your trade over time.


                                    </p>
                                    <h2 className='text-3xl mb-5 font-semibold'>Why Are Pips Your Forex Fortune Tellers?
                                    </h2>
                                    <ul className='list-disc ms-5 mb-5'>
                                        <li><strong>Precise Profit & Loss Tracking: </strong> Every pip movement affects your trade's value. By monitoring pip changes, you can calculate your profit or loss with pinpoint accuracy. Imagine buying EUR/USD at 1.1050 and selling later at 1.1055 (a 5 pip gain). You'd know exactly how much profit you made in USD based on the pip movement.</li>
                                        <li><strong>Comparing Currency Movements Across Borders: </strong>The beauty of pips is their universal language. They allow you to easily compare how different currency pairs are fluctuating. Let's say EUR/USD moves 5 pips, while USD/JPY moves 10 pips. You can instantly see that the Japanese Yen (JPY) experienced a larger movement against the USD.</li>
                                        <li><strong>Understanding Transaction Costs: </strong>When you buy or sell a currency pair, there's a small difference between the buying price (bid) and selling price (ask), called the spread. This spread is often quoted in pips. Knowing the spread in pips helps you understand the transaction cost involved in your trades.</li>
                                        <li><strong>Retail Traders: </strong>Individuals like you and me can participate through online platforms.</li>
                                    </ul>

                                    <h2 className='text-3xl mb-5 font-semibold'>Importance in Forex Trading</h2>
                                    <ul className='list-disc ms-5 mb-5'>
                                        <li>Pips are used to calculate profits and losses on trades.</li>
                                        <li>They help determine entry, exit, stop loss and take profit levels.</li>
                                        <li>Tracking pip movements allows traders to manage risk effectively.</li>
                                        <li>Pips are the way traders measure and compare performance.</li>
                                    </ul>

                                    <h2 className='text-3xl mb-5 font-semibold'>Let’s try to understand with an example</h2>
                                    <ul className='list-disc ms-5 mb-5'>
                                        <li>A 10 pip move on a EUR/USD trade of 100,000 units is a $10 change in value.</li>
                                        <li>Setting a stop loss 50 pips away limits potential loss on a trade.</li>
                                        <li>Tracking pip movements allows traders to manage risk effectively.</li>
                                        <li>Making 100 pips per day at $10 per pip equals $1,000 in daily profits.</li>
                                    </ul>




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
