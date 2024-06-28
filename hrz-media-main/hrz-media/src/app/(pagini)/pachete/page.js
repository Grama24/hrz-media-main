import Pachete from '@/components/Pachete'
import React from 'react'
export const metadata = {

  title: "Pachetele noastre",
  description: "Alege pachetul potrivit brandului tau!",

};
const PachetePage = () => {
  return (
    <div className='pt-24'>
      <Pachete/>
    </div>
  )
}

export default PachetePage
