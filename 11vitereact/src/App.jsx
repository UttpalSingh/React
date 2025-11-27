import axios from 'axios'
import { useState } from 'react';

function App() {
  const [Data,setdata] = useState([])
  // by using fetch()

  // // return promise
  // function submitButton(){
  //   let response = fetch('https://official-joke-api.appspot.com/random_joke')
  //   console.log(response);
  // }

  // // return data
  // async function submitButton(){
  //   let response =await fetch('https://official-joke-api.appspot.com/random_joke')
  //   let data = await response.json()
  //   console.log(data);
  // }

  // by using axios()
  const submitButton = async() => {
    const response = await axios.get('https://official-joke-api.appspot.com/random_joke')
    console.log(response.data);
    setdata(response.data)
  }

  return (
    <div>
      <button onClick={() => submitButton()} className='h-12 w-24 border bg-gray-500 text-white'>Get data</button>
    </div>
  )
}

export default App
