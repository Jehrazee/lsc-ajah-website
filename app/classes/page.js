'use client'
import { useState } from 'react'
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

const classes = [
  {
    id: 'baptismal',
    name: 'Baptismal Class',
    emoji: '💧',
    description: 'Preparing to take the step of water baptism? This class walks you through the meaning, process and significance of baptism.',
    date: 'Saturday, 5 April 2026',
    time: '10:00am – 12:00pm',
    venue: 'Main Auditorium',
    email: 'baptismal@livingseedchurchajah.org',
  },
  {
    id: 'believers',
    name: 'Believers Class',
    emoji: '📖',
    description: 'A foundational class for new and growing believers covering salvation, prayer, Bible study and church life.',
    date: 'Saturday, 19 April 2026',
    time: '10:00am – 1:00pm',
    venue: 'Main Auditorium',
    email: 'believers@livingseedchurchajah.org',
  },
  {
    id: 'leadership',
    name: 'Leadership Class',
    emoji: '👑',
    description: 'Equipping the next generation of church leaders with principles of servant leadership and ministry.',
    date: 'Saturday, 3 May 2026',
    time: '9:00am – 12:00pm',
    venue: 'Conference Room',
    email: 'leadership@livingseedchurchajah.org',
  },
]

export default function Classes() {
  const [selected, setSelected] = useState(null)
  const [form, setForm] = useState({name: '', email: '', phone: ''})
  const [submitted, setSubmitted] = useState(false)

  function handleSelect(cls) {
    setSelected(cls)
    setSubmitted(false)
    setForm({name: '', email: '', phone: ''})
    setTimeout(() => {
      document.getElementById('class-form')?.scrollIntoView({behavior: 'smooth', block: 'start'})
    }, 100)
  }

  function handleSubmit() {
    if (!form.name || !form.email) return
    setSubmitted(true)
  }

  return (
    <main>
      <Navbar />

      {/* Hero */}
      <section style={{backgroundColor: '#0a1f44', color: 'white', padding: '80px 24px', textAlign: 'center'}}>
        <p style={{color: '#c9a84c', fontWeight: '500', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '4px', marginBottom: '8px', fontFamily: 'Montserrat, sans-serif'}}>Grow in Faith</p>
        <h1 style={{fontSize: '52px', fontWeight: '300', fontFamily: 'Cormorant Garamond, Georgia, serif', letterSpacing: '2px'}}>Upcoming Classes</h1>
        <p style={{color: '#cccccc', marginTop: '16px', fontSize: '15px', fontFamily: 'Montserrat, sans-serif', fontWeight: '300', letterSpacing: '1px', maxWidth: '600px', margin: '16px auto 0'}}>
          Register for a class and take your next step in faith.
        </p>
      </section>

      {/* Classes List */}
      <section style={{padding: '80px 24px'}}>
        <div style={{maxWidth: '900px', margin: '0 auto'}}>
          <p style={{color: '#c9a84c', fontWeight: '500', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '4px', marginBottom: '8px', fontFamily: 'Montserrat, sans-serif', textAlign: 'center'}}>Available Classes</p>
          <h2 style={{fontSize: '42px', fontWeight: '300', color: '#0a1f44', marginBottom: '16px', fontFamily: 'Cormorant Garamond, Georgia, serif', letterSpacing: '2px', textAlign: 'center'}}>Select a Class to Register</h2>
          <p style={{color: '#555', fontSize: '14px', marginBottom: '48px', fontFamily: 'Montserrat, sans-serif', fontWeight: '300', textAlign: 'center'}}>Click on a class below to view details and register</p>

          <div style={{display: 'flex', flexDirection: 'column', gap: '20px'}}>
            {classes.map(cls => (
              <div
                key={cls.id}
                onClick={() => handleSelect(cls)}
                style={{
                  backgroundColor: selected?.id === cls.id ? '#0a1f44' : 'white',
                  border: selected?.id === cls.id ? '2px solid #c9a84c' : '2px solid #e5e5e5',
                  borderRadius: '8px',
                  padding: '28px 32px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '24px',
                  flexWrap: 'wrap',
                  boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
                  transition: 'all 0.2s',
                }}
              >
                <div style={{fontSize: '40px'}}>{cls.emoji}</div>
                <div style={{flex: 1}}>
                  <h3 style={{color: selected?.id === cls.id ? '#c9a84c' : '#0a1f44', fontSize: '22px', fontWeight: '300', marginBottom: '6px', fontFamily: 'Cormorant Garamond, Georgia, serif', letterSpacing: '1px'}}>{cls.name}</h3>
                  <p style={{color: selected?.id === cls.id ? '#ccc' : '#666', fontSize: '13px', lineHeight: '1.7', fontFamily: 'Montserrat, sans-serif', fontWeight: '300', marginBottom: '10px'}}>{cls.description}</p>
                  <div style={{display: 'flex', gap: '20px', flexWrap: 'wrap'}}>
                    <span style={{color: selected?.id === cls.id ? '#c9a84c' : '#0a1f44', fontSize: '11px', fontFamily: 'Montserrat, sans-serif', fontWeight: '500', letterSpacing: '1px'}}>📅 {cls.date}</span>
                    <span style={{color: selected?.id === cls.id ? '#c9a84c' : '#0a1f44', fontSize: '11px', fontFamily: 'Montserrat, sans-serif', fontWeight: '500', letterSpacing: '1px'}}>🕐 {cls.time}</span>
                    <span style={{color: selected?.id === cls.id ? '#c9a84c' : '#0a1f44', fontSize: '11px', fontFamily: 'Montserrat, sans-serif', fontWeight: '500', letterSpacing: '1px'}}>📍 {cls.venue}</span>
                  </div>
                </div>
                <span style={{backgroundColor: selected?.id === cls.id ? '#c9a84c' : '#0a1f44', color: selected?.id === cls.id ? '#0a1f44' : 'white', padding: '10px 24px', borderRadius: '4px', fontSize: '11px', fontWeight: '500', letterSpacing: '2px', textTransform: 'uppercase', fontFamily: 'Montserrat, sans-serif', whiteSpace: 'nowrap'}}>
                  {selected?.id === cls.id ? 'Selected ✓' : 'Register →'}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Registration Form */}
      {selected && (
        <section id="class-form" style={{backgroundColor: '#f5f5f5', padding: '60px 24px'}}>
          <div style={{maxWidth: '680px', margin: '0 auto', backgroundColor: 'white', padding: '48px', borderRadius: '8px', boxShadow: '0 2px 16px rgba(0,0,0,0.08)'}}>
            {submitted ? (
              <div style={{textAlign: 'center', padding: '40px 0'}}>
                <div style={{fontSize: '56px', marginBottom: '16px'}}>🎉</div>
                <h3 style={{color: '#0a1f44', fontSize: '32px', fontWeight: '300', marginBottom: '12px', fontFamily: 'Cormorant Garamond, Georgia, serif', letterSpacing: '2px'}}>You're Registered, {form.name}!</h3>
                <p style={{color: '#555', fontSize: '14px', lineHeight: '1.8', fontFamily: 'Montserrat, sans-serif', fontWeight: '300'}}>
                  Your registration for <strong>{selected.name}</strong> on <strong>{selected.date}</strong> has been received. We'll send a confirmation to {form.email}.
                </p>
              </div>
            ) : (
              <>
                <h2 style={{color: '#0a1f44', fontSize: '32px', fontWeight: '300', marginBottom: '8px', textAlign: 'center', fontFamily: 'Cormorant Garamond, Georgia, serif', letterSpacing: '2px'}}>
                  Register — {selected.name}
                </h2>
                <p style={{color: '#888', fontSize: '12px', textAlign: 'center', marginBottom: '32px', fontFamily: 'Montserrat, sans-serif', letterSpacing: '1px'}}>
                  📅 {selected.date} &nbsp;|&nbsp; 🕐 {selected.time} &nbsp;|&nbsp; 📍 {selected.venue}
                </p>

                <div style={{marginBottom: '24px'}}>
                  <label style={{display: 'block', color: '#0a1f44', fontWeight: '500', marginBottom: '8px', fontSize: '11px', letterSpacing: '2px', textTransform: 'uppercase', fontFamily: 'Montserrat, sans-serif'}}>Full Name *</label>
                  <input type="text" placeholder="Your full name" value={form.name} onChange={e => setForm({...form, name: e.target.value})} style={{width: '100%', padding: '14px 16px', border: '1px solid #ddd', borderRadius: '4px', fontSize: '14px', boxSizing: 'border-box', outline: 'none', fontFamily: 'Montserrat, sans-serif', fontWeight: '300'}} />
                </div>

                <div style={{marginBottom: '24px'}}>
                  <label style={{display: 'block', color: '#0a1f44', fontWeight: '500', marginBottom: '8px', fontSize: '11px', letterSpacing: '2px', textTransform: 'uppercase', fontFamily: 'Montserrat, sans-serif'}}>Email Address *</label>
                  <input type="email" placeholder="Your email address" value={form.email} onChange={e => setForm({...form, email: e.target.value})} style={{width: '100%', padding: '14px 16px', border: '1px solid #ddd', borderRadius: '4px', fontSize: '14px', boxSizing: 'border-box', outline: 'none', fontFamily: 'Montserrat, sans-serif', fontWeight: '300'}} />
                </div>

                <div style={{marginBottom: '32px'}}>
                  <label style={{display: 'block', color: '#0a1f44', fontWeight: '500', marginBottom: '8px', fontSize: '11px', letterSpacing: '2px', textTransform: 'uppercase', fontFamily: 'Montserrat, sans-serif'}}>Phone Number</label>
                  <input type="tel" placeholder="Your phone number" value={form.phone} onChange={e => setForm({...form, phone: e.target.value})} style={{width: '100%', padding: '14px 16px', border: '1px solid #ddd', borderRadius: '4px', fontSize: '14px', boxSizing: 'border-box', outline: 'none', fontFamily: 'Montserrat, sans-serif', fontWeight: '300'}} />
                </div>

                <button onClick={handleSubmit} style={{width: '100%', backgroundColor: '#0a1f44', color: 'white', padding: '16px', border: 'none', borderRadius: '4px', fontWeight: '500', fontSize: '12px', cursor: 'pointer', letterSpacing: '2px', textTransform: 'uppercase', fontFamily: 'Montserrat, sans-serif'}}>
                  {selected.emoji} Complete Registration
                </button>
              </>
            )}
          </div>
        </section>
      )}

      <Footer />
    </main>
  )
}