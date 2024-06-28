import Contact from '@/components/Contact'
import React from 'react'
export const metadata = {

  title: "Contact",
  description: " Contactează-ne acum daca dorești o ofertă personalizată pentru brand-ul tău",

};
const ContactPage = () => {
  return (
    <div className='pt-8'>
      <Contact/>
    </div>
  )
}

export default ContactPage
