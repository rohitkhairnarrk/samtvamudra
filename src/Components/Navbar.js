import React from 'react'
import Logo from './Images/logo.png'
import './Navbar.css'
import {
    Link
  } from 'react-router-dom';
function Navbar() {
  return (
    <>
    <div className="background">
        <div className="navbar">
          <div className="headnavmenu">
            <ul>
              <li><Link className='navhead' to="/">Main Site</Link></li>
              <li><Link className='navhead' to="/Home">Mail</Link></li>
              <li><Link className='navhead' to="/Login">Login</Link></li>
              <li><Link className='navhead' to="/Home">Sign Up</Link></li>
              <li><Link className='navhead' to="/Home">Contact us</Link></li>
            </ul>
          </div>
          <div className="headimage">
            <div className="navimg">
            <img src={Logo} alt="" />
            </div>
            <div className="marathiline">
            <Link id='headname'>SAMATVA MUDRA FOUNDATION, JALGAON</Link> <br/>
              <Link id='marathil'>समत्वमुद्रा फाउंडेशन, जळगाव</Link>
            </div>
          </div>
          <div className="navitem">
            <ul>
              <li><Link className='item' to="/Home">Home</Link></li>
              <li><Link className='item' to="/Home">About</Link></li>
              <li><Link className='item' to="/Home">Gallery</Link></li>
              <li><Link className='item' to="/Home">Education</Link></li>
              <li><Link className='item' to="/Home">Registration</Link></li>
              
            </ul>
          </div>
        </div>
    </div>
    </>
  );
}

export default Navbar