import React, { useState } from 'react'

export default function CountDown() {
    const [count,setcount]=useState(0);

    function countHandler(){
        setcount(count + 1)
    }
  return (
    <div>
        <p> count: {count}</p>
        <button onClick={countHandler}>click</button>

    </div>
  )
}
