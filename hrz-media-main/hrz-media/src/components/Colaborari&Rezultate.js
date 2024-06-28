"use client"
import React, { useEffect, useState } from 'react'
import comp from '../assets/comp.jpg'
import vestor from '../assets/vestor.jpg'
import zeina from '../assets/zeina.jpg'
import apa from '../assets/apa.jpg'
import depurtat from '../assets/depurtat.jpg'
import klandestin from '../assets/klandestin.jpg'
import promotors from '../assets/promotors.jpg'
import secout from '../assets/secout.jpg'
import Titlu from './Titlu'
import ComponentColab from './ComponentColab'
import { ReactSmartScroller } from 'react-smart-scroller'


const Colaborari = () => {   

  return (
    <div className='max-w-[1250px] w-[90%] mx-auto'>
        <div className='pt-4 pb-12'><Titlu scris="Colaborari si rezultate" className='py-6'></Titlu></div>
        <div className='flex flex-row'>
      <div className='scroller'>
      <ComponentColab companie="Competizione" timp="Rezultate obtinute intr-un an" imagine={comp.src}></ComponentColab>
      <ComponentColab companie="Vestor" timp="Rezultate obtinute in 5 luni" imagine={vestor.src}></ComponentColab>
      <ComponentColab companie="Zeina" timp="Rezultate obtinute in 2 luni" imagine={zeina.src}></ComponentColab>
      <ComponentColab companie="Apa h2on" timp="Rezultate obtinute dupa 2 videoclipuri" imagine={apa.src}></ComponentColab>
      <ComponentColab companie="Depurtat" timp="Rezultate obtinute in 6 luni" imagine={depurtat.src}></ComponentColab>
      <ComponentColab companie="Klandestin" timp="Rezultate obtinute in 6 luni" imagine={klandestin.src}></ComponentColab>
      <ComponentColab companie="Promotors" timp="Rezultate obtinute in 4 luni" imagine={promotors.src}></ComponentColab>
      <ComponentColab companie="The Secout" timp="Rezultate obtinute in 3 luni" imagine={secout.src}></ComponentColab>
      </div>
      </div>
    </div>
  )
}

export default Colaborari
