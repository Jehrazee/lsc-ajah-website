"use client"
import { useEffect, useState } from "react"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

export default function NotFoundClient() {
  const [count, setCount] = useState(6)
  const [bounce, setBounce] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setBounce(true)
      setTimeout(() => setBounce(false), 500)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    if (count === 0) return
    const timer = setTimeout(() => setCount(count - 1), 1000)
    return () => clearTimeout(timer)
  }, [count])

  useEffect(() => {
    if (count === 0) window.location.href = "/"
  }, [count])

  return (
    <main>
      <Navbar />
      <section style={{backgroundColor: '#0a1f44', minHeight: '70vh', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '60px 24px'}}>
        <div>
          <img
            src="/lsc.jpg"
            alt="Living Seed Church Ajah"
           style={{height: '80px', width: '80px', borderRadius: '50%', objectFit: 'cover', border: '3px solid #c9a84c', display: 'block', margin: '0 auto 24px', boxShadow: '0 0 20px rgba(201,168,76,0.5)'}}
          />
          <p style={{
            color: '#c9a84c',
            fontSize: '120px',
            fontWeight: 'bold',
            margin: '0',
            lineHeight: '1',
            transition: 'transform 0.2s ease',
            transform: bounce ? 'scale(1.2)' : 'scale(1)',
            display: 'inline-block'
          }}>404</p>
          <h1 style={{color: 'white', fontSize: '32px', fontWeight: 'bold', margin: '16px 0', fontFamily: 'Cormorant Garamond, Georgia, serif', letterSpacing: '2px'}}>
            Looks Like You're Lost
          </h1>
          <p style={{color: '#cccccc', fontSize: '16px', marginBottom: '8px', fontFamily: 'Montserrat, sans-serif', fontWeight: '300'}}>
            Even the disciples got lost sometimes. 😄
          </p>
          <p style={{color: '#cccccc', fontSize: '14px', marginBottom: '16px', fontFamily: 'Montserrat, sans-serif', fontWeight: '300'}}>
            The page you're looking for doesn't exist.
          </p>
          {count > 0 ? (
            <p style={{color: '#c9a84c', fontSize: '14px', marginBottom: '32px', fontFamily: 'Montserrat, sans-serif', fontWeight: '500', letterSpacing: '1px'}}>
              Redirecting to home in {count}...
            </p>
          ) : (
            <p style={{color: '#c9a84c', fontSize: '14px', marginBottom: '32px', fontFamily: 'Montserrat, sans-serif', fontWeight: '500', letterSpacing: '1px'}}>
              Taking you home now! 🏠
            </p>
          )}
          <div style={{display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap'}}>
            <a href="/" style={{backgroundColor: '#c9a84c', color: '#0a1f44', padding: '14px 32px', borderRadius: '4px', fontWeight: '600', fontSize: '13px', textDecoration: 'none', letterSpacing: '2px', textTransform: 'uppercase', fontFamily: 'Montserrat, sans-serif'}}>
              🏠 Go Home
            </a>
            <a href="/contact" style={{backgroundColor: 'transparent', color: 'white', padding: '14px 32px', borderRadius: '4px', fontWeight: '600', fontSize: '13px', textDecoration: 'none', border: '2px solid white', letterSpacing: '2px', textTransform: 'uppercase', fontFamily: 'Montserrat, sans-serif'}}>
              Contact Us
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}