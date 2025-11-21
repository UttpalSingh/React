import { useState } from 'react'


function App() {
  const [count, setCount] = useState('')
  function submitForm(e){
    e.preventDefault()
    console.log("form submit by",count);
    setCount('')
  }
  return (
    <>
      <div className='px-4 py-4 h-24 w-42'>
        <form onSubmit={(e) => submitForm(e)} action="">
          <input type="text" value={count} placeholder='enter your name' className='p-5 mb-5 bg-gray-400 rounded-2xl text-white' 
          onChange={(e)=>{
            setCount(e.target.value)
          }}/>
          <button className='h-14 w-full bg-blue-600 p-2 rounded-4xl text-white'>Enter</button>
      </form>
      </div>
    </>
  )
}

export default App
