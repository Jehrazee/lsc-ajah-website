"use client"
import { useState } from "react"

const tribes = [
  {
    name: "Hope Tribe",
    months: "January — April",
    monthRange: [1, 2, 3, 4],
    borderColor: "#e5e5e5",
    bgColor: "#f9f9f9",
    emoji: "⚪",
    description: "Born in the first four months of the year, Hope Tribe represents the beginning of new things. A tribe of faith, vision and expectation.",
  },
  {
    name: "Peace Tribe",
    months: "May — August",
    monthRange: [5, 6, 7, 8],
    borderColor: "#c9a84c",
    bgColor: "#c9a84c",
    emoji: "🟡",
    description: "Born in the middle four months of the year, Peace Tribe represents harmony and balance. A tribe of unity, grace and steadfastness.",
  },
  {
    name: "Love Tribe",
    months: "September — December",
    monthRange: [9, 10, 11, 12],
    borderColor: "#c0392b",
    bgColor: "#c0392b",
    emoji: "🔴",
    description: "Born in the last four months of the year, Love Tribe represents passion and fire. A tribe of love, warmth and community.",
  },
]

const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

export default function TribesClient() {
  const [selectedMonth, setSelectedMonth] = useState("")
  const [result, setResult] = useState(null)

  const findTribe = () => {
    if (!selectedMonth) return
    const month = parseInt(selectedMonth)
    const tribe = tribes.find(t => t.monthRange.includes(month))
    setResult(tribe)
  }

  return (
    <>
      {/* Hero */}
      <section style={{backgroundColor: '#0a1f44', color: 'white', padding: '80px 24px', textAlign: 'center'}}>
        <p style={{color: '#c9a84c', fontWeight: '500', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '4px', marginBottom: '8px', fontFamily: 'Montserrat, sans-serif'}}>LSC Ajah Family</p>
        <h1 style={{fontSize: '52px', fontWeight: '300', fontFamily: 'Cormorant Garamond, Georgia, serif', letterSpacing: '2px'}}>The Tribes</h1>
        <p style={{color: '#cccccc', marginTop: '16px', fontSize: '15px', fontFamily: 'Montserrat, sans-serif', fontWeight: '300', letterSpacing: '1px', maxWidth: '600px', margin: '16px auto 0'}}>
          Every member of Living Seed Church belongs to a tribe by virtue of their birth month. Find yours!
        </p>
      </section>

      {/* Find Your Tribe */}
      <section style={{padding: '80px 24px', backgroundColor: '#f9f9f9'}}>
        <div style={{maxWidth: '600px', margin: '0 auto', textAlign: 'center'}}>
          <p style={{color: '#c9a84c', fontWeight: '500', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '4px', marginBottom: '8px', fontFamily: 'Montserrat, sans-serif'}}>Discover</p>
          <h2 style={{fontSize: '42px', fontWeight: '300', color: '#0a1f44', marginBottom: '16px', fontFamily: 'Cormorant Garamond, Georgia, serif', letterSpacing: '2px'}}>Find Your Tribe</h2>
          <p style={{color: '#555', fontSize: '14px', lineHeight: '1.9', marginBottom: '40px', fontFamily: 'Montserrat, sans-serif', fontWeight: '300'}}>
            Select your birth month to discover which tribe you belong to!
          </p>

          <div style={{display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '24px'}}>
            <select
              value={selectedMonth}
              onChange={(e) => { setSelectedMonth(e.target.value); setResult(null) }}
              style={{padding: '14px 24px', border: '2px solid #0a1f44', borderRadius: '4px', fontSize: '14px', fontFamily: 'Montserrat, sans-serif', fontWeight: '300', outline: 'none', backgroundColor: 'white', minWidth: '200px', cursor: 'pointer'}}
            >
              <option value="">Select your birth month</option>
              {monthNames.map((month, index) => (
                <option key={month} value={index + 1}>{month}</option>
              ))}
            </select>
            <button
              onClick={findTribe}
              style={{backgroundColor: '#c9a84c', color: '#0a1f44', padding: '14px 32px', border: 'none', borderRadius: '4px', fontWeight: '600', fontSize: '12px', cursor: 'pointer', letterSpacing: '2px', textTransform: 'uppercase', fontFamily: 'Montserrat, sans-serif'}}
            >
              Find My Tribe
            </button>
          </div>

          {/* Result */}
          {result && (
            <div style={{backgroundColor: result.bgColor, border: `2px solid ${result.borderColor}`, borderRadius: '8px', padding: '40px', marginTop: '24px', boxShadow: '0 4px 20px rgba(0,0,0,0.1)'}}>
              <p style={{fontSize: '48px', marginBottom: '8px'}}>🎉</p>
              <p style={{color: result.bgColor === '#f9f9f9' ? '#c9a84c' : 'rgba(255,255,255,0.7)', fontWeight: '500', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '4px', marginBottom: '8px', fontFamily: 'Montserrat, sans-serif'}}>You belong to</p>
              <h3 style={{color: result.bgColor === '#f9f9f9' ? '#0a1f44' : 'white', fontSize: '42px', fontWeight: '300', fontFamily: 'Cormorant Garamond, Georgia, serif', letterSpacing: '2px', marginBottom: '8px'}}>{result.name}</h3>
              <p style={{color: result.bgColor === '#f9f9f9' ? '#555' : 'rgba(255,255,255,0.8)', fontSize: '14px', fontFamily: 'Montserrat, sans-serif', fontWeight: '300'}}>{result.months}</p>
            </div>
          )}
        </div>
      </section>

      {/* Three Tribes */}
      <section style={{padding: '80px 24px', backgroundColor: 'white'}}>
        <div style={{maxWidth: '1100px', margin: '0 auto'}}>
          <p style={{color: '#c9a84c', fontWeight: '500', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '4px', marginBottom: '8px', textAlign: 'center', fontFamily: 'Montserrat, sans-serif'}}>Our Family</p>
          <h2 style={{fontSize: '42px', fontWeight: '300', color: '#0a1f44', marginBottom: '48px', textAlign: 'center', fontFamily: 'Cormorant Garamond, Georgia, serif', letterSpacing: '2px'}}>The Three Tribes</h2>
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px'}}>
            {tribes.map(tribe => (
              <div key={tribe.name} style={{border: `2px solid ${tribe.borderColor}`, borderRadius: '8px', overflow: 'hidden', boxShadow: '0 2px 16px rgba(0,0,0,0.08)'}}>
                <div style={{backgroundColor: tribe.bgColor === '#f9f9f9' ? '#0a1f44' : tribe.bgColor, padding: '40px 24px', textAlign: 'center'}}>
                  <span style={{fontSize: '48px'}}>{tribe.emoji}</span>
                  <h3 style={{color: tribe.bgColor === '#f9f9f9' ? '#c9a84c' : 'white', fontSize: '28px', fontWeight: '300', marginTop: '16px', fontFamily: 'Cormorant Garamond, Georgia, serif', letterSpacing: '2px'}}>{tribe.name}</h3>
                  <p style={{color: 'rgba(255,255,255,0.8)', fontSize: '12px', fontFamily: 'Montserrat, sans-serif', fontWeight: '300', letterSpacing: '2px', marginTop: '8px'}}>{tribe.months}</p>
                </div>
                <div style={{padding: '32px'}}>
                  <p style={{color: '#555', fontSize: '14px', lineHeight: '1.9', fontFamily: 'Montserrat, sans-serif', fontWeight: '300'}}>{tribe.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Active Tribe */}
      <section style={{backgroundColor: '#0a1f44', padding: '60px 24px', textAlign: 'center'}}>
        <p style={{color: '#c9a84c', fontWeight: '500', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '4px', marginBottom: '8px', fontFamily: 'Montserrat, sans-serif'}}>Currently Active</p>
        <h2 style={{fontSize: '42px', fontWeight: '300', color: 'white', marginBottom: '16px', fontFamily: 'Cormorant Garamond, Georgia, serif', letterSpacing: '2px'}}>Love Tribe Season 🔴</h2>
        <p style={{color: '#cccccc', fontSize: '14px', marginBottom: '32px', fontFamily: 'Montserrat, sans-serif', fontWeight: '300', letterSpacing: '1px'}}>September — December 2026</p>
        <a href="/events" style={{backgroundColor: '#c9a84c', color: '#0a1f44', padding: '14px 32px', borderRadius: '4px', fontWeight: '600', fontSize: '12px', textDecoration: 'none', letterSpacing: '2px', textTransform: 'uppercase', fontFamily: 'Montserrat, sans-serif'}}>
          View Upcoming Events
        </a>
      </section>
    </>
  )
}