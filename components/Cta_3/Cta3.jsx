import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa";
import cta3_right from "@/public/img/cta3_right.png"; // <-- replace with your actual image path

const features = [
    "Free Trial Available",
    "No Hidden Fees, No Contracts",
    "Cancel Anytime",
]
const Cta3 = () => {
    return (
        <>
            <section className="pb-20 pt-10">
                <div className="container">
                    <div className="bg-[#fffbe6] bg-[url('/img/cta3_bg.png')] bg-cover bg-center bg-no-repeat  rounded-3xl md:px-10 px-3  py-15  ">
                        <div className="  grid md:grid-cols-2 items-center gap-8 ">
                            {/* Left Content */}
                            <div>
                                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                    Trade Smarter, Earn More
                                </h2>
                                <p className="text-gray-500 text-base md:text-lg mb-6">
                                    Unlock the power of expert forex signals & trade with confidence!
                                </p>

                                {/* Feature List */}
                                <div className="flex flex-wrap gap-4 mb-8">
                                    {features.map((item, index) => (
                                        <div key={index} className="flex items-center gap-2 text-bold text-[#554800] text-sm md:text-base">
                                            <FaCheckCircle className="text-yellow-400" />
                                            {item}
                                        </div>
                                    ))}
                                </div>

                                {/* CTA Buttons */}
                                <div className="flex flex-wrap gap-4">
                                    <button className="bg-[#2b2300] text-white font-semibold px-6 py-3 rounded-full shadow-md hover:opacity-90 transition">
                                        Join FX Signals Today!
                                    </button>
                                    <button className="border-2 border-[#2b2300] text-[#2b2300] font-semibold px-6 py-3 rounded-full hover:bg-[#2b2300] hover:text-white transition">
                                        Get a Free Demo
                                    </button>
                                </div>
                            </div>

                            {/* Right Image */}
                            <div className="w-full flex justify-center">
                                <Image
                                    src={cta3_right}// <-- replace with your actual image path
                                    alt="Secure Trading"
                                    width={300}
                                    height={300}
                                    className="max-w-full h-auto"
                                    priority
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Cta3
