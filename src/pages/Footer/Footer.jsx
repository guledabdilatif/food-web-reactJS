import React from 'react'
import logo from '../../Assets/pizzaLogo.png'
import { BsTwitter, BsLinkedin, BsPinterest, BsFacebook } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import './footer.css'

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-about">
        <img src={logo} alt="" />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste odit delectus ratione cumque, magnam facilis nobis! Quidem eius nam, ducimus ipsam sunt reiciendis ad ullam maxime voluptate delectus expedita quas!</p>
      </div>
      <div className="social-media-icon">
        <div className='social-icon'><BsFacebook /><p>Facebook</p></div>
        <div className='social-icon'> <BsTwitter /><p>Twitter</p></div>
        <div className='social-icon'> <BsLinkedin /><p>Linkedin</p></div>
        <div className='social-icon'><BsPinterest /><p>Pinterest</p></div>
      </div>
      <div className="quick-links">
        <Link to="/">Home</Link>
        <Link to="/About">About</Link>
        <Link to="/Menu">Menu</Link>
        <Link to="/Contact">Contact</Link>
      </div>
    </div>
  )
}

export default Footer