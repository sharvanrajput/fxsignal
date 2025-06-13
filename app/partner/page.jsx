import PartnerAbout from '@/components/Partnerabout/page'
import PartnerBenefits from '@/components/PartnerBenefits/page'
import PartnerGetStarted from '@/components/Partner_get_started/page'
import FaqAccordion from '@/components/Faq/page'
import React from 'react'
import Cta2 from '@/components/Cta_2/page'

const PartnerPage = () => {
  return (
    <>
        <PartnerAbout />
        <PartnerBenefits />
        <PartnerGetStarted />
        <FaqAccordion />
        <Cta2 />
      
    </>
  )
}

export default PartnerPage
