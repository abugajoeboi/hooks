import React, { useState } from 'react'
import styles from './ChangeColor.module.css';

export default function ChangeColor() {
    const [changeColor,setchangeColor]=useState(0);
    const [isBlue, setisBlue]=useState(false);


    function countHandler(){
        
        const newCount = changeColor +1
        setchangeColor(newCount);

        if(newCount >= 10){
            setisBlue(!false)
        }
    }
  return (
    <div>
        <button onClick={countHandler} className={`${styles.button} ${isBlue ? styles.buttonBlue :''}`}>Count</button>
        <p className={styles.change}>{changeColor}</p>
    </div>
  )
}




