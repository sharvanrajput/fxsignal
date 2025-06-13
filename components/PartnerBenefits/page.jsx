const benefits = [
    {
        id: 1,
        icon: "/icons/ad-icon.svg",
        title: "Exclusive Broker Advertising",
        description: "Get featured on FXSignals and increase brand awareness."
    },
    {
        id: 2,
        icon: "/icons/registration-icon.svg",
        title: "Seamless Registration Process",
        description: "Quick onboarding and hassle-free promotion."
    },
    {
        id: 3,
        icon: "/icons/growth-icon.svg",
        title: "Cost-Effective Growth",
        description: "No upfront costs, only performance-based exposure."
    }
];

const PartnerBenefits = () => {
    return (
        <section className="pb-20 bg-[#fffdfa]">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
                    Why Partner with FXSignals?
                </h2>
                <p className="text-para-dark max-w-3xl mx-auto mb-12">
                    Gain access to premium trading signals, marketing solutions, and engagement-driven tools
                    designed to help you attract and retain traders.
                </p>

                <div className="grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-2 place-items-center gap-6">
                    {benefits.map((item, index) => (
                        <div
                            key={index}
                            className="bg-white border border-gray-300 w-full h-full rounded-xl p-6 text-center transition-all duration-300   hover:shadow-[0_8px_0px_0px_#e8e2d5] hover:scale-[1.018]  "
                        >
                            <img
                                src={item.icon}
                                alt={item.title}
                                className="mx-auto mb-4 h-10 w-10"
                            />
                            <h3 className="text-2xl font-bold bg-gradient-to-l from-heading-c1 to-heading-c2 bg-clip-text text-transparent mb-2">
                                {item.title}
                            </h3>
                            <p className="text-para-dark text-pretty text-sm">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PartnerBenefits;
