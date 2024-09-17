import React, { useEffect, useState } from 'react'

export default function UseEffect() {
  const [toggle ,settoggle]=useState(false);


  function changeTextHandler(){
    settoggle(!toggle)
  }


  useEffect(()=>{
    console.log('am good')
    settoggle(!toggle);
  },[])
  return (
    <div>
      <h1>change text color</h1>
      <button onClick={changeTextHandler}>click</button>
      {
        toggle? <p style={{color: 'red'}}>Lorem ipsum dolor sit amet.</p>: <p style={{color: 'blue'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, perspiciatis.</p>
      }
        
    </div>
  )
}
