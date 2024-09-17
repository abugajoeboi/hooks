import React, { useState } from 'react'

export default function Toggle() {
    const [changeText ,setchangeText]=useState(false);
     
        function textHandler(){
            setchangeText(!changeText)
        }


  return (
    <div>
        <button onClick={textHandler}>{changeText ? 'come here':'there'}</button>
    </div>
  )
}
