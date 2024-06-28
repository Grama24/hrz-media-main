import React from 'react'
import { FaTasks } from "react-icons/fa";
const ComponentServicii = (props) => {
  return (
    <div className=' w-[601px] 2xl:w-full rounded-2xl h-auto bg-yellow-400 flex px-8 py-8 compserv'>
      
      <div className='w-[20%]'>
      {props.icon}
      </div>
      <div className='w-[80%]'>
      <h2 className='text-lg font-semibold mb-4'>{props.titlu}</h2>
      <p className='mb-3 text-sm'>{props.paragraf1}</p>
      <p className='text-sm'>{props.paragraf2}</p>
      </div>
   
    </div>
  )
}

export default ComponentServicii
