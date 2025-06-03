import React from 'react'
import './heroArea.css'
import GraphIcons from '../assets/GraphIcons.png'
import Manager from '../assets/Manager.png'

export default function HeroArea() {
  return (
    <div className="hero-area">
      <div className="hero-content">
        <h1 className="hero-title">Take Control of Your Finances</h1>
        <p className="hero-subtitle">Manage your budget, track expenses, and achieve your financial goals</p>
        <button className="hero-btn">Get Started</button>
      </div>
      <img src={Manager} alt="Money Manager Mascot" className="hero-manager" />
    </div>
  );
}
