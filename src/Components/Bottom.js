import React from 'react'
import './Bottom.css'
import Logo from './Images/logo.png'
function Bottom() {
  return (
    <>
    <div className="mainbottom">
    <div className="bottom">
        <img src={Logo} alt="" />
        <h2>Samatvamudra Foundation</h2>
        
        <div className="contactcontent"><div className="contact">
            <h3>Contact</h3>
            <p>+91 0000000000</p>
            <p>XYZ colony, Abc Area Sbc City,
                Dfc State,12345.XYZ colony, Abc Area Sbc City,
                Dfc State,12345.
            </p>
            <p>samavtamudrafoundation@gmail.com</p>
        </div>
        <div className="rightbottom">
            <h3>Links</h3>
            <ul>
                <li>Registration</li>
                <li>Education</li>
                <li>Syllabus</li>
                <li>Notice</li>
            </ul>
        </div>
        <div className="leftbottom">
            <p>Term & Condition</p>
            <p>Privacy</p>
            <p>Service</p>
        </div>
        </div>
    </div>
    </div>
    </>
  )
}

export default Bottom