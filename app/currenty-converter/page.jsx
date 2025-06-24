import CurencyConvertor from '@/components/currencyConverter/page.jsx';

const page = () => {
    return (
        <main>

            <section className="pt-50 pb-10 bg-[url('/img/tools_pages_banner_shape.png')] bg-cover bg-center bg-no-repeat">
                <div className="container">
                    <h5 className='text-light-yellow font-bold'>Currency Converter</h5>
                    <h2 className="text-4xl  text-heading-c1   font-bold inline-block relative z-10">Real-Time Currency Conversion for Smart Trading</h2>
                    <p className="text-para-dark mb-6 mt-5 text-lg">Instantly convert major currencies with live exchange rates.</p>

                    <div className="">

                        <CurencyConvertor />
                    </div>
                </div>
            </section>
            <section className='pb-20'>

                <div className="container">

                    <div className="bg-gradient-to-r from-[#2d280f] to-[#3f3b18] text-white px-6 py-4 rounded-xl mt-6 flex items-start gap-4 flex-col sm:flex-row">
                        {/* Icon Circle */}
                        <div className="bg-yellow-300 text-black w-8 h-8 flex items-center justify-center rounded-full shrink-0 mt-1 sm:mt-0">
                            <span className="text-lg font-bold">i</span>
                        </div>

                        {/* Text */}
                        <p className="text-sm leading-relaxed">
                            We use third party resources & the mid-market rate for our Converter. This is for informational purposes only. We don't claim this is exact exchange rate.
                        </p>
                    </div>
                </div>
            </section>



        </main>
    )
}

export default page
