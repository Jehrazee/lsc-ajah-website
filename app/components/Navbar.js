"use client"
import { useState } from "react"

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <style>{`
        .nav-links { display: flex; }
        .watch-live-btn { display: inline-block; }
        .hamburger-btn { display: none; }
        .mobile-nav { display: none; }
        
        @media (max-width: 768px) {
          .nav-links { display: none; }
          .watch-live-btn { display: none; }
          .hamburger-btn { display: block; }
          .mobile-nav { display: block; }
        }
      `}</style>

      <nav style={{backgroundColor: '#0a1f44', color: 'white', padding: '16px 24px'}}>
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
          <div>
            <h1 style={{color: '#c9a84c', fontSize: '20px', fontWeight: 'bold', margin: 0}}>LSC Ajah</h1>
            <p style={{color: '#cccccc', fontSize: '12px', margin: 0}}>RCCG Living Seed Church</p>
          </div>

          <ul className="nav-links" style={{gap: '24px', listStyle: 'none', fontSize: '14px', margin: 0, padding: 0}}>
            <li><a href="/" style={{color: 'white', textDecoration: 'none'}}>Home</a></li>
            <li><a href="/about" style={{color: 'white', textDecoration: 'none'}}>About</a></li>
            <li><a href="/sermons" style={{color: 'white', textDecoration: 'none'}}>Sermons</a></li>
            <li><a href="/events" style={{color: 'white', textDecoration: 'none'}}>Events</a></li>
            <li><a href="/prayer" style={{color: 'white', textDecoration: 'none'}}>Prayer</a></li>
            <li><a href="/give" style={{color: 'white', textDecoration: 'none'}}>Give</a></li>
            <li><a href="/contact" style={{color: 'white', textDecoration: 'none'}}>Contact</a></li>
          </ul>

          <div style={{display: 'flex', alignItems: 'center', gap: '16px'}}>
            <a href="/live" className="watch-live-btn" style={{backgroundColor: '#c9a84c', color: '#0a1f44', padding: '8px 16px', borderRadius: '4px', fontSize: '14px', fontWeight: 'bold', textDecoration: 'none'}}>
              Watch Live
            </a>
            <button className="hamburger-btn" onClick={() => setMenuOpen(!menuOpen)} style={{backgroundColor: 'transparent', border: 'none', color: 'white', fontSize: '28px', cursor: 'pointer', padding: 0}}>
              {menuOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="mobile-nav">
            <ul style={{listStyle: 'none', padding: '16px 0 0', margin: 0, display: 'flex', flexDirection: 'column', gap: '16px'}}>
              {[['/', 'Home'], ['/about', 'About'], ['/sermons', 'Sermons'], ['/events', 'Events'], ['/prayer', 'Prayer'], ['/give', 'Give'], ['/contact', 'Contact'], ['/live', 'Watch Live']].map(([href, label]) => (
                <li key={href}>
                  <a href={href} style={{color: label === 'Watch Live' ? '#c9a84c' : 'white', textDecoration: 'none', fontSize: '16px', fontWeight: label === 'Watch Live' ? 'bold' : 'normal'}}>
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </>
  )
}