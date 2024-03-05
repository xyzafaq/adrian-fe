import React from 'react'
import { NavLink } from 'react-router-dom'
import Classes from './styles/style.module.css'
import logo from '../../utils/images/logo.svg'
import logo2 from '../../utils/images/logo2.png'
import logo3 from '../../utils/images/logo3.png'
import logo4 from '../../utils/images/logo4.webp'
import logo5 from '../../utils/images/logo5.png'
import { MenuIcon } from '../../utils/SVGs/svgs'

function Navbar() {
  return (
    <>
        <div className={Classes.nav_con} >
            <div className={Classes.nav_left} >
                <div>
                    <MenuIcon/>
                </div>
                <div className={Classes.nav_img} >
                    <img src={logo5} alt='logo' onClick={() => window.location.href = '/'}  />
                </div>
                  {/* <div className={Classes.nav_txt} onClick={() => window.location.href = '/'} >
                    <h1>SKY STREAM</h1>
                    <h1>CHARTERS</h1>
                  </div> */}
            </div>
            <div className={Classes.nav_right} >
              <div className={Classes.nav_elem} >
                <NavLink to='/' className={Classes.elem} >
                  <h5>Home</h5>
                </NavLink>
                <NavLink to='/customer-signup' className={Classes.elem} >
                  <h5>Customer</h5>
                </NavLink>
                <NavLink to='/admin-login' className={Classes.elem} >
                  <h5>Administrator</h5>
                </NavLink>
                {/* <div className={Classes.elem} >
                  <h5>LOGOUT</h5>
                </div> */}
              </div>
            </div>
        </div>
    </>
  )
}

export default Navbar
