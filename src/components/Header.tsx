import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Header(){
  return (
    <header className="site-header">
      <div className="container navbar" role="navigation" aria-label="תפריט ראשי">
        <NavLink className="brand" to="/" aria-label="ענבר שיאצו – דף הבית">
          <img src="/favicon.svg" alt="" aria-hidden="true" />
          <span>ענבר שיאצו</span>
        </NavLink>
        <nav className="nav">
          <NavLink end to="/" className={({isActive}) => isActive ? 'active' : ''}>בית</NavLink>
          <NavLink to="/services" className={({isActive}) => isActive ? 'active' : ''}>שירותים</NavLink>
          <NavLink to="/contact" className={({isActive}) => isActive ? 'active' : ''}>צור קשר</NavLink>
        </nav>
      </div>
    </header>
  )
}
