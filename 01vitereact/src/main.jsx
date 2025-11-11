import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import React from 'react'


const anotherElement = (
  <a href="https://google.com" target='_blank'>Visit google </a>
)

const reactElement = React.createElement(
  'a',
  {href:'https://google.com',target:'_blank'},
  'click here to go to google.com'
)

createRoot(document.getElementById('root')).render(

     <App/> 


)
