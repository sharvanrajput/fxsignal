import React from 'react'
import { BsStars } from "react-icons/bs";
import FaqAccordion from '../Faq/page';
import Link from 'next/link';
const faqs = {
    
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
       
    ]
}

const ContactFaq = () => {
    return (
        <>
            <section>
                <div className="container">
                    <div className="grid grid-cols-5">
                        <div className='col-span-2'>
                            <h4 className=' border border-heading-c2 inline p-4  rounded-full'><BsStars className='inline text-light-yellow' /> <span className="font-bold">FAQ</span> </h4>
                            <h2 className='mt-10 mb-7 text-5xl  font-semibold' >FrequentlyAsked <br />
                                Questions</h2>
                            <p className='mb-5'>Still have a questions in mind?</p>
        <Link href={"#contactform"}>
                            <button className='py-4 px-6 text-xl bg-light-yellow border-0 rounded-full active:scale-95 cursor-pointer  '>Ask a Question</button>
        </Link>


                        </div>
                        <div className='col-span-3'>


                            <FaqAccordion faqs={faqs.faq} heading={faqs.head} subhead={faqs.subhead} />

                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default ContactFaq
