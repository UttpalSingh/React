import React from 'react'

const Function = () => {
    function collectData(val){
        console.log(val);
    
    }
  return (
    <div>
       <input onChange={(e) => collectData(e.target.value)} className='h-12 w-50 mx-4' type="text" placeholder='enter your name' />
    </div>
  )
}

export default Function
