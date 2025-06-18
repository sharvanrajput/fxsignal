import Offerslider from '@/components/offerslider/page.jsx';
import CurencyConvertor from '@/components/currencyConverter/page.jsx';
import Downloadapp from '@/components/downloadapp/page.jsx';
import AdvertiseWithus from '@/components/advertiseWithUs/page.jsx';
import NewsList from '@/components/news_list/page';
import Topbrocker from "@/components/topbrockertable/page.jsx";
import Widgets1 from "@/components/widgets/widget1/page.jsx";
import Signaltable from "@/components/signaltable/page.jsx";

const page = () => {
    return (
        <>
            <section className="py-50">
                <div className="container">
                    <div className="grid lg:grid-cols-5 grid-cols-1 gap-4">
                        <div className="col-span-3">
                            <h2 className="text-4xl  text-heading-c1   font-bold inline-block relative z-10">Top Brokers We Work With</h2>
                            <p className="text-para-dark mb-6 mt-5 text-lg">Partnering with the Best to Enhance Your Trading Experience</p>
                            <div className="mb-4">

                                <Topbrocker  />
                            </div>
                            {/* <br /> */}
                            <NewsList />


                        </div>
                        <div className="col-span-2">
                            {/* offer slider  */}
                            <Widgets1 />
                            <Offerslider />
                            <CurencyConvertor />

                            <AdvertiseWithus />
                            <Downloadapp />


                        </div>
                    </div>
                    <Signaltable />
                </div>


            </section>


        </>
    )
}

export default page
