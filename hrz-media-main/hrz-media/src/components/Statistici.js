import React from 'react'
import Titlu from './Titlu'
import ComponentStatistici from './ComponentStatistici'
import zeina from '../assets/@zeinakebap1.jpeg'
import secout from '../assets/@the.secout.jpeg'
import promotors from '../assets/@promotors.jpeg'
import comp from '../assets/@competizione.jpeg'
import reasig from '../assets/@reasig.jpeg'
import reasig2 from '../assets/@reasig (2).jpeg'
import vestor from '../assets/@vestorromania.jpeg'
import depurtat from '../assets/@depurta-ro.jpeg'
import klandestin from '../assets/@klandestin.official.jpeg'

const Statistici = () => {
  return (
    <div className=' mx-auto py-12 statistici'>
      <div className='py-8'><Titlu scris="Statisticile noastre"></Titlu></div>
      <div className='flex flex-wrap gap-6 justify-center content-evenly max-w-[1250px] w-[90%] mx-auto'>
        <ComponentStatistici at="@zeinakebap1" imagine={zeina.src}></ComponentStatistici>
        <ComponentStatistici at="@the.secout" imagine={secout.src}></ComponentStatistici>
        <ComponentStatistici at="@promotors" imagine={promotors.src}></ComponentStatistici>
        <ComponentStatistici at="@competizione" imagine={comp.src}></ComponentStatistici>
        <ComponentStatistici at="@reasig.ro" imagine={reasig.src}></ComponentStatistici>
        <ComponentStatistici at="@reasig.ro" imagine={reasig2.src}></ComponentStatistici>
        <ComponentStatistici at="@vestorromania" imagine={vestor.src}></ComponentStatistici>
        <ComponentStatistici at="@depurtat.ro" imagine={depurtat.src}></ComponentStatistici>
        <ComponentStatistici at="@klandestin.official" imagine={klandestin.src}></ComponentStatistici>
      </div>
    </div>
  )
}

export default Statistici
