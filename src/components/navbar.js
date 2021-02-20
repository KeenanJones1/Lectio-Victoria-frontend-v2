import React, {useState} from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
 const [menuOpen, setMenuOpen] = useState(false);

 const toggleMenu = () => {
  setMenuOpen(prevMenuOpen => !prevMenuOpen);
 }

 const renderSideMenu = () => {
  return menuOpen ? <div className="menu">
  <ul>
   <li><Link to="/home">Home</Link></li>
   <li><Link to="/lists">Lists</Link></li>
   <li><Link>Whatever Else</Link></li>
  </ul>
 </div> : null
 }

 return (
  <nav className="nav-bar m-0">
   <div className="menu-toggle" onClick={() => toggleMenu()}>
    <input type="checkbox"/>
    <span></span>
    <span></span>
    <span></span>
   {renderSideMenu()}
   </div>
  </nav>
 )
}

export default Navbar
