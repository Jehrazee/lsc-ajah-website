'use client'
import { useState } from 'react'
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

const sermons = [
  {id: 1, title: "Walking in Faith", preacher: "Pastor [Name]", date: "2 March 2026", series: "Faith Series", duration: "45 mins"},
  {id: 2, title: "The Power of Prayer", preacher: "Pastor [Name]", date: "23 Feb 2026", series: "Prayer Series", duration: "52 mins"},
  {id: 3, title: "Grace Upon Grace", preacher: "Pastor [Name]", date: "16 Feb 2026", series: "Grace Series", duration: "48 mins"},
  {id: 4, title: "Rooted in the Word", preacher: "Pastor [Name]", date: "9 Feb 2026", series: "Faith Series", duration: "41 mins"},
  {id: 5, title: "Living with Purpose", preacher: "Pastor [Name]", date: "2 Feb 2026", series: "Purpose Series", duration: "55 mins"},
  {id: 6, title: "The God Who Provides", preacher: "Pastor [Name]", date: "26 Jan 2026", series: "Grace Series", duration: "44 mins"},
]

const filters = ['All', 'Faith Series', 'Prayer Series', 'Grace Series', 'Purpose Series']

export default function Sermons() {
  const [search, setSearch] = useState('')
  const [activeFilter, setActiveFilter] = useState('All')

  const filtered = sermons.filter(sermon => {
    const matchesFilter = activeFilter === 'All' || sermon.series === activeFilter
    const matchesSearch =
      sermon.title.toLowerCase().includes(search.toLowerCase()) ||
      sermon.preacher.toLowerCase().includes(search.toLowerCase()) ||
      sermon.series.toLowerCase().includes(search.toLowerCase())
    return matchesFilter && matchesSearch
  })

  return (
    <main>
      <Navbar />

      {/* Hero */}
      <section style={{backgroundColor: '#0a1f44', color: 'white', padding: '80px 24px', textAlign: 'center'}}>
        <p style={{color: '#c9a84c', fontWeight: '500', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '4px', marginBottom: '8px', fontFamily: 'Montserrat, sans-serif'}}>Media</p>
        <h1 style={{fontSize: '52px', fontWeight: '300', fontFamily: 'Cormorant Garamond, Georgia, serif', letterSpacing: '2px'}}>Sermons</h1>
        <p style={{color: '#cccccc', marginTop: '16px', fontSize: '15px', fontFamily: 'Montserrat, sans-serif', fontWeight: '300', letterSpacing: '1px'}}>Be inspired, equipped and transformed by the Word of God</p>
      </section>

      {/* Search + Filter Bar */}
      <section style={{backgroundColor: '#f5f5f5', padding: '24px', borderBottom: '1px solid #e5e5e5'}}>
        <div style={{maxWidth: '1100px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '16px'}}>

          {/* Search Input */}
          <div style={{position: 'relative'}}>
            <span style={{position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', fontSize: '16px', color: '#999'}}>🔍</span>
            <input
              type="text"
              placeholder="Search by title, preacher or series..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              style={{width: '100%', padding: '14px 16px 14px 44px', border: '2px solid #e5e5e5', borderRadius: '4px', fontSize: '14px', boxSizing: 'border-box', outline: 'none', fontFamily: 'Montserrat, sans-serif', fontWeight: '300', backgroundColor: 'white'}}
            />
            {search && (
              <button
                onClick={() => setSearch('')}
                style={{position: 'absolute', right: '16px', top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', cursor: 'pointer', fontSize: '18px', color: '#999'}}
              >×</button>
            )}
          </div>

          {/* Filter Pills */}
          <div style={{display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center'}}>
            <span style={{color: '#0a1f44', fontWeight: '500', fontSize: '12px', letterSpacing: '2px', textTransform: 'uppercase', fontFamily: 'Montserrat, sans-serif'}}>Filter:</span>
            {filters.map(filter => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                style={{padding: '8px 20px', border: '2px solid #0a1f44', borderRadius: '24px', backgroundColor: activeFilter === filter ? '#0a1f44' : 'white', color: activeFilter === filter ? 'white' : '#0a1f44', cursor: 'pointer', fontWeight: '500', fontSize: '11px', letterSpacing: '1px', textTransform: 'uppercase', fontFamily: 'Montserrat, sans-serif', transition: 'all 0.2s'}}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Sermon Grid */}
      <section style={{padding: '60px 24px'}}>
        <div style={{maxWidth: '1100px', margin: '0 auto'}}>

          {/* Results count */}
          <p style={{color: '#999', fontSize: '12px', fontFamily: 'Montserrat, sans-serif', fontWeight: '300', marginBottom: '32px', letterSpacing: '1px'}}>
            {filtered.length} sermon{filtered.length !== 1 ? 's' : ''} found
          </p>

          {/* No results */}
          {filtered.length === 0 && (
            <div style={{textAlign: 'center', padding: '80px 24px'}}>
              <div style={{fontSize: '48px', marginBottom: '16px'}}>🔍</div>
              <h3 style={{color: '#0a1f44', fontSize: '28px', fontWeight: '300', marginBottom: '8px', fontFamily: 'Cormorant Garamond, Georgia, serif', letterSpacing: '1px'}}>No sermons found</h3>
              <p style={{color: '#999', fontSize: '13px', fontFamily: 'Montserrat, sans-serif', fontWeight: '300'}}>Try a different search term or filter</p>
            </div>
          )}

          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '32px'}}>
            {filtered.map(sermon => (
              <div key={sermon.id} style={{border: '1px solid #e5e5e5', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 2px 8px rgba(0,0,0,0.08)'}}>
                {/* Thumbnail */}
                <div style={{backgroundColor: '#0a1f44', height: '180px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                  <div style={{width: '64px', height: '64px', borderRadius: '50%', backgroundColor: '#c9a84c', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                    <span style={{color: '#0a1f44', fontSize: '28px'}}>▶</span>
                  </div>
                </div>
                {/* Details */}
                <div style={{padding: '24px'}}>
                  <span style={{backgroundColor: '#f0e8d5', color: '#c9a84c', fontSize: '11px', fontWeight: '500', padding: '4px 10px', borderRadius: '12px', letterSpacing: '1px', textTransform: 'uppercase', fontFamily: 'Montserrat, sans-serif'}}>{sermon.series}</span>
                  <h3 style={{color: '#0a1f44', fontSize: '24px', fontWeight: '300', margin: '12px 0 8px', fontFamily: 'Cormorant Garamond, Georgia, serif', letterSpacing: '1px'}}>{sermon.title}</h3>
                  <p style={{color: '#666', fontSize: '13px', marginBottom: '4px', fontFamily: 'Montserrat, sans-serif', fontWeight: '300'}}>🎤 {sermon.preacher}</p>
                  <p style={{color: '#666', fontSize: '13px', marginBottom: '4px', fontFamily: 'Montserrat, sans-serif', fontWeight: '300'}}>📅 {sermon.date}</p>
                  <p style={{color: '#666', fontSize: '13px', marginBottom: '20px', fontFamily: 'Montserrat, sans-serif', fontWeight: '300'}}>⏱ {sermon.duration}</p>
                  <button style={{width: '100%', backgroundColor: '#0a1f44', color: 'white', padding: '12px', border: 'none', borderRadius: '4px', fontWeight: '500', cursor: 'pointer', fontSize: '11px', letterSpacing: '2px', textTransform: 'uppercase', fontFamily: 'Montserrat, sans-serif'}}>
                    ▶ Watch Sermon
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}