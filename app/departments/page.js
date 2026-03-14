'use client'
import { useState } from 'react'
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

const departments = [
  {
    id: 'choir',
    name: 'Choir',
    emoji: '🎵',
    description: 'Use your voice to lead the congregation in worship. The choir ministers every Sunday and at special events.',
    email: 'choir@livingseedchurchajah.org',
  },
  {
    id: 'ushering',
    name: 'Ushering',
    emoji: '🤝',
    description: 'Be the first face people see. Our ushers welcome members and guests with warmth and excellence.',
    email: 'ushering@livingseedchurchajah.org',
  },
  {
    id: 'media',
    name: 'Media',
    emoji: '🎥',
    description: 'Handle photography, videography and live streaming. Help us reach the world through content.',
    email: 'media@livingseedchurchajah.org',
  },
  {
    id: 'it',
    name: 'IT',
    emoji: '💻',
    description: 'Support the technical infrastructure of the church — sound, projectors, website and more.',
    email: 'it@livingseedchurchajah.org',
  },
  {
    id: 'sanitation',
    name: 'Sanitation',
    emoji: '🧹',
    description: 'Keep the house of God clean and welcoming. A vital ministry that serves behind the scenes.',
    email: 'sanitation@livingseedchurchajah.org',
  },
]

export default function Departments() {
  const [selected, setSelected] = useState(null)
  const [form, setForm] = useState({name: '', email: '', phone: '', message: ''})
  const [submitted, setSubmitted] = useState(false)

  function handleSelect(dept) {
    setSelected(dept)
    setSubmitted(false)
    setForm({name: '', email: '', phone: '', message: ''})
    setTimeout(() => {
      document.getElementById('dept-form')?.scrollIntoView({behavior: 'smooth', block: 'start'})
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
        <p style={{color: '#c9a84c', fontWeight: '500', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '4px', marginBottom: '8px', fontFamily: 'Montserrat, sans-serif'}}>Serve With Purpose</p>
        <h1 style={{fontSize: '52px', fontWeight: '300', fontFamily: 'Cormorant Garamond, Georgia, serif', letterSpacing: '2px'}}>Join a Department</h1>
        <p style={{color: '#cccccc', marginTop: '16px', fontSize: '15px', fontFamily: 'Montserrat, sans-serif', fontWeight: '300', letterSpacing: '1px', maxWidth: '600px', margin: '16px auto 0'}}>
          Every member has a gift. Find your place and serve God with excellence.
        </p>
      </section>

      {/* Department Cards */}
      <section style={{padding: '80px 24px'}}>
        <div style={{maxWidth: '1100px', margin: '0 auto'}}>
          <p style={{color: '#c9a84c', fontWeight: '500', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '4px', marginBottom: '8px', fontFamily: 'Montserrat, sans-serif', textAlign: 'center'}}>Our Departments</p>
          <h2 style={{fontSize: '42px', fontWeight: '300', color: '#0a1f44', marginBottom: '16px', fontFamily: 'Cormorant Garamond, Georgia, serif', letterSpacing: '2px', textAlign: 'center'}}>Where Would You Like to Serve?</h2>
          <p style={{color: '#555', fontSize: '14px', marginBottom: '48px', fontFamily: 'Montserrat, sans-serif', fontWeight: '300', textAlign: 'center'}}>Click on a department to express your interest</p>

          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '24px'}}>
            {departments.map(dept => (
              <div
                key={dept.id}
                onClick={() => handleSelect(dept)}
                style={{
                  backgroundColor: selected?.id === dept.id ? '#0a1f44' : 'white',
                  border: selected?.id === dept.id ? '2px solid #c9a84c' : '2px solid #e5e5e5',
                  borderRadius: '8px',
                  padding: '32px 24px',
                  textAlign: 'center',
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                  boxShadow: '0 2px 12px rgba(0,0,0,0.07)',
                }}
              >
                <div style={{fontSize: '40px', marginBottom: '12px'}}>{dept.emoji}</div>
                <h3 style={{color: selected?.id === dept.id ? '#c9a84c' : '#0a1f44', fontSize: '20px', fontWeight: '300', marginBottom: '8px', fontFamily: 'Cormorant Garamond, Georgia, serif', letterSpacing: '1px'}}>{dept.name}</h3>
                <p style={{color: selected?.id === dept.id ? '#ccc' : '#777', fontSize: '12px', lineHeight: '1.7', fontFamily: 'Montserrat, sans-serif', fontWeight: '300'}}>{dept.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Form */}
      {selected && (
        <section id="dept-form" style={{backgroundColor: '#f5f5f5', padding: '60px 24px'}}>
          <div style={{maxWidth: '680px', margin: '0 auto', backgroundColor: 'white', padding: '48px', borderRadius: '8px', boxShadow: '0 2px 16px rgba(0,0,0,0.08)'}}>
            {submitted ? (
              <div style={{textAlign: 'center', padding: '40px 0'}}>
                <div style={{fontSize: '56px', marginBottom: '16px'}}>🙌</div>
                <h3 style={{color: '#0a1f44', fontSize: '32px', fontWeight: '300', marginBottom: '12px', fontFamily: 'Cormorant Garamond, Georgia, serif', letterSpacing: '2px'}}>Thank You, {form.name}!</h3>
                <p style={{color: '#555', fontSize: '14px', lineHeight: '1.8', fontFamily: 'Montserrat, sans-serif', fontWeight: '300'}}>
                  Your interest in joining the <strong>{selected.name}</strong> department has been received. A team leader will be in touch with you soon.
                </p>
              </div>
            ) : (
              <>
                <h2 style={{color: '#0a1f44', fontSize: '32px', fontWeight: '300', marginBottom: '8px', textAlign: 'center', fontFamily: 'Cormorant Garamond, Georgia, serif', letterSpacing: '2px'}}>
                  Join the {selected.name} Department
                </h2>
                <p style={{color: '#888', fontSize: '12px', textAlign: 'center', marginBottom: '32px', fontFamily: 'Montserrat, sans-serif', letterSpacing: '1px'}}>
                  {selected.emoji} {selected.description}
                </p>

                <div style={{marginBottom: '24px'}}>
                  <label style={{display: 'block', color: '#0a1f44', fontWeight: '500', marginBottom: '8px', fontSize: '11px', letterSpacing: '2px', textTransform: 'uppercase', fontFamily: 'Montserrat, sans-serif'}}>Full Name *</label>
                  <input type="text" placeholder="Your full name" value={form.name} onChange={e => setForm({...form, name: e.target.value})} style={{width: '100%', padding: '14px 16px', border: '1px solid #ddd', borderRadius: '4px', fontSize: '14px', boxSizing: 'border-box', outline: 'none', fontFamily: 'Montserrat, sans-serif', fontWeight: '300'}} />
                </div>

                <div style={{marginBottom: '24px'}}>
                  <label style={{display: 'block', color: '#0a1f44', fontWeight: '500', marginBottom: '8px', fontSize: '11px', letterSpacing: '2px', textTransform: 'uppercase', fontFamily: 'Montserrat, sans-serif'}}>Email Address *</label>
                  <input type="email" placeholder="Your email address" value={form.email} onChange={e => setForm({...form, email: e.target.value})} style={{width: '100%', padding: '14px 16px', border: '1px solid #ddd', borderRadius: '4px', fontSize: '14px', boxSizing: 'border-box', outline: 'none', fontFamily: 'Montserrat, sans-serif', fontWeight: '300'}} />
                </div>

                <div style={{marginBottom: '24px'}}>
                  <label style={{display: 'block', color: '#0a1f44', fontWeight: '500', marginBottom: '8px', fontSize: '11px', letterSpacing: '2px', textTransform: 'uppercase', fontFamily: 'Montserrat, sans-serif'}}>Phone Number</label>
                  <input type="tel" placeholder="Your phone number" value={form.phone} onChange={e => setForm({...form, phone: e.target.value})} style={{width: '100%', padding: '14px 16px', border: '1px solid #ddd', borderRadius: '4px', fontSize: '14px', boxSizing: 'border-box', outline: 'none', fontFamily: 'Montserrat, sans-serif', fontWeight: '300'}} />
                </div>

                <div style={{marginBottom: '32px'}}>
                  <label style={{display: 'block', color: '#0a1f44', fontWeight: '500', marginBottom: '8px', fontSize: '11px', letterSpacing: '2px', textTransform: 'uppercase', fontFamily: 'Montserrat, sans-serif'}}>Tell Us About Yourself</label>
                  <textarea placeholder="Any relevant skills, experience or reason you'd like to join..." rows={4} value={form.message} onChange={e => setForm({...form, message: e.target.value})} style={{width: '100%', padding: '14px 16px', border: '1px solid #ddd', borderRadius: '4px', fontSize: '14px', boxSizing: 'border-box', outline: 'none', resize: 'vertical', fontFamily: 'Montserrat, sans-serif', fontWeight: '300'}} />
                </div>

                <button onClick={handleSubmit} style={{width: '100%', backgroundColor: '#0a1f44', color: 'white', padding: '16px', border: 'none', borderRadius: '4px', fontWeight: '500', fontSize: '12px', cursor: 'pointer', letterSpacing: '2px', textTransform: 'uppercase', fontFamily: 'Montserrat, sans-serif'}}>
                  {selected.emoji} Submit Interest
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