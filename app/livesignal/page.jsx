import Howitswork from "@/components/livesignal_howitswork/Howitswork.jsx";
import Signaltable from "@/components/signaltable/page.jsx";
import PrisingCards from '@/components/priseingCards/page.jsx'
import FaqAccordion from '@/components/Faq/page'
import Cta3 from "@/components/Cta_3/Cta3";
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
    <>
        <main>
             <Signaltable />
             <Howitswork />
             <PrisingCards />
             <FaqAccordion faqs={faqs.faq} heading={faqs.head} subhead={faqs.subhead} />
             <Cta3 />



        </main>
        
        

      
    </>
  )
}

export default page
