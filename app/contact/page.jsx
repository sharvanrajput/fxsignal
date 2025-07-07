import ContactFaq from '@/components/contactfaq/ContactFaq'
import ContactInfoSection from '@/components/contactInfo/ContactInfoSection'
import Contactbanner from '@/components/Contactsection/Contactbanner'
import React from 'react'

const page = () => {
  return (
    <main>
        <Contactbanner />
        <ContactInfoSection />
        <ContactFaq />
      
    </main>
  )
}

export default page
