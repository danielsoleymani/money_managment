import React from 'react'
import './header.css'
import logo from '../assets/Logo.png'

export default function Header() {
  return <div className="header">
    <img src={logo} alt="Logo" className="logo"/>
    <div className="header-nav">
      <a className="header-nav-item">Features</a>
      <a className="header-nav-item">About Us</a>
      <a className="header-nav-item">Login</a>
      <button className="header-nav-btn">Get Started</button>
    </div>
  </div>;
}
