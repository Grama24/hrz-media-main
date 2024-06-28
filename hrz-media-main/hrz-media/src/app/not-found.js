"use client"
import React from 'react'
import Link from 'next/link'
import { PacmanLoader } from 'react-spinners'
const notFound = () => {
  return (
    <div className='h-[94vh] content-center justify-center pagina'>
      <div className='text-white text-4xl text-center mb-32'>
        <h2>OOPS! Ai ajuns pe o pagina care nu exista!</h2>
      </div>
      <div className='mx-auto w-[200px]'>
      <PacmanLoader color="yellow" size="50" />
      </div>
      <div className='text-center'>
      <Link href="/"><button className='bg-white text-center p-4 w-[200px] mt-16 rounded-full'>Acasa</button></Link>
      </div>
   
    </div>
  )
}

export default notFound
