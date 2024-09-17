import React, { useState } from 'react'
import './App.css'



 
function App() {
const [changeText, setchangeText]=useState('good')
// const [changeColor, setchangeColor]=useState('blue')

function textHandler(){
  setchangeText('marvelous')
  // setchangeColor('red')
}
  return (
    <>
       <h1>the LORD is <span style={{color: changeText==='good'? 'red':'yellow'}}>{changeText }</span> </h1>
       
       <button onClick={textHandler}>Marvelous</button>

    </>
  )
}

export default App
