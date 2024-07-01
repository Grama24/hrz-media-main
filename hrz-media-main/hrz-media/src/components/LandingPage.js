import React from 'react';
import vlog from '../assets/landing.gif';
import Link from 'next/link';
const LandingPage = () => {
  return (
    <div className='h-[100vh] overflow-hidden content-center mx-auto'>
        <img src={vlog.src} alt="Background Social Media" className='imagine-landing bg-cover object-cover h-[100vh] w-full absolute top-0 left-0 -z-10 blur-md shadow-lg '/> 
       <div className='text-center xs:w-[80%] w-[50%]  text-white mx-auto gap-8 flex flex-col items-center justify-center'>
       <h2 className=' text-4xl font-semibold ' >Agenția de Social Media Marketing cu rezultate deosebite</h2> 
        <p>HRZ Media - Transformăm prezența ta online prin strategii inovatoare și personalizate de marketing digital pe TikTok și Instagram. Garantăm creșterea vizibilității și vânzărilor tale în cel puțin 5 nișe diferite.</p>
        <Link href="/contact">
        <button className='duration-500 hover:bg-white hover:text-yellow-600 hover:duration-500 bg-yellow-600 w-60 h-12 rounded-3xl block mx-auto'>Contactează-ne</button>
        </Link>
       
       </div>
    
    </div>
  )
}

export default LandingPage
