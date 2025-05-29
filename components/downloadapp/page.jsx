
import download_icon from "@/public/img/download_icon.png"
import playstore from "@/public/img/playstore.png"
import appstore from "@/public/img/appstore.png"
import Image from "next/image"


const page = () => {
    return (
        <>
            <div className="download_card pb-5 bg-yellow-50 mt-3 px-5 border-2  border-gray-400 rounded-2xl">
                <div className="flex justify-between items-center mb-3 py-3 ">
                    <h2 className="text-xl font-semibold bg-gradient-to-r from-heading-c1 to-heading-c2 bg-clip-text text-transparent">Download Our App</h2>
                    <div className=" rounded-full">
                        <Image src={download_icon} width={40} height={40} alt="downlaod iocn" />
                    </div>
                </div>
                <div className="flex  flex-wrap  justify-between  gap-3">
                    <Image
                        src={playstore}
                       
                        className="h-auto w-full max-w-[220px]"
                        alt="playstore"
                    />
                    <Image
                        src={appstore}
                       
                        className="h-auto w-full max-w-[220px]"
                        alt="appstore"
                    />
                </div>

            </div>
        </>
    )
}

export default page
