import React from 'react'

export default function Footer() {
  return (
    <footer className="footer">
      <p>
        &copy; {new Date().getFullYear()} Kasim Nihal. Built with React, Vite, and GSAP.
      </p>
    </footer>
  )
}
