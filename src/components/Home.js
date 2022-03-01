import React from 'react'
import Navbar from './Navbar.js';
import HrContent from './HrContent.js';
import '../style/Home.css';

function Home() {
  return (
      <>
      <div className='home'>
           <Navbar/>
           <div className='mainhome' ><HrContent/></div>
      </div>
    </>
  )
}

export default Home