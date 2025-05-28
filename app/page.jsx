'use client';

import Banner from '@/components/banner/page.jsx'
import Bannerpoint from '@/components/bannerpoint/page.jsx'
import Livesignal from '@/components/forexsignal/page.jsx'
import Newsandreport from '@/components/news-and-report/page.jsx'

const page = () => {
  return (
    <>
      <Banner />
      <Bannerpoint />
      <Livesignal />
      <Newsandreport />
    </>
  )
}

export default page
