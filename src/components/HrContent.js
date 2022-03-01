import React from 'react'
import '../style/HrContent.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch
} from "react-router-dom";
function HrContent() {
  return (

   <div className='HrContent'> 
        <div className='mainhome'>
        <Link to="/createinf">
            <div type='submit' href='/h' className='card cardStyle'>
              <p   className='cardh'>Create Internship notification</p>
            </div>
            </Link>
            <div className='card cardStyle'></div>
        </div>
        <div className='homeinfo'>
        <div className='table cardStyle'>
          <p className='tbhd'>Previously filled forms</p><hr className='hline'/>
        </div>
        </div>
        </div> 
  )
}

export default HrContent