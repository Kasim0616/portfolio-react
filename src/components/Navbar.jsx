import React from 'react'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'

export default function Navbar({ theme, onToggle }) {
  const navigate = useNavigate()
  const location = useLocation()

  const handleContactClick = (event) => {
    event.preventDefault()

    const scrollToContact = () => {
      const contactSection = document.getElementById('contact')
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }

    if (location.pathname !== '/') {
      navigate('/')
      // Delay scrolling until after navigation completes
      setTimeout(scrollToContact, 150)
    } else {
      scrollToContact()
    }
  }

  const linkClass = ({ isActive }) => `nav-link${isActive ? ' active' : ''}`

  return (
    <header className="navbar">
      <NavLink to="/" className="brand" aria-label="Brand">
        <span className="brand-line">KASIM</span>
        <span className="brand-line">NIHAL</span>
      </NavLink>
      <nav className="nav-links">
        <NavLink to="/" className={linkClass} end>
          Home
        </NavLink>
        <NavLink to="/portfolio" className={linkClass}>
          Portfolio
        </NavLink>
        <button type="button" className="nav-link contact-trigger" onClick={handleContactClick}>
          Contact
        </button>
      </nav>
      <button className="toggle" aria-label="Toggle theme" onClick={onToggle}>
        <span className="toggle-dot" data-theme={theme} />
      </button>
    </header>
  )
}

