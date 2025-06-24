import Pricingabout from "@/components/pricingabout/Pricingabout"
import Why_premium from "@/components/whychoosepremium/Why_premium"
import PrisingCards from '@/components/priseingCards/page.jsx'
import Howitwork from '@/components/pricinghowitwork/Howitwork.jsx'
import Paymentmethod from "@/components/payment_method/Paymentmethod"
import FaqAccordion from '@/components/Faq/page'
import Cta4 from "@/components/Cta_4/Cta4"

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

const page = () => {
  return (
    <main>
      <Pricingabout />
      <Why_premium />
      <PrisingCards />
      <Howitwork />
      <Paymentmethod />
      <FaqAccordion faqs={faqs.faq} heading={faqs.head} subhead={faqs.subhead} />
      <Cta4 />

    </main>
  )
}

export default page
