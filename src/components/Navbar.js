import React from 'react'
import '../style/Navbar.css';

function Navbar() {
  return (
    <div className='navbar'>
        <div className='navbox'>
            <h1>IIT ISM</h1>
            <img className='logoimg' src='./images/logo.png' />
        </div>
    </div>
  )
}

export default Navbar