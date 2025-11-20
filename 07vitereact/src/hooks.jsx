import React from 'react'
import { useState } from 'react'

const Hooks = () => {
  const[data,printData] = useState(10)
  function onchange(){
    printData(20)
  }

  return (

    <div>
      <h1 className=''>Today's date is {data}</h1>
      <button onClick={() => onchange()}>click</button>
    </div>
  )
}

export default Hooks


