"use client"
import { useState, useEffect, useRef } from "react"

const slides = [
  {
    photo: "/hero/photo1.jpg",
    video: "/hero/video1.mp4",
    heading: "Welcome to Living Seed Church",
    subheading: "A place of grace, growth and genuine worship",
  },
  {
    photo: "/hero/photo2.jpg",
    video: "/hero/video2.mp4",
    heading: "Experience God's Presence",
    subheading: "Come as you are — leave transformed",
  },
  {
    photo: "/hero/photo3.jpg",
    video: "/hero/video3.mp4",
    heading: "You Are Home",
    subheading: "A family built on faith, love and community",
  },
  {
    photo: "/hero/photo4.jpg",
    video: "/hero/video4.mp4",
    heading: "Growing Together in Faith",
    subheading: "Rooted in the Word, reaching the world",
  },
]

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [showVideo, setShowVideo] = useState(false)
  const [fade, setFade] = useState(true)
  const videoRef = useRef(null)

  useEffect(() => {
    setShowVideo(false)
    setFade(true)

    const photoTimer = setTimeout(() => {
      setShowVideo(true)
    }, 3000)

    return () => clearTimeout(photoTimer)
  }, [currentSlide])

  useEffect(() => {
    if (!showVideo) return
    const video = videoRef.current
    if (!video) return

    const playPromise = video.play()
    if (playPromise !== undefined) {
      playPromise.catch(() => {})
    }

    const handleEnded = () => {
      setFade(false)
      setTimeout(() => {
        setCurrentSlide(prev => (prev + 1) % slides.length)
        setFade(true)
      }, 800)
    }

    video.addEventListener('ended', handleEnded)
    return () => video.removeEventListener('ended', handleEnded)
  }, [showVideo])

  const slide = slides[currentSlide]

  return (
    <section style={{position: 'relative', height: '100vh', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>

      {/* Photo Background */}
      <img
        src={slide.photo}
        alt=""
        style={{
          position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
          objectFit: 'cover',
          transition: 'opacity 1s ease',
          opacity: showVideo ? 0 : 1,
          zIndex: 1
        }}
      />

      {/* Video Background */}
      <video
        ref={videoRef}
        key={currentSlide}
        muted
        playsInline
        style={{
          position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
          objectFit: 'cover',
          transition: 'opacity 1s ease',
          opacity: showVideo ? 1 : 0,
          zIndex: 2
        }}
      >
        <source src={slide.video} type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.5)', zIndex: 3}} />

      {/* Text Content */}
      <div style={{
        position: 'relative', zIndex: 4, textAlign: 'center', padding: '0 24px',
        transition: 'opacity 0.8s ease',
        opacity: fade ? 1 : 0
      }}>
        <h1 style={{fontSize: '52px', fontWeight: '300', color: 'white', marginBottom: '16px', lineHeight: '1.2', fontFamily: 'Cormorant Garamond, Georgia, serif', letterSpacing: '2px'}}>
          <span style={{color: '#c9a84c'}}>{slide.heading}</span>
        </h1>
        <p style={{fontSize: '20px', color: '#cccccc', margin: '0 auto 32px', maxWidth: '600px'}}>
          {slide.subheading}
        </p>
        <div style={{display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap'}}>
          <a href="/about" style={{backgroundColor: '#c9a84c', color: '#0a1f44', padding: '14px 32px', borderRadius: '4px', fontWeight: 'bold', textDecoration: 'none', fontSize: '16px'}}>
            Join Us Sunday
          </a>
          <a href="/live" style={{border: '2px solid #c9a84c', color: '#c9a84c', padding: '14px 32px', borderRadius: '4px', fontWeight: 'bold', textDecoration: 'none', fontSize: '16px'}}>
            Watch Live
          </a>
        </div>

        {/* Slide Indicators */}
        <div style={{display: 'flex', gap: '8px', justifyContent: 'center', marginTop: '40px'}}>
          {slides.map((_, i) => (
            <div key={i} onClick={() => setCurrentSlide(i)} style={{width: i === currentSlide ? '24px' : '8px', height: '8px', borderRadius: '4px', backgroundColor: i === currentSlide ? '#c9a84c' : 'rgba(255,255,255,0.5)', cursor: 'pointer', transition: 'all 0.3s ease'}} />
          ))}
        </div>
      </div>
    </section>
  )
}