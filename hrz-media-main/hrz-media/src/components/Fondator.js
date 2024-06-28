import React from 'react'

const Fondator = (props) => {
  return (
    <div className='flex flex-col overflow-hidden mx-auto'>
      <img src={props.imagine} alt="Fondator Agentie Social Media Marketing" className='h-[500px] xxs:h-auto xxs:w-[300px] xs:h-auto xs:w-[350px] lg:pt-16'/>
      <div className='bg-white text-black p-4'>
        <h2 className='text-2xl xxs:text-xl font-semibold'>{props.nume}</h2>
        <p className='text-xl xxs:text-lg'>{props.ocupatie}</p>
      </div>
    </div>
  )
}

export default Fondator
