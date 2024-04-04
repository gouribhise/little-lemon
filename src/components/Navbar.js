import { useState } from 'react'
import logo from '../images/Logo .svg'
import hamburger from '../images/🦆 icon _hamburger menu.svg'
import { Link } from 'react-router-dom'
const Navbar =()=>{
    const [menuOpen,setMenuOpen]=useState(false)
    const toggleMenu=()=>{
        setMenuOpen(!menuOpen)
    }
    return (
  <nav className='navbar'>
    <a href="/">
        <img src={logo} alt="logo"/>
    </a>
    <div className='hamburger-icon'>
        <img src={hamburger} alt='hamburger icon' onClick={toggleMenu}/>

    </div>
    <ul className={`nav-links ${menuOpen?"visible":""}`}>
        <li>
        <Link to="/">Home</Link>
        </li>
        <li>
        <Link to="/about">About</Link>
        </li>
        <li>
        <Link to="/services">Services</Link>
        </li>
        <li>
        <Link to="/menu">Menu</Link>
        </li>
        <li>
        <Link to="/reservations">Reservations</Link>
        </li>
        <li>
        <Link to="/orderol">Order Online</Link>
        </li>
        <li>
        <Link to="/login">Login</Link>
        </li>
    </ul>

  </nav>
    )
}

export default Navbar