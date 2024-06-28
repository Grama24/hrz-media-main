import React from 'react'
import Titlu from './Titlu'
import Link from 'next/link';
import { FaTiktok } from "react-icons/fa";
import { BsFileEarmarkBarGraph } from "react-icons/bs";


const Dece = () => {
  return (
    <div className='w-[90%] max-w-[1250px] mx-auto pt-16 dece'>
      <Titlu scris="De ce este importanta vizibilitatea in online"/>
      <div className='flex flex-row  py-16 justify-between lg:flex-col 2xl:gap-8 '>
        <div className='flex flex-wrap max-w-[450px] py-16 lg:w-full lg:max-w-max lg:py-8 lg:justify-center  '>
            <h2 className='text-left text-wrap text-3xl text-white pb-8 pt-4 lg:text-center'>Fă-ți brandul cunoscut pe TikTok !</h2>
            <p className='text-left text-wrap text-m text-white pb-8'>Pentru a reuși în online în acest moment, trebuie să oferi plus-valoare audienței tale prin educație și amuzament. TikTok este platforma ideală pentru a face acest lucru</p>
            <Link href="/servicii"><button className='duration-700 rounded-md border-solid border-2 border-white text-white p-4 hover:border-black hover:text-black hover:bg-white hover:duration-700'>Serviciile noastre</button></Link>
        </div>
        <div className='max-w-[350px] py-16 lg:w-full lg:max-w-max lg:py-8 text-white'>
            <FaTiktok size={30} className='lg:mx-auto'/>
            <h2 className='text-left lg:text-center text-2xl text-white pb-8 pt-4'>Social media</h2>
            <p className='text-left lg:text-center text-m text-white pb-8'>Social media marketing-ul este esențial pentru creșterea vizibilității online și atragerea clienților organici, oferind o modalitate captivantă de a comunica mesajele afacerii tale și de a te diferenția într-o piață competitivă.</p>
        </div>
        <div className='max-w-[350px] py-16  text-white lg:w-full lg:max-w-max lg:pt-8 lg:pb-0'>
            <BsFileEarmarkBarGraph size={30} className='text-white lg:mx-auto' />
            <h2 className='text-left lg:text-center text-2xl text-white pb-8 pt-4'>Sansa ta</h2>
            <p className='text-left lg:text-center text-m text-white pb-8'>Stim cu totii ca ai ratat sansa de a te imbogatii cu BITCOIN la momentul oportun, asa ca nu mai astepta nici macar o secunda si promoveaza-te in online. Daca nu incepi de azi competitorii vor castiga teren in fata ta!
</p>
        </div>
    </div>
    </div>

     
    
  )
}

export default Dece
