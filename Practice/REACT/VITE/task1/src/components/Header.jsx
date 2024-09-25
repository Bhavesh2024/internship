import React from 'react'
import { NavLink } from 'react-router-dom'
import "../styles/style.css"
const Header = () => {

  return (
    <>
      <nav className='navbar'>
       <NavLink to="/" className={({isActive})=>isActive ? 'lightgreen' : 'link'}>About</NavLink>
       <NavLink to="/contact" className={({isActive})=>isActive ? 'lightgreen' : 'link'}>Contact</NavLink>
      </nav>
    </>
  )
}

export default Header
