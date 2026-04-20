import React from 'react'
import img from "../../../assets/Homepage/Phone.png"
import img1 from "../../../assets/Homepage/Chat.png"
import "./Header.css"

const Header = () => {
  return (
    <div>
      <div className="header">
        <h2>CREATE<span style={{color: "#FF5A30"}}>X</span></h2>
        <ul>
            <li>About Us</li>
            <li>Service</li>
            <li>Work</li>
            <li>News</li>
            <li>Contacts</li>
        </ul>
        <div className="header1">
            <div className="header12">
                <img src= {img} alt="" />
                <div className="head">
                    <h3>Call us</h3>
                    <p>(405) 555-0128</p>
                </div>
            </div>
            <div className="header12 header123">
                <img src={img1} alt="" />
                <div className="head">
                    <h3>Talk to us</h3>
                    <p>hello@createx.com</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Header
