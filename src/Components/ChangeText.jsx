import React, { useState } from 'react'
import styles from './ChangeColor.module.css';

export default function ChangeText() {
    const [changeText, setchangeText]=useState(false);

    function changeTextHandler(){
        setchangeText(!changeText);
    }
  return (
    <div>
        
         <button onClick={changeTextHandler} className={styles.button}>Click</button>

        <p className={changeText ? styles.textRed : styles.textBlack}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. <br /> Porro in quisquam,
             aliquam repellendus sint,<br /> quia vero sed nam doloribus voluptatibus numquam. 
            Tempora optio <br /> error illo maxime blanditiis, unde pariatur repellendus!
        </p>
    </div>
  )
}
