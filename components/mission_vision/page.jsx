"use client";

import Image from "next/image";

const cards = [
  {
    title: "Our Mission",
    description:
      "Empowering traders and brokers with accurate signals, market insights, and strategic growth solutions for long-term success.",
    icon: "/img/mission.png",
  },
  {
    title: "Core Values",
    description:
      "FXSignals thrives on transparency, innovation, trust, and community, delivering expert insights and fostering an informed trading network.",
    icon: "/img/value.png",
  },
  {
    title: "Community Impact",
    description:
      "FXSignals is dedicated to educating, mentoring, and empowering traders worldwide through interactive forums, webinars, and expert guidance.",
    icon: "/img/community.png",
  },
];

const MissionSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-lg  p-6 text-center  hover:shadow-[0_8px_0px_0px_#e8e2d5]  transition-shadow duration-300"
          >
            <div className="flex justify-center mb-4">
              <Image src={card.icon} alt={card.title} width={50} height={50} />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              {card.title}
            </h3>
            <p className="text-gray-600 ">{card.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MissionSection;
