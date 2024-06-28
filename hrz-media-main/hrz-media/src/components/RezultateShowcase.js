import React from 'react'
import Image from '../assets/allviewed.jpg'

const RezultateShowcase = (props) => {
  return (
    <div className='flex flex-row lg:flex-col-reverse mx-auto pt-16 w-full justify-between'>
        <div className='text-white w-[50%] content-center lg:mx-auto lg:w-full lg:mt-16 lg:text-center'>
          <h2 className='text-3xl mb-8'>{props.titlu}</h2>
          <p>{props.paragraf}</p>
        </div>
          <div className='lg:w-full'>
          <img src={props.imagine} alt="Rezultate Social Media" className='max-w-[500px] nav:max-w-[400px] xs:max-w-[350px] lg:mx-auto lg:max-w-full rounded-2xl shadow-xl shadow-gray-700' />
          </div>

    </div>
  )
}

export default RezultateShowcase
