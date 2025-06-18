import React from 'react'

import signal_how_its_work_icon_1 from '@/public/img/signal_how_its_work_icon_1.png';
import signal_how_its_work_icon_2 from '@/public/img/signal_how_its_work_icon_2.png';
import signal_how_its_work_icon_3 from '@/public/img/signal_how_its_work_icon_3.png';
import signal_how_its_work_icon_4 from '@/public/img/signal_how_its_work_icon_4.png';
import Image from 'next/image';


const steps = [
    {
        icon: signal_how_its_work_icon_1,
        step: "STEP – 1",
        description: "Sign Up & Get Free Signals",
    },
    {
        icon: signal_how_its_work_icon_2,
        step: "STEP – 2",
        description: "Upgrade to Premium for Full Access",
    },
    {
        icon: signal_how_its_work_icon_3,
        step: "STEP – 3",
        description: "Receive Trade Alerts in Real-Time",
    },
    {
        icon: signal_how_its_work_icon_4,
        step: "STEP – 4",
        description: "Follow Expert Entry & Exit Strategies",
    },
];

const Howitswork = () => {
    return (
        <>
            <section className="py-12 px-4 bg-white">
                <div className="max-w-7xl mx-auto ">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                        How It Works?
                    </h2>
                    <p className="text-gray-500 mb-10 text-base md:text-lg">
                        Get Real-Time trading signals & stay ahead in the market
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {steps.map((item, index) => (
                            <div
                                key={index}
                                className="border rounded-xl p-6 text-center hover:shadow-md transition bg-white"
                            >
                                <div className="bg-yellow-100 w-16 h-16 flex items-center justify-center rounded-full mx-auto mb-4">
                                    <Image src={item.icon} width={30} height={30} alt={item.step} />
                                </div>
                                <h3 className="font-bold text-gray-900 mb-2">{item.step}</h3>
                                <p className="text-gray-600 text-sm">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

        </>
    )
}

export default Howitswork
