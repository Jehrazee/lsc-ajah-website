import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

const events = [
  {id: 1, title: "Sunday Service", date: "Every Sunday", time: "8:00am & 10:30am", location: "LSC Ajah Auditorium", category: "Service", desc: "Join us every Sunday for a powerful time of worship, prayer and the Word of God."},
  {id: 2, title: "Midweek Service", date: "Every Wednesday", time: "6:00pm", location: "LSC Ajah Auditorium", category: "Service", desc: "A mid-week spiritual boost to keep you grounded in God's Word through the week."},
  {id: 3, title: "Prayer Meeting", date: "Every Friday", time: "6:00pm", location: "LSC Ajah Auditorium", category: "Prayer", desc: "Come and join us for a powerful evening of corporate prayer and intercession."},
  {id: 4, title: "Youth Fellowship", date: "Last Saturday of the Month", time: "4:00pm", location: "LSC Ajah Auditorium", category: "Youth", desc: "A vibrant gathering for young people to worship, connect and grow in faith together."},
  {id: 5, title: "Easter Convention", date: "18 April 2026", time: "9:00am", location: "LSC Ajah Auditorium", category: "Special", desc: "A special Easter convention celebrating the resurrection of our Lord Jesus Christ."},
  {id: 6, title: "Workers Meeting", date: "First Sunday of the Month", time: "After 2nd Service", location: "LSC Ajah Auditorium", category: "Workers", desc: "Monthly meeting for all church workers and volunteers to plan and fellowship together."},
]

const categoryColors = {
  Service: '#0a1f44',
  Prayer: '#6b21a8',
  Youth: '#15803d',
  Special: '#c9a84c',
  Workers: '#b45309',
}

export default function Events() {
  return (
    <main>
      <Navbar />

      {/* Hero */}
      <section style={{backgroundColor: '#0a1f44', color: 'white', padding: '80px 24px', textAlign: 'center'}}>
        <p style={{color: '#c9a84c', fontWeight: 'bold', fontSize: '14px', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '8px'}}>What's On</p>
        <h1 style={{fontSize: '48px', fontWeight: 'bold'}}>Events</h1>
        <p style={{color: '#cccccc', marginTop: '16px', fontSize: '18px'}}>Stay up to date with everything happening at Living Seed Church</p>
      </section>

      {/* Events Grid */}
      <section style={{padding: '60px 24px'}}>
        <div style={{maxWidth: '1100px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '32px'}}>
          {events.map(event => (
            <div key={event.id} style={{border: '1px solid #e5e5e5', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 2px 8px rgba(0,0,0,0.08)'}}>
              {/* Colour bar */}
              <div style={{backgroundColor: categoryColors[event.category], padding: '20px 24px'}}>
                <span style={{color: 'white', fontSize: '12px', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px', opacity: 0.8}}>{event.category}</span>
                <h3 style={{color: 'white', fontSize: '22px', fontWeight: 'bold', marginTop: '4px'}}>{event.title}</h3>
              </div>
              {/* Details */}
              <div style={{padding: '24px'}}>
                <p style={{color: '#444', fontSize: '14px', marginBottom: '8px'}}>📅 {event.date}</p>
                <p style={{color: '#444', fontSize: '14px', marginBottom: '8px'}}>🕐 {event.time}</p>
                <p style={{color: '#444', fontSize: '14px', marginBottom: '16px'}}>📍 {event.location}</p>
                <p style={{color: '#666', fontSize: '14px', lineHeight: '1.7', marginBottom: '20px'}}>{event.desc}</p>
                <button style={{width: '100%', backgroundColor: '#0a1f44', color: 'white', padding: '12px', border: 'none', borderRadius: '4px', fontWeight: 'bold', cursor: 'pointer', fontSize: '15px'}}>
                  Learn More
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