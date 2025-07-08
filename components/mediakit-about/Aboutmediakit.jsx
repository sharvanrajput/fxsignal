import React from 'react'
import { BsCheckCircleFill } from 'react-icons/bs'
import Aboutmediakitimg from "@/public/img/Aboutmediakit.png"
import Image from 'next/image'

const Aboutmediakit = () => {
    return (
        <section className="py-16 ">
            <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 items-center gap-8">
                {/* Left Image */}
                <div>
                    <Image
                        src={Aboutmediakitimg}
                        alt="Who We Are"
                        className="w-full aspect-auto mx-auto"
                        priority
                    />
                </div>

                {/* Right Content */}
                <div>
                    <h5 className='text-light-yellow test-md'>About us </h5>
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Who We Are</h2>
                    <p className='my-2'>Empowering Traders. Enabling Growth.</p>
                    <p className="text-gray-600 mb-6">
                       FXSignals is a leading platform delivering accurate forex trading signals, market analysis, and educational resources. We help traders make informed decisions while supporting brokers and brands through advertising and co-marketing.
                    </p>

                    <ul className="space-y-3">

                        <li className="flex items-center text-black">
                            <BsCheckCircleFill className="text-yellow-400 mr-2 text-lg" />
                           Established: 2019
                        </li>
                        <li className="flex items-center text-black">
                            <BsCheckCircleFill className="text-yellow-400 mr-2 text-lg" />
                           Audience: Global (60% MENA, 30% Asia, 10% Global)
                        </li>
                        <li className="flex items-center text-black">
                            <BsCheckCircleFill className="text-yellow-400 mr-2 text-lg" />
                            Community: 1M+ Monthly Reach
                        </li>

                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Aboutmediakit
