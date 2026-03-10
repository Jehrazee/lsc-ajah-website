"use client"
import { useState, useEffect } from "react"

export default function Hero() {
  const [showName, setShowName] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setShowName(prev => !prev)
    }, 15000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section style={{backgroundColor: '#0a1f44', color: 'white', padding: '120px 24px', textAlign: 'center'}}>
      <div style={{transition: 'opacity 0.8s ease', opacity: showName ? 1 : 0, minHeight: '80px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        {showName ? (
          <h1 style={{fontSize: '52px', fontWeight: 'bold', lineHeight: '1.2', margin: 0}}>
            Welcome to <span style={{color: '#c9a84c'}}>Living Seed Church</span>
          </h1>
        ) : (
          <h1 style={{fontSize: '52px', fontWeight: 'bold', lineHeight: '1.2', margin: 0}}>
            <span style={{color: '#c9a84c'}}>RCCG</span> Living Seed Church <span style={{color: '#c9a84c'}}>Ajah</span>
          </h1>
        )}
      </div>
      <p style={{fontSize: '20px', color: '#cccccc', marginBottom: '32px', maxWidth: '600px', margin: '24px auto 32px'}}>
        A place of grace, growth and genuine worship
      </p>
      <div style={{display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap'}}>
        <a href="/about" style={{backgroundColor: '#c9a84c', color: '#0a1f44', padding: '14px 32px', borderRadius: '4px', fontWeight: 'bold', textDecoration: 'none', fontSize: '16px'}}>
          Join Us Sunday
        </a>
        <a href="/live" style={{border: '2px solid #c9a84c', color: '#c9a84c', padding: '14px 32px', borderRadius: '4px', fontWeight: 'bold', textDecoration: 'none', fontSize: '16px'}}>
          Watch Live
        </a>
      </div>
    </section>
  )
}