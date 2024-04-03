import { useState } from 'react'
import logo from '../images/Logo .svg'
import hamburger from '../images/🦆 icon _hamburger menu.svg'
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
            <a href="/">Home</a>
        </li>
        <li>
            <a href="/">About</a>
        </li>
        <li>
            <a href="/">Services</a>
        </li>
        <li>
            <a href="/">Menu</a>
        </li>
        <li>
            <a href="/">Reservations</a>
        </li>
        <li>
            <a href="/">Order Online</a>
        </li>
        <li>
            <a href="/">Login</a>
        </li>
    </ul>

  </nav>
    )
}

export default Navbar