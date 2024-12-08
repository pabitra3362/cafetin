import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import logo from '../assets/logo.jpg'
import { BsCartCheck } from "react-icons/bs";
import { MyDrawer } from './Drawer';
import {useAuth0} from '@auth0/auth0-react'

const Navbar = () => {
  const navigate = useNavigate()


  const { user, loginWithRedirect, logout, isAuthenticated }=useAuth0()
  return (
    <div id='top'>

      {/* pc */}
      <nav className=' hidden md:flex lg:flex justify-around items-center bg-slate-900 text-white py-4 text-lg font-serif '>

        {/* left */}
        <div className='logo flex justify-center items-center lg:gap-6 md:gap-3'>
          <div>
            <a href="/">
              <img className='rounded-full overflow-hidden' src={logo} alt="logo" height={50} width={50} />
            </a>
          </div>
          <a href="/">
            <div className='font-bold uppercase text-custom-brown tracking-[0.25rem]'>cafelin</div>
          </a>
        </div>

        {/* middle */}
        <div>
          <ul className='flex justify-center items-center lg:gap-6 md:gap-3'>
            <li><NavLink to={'/'}
              className={(e) => (` hover:text-custom-brown transition duration-200 ${e.isActive ? "text-[#e59e2b]" : ""}`)}
            >Home</NavLink></li>
            <li><NavLink to={'/menu'}
              className={(e) => (` hover:text-custom-brown transition duration-200 ${e.isActive ? "text-[#e59e2b]" : ""}`)}
            >Menu</NavLink></li>
            <li><NavLink to={'/about'}
              className={(e) => (` hover:text-custom-brown transition duration-200 ${e.isActive ? "text-[#e59e2b]" : ""}`)}
            >About</NavLink></li>
            <li><NavLink to={'/contact'}
              className={(e) => (` hover:text-custom-brown transition duration-200 ${e.isActive ? "text-[#e59e2b]" : ""}`)}
            >Contact Us</NavLink></li>
          </ul>
        </div>

        {/* right */}
        <div className=' flex justify-center items-center lg:gap-6 md:gap-3'>
          <div className="indicator">
            <span className="indicator-item badge badge-error"></span>
            <NavLink
              to={'/cart'}
            >
              <BsCartCheck className='size-8 text-white hover:text-custom-brown transition duration-200 cursor-pointer' />
            </NavLink>
          </div>
          <div>

            {
              isAuthenticated ?
                <button 
                onClick={logout}
                className='btn btn-outline text-custom-brown hover:bg-custom-brown font-bold'>
                  Logout
                </button>
                :
                <button
                  onClick={loginWithRedirect}
                  className='btn btn-outline text-custom-brown hover:bg-custom-brown font-bold'>Login / Sign Up</button>
            }
          </div>
        </div>
      </nav>


      {/* mobile */}

      <nav className='bg-slate-900 py-4 flex md:hidden lg:hidden justify-between items-center px-4 '>

        {/* left */}
        <div className='flex justify-center items-center gap-3'>
        <div>
            <a href="/">
              <img className='rounded-full overflow-hidden' src={logo} alt="logo" height={50} width={50} />
            </a>
          </div>
          <a href="/">
            <div className='font-bold uppercase text-custom-brown tracking-[0.25rem]'>cafelin</div>
          </a>
        </div>

        {/* right */}
        <div>
          <MyDrawer />
        </div>
      </nav>
          
        
    </div>
  )
}

export default Navbar
