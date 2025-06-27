"use client"
import Allblog from "@/components/Allblog/Allblog"
import Blogslider from "@/components/blog_slider/Blogslider"
import Cta4 from "@/components/Cta_4/Cta4"
import Recentblog from "@/components/recentblog/Recentblog"



const page = () => {

  return (
    <main className="bg-gray-50">
    <Blogslider />
    <Recentblog />
    <Allblog />
    <Cta4 />
      
    </main>
  )
}

export default page
