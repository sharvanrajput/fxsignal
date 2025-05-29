"use client"
import Image from "next/image"
import banner_icon_1 from "@/public/img/banner_point_1.png"
import banner_icon_2 from "@/public/img/banner_point_2.png"
import banner_icon_3 from "@/public/img/banner_point_3.png"
import banner_icon_4 from "@/public/img/banner_point_4.png"


const bannerpoints = [
    {
        heading: "High-Accuracy Trade Signals",
        icon: banner_icon_1
    },
    {
        heading: " High-Accuracy Trade Signals",
        icon: banner_icon_2
    },
    {
        heading: "Multiple Trading Strategies",
        icon: banner_icon_3
    },
    {
        heading: "Easy-to-Use & 24/7 Support",
        icon: banner_icon_4
    },
]


const page = () => {
    return (
        <>
            <section className="bannerpointer bg-bannepoint py-8">
                <div className="container grid grid-cols-1 sm:grid-cols-2 gap-3 lg:grid-cols-4">

                    {
                        bannerpoints.map((ele,i) => {
                            return (
                                <div key={i} className="point_box flex flex-col items-center sm:items-left md:flex-row justify-center gap-3 py-3 px-5">
                                    <div className="icon">
                                        <Image src={ele.icon} alt="banner point" />
                                    </div>
                                    <h4 className="disc font-semibold text-lg">{ele.heading} </h4>
                                </div>
                            )
                        })
                    }


                </div>
            </section>
        </>
    )
}

export default page
