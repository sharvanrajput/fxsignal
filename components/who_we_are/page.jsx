"use client";

import Image from "next/image";
import { BsCheckCircleFill } from "react-icons/bs";
import whoWeAreImage from "@/public/img/who_we_are.png"; // Update the path if needed


const page = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 items-center gap-8">
        {/* Left Image */}
        <div>
          <Image
            src={whoWeAreImage}
            alt="Who We Are"
            className="w-full aspect-auto mx-auto"
            priority
          />
        </div>

        {/* Right Content */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Who We Are</h2>
          <p className="text-gray-600 mb-6">
            FXSignals is a premier Insight & Marketing Service provider,
            delivering top-notch trading signals, analysis, and
            broker-focused marketing solutions. We enhance broker
            engagement, boost SEO rankings, and drive trader conversions
            through strategic content, social media, and co-marketing.
          </p>

          <ul className="space-y-3">

            <li className="flex items-center text-gray-700">
              <BsCheckCircleFill className="text-yellow-400 mr-2 text-lg" />
              Real-time forex signals
            </li>
            <li className="flex items-center text-gray-700">
              <BsCheckCircleFill className="text-yellow-400 mr-2 text-lg" />
              Precise trading insights
            </li>
            <li className="flex items-center text-gray-700">
              <BsCheckCircleFill className="text-yellow-400 mr-2 text-lg" />
              Trusted by thousands of traders globally
            </li>

          </ul>
        </div>
      </div>
    </section>
  );
};

export default page;
