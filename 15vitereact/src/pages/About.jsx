import React from 'react'
import { useNavigate } from 'react-router-dom'

const About = () => {
    let navigate = useNavigate()

    const btnClicked = () => {
        navigate('/')
    }

  return (
    <div className='flex items-center justify-center py-5 flex-col'>
        <h1 className='text-[50px]'>This is about our goal</h1>
        
        <button onClick={() => btnClicked()} className='bg-purple-700 px-5 py-2 rounded-2xl m-2 cursor-pointer active:scale-95'>Return to home page</button>

        <button onClick={() => {
            navigate(-1)
        }} className='bg-purple-700 px-5 py-2 rounded-2xl m-2 cursor-pointer active:scale-95'>Back</button>

    </div>
  )
}

export default About
