import Image from "next/image"

import advertise_with_us from "@/public/img/advertise_with_us.png"
import Link from "next/link"

const page = () => {
  return (
    <>
      <div className="bg-white">

        <div className="text-center border-2 py-5 mt-4 px-10 border-[#999890]  rounded-2xl bg-gradient-to-b from-yellow-50/10 to-yellow-50">
          <Image src={advertise_with_us} className="w-75 mx-auto" alt="advertise with us" />
          <h4 className="text-2xl font-bold pt-4 pb-3" >Advertise With Us</h4>
          <p className="text-para-dark text-xl">We provide excellent opportunities for advertising. Reach out to your audience!</p>
          <Link href={"/partner"}>
            <button className="py-2 px-4 w-full text-center  rounded-lg cursor-pointer bg-gradient-to-tl text-white text-lg mt-3 from-heading-c2 to-black active:scale-[0.9]">Trade</button>
          </Link>
        </div>
      </div>
    </>
  )
}

export default page
