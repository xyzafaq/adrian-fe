import React from 'react'
import { NavLink } from 'react-router-dom'
import Classes from './styles/style.module.css'
import logo from '../../utils/images/logo.svg'
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
                    <img src={logo} alt='logo' />
                </div>
            </div>
            <div className={Classes.nav_right} >
              <div className={Classes.nav_elem} >
                <NavLink to='/' className={Classes.elem} >
                  <h5>Home</h5>
                </NavLink>
                <NavLink to='/customer' className={Classes.elem} >
                  <h5>Customer</h5>
                </NavLink>
                <NavLink to='/admin' className={Classes.elem} >
                  <h5>Admin</h5>
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