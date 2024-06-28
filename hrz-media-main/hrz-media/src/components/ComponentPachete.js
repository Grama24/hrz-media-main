import Titlu from './Titlu'
import React from 'react';
import Link from 'next/link';
const ComponentPachete = (props) => {
  

  return (
    <div className=' w-[395px] xs:w-[350px] rounded-2xl p-8 bg' style={{backgroundColor: props.culoare}}>
      <div className='flex flex-col gap-8 text-center'>
        <h2 className='text-center uppercase text-2xl text-white'>{props.pachet}</h2>
        <h2 className='text-center text-white text-2xl'>{props.pret}</h2>
        <ul className='flex flex-col gap-4 '>
          <li><h2 className='text-white text-center'>{props.serviciu1}</h2></li>
          <li><h2 className='text-white text-center'>{props.serviciu2}</h2></li>
          <li><h2 className='text-white text-center'>{props.serviciu3}</h2></li>
          <li><h2 className='text-white text-center'>{props.serviciu4}</h2></li>
          <li><h2 className='text-white text-center'>{props.serviciu5}</h2></li>
          <li><h2 className='text-white text-center'>{props.serviciu6}</h2></li>
          <li><h2 className='text-white text-center'>{props.serviciu7}</h2></li>
          


        </ul>
        <Link href={props.url}><button className='duration-700 rounded-2xl border-solid border-2 border-white text-white p-3 hover:border-black hover:text-black hover:duration-700'>{props.buton}</button></Link>
      </div>
      
    </div>
  )
}

export default ComponentPachete
