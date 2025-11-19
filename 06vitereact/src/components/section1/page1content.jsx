import React from 'react'
import Leftcontent from './leftcontent'
import Rightcontent from './rightcontent'
const Page1content = () => {
  return (
    <div className='py-10 px-18 h-[90vh]  flex gap-10 items-center'>
      <Leftcontent/>
      <Rightcontent/>
    </div>
  )
}

export default Page1content
