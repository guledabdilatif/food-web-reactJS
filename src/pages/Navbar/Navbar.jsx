import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../Assets/pizzaLogo.png'
import './navbar.css'
import { FaBars } from 'react-icons/fa'

const Navbar = () => {
    const [open, setOpen] = useState(true)
    const navOpen = () => {
        setOpen(!open)
    }
    return (
        <div className='navbar'>
            <div className='nav-left'>
                <img src={logo} alt="" />
            </div>
            <div className={open ? "nav-right" : "displayNone"}>
                <Link to="/">Home</Link>
                <Link to="/About">About</Link>
                <Link to="/Menu">Menu</Link>
                <Link to="/Contact">Contact</Link>
            </div>
            <FaBars className='icon' onClick={navOpen} />

        </div>
    )
}

export default Navbar