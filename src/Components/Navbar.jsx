import React, { useState } from 'react';
import logo from '../assets/Images/pimage_a.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation(); 

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const menuItems = [
    { name: "Home", path: "/" }, 
    { name: "About Us", path: "/about" },
    { name: "History", path: "/history" },
    { name: "Technology", path: "/technology" },
    { name: "Location", path: "/location" },
    { name: "Team", path: "/team" }
  ];

  return (
    <div className="h-20 bg-[#111827] flex px-12 justify-between items-center md:px-2">  
    
      <div>
        <img src={logo} alt="logo" className="h-12 md:w-14 object-contain mr-4 lg:ml-12 w-auto xl:h-32" />
      </div>

      
      <div className="hidden md:flex space-x-4 text-customGray text-lg font-helvetica">
        <ul className="flex space-x-12 leading-10 cursor-pointer md:space-x-6 lg:space-x-12 mr-12">
          {menuItems.map((item) => (
            <li 
              key={item.path}
              className={`px-4 py-2 rounded-md transition duration-300 cursor-pointer 
              ${location.pathname === item.path ? "bg-gray-700 text-white" : "hover:bg-white hover:text-[#111827]"}`}
            >
              <Link to={item.path}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </div>

      
      <div className="md:hidden text-customGray" onClick={toggleMenu}>
        <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} className="text-2xl" />
      </div>

      
      {menuOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-[#111827] text-customGray text-right py-4 cursor-pointer">
          <ul className="text-customGray text-lg font-helvetica space-y-6 px-8">
            {menuItems.map((item) => (
              <li 
                key={item.path}
                className={`px-4 py-2 rounded-md transition duration-300 cursor-pointer 
                ${location.pathname === item.path ? "bg-gray-700 text-white" : "hover:bg-gray-600 hover:text-white"}`}
              >
                <Link to={item.path} onClick={toggleMenu}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
