import { useState } from 'react'

//setItem()
//getItem()
//removeItem()
//clear()
// local storage store value in the form of string

function App() {

  const user = {
    username : "sanjana",
    age: 18,
    city:"chakia"
  }
  localStorage.setItem('user',JSON.stringify(user))
  const users = JSON.parse(localStorage.getItem('user'))
  console.log(users);
  localStorage.removeItem('user',user)

  return (
    <div>
      
    </div>
  )
}

export default App
