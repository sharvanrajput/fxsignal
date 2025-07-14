
import Image from 'next/image';
import Toprightarrowbutton from '@/components/button_icon/page.jsx';
import { IoCallOutline } from "react-icons/io5";
import bg_shape_1 from "@/public/img/bg_shape_1.png";
import pricing_hero_right from "@/public/img/pricing_hero_right.png";
import Link from 'next/link';
const Pricingabout = () => {
    return (
        <><section
            className="about_banner pt-40 pb-20 bg-contain bg-center"
            style={{ backgroundImage: `url(${bg_shape_1.src})` }}
        >
            <div className="container">
                <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
                    <div className='self-center'>
                        <h1 className="text-4xl text-pretty font-bold">
                            Partner with FXSignals &
                            <span className="text-light-yellow"> Grow Your Business</span>
                        </h1>
                        <p className="text-para-dark text-lg py-3 mb-4">
                            Expand your reach, attract more traders, and maximize your revenue with our exclusive partner and brokerage solutions.
                        </p>
                        <Link href={"/livesignal"}>
                            <Toprightarrowbutton btntext={"Get Free Signals"} />
                        </Link>
                        <p className='text-para-dark flex items-center mt-4 '>
                            <IoCallOutline className='me-2' /> For equerries call: +971 503056430
                        </p>
                    </div>
                    <div>
                        <Image
                            src={pricing_hero_right}
                            alt="About Banner"
                            className="w-[75%] mx-auto "
                            priority
                        />
                    </div>
                </div>


            </div>
        </section>

        </>
    )
}

export default Pricingabout
