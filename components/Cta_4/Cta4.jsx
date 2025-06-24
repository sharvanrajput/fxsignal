import { FaCheckCircle } from "react-icons/fa";


const features = [
    "Free Trial Available",
    "24/5 Expert Support",
    "Instant Access",
]

const Cta4 = () => {
    return (
        <section className="pb-20 pt-10">
            <div className="container">
                <div className="bg-light-yellow bg-[url('/img/cta4_bg.png')] bg-cover bg-center bg-no-repeat  rounded-3xl md:px-10 px-3  py-15  ">
                    <div className="  grid md:grid-cols-2 items-center gap-8 ">
                        {/* Left Content */}
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                                Choose a Plan & Get Started Today
                            </h2>


                            {/* Feature List */}
                            <div className="flex flex-wrap gap-4 mb-8">
                                {features.map((item, index) => (
                                    <div key={index} className="flex items-center gap-2 text-bold text-[#554800] text-sm md:text-base">
                                        <FaCheckCircle className="bg-white text-heading-c1 h-5 w-5 rounded-full" />
                                        {item}
                                    </div>
                                ))}
                            </div>

                            {/* CTA Buttons */}

                        </div>

                        {/* Right Image */}
                        <div className="w-full flex justify-center">
                            <div className="flex flex-wrap gap-4">
                                <button className="bg-[#2b2300] text-white font-semibold px-6 py-3 rounded-full shadow-md hover:opacity-90 transition">
                                    Subscribe Now & Maximize Your Profits!
                                </button>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Cta4
