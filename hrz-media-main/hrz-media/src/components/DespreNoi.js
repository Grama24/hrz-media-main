import React from 'react'
import Fondator from './Fondator'
import Fondator1 from '../assets/barbat1.png' 
import Fondator2  from '../assets/pozafondator.png' 
import Titlu from './Titlu'
import Rezultate from './Rezultate'
import Dece from './Dece'
import Colaborari from './Colaborari&Rezultate'
import Statistici from './Statistici'
const DespreNoi = () => {
  return (
    <div className='pt-32 despreNoi'>
      <Titlu scris="Despre Noi"/>  
      <div className='w-[90%] max-w-[1250px] mx-auto pt-32 flex lg:flex-col-reverse lg:pt-16 pb-16 bg-black fondator'>
      <Fondator imagine={Fondator2.src} nume=" Alexandru Tudor (Horazio)" ocupatie="CEO" />
        <p className='text-white my-auto lg:mt-16 lg:text-center mx-auto xs:w-[350px] xxs:w-[300px] w-[400px]'>HRZ Media - experți în promovarea organica pe platformele online, în special pe TikTok și Instagram. Noi maximizăm vizibilitatea și vânzările clienților noștri, oferind soluții personalizate și inovatoare în marketingul digital in cel puțin 5 nișe diferite. Avem peste 20 de clienti multumiti, peste 500 milioane de views si peste 2 milioane de urmaritori acumulati</p>
        
        </div>   

       <Rezultate />
      <Dece/>
      <Colaborari/>
      
    </div>
  )
}

export default DespreNoi
