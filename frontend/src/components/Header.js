import React from 'react'
import './header.css'
import logo from '../assets/Logo.png'
import { Link } from "react-router-dom"

export default function Header() {
  return <div className="header">
    <Link to = "/" className='header-link'>
      <img src={logo} alt="Logo" className="logo"/>
    </Link>
    <div className="header-nav">
      <a className="header-nav-item">Features</a>
      <a className="header-nav-item">About Us</a>
      <Link to = "/signin" className='header-link'>
        <a className="header-nav-item">Login</a>
      </Link>
      <Link to = "/signup" className='header-link'>
        <button className="header-nav-btn">Get Started</button>
      </Link>
    </div>
  </div>;
}
