import React from 'react'


const ComponentColab = (props) => {
  return (
    <div className='rounded-xl bg-black border-solid border-2 border-white min-w-[500px] xs:min-w-[300px]'>
      <img src={props.imagine} alt="Client Social Media" className='w-[500px] mx-auto rounded-t-lg'></img>
      <div>
        <h2 className='text-center text-white text-2xl uppercase py-4'>{props.companie}</h2>
        <p className='text-center text-white text-m pb-4'>{props.timp}</p>
      </div>
    </div>
  )
}

export default ComponentColab
