import  Aboutbanner from "@/components/about_banner/page.jsx"
import  Whoweare from "@/components/who_we_are/page.jsx"
import  MissionVision from "@/components/mission_vision/page.jsx"
import  WhyChooseFxS from "@/components/why_choose_fxsignal/page.jsx"
import  Team from "@/components/Team/page.jsx"
import  Partnership_about from "@/components/partnership_about/page.jsx"

const page = () => {
  return (
    <>
        <main>
            <Aboutbanner />
            <Whoweare />
            <MissionVision />
            <WhyChooseFxS />
            <Team />
            <Partnership_about />

        </main> 
    </>
  )
}

export default page
