"use client"
import React from 'react'

import { HashLoader } from 'react-spinners'
const loading = () => {
  return (
    <div className='h-[94vh] content-center justify-center pagina'>
     
      <div className='mx-auto w-[200px]'>
      <HashLoader color="yellow" size="100" className='mx-auto'/>
      </div>
   
    </div>
  )
}

export default loading
