"use client";
import Fxsignal_partnership_card from "@/components/fxsignal_partnership_card/page.jsx"
import { usePathname } from "next/navigation"


const page = () => {
    const path = usePathname();
    console.log(path)


    const partnercard1 = [
        {
            id: 1,
            img: "/img/about_partner_card_1.png",
            forpage: "about",
            title: "Grow Your Business with FXSignals Partnership",
            description: "Boost your brokerage’s visibility and attract high-value traders with our expert-driven marketing solutions and strategic alliances.",
            features: [
                "Co-marketing campaigns",
                "Highly engaged traders",
                "Promotions"
            ],
            buttonText: "Become A Partner"
        },
        {
            id: 2,
            img: "/img/about_partner_card_2.png",
            forpage: "about",
            title: "Top Brokers We Collaborate With for Trading",
            description: "We collaborate with top Forex brokers to provide traders with the best trading platforms, deep liquidity, and a secure trading environment.",
            features: [
                "Trusted Brokers", "Fast Execution", "Seamless signal integration"
            ],
            buttonText: "Join Us Now"
        },

    ]


    const partnercard2 = [
        {
            id: 3,
            img: "/img/midia_kit_card_img1.png",
            forpage: "about",
            title: "Advertising Opportunities",
            description: "FXsignale.ae offers a diverse range of advertising opportunities tailored to help advertisers effectively reach our targeted audience and achieve their promotional objectives. Here are some key advertising options available:",
            features: [
                "Sponsored Content",
                "Social Media Promotion",
                "Banner Ads"
            ],

        },
        {
            id: 4,
            img: "/img/midia_kit_card_img2.png",
            forpage: "about",
            title: "Promotional Strategies",
            description: "In addition to traditional advertising methods, FXsignale.ae offers innovative promotional strategies to help advertisers maximize their ROI and drive results:",
            features: [
                "Targeted Campaigns",
                "Performance Tracking",
                "Engagement Initiatives"
            ],

        }

    ]


    const partnercard = path === "/about" ? partnercard1 : partnercard2;

    return (
        <>
            <section className="py-[80px]">
                <div className="container">

                    <div className="grid lg:grid-cols-2 grid-cols-1 gap-6">
                        {partnercard.map((card) => (
                            <div key={card.id}>
                                <Fxsignal_partnership_card {...card} />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default page
