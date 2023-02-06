import React from 'react'
import logo from '../ghost.png'


export default function Info(){
  return (
    <div>
        <header>
            <img src={logo} alt="me" />
            <h1>Shwetank Mishra</h1>
            <h2>Learnt react from freecodecamp.org</h2>
            
            <a href="mailto: shwetankas@gmail.com">
              <button className='button1'>Email<a href="mshwetank@gmail.com"></a></button>
            </a>
            <a href="https://www.linkedin.com/in/shwetank-mishra-b0216597/" target="_blank">
              <button className='button2'>LinkedIn</button>
            </a>
        </header>
    </div>
  )
}

