"use client"
import { useState, useEffect } from "react"

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [darkMode, setDarkMode] = useState(true)

  useEffect(() => {
    const saved = localStorage.getItem('darkMode')
    if (saved !== null) setDarkMode(saved === 'true')
  }, [])

  useEffect(() => {
    localStorage.setItem('darkMode', darkMode)
    document.documentElement.setAttribute('data-theme', darkMode ? 'dark' : 'light')
  }, [darkMode])

  return (
    <>
      <style>{`
        .nav-links { display: flex; }
        .watch-live-btn { display: inline-block; }
        .hamburger-btn { display: none; }
        .mobile-nav { display: none; }
        
        @media (max-width: 768px) {
          .nav-links { display: none !important; }
          .watch-live-btn { display: none !important; }
          .hamburger-btn { display: block !important; }
          .mobile-nav { display: block; }
        }
      `}</style>

      <nav style={{backgroundColor: darkMode ? '#0a1f44' : '#ffffff', color: darkMode ? 'white' : '#0a1f44', padding: '16px 24px', boxShadow: darkMode ? 'none' : '0 2px 8px rgba(0,0,0,0.1)'}}>
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
          <div>
            <h1 style={{color: '#c9a84c', fontSize: '20px', fontWeight: 'bold', margin: 0}}>LSC Ajah</h1>
            <p style={{color: darkMode ? '#cccccc' : '#666', fontSize: '12px', margin: 0}}>RCCG Living Seed Church</p>
          </div>

          <ul className="nav-links" style={{gap: '24px', listStyle: 'none', fontSize: '14px', margin: 0, padding: 0}}>
            {[['/', 'Home'], ['/about', 'About'], ['/sermons', 'Sermons'], ['/events', 'Events'], ['/prayer', 'Prayer'], ['/give', 'Give'], ['/contact', 'Contact']].map(([href, label]) => (
              <li key={href}>
                <a href={href} style={{color: darkMode ? 'white' : '#0a1f44', textDecoration: 'none'}}>{label}</a>
              </li>
            ))}
          </ul>

          <div style={{display: 'flex', alignItems: 'center', gap: '12px'}}>
            <a href="/live" className="watch-live-btn" style={{backgroundColor: '#c9a84c', color: '#0a1f44', padding: '8px 16px', borderRadius: '4px', fontSize: '14px', fontWeight: 'bold', textDecoration: 'none'}}>
              Watch Live
            </a>
            <button onClick={() => setDarkMode(!darkMode)} style={{backgroundColor: darkMode ? '#1a3060' : '#f0f0f0', border: 'none', borderRadius: '20px', padding: '6px 12px', cursor: 'pointer', fontSize: '18px'}}>
              {darkMode ? '☀️' : '🌙'}
            </button>
            <button className="hamburger-btn" onClick={() => setMenuOpen(!menuOpen)} style={{backgroundColor: 'transparent', border: 'none', color: darkMode ? 'white' : '#0a1f44', fontSize: '28px', cursor: 'pointer', padding: 0}}>
              {menuOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>

        {menuOpen && (
          <ul style={{listStyle: 'none', padding: '16px 0 0', margin: 0, display: 'flex', flexDirection: 'column', gap: '16px'}} className="mobile-nav">
            {[['/', 'Home'], ['/about', 'About'], ['/sermons', 'Sermons'], ['/events', 'Events'], ['/prayer', 'Prayer'], ['/give', 'Give'], ['/contact', 'Contact'], ['/live', 'Watch Live']].map(([href, label]) => (
              <li key={href}>
                <a href={href} style={{color: label === 'Watch Live' ? '#c9a84c' : darkMode ? 'white' : '#0a1f44', textDecoration: 'none', fontSize: '16px', fontWeight: label === 'Watch Live' ? 'bold' : 'normal'}}>
                  {label}
                </a>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </>
  )
}