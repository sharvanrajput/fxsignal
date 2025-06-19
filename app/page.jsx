'use client';

import Banner from '@/components/banner/page.jsx'
import Bannerpoint from '@/components/bannerpoint/page.jsx'
import Livesignal from '@/components/forexsignal/page.jsx'
import Newsandreport from '@/components/news-and-report/page.jsx'
import PrisingCards from '@/components/priseingCards/page.jsx'
import Reviews from '@/components/reviews/page.jsx'
import Blogs from '@/components/blogCard/page.jsx'
import Cta1 from '@/components/Cta_1/page.jsx'

const page = () => {
  return (
    <main>
      <Banner />
      <Bannerpoint />
      <Livesignal />
      <Newsandreport />
      <PrisingCards />
      <Reviews />
      <Blogs />
      <Cta1 />
    </main>
  )
}

export default page