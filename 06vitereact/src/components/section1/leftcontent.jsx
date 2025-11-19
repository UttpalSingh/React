import React from 'react'
import Hero from './hero'
import Arrow from './arrow'
import 'remixicon/fonts/remixicon.css'

const Leftcontent = () => {
  return (
    <div className='h-full flex flex-col justify-between w-1/3 '>
      <Hero/>
      <Arrow/>

    </div>
  )
}

export default Leftcontent
