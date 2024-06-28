import React from 'react'

const ComponentStatistici = (props) => {
  return (
    <div>
      <div className='max-w-[220px] rounded-2xl border-solid border-white border-2'>
         <img src={props.imagine} alt="Statistici" className='max-w-[200px] rounded-t-xl mx-auto'></img>
        <div>
            <h2 className='text-center text-white text-xl py-6'>{props.at}</h2>
        </div>
      </div>
    </div>
  )
}

export default ComponentStatistici
