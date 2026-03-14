"use client"
import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [showName, setShowName] = useState(true)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setShowName(prev => !prev)
    }, 6000)
    return () => clearInterval(interval)
  }, [])

  const isActive = (href) => {
    if (href === '/') return pathname === '/'
    return pathname.startsWith(href)
  }

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

      <nav style={{
        backgroundColor: scrolled ? '#0a1f44' : 'transparent', 
        color: 'white', 
        padding: '16px 24px',
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        boxShadow: scrolled ? '0 4px 30px rgba(0,0,0,0.6)' : 'none',
        borderBottom: scrolled ? '2px solid rgba(201,168,76,0.4)' : 'none',
        transition: 'all 0.4s ease'
      }}>
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>

          {/* Animated Logo */}
          <div style={{display: 'flex', alignItems: 'center', gap: '10px'}}>
            <img src="/rccg.jpg" alt="RCCG Logo" style={{height: '48px', width: '48px', borderRadius: '50%', objectFit: 'cover'}} />
            <div style={{
              overflow: 'hidden',
              maxWidth: showName ? '260px' : '0px',
              opacity: showName ? 1 : 0,
              transition: 'max-width 0.8s ease, opacity 0.8s ease',
              whiteSpace: 'nowrap'
            }}>
              <p style={{color: '#c9a84c', fontSize: '13px', fontWeight: 'bold', margin: 0}}>RCCG Living Seed Church Ajah</p>
              <p style={{color: '#cccccc', fontSize: '11px', margin: 0}}>Ajah, Lagos</p>
            </div>
            <img src="/lsc.jpg" alt="LSC Logo" style={{height: '48px', width: '48px', borderRadius: '50%', objectFit: 'cover'}} />
          </div>

          <ul className="nav-links" style={{gap: '24px', listStyle: 'none', fontSize: '14px', margin: 0, padding: 0}}>
            {[['/', 'Home'], ['/about', 'About'], ['/sermons', 'Sermons'], ['/events', 'Events'], ['/prayer', 'Prayer'], ['/give', 'Give'], ['/contact', 'Contact']].map(([href, label]) => (
              <li key={href} style={{position: 'relative'}}>
                <a href={href} style={{
                  color: isActive(href) ? '#c9a84c' : 'white',
                  textDecoration: 'none',
                  fontWeight: isActive(href) ? '500' : '300',
                  fontFamily: 'Montserrat, sans-serif',
                  fontSize: '12px',
                  letterSpacing: '1px',
                  paddingBottom: '4px',
                  borderBottom: isActive(href) ? '2px solid #c9a84c' : '2px solid transparent',
                  transition: 'all 0.3s ease'
                }}>{label}</a>
              </li>
            ))}
          </ul>

          <div style={{display: 'flex', alignItems: 'center', gap: '16px'}}>
            <a href="/live" className="watch-live-btn" style={{
              backgroundColor: isActive('/live') ? 'white' : '#c9a84c',
              color: '#0a1f44',
              padding: '8px 16px',
              borderRadius: '4px',
              fontSize: '12px',
              fontWeight: '600',
              textDecoration: 'none',
              letterSpacing: '1px',
              fontFamily: 'Montserrat, sans-serif'
            }}>
              Watch Live
            </a>
            <button className="hamburger-btn" onClick={() => setMenuOpen(!menuOpen)} style={{backgroundColor: 'transparent', border: 'none', color: 'white', fontSize: '28px', cursor: 'pointer', padding: 0}}>
              {menuOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="mobile-nav">
            <ul style={{listStyle: 'none', padding: '16px 0 0', margin: 0, display: 'flex', flexDirection: 'column', gap: '16px'}}>
              {[['/', 'Home'], ['/about', 'About'], ['/sermons', 'Sermons'], ['/events', 'Events'], ['/prayer', 'Prayer'], ['/give', 'Give'], ['/contact', 'Contact'], ['/live', 'Watch Live']].map(([href, label]) => (
                <li key={href}>
                  <a href={href} style={{
                    color: isActive(href) ? '#c9a84c' : 'white',
                    textDecoration: 'none',
                    fontSize: '16px',
                    fontWeight: isActive(href) ? '600' : '300',
                    fontFamily: 'Montserrat, sans-serif',
                    borderLeft: isActive(href) ? '3px solid #c9a84c' : '3px solid transparent',
                    paddingLeft: '8px',
                    transition: 'all 0.3s ease'
                  }}>
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