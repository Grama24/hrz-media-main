"use client"
import React, { useState } from 'react';
import Style from '../styles/navbar.css';
import Link from 'next/link';
import { FaBars, FaTimes } from 'react-icons/fa';
import Logo from "../assets/hrzlogo2.png"

const Header2 = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleLinkClick = () => {
    setIsChecked(false); // Set isChecked state to false when a link is clicked
  };

  return (
    <div>
      <header className="header py-4 justify-center" id="header">
        <div className='w-[1250px] flex flex-row items-center justify-between'>

      
        <Link className="text-white text-2xl" href="/">
         <img src={Logo.src} alt="Logo HRZ MEDIA" className='w-[200px] xs:w-[180px] logo'/>
        </Link>

        <input
          type="checkbox"
          id="check"
          checked={isChecked} // Use isChecked state to control the checkbox
          onChange={() => setIsChecked(!isChecked)} // Toggle isChecked state when checkbox is clicked
        />
        <label htmlFor="check" className="icons">
          <FaBars size={30} className="bx bx-menu" id="menu-icon" />
          <FaTimes size={30} className="bx bx-x" id="close-icon" />
        </label>

        <nav className="navbar">
          <Link id="acasa-navbar" href="/" style={{ "--i": 0 }} onClick={handleLinkClick}>
            Acasa
          </Link>
          <Link
            id="desprenoi-navbar"
            href="/despre"
            style={{ "--i": 1 }}
            onClick={handleLinkClick}
          >
            Despre Noi
          </Link>
          <Link
            id="domenii-navbar"
            href="/servicii"
            style={{ "--i": 2 }}
            onClick={handleLinkClick}
          >
            Servicii
          </Link>
          <Link
            id="cereoferta-navbar"
            href="/pachete"
            style={{ "--i": 3 }}
            onClick={handleLinkClick}
          >
            Pachete
          </Link>
          <Link
            id="contact-navbar"
            href="/contact"
            style={{ "--i": 4 }}
            onClick={handleLinkClick}
          >
            Contact
          </Link>
        </nav>
        </div>
      </header>
    </div>
  );
};

export default Header2;
