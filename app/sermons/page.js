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

export default function Sermons() {
  return (
    <main>
      <Navbar />

      {/* Hero */}
      <section style={{backgroundColor: '#0a1f44', color: 'white', padding: '80px 24px', textAlign: 'center'}}>
        <p style={{color: '#c9a84c', fontWeight: 'bold', fontSize: '14px', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '8px'}}>Media</p>
        <h1 style={{fontSize: '48px', fontWeight: 'bold'}}>Sermons</h1>
        <p style={{color: '#cccccc', marginTop: '16px', fontSize: '18px'}}>Be inspired, equipped and transformed by the Word of God</p>
      </section>

      {/* Filter Bar */}
      <section style={{backgroundColor: '#f5f5f5', padding: '24px', borderBottom: '1px solid #e5e5e5'}}>
        <div style={{maxWidth: '1100px', margin: '0 auto', display: 'flex', gap: '16px', flexWrap: 'wrap', alignItems: 'center'}}>
          <span style={{color: '#0a1f44', fontWeight: 'bold'}}>Filter by:</span>
          {['All', 'Faith Series', 'Prayer Series', 'Grace Series', 'Purpose Series'].map(filter => (
            <button key={filter} style={{padding: '8px 20px', border: '2px solid #0a1f44', borderRadius: '24px', backgroundColor: filter === 'All' ? '#0a1f44' : 'white', color: filter === 'All' ? 'white' : '#0a1f44', cursor: 'pointer', fontWeight: 'bold', fontSize: '14px'}}>
              {filter}
            </button>
          ))}
        </div>
      </section>

      {/* Sermon Grid */}
      <section style={{padding: '60px 24px'}}>
        <div style={{maxWidth: '1100px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '32px'}}>
          {sermons.map(sermon => (
            <div key={sermon.id} style={{border: '1px solid #e5e5e5', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 2px 8px rgba(0,0,0,0.08)'}}>
              {/* Thumbnail */}
              <div style={{backgroundColor: '#0a1f44', height: '180px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <div style={{width: '64px', height: '64px', borderRadius: '50%', backgroundColor: '#c9a84c', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                  <span style={{color: '#0a1f44', fontSize: '28px'}}>▶</span>
                </div>
              </div>
              {/* Details */}
              <div style={{padding: '24px'}}>
                <span style={{backgroundColor: '#f0e8d5', color: '#c9a84c', fontSize: '12px', fontWeight: 'bold', padding: '4px 10px', borderRadius: '12px'}}>{sermon.series}</span>
                <h3 style={{color: '#0a1f44', fontSize: '20px', fontWeight: 'bold', margin: '12px 0 8px'}}>{sermon.title}</h3>
                <p style={{color: '#666', fontSize: '14px', marginBottom: '4px'}}>🎤 {sermon.preacher}</p>
                <p style={{color: '#666', fontSize: '14px', marginBottom: '4px'}}>📅 {sermon.date}</p>
                <p style={{color: '#666', fontSize: '14px', marginBottom: '20px'}}>⏱ {sermon.duration}</p>
                <button style={{width: '100%', backgroundColor: '#0a1f44', color: 'white', padding: '12px', border: 'none', borderRadius: '4px', fontWeight: 'bold', cursor: 'pointer', fontSize: '15px'}}>
                  ▶ Watch Sermon
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  )
}