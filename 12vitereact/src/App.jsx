import { useEffect, useState } from 'react'

function App() {
  const[num,setnum] = useState(10)
  const[num1,setnum1] = useState(100)

  useEffect(()=>{
    console.log("item is added to cart");
    
  },[num])

  return (
    <div className='h-screen w-full bg-black text-white'>
      <h1 className='text-6xl'>{num}</h1>

      <button onClick={() =>{
        setnum(num+1)
      }} className='text-4xl border bg-white text-black p-2'>Add to cart</button>

      <h1 className='text-6xl'>{num1}</h1>
      <button onClick={() => {
        setnum1(num1+100)
      }} className='text-4xl border bg-white text-black p-2'> Move to whishlist</button>
    </div>
  )
}

export default App
