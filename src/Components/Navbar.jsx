import React from 'react'
import logo from '../assets/Images/pimage_a.png'
import { useState } from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBars, faTimes} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  }

  return (
    <div className="h-20 bg-[#111827] flex px-12 justify-between items-center md:px-2">  
      <div>
      <img src={logo} alt='logo image'  className='h-12 md:w-14  object-contain mr-4 lg:ml-12 w-auto xl:h-32  ' />
      </div>
      <div className='hidden md:flex space-x-4 md:space-x- text-customGray text-lg font-helvetica'> 
      <ul className='flex space-x-12 leading-10 cursor-pointer md:space-x-6 lg:space-x-12 mr-12'>
        <li><Link></Link> Who We Are</li>
        <li> <Link></Link>Our Products and Services</li>
        <li> <Link></Link>Join Us</li>
        <li><Link></Link>Blog</li>
        <li> <Link></Link>Contact Us</li>
      </ul>
      </div>
      <div className='md:hidden text-customGray' onClick={toggleMenu}>
        <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} className='text-2xl'/>
      </div>
      {menuOpen && (
        <div className='md:hidden absolute top-20 left-0 w-full bg-[#111827] text-customGray text-right py-4 '>
          <ul className='text-customGray text-lg font-helvetica space-y-6 px-8 '>
            <li  className='cursor-pointer'> Who We Are</li>
            <li  className='cursor-pointer'> Our Products and Services</li>
            <li  className='cursor-pointer'> Join Us</li>
            <li  className='cursor-pointer'>Blog</li>
            <li  className='cursor-pointer'> Contact Us</li>
          </ul>
        </div>
      )}
    </div>
  )
}

export default Navbar
