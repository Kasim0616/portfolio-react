import React, { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import SocialBar from './components/SocialBar.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import Portfolio from './pages/Portfolio.jsx'

export default function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'dark')

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  return (
    <>
      <Navbar theme={theme} onToggle={() => setTheme(theme === 'dark' ? 'light' : 'dark')} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
      <Footer />
      <SocialBar />
    </>
  )
}

