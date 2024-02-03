import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Button from './Button'
import "./Navbar.css"

function Navbar() {
  let [click,setClick] = useState(false)
  let [button,setButton] = useState(true)
  let handleClick = ()=>
  {
    setClick(!click)
  }
  let closeMobileMenu = ()=>
  {
    setClick(false)
  }
  let showButton = ()=>
  {
    if(window.innerWidth <= 960)
    {
      setButton(false)
    }
    else
    {
      setClick(true)
    }
  }
  useEffect(()=>
  {
    showButton()
  },[])
  window.addEventListener("resize",showButton)
  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            TRVL
            <i class="fa fa-ravelry" aria-hidden="true"></i>
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fa fa-times' : 'fa fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/services'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Services
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/products'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Products
              </Link>
            </li>

            <li>
              <Link
                to='/sign-up'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Sign Up
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
        </div>
      </nav>  
    </>
  )
}

export default Navbar