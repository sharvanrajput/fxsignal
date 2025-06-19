import Image from 'next/image'
import { FaCheckCircle } from 'react-icons/fa'

const Whychooseoursignal = () => {
    return (
        <>
            <section className="bg-[#FFF6DC] rounded-3xl px-6 py-10 md:px-12 flex flex-col md:flex-row items-center justify-between gap-10">
                {/* Text Section */}
                <div className="flex-1 space-y-6">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                        Why Choose Our Signals?
                    </h2>
                    <p className="text-gray-700 font-medium">
                        90% Accuracy | 5000+ Active Traders | 24/5 Market Coverage
                    </p>

                    <ul className="space-y-4">
                        <li className="flex items-start gap-3">
                            <FaCheckCircle className="text-yellow-400 mt-1" />
                            <span className="text-gray-700 font-medium">AI-powered trading insights</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <FaCheckCircle className="text-yellow-400 mt-1" />
                            <span className="text-gray-700 font-medium">Professional market analysis</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <FaCheckCircle className="text-yellow-400 mt-1" />
                            <span className="text-gray-700 font-medium">Real-time risk management</span>
                        </li>
                    </ul>

                    <button className="mt-4 bg-gradient-to-r from-[#1E1E1E] to-[#4A4A4A] text-white px-6 py-3 rounded-full text-sm font-semibold shadow-lg hover:opacity-90 transition">
                        Get a Free Demo
                    </button>
                </div>

                {/* Image Section */}
                <div className="flex-1">
                    <Image
                        src="/img/choose_signal_chart.png" // Replace with your actual image
                        alt="Choose Signal Illustration"
                        width={400}
                        height={300}
                        className="mx-auto"
                    />
                </div>
            </section>
        </>
    )
}

export default Whychooseoursignal
