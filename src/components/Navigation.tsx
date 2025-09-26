'use client'

import { useState, useEffect } from 'react'

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const openMobileMenu = () => {
    setIsMobileMenuOpen(true)
    document.body.style.overflow = 'hidden'
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
    document.body.style.overflow = ''
  }

  const toggleMobileMenu = () => {
    if (isMobileMenuOpen) {
      closeMobileMenu()
    } else {
      openMobileMenu()
    }
  }

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const href = e.currentTarget.getAttribute('href')
    if (href) {
      closeMobileMenu()
      const target = document.querySelector(href)
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 767) {
        closeMobileMenu()
      }
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMobileMenuOpen) {
        closeMobileMenu()
      }
    }

    window.addEventListener('resize', handleResize)
    document.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('resize', handleResize)
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [isMobileMenuOpen])

  return (
    <>
      <nav>
        <div className="nav-container">
          <a href="#" className="logo">
            <span className="logo-kanji">海</span>
            <span>Kai</span>
          </a>
          <ul className="nav-links">
            <li><a href="#story" onClick={handleNavClick}>The Story</a></li>
            <li><a href="#framework" onClick={handleNavClick}>Framework</a></li>
            <li><a href="#deep-dive" onClick={handleNavClick}>The Practice</a></li>
            <li><a href="#pricing" onClick={handleNavClick}>Pricing</a></li>
            <li><a href="#begin" onClick={handleNavClick}>Begin</a></li>
          </ul>
          <button 
            className={`mobile-menu-toggle ${isMobileMenuOpen ? 'active' : ''}`}
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      <div 
        className={`mobile-nav ${isMobileMenuOpen ? 'active' : ''}`}
        onClick={(e) => {
          if (e.target === e.currentTarget) {
            closeMobileMenu()
          }
        }}
      >
        <a href="#story" onClick={handleNavClick}>The Story</a>
        <a href="#framework" onClick={handleNavClick}>Framework</a>
        <a href="#deep-dive" onClick={handleNavClick}>The Practice</a>
        <a href="#pricing" onClick={handleNavClick}>Pricing</a>
        <a href="#begin" onClick={handleNavClick}>Begin</a>
      </div>
    </>
  )
}