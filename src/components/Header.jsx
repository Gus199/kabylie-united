import React from 'react'
import { Link } from "react-router-dom";

function Header() {
  return (
    <div id='main'>
     <div className='name'>
        <h2>SET UP YOUR</h2>
        <h1><span>KABYKIE</span> UNITED</h1>
        <p className='details'> Build Your Body Fitness With Professional Touch</p>
        <div className='header-btns'>
         <Link to='/joinus'>  <a  className='header-btn'>JOIN US</a></Link>  
        </div>
     </div>
    </div>
  )
}

export default Header