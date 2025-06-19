import PartnerAbout from '@/components/Partnerabout/page'
import PartnerBenefits from '@/components/PartnerBenefits/page'
import PartnerGetStarted from '@/components/Partner_get_started/page'
import FaqAccordion from '@/components/Faq/page'
import React from 'react'
import Cta2 from '@/components/Cta_2/page'

const faqs = {
  head: 'Frequently Asked Questions',
  subhead: 'Get answers to common questions about FXSignals and our services.',
  faq: [
    {
      question: 'Who can register as a partner?',
      answer:
        'Any licensed Forex broker looking to expand their reach and attract more traders can register as a partner with FXSignals. Our platform is designed to help brokers gain visibility and credibility among active traders.',
    },
    {
      question: 'How does FXSignals promote registered brokers?',
      answer:
        'We offer featured placements, advertising, and direct lead support to help registered brokers grow their client base efficiently.',
    },
    {
      question: 'How does FXSignals promote registered brokers?',
      answer:
        'We offer featured placements, advertising, and direct lead support to help registered brokers grow their client base efficiently.',
    },
    {
      question: 'How does FXSignals promote registered brokers?',
      answer:
        'We offer featured placements, advertising, and direct lead support to help registered brokers grow their client base efficiently.',
    },
    {
      question: 'How does FXSignals promote registered brokers?',
      answer:
        'We offer featured placements, advertising, and direct lead support to help registered brokers grow their client base efficiently.',
    },
  ]
}


const PartnerPage = () => {
  return (
    <main>
      <PartnerAbout />
      <PartnerBenefits />
      <PartnerGetStarted />
      <FaqAccordion faqs={faqs.faq} heading={faqs.head} subhead={faqs.subhead} />
      <Cta2 />

    </main>
  )
}

export default PartnerPage
