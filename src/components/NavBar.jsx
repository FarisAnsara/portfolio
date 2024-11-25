// src/components/Navbar.js
import React, { useState } from 'react';
import logo from '../assets/images/logo_2.png';
import { NavLink } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);

  const buttonColor = ({ isActive }) =>
    `px-4 py-2 text-white font-semibold rounded hover:bg-gray-700 ${
      isActive ? 'bg-gray-600' : 'bg-transparent'
    }`;

  const externalButtonStyle = 'px-4 py-2 text-white font-semibold rounded hover:bg-gray-700 flex items-center';

  return (
      <nav className="fixed bg-gradient-to-r from-gray-950 to-cyan-900 w-full z-10 shadow-xl max-w-full">
        <div className="container mx-auto flex justify-between items-center h-16 px-4 w-full max-w-full">
          <NavLink to="/" className="flex items-center">
            <img src={logo} alt="Logo" className="h-10 w-auto" />
          </NavLink>
        
          {/* Hamburger Icon for Mobile */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleSidebar} className="focus:outline-none">
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>

          {/* Nav Links for Larger Screens */}
          <div className="hidden md:flex space-x-4">
            <NavLink to="/" className={buttonColor}>Home</NavLink>
            <NavLink to="/education" className={buttonColor}>Education</NavLink>
            <NavLink to="/experience" className={buttonColor}>Experience</NavLink>
            <NavLink to="/skills" className={buttonColor}>Skills</NavLink>
            <NavLink to="/projects" className={buttonColor}>Projects</NavLink>
            <NavLink to="/contact" className={buttonColor}>Contact</NavLink>
          </div>

          {/* Social Icons for Larger Screens */}
          <div className="hidden md:flex space-x-2">
            <a href="https://www.linkedin.com/in/faris-ansara-173663255/" target="_blank" rel="noopener noreferrer" className={externalButtonStyle}>
              <FaLinkedin size={24} />
            </a>
            <a href="https://github.com/FarisAnsara" target="_blank" rel="noopener noreferrer" className={externalButtonStyle}>
              <FaGithub size={24} />
            </a>
          </div>
        </div>

        {/* Sidebar Menu for Mobile with Border */}
        <div
          className={`fixed inset-y-0 left-0 bg-black bg-opacity-90 z-20 w-1/2 transform ${
            isOpen ? 'translate-x-0' : '-translate-x-full'
          } transition-transform duration-300 ease-in-out md:hidden border-r border-gray-300`}
        >
          <div className="flex flex-col p-6 space-y-6">
            <NavLink onClick={toggleSidebar} to="/" className={buttonColor}>Home</NavLink>
            <NavLink onClick={toggleSidebar} to="/education" className={buttonColor}>Education</NavLink>
            <NavLink onClick={toggleSidebar} to="/experience" className={buttonColor}>Experience</NavLink>
            <NavLink onClick={toggleSidebar} to="/skills" className={buttonColor}>Skills</NavLink>
            <NavLink onClick={toggleSidebar} to="/projects" className={buttonColor}>Projects</NavLink>
            <NavLink onClick={toggleSidebar} to="/contact" className={buttonColor}>Contact</NavLink>

            {/* Social Icons */}
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/in/faris-ansara-173663255/" target="_blank" rel="noopener noreferrer" className={externalButtonStyle}>
                <FaLinkedin size={24} />
              </a>
              <a href="https://github.com/FarisAnsara" target="_blank" rel="noopener noreferrer" className={externalButtonStyle}>
                <FaGithub size={24} />
              </a>
            </div>
          </div>
        </div>
      </nav>
  );
};

export default Navbar;
