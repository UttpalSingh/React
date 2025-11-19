import React from 'react'

const CardContent = () => {
  return (
    <div>
        <div className='absolute top-0 left-0 h-full w-full  p-8 flex flex-col justify-between'>
        <h2 className='bg-white text-xl font-semibold rounded-full h-10 w-10 flex justify-center items-center'>1</h2>
        <div>
            <p className='text-lg leading-normal text-white mb-6'>True beauty is about who you are as a human being, your principles, your moral compass</p>
            <div className='flex justify-between'>
                <button className='bg-blue-600 text-white font-semibold px-8 py-3 rounded-full '>Satisfied</button>
                <button className='bg-blue-600 text-white font-semibold px-4 py-3 rounded-full'><i className="ri-arrow-right-line"></i></button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default CardContent
