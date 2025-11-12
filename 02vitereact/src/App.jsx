import { useState } from 'react'




function App() {
  let [counter,setCounter] = useState(15)

  const addValue = () => {
    counter = counter+1
    setCounter(counter) // set counter is a function that display the value
    if(counter > 20){
      setCounter(20)
    }
  }

  const removevalue = () => {
    setCounter(counter-1)
    if(counter < 1){
      alert("you are at the bottom of the digit")
      setCounter(1)
    }
  }

  return(
    <>
      <h1>vite and react 2</h1>
      <h2>counter value : {counter}</h2>
      <button onClick={addValue}>add value</button>
      <br />
      <button onClick={removevalue}>decrease value</button>
    </>
  )

 
}

export default App
