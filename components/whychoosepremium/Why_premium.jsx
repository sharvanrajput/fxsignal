const benefits = [
    {
        id: 1,
        icon: "/img/why_premium_1.png",
        title: " Proven Accuracy",
        description: "Up to 90% win rate with real-time execution."
    },
    {
        id: 2,
        icon: "/img/why_premium_2.png",
        title: "Risk Management",
        description: "TP & SL levels optimize trades, ensuring controlled risk and maximum profit."
    },
    {
        id: 3,
        icon: "/img/why_premium_3.png",
        title: "Expert Analysis",
        description: "Backed by professional traders & AI-driven insights."
    }
];
const Why_premium = () => {
  return (
    <>
     <section className="pb-20 bg-[#fffdfa]">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
                    Why Choose FXSignals Premium?
                </h2>
             

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
      
    </>
  )
}

export default Why_premium
