"use client";

import { useEffect } from "react";
import Image from "next/image";
import { useParams } from "next/navigation";
import { MdOutlineDateRange } from "react-icons/md";
import Offerslider from '@/components/offerslider/page.jsx';
import Widgets1 from "@/components/widgets/widget1/page.jsx";
import Primum_card from '@/components/unlock_premium_signal/Primum_card.jsx';
import { useTradeIdeaQuery } from "@/services/tradeIdeasSlice";

const Page = () => {
  const param = useParams();
  const { data, isLoading } = useTradeIdeaQuery();

  const slug = decodeURIComponent(param?.slug);

  console.log(slug)

  const singleNews = data?.trade?.find(
    (item) => item.title.toLowerCase().split(" ").join("-") === slug.toLowerCase()
  );

  console.log(singleNews)

  useEffect(() => {
    if (!singleNews) return;

    // Set document title
    document.title = singleNews.title;

    // Set meta description
    let metaDesc = document.querySelector("meta[name='description']");
    if (metaDesc) {
      metaDesc.setAttribute("content", singleNews.news_desc);
    } else {
      metaDesc = document.createElement("meta");
      metaDesc.name = "description";
      metaDesc.content = singleNews.news_desc;
      document.head.appendChild(metaDesc);
    }
  }, [singleNews]);

  if (isLoading || !singleNews) return <div className="loading">Loading...</div>;

  return (
    <section className="pt-40 pb-20">
      <div className="container">
        <div className="grid lg:grid-cols-5 grid-cols-1 gap-5">
          <div className="col-span-3">
            <div className="w-full relative h-[300px] overflow-hidden mb-2 rounded-lg">
              <Image
                src={`${process.env.NEXT_PUBLIC_BASEURL}/uploads/trade/${singleNews.trade_image}`}
                width={710}
                height={300}
                className="w-full h-auto object-cover rounded-lg"
                alt="news"
              />
            </div>

            <div className="disc self-center">
              <div className="flex items-center mb-2">
                <MdOutlineDateRange className="me-2 text-xl text-light-yellow" />
                <span className="text-para-dark">
                  {singleNews.date.split("T")[0]}
                </span>
              </div>

              <h2 className="text-3xl font-semibold text-gray-800">
                {singleNews.title}
              </h2>

              <div className="text-sm text-gray-500 mb-4">
                <div
                  dangerouslySetInnerHTML={{ __html: singleNews.description }}
                  className="grid gap-5"
                />
              </div>
            </div>
          </div>

          <div className="col-span-2">
            <div className="space-y-5">
              <Offerslider />
              <Widgets1 />
              <Primum_card className="mt-4" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page;
