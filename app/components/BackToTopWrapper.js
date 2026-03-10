"use client"
import { useEffect, useState } from "react"

export default function BackToTopWrapper() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 300)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return visible ? (
    <button
      onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
      style={{
        position: 'fixed',
        bottom: '32px',
        right: '32px',
        backgroundColor: '#c9a84c',
        color: '#0a1f44',
        border: 'none',
        borderRadius: '50%',
        width: '48px',
        height: '48px',
        fontSize: '22px',
        cursor: 'pointer',
        boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
        zIndex: 1000,
        transition: 'opacity 0.3s ease',
      }}
    >
      ↑
    </button>
  ) : null
}
