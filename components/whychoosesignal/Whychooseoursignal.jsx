import Image from 'next/image'
import { FaCheckCircle } from 'react-icons/fa'
import why_choose_our_signal from "@/public/img/why_choose_our_signal.png"

const Whychooseoursignal = () => {
    return (
        <>
            <div className="bg-[#FFF6DC] rounded-3xl px-6 pt-10 md:ps-20  h-full  items-center justify-between gap-10">
                {/* Text Section */}
                <h2 className="text-3xl   mb-5 font-bold text-gray-900">
                    Why Choose Our Signals?
                </h2>
                <p className="text-gray-700 mb-5 font-medium">
                    90% Accuracy | 5000+ Active Traders | 24/5 Market Coverage
                </p>
                <div className="grid md:grid-cols-2 grid-cols-1 items-center-safe ">

                    <div className=" space-y-6">


                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <FaCheckCircle className="text-yellow-400 mt-1" />
                                <span className="bg-gradient-to-r from-heading-c1 to-heading-c2 bg-clip-text text-transparent text-lg font-medium">AI-powered trading insights</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <FaCheckCircle className="text-yellow-400 mt-1" />
                                <span className="bg-gradient-to-r from-heading-c1 to-heading-c2 bg-clip-text text-transparent text-lg font-medium">Professional market analysis</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <FaCheckCircle className="text-yellow-400 mt-1" />
                                <span className="bg-gradient-to-r from-heading-c1 to-heading-c2 bg-clip-text text-transparent text-lg font-medium">Real-time risk management</span>
                            </li>
                        </ul>

                        <button className="mt-4 bg-gradient-to-br w-full from-heading-c1 to-heading-c2 text-white px-6 py-3 rounded-full text-sm font-semibold shadow-lg hover:opacity-90 transition">
                            Get a Free Demo
                        </button>
                    </div>

                    {/* Image Section */}
                    <div className="">
                        <Image
                            src={why_choose_our_signal}
                            alt="Choose Signal Illustration ms-auto"
                            width={400}
                            height={300}
                            className="mx-auto"
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Whychooseoursignal
