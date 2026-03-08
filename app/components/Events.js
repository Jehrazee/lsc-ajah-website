export default function Events() {
  return (
    <section style={{padding: '80px 24px', backgroundColor: '#ffffff'}}>
      <div style={{maxWidth: '1100px', margin: '0 auto'}}>
        <p style={{color: '#c9a84c', fontWeight: 'bold', fontSize: '14px', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '8px', textAlign: 'center'}}>Join Us</p>
        <h2 style={{fontSize: '36px', fontWeight: 'bold', color: '#0a1f44', marginBottom: '40px', textAlign: 'center'}}>Upcoming Events</h2>
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px'}}>
          <div style={{border: '1px solid #e5e5e5', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 2px 10px rgba(0,0,0,0.08)'}}>
            <div style={{backgroundColor: '#0a1f44', padding: '20px', textAlign: 'center'}}>
              <h3 style={{color: '#c9a84c', fontSize: '20px', fontWeight: 'bold'}}>Sunday Service</h3>
            </div>
            <div style={{padding: '24px'}}>
              <p style={{marginBottom: '8px', color: '#444'}}>📅 Every Sunday</p>
              <p style={{marginBottom: '8px', color: '#444'}}>🕗 8:00am & 10:30am</p>
              <p style={{color: '#444'}}>📍 LSC Ajah Auditorium</p>
            </div>
          </div>
          <div style={{border: '1px solid #e5e5e5', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 2px 10px rgba(0,0,0,0.08)'}}>
            <div style={{backgroundColor: '#0a1f44', padding: '20px', textAlign: 'center'}}>
              <h3 style={{color: '#c9a84c', fontSize: '20px', fontWeight: 'bold'}}>Midweek Service</h3>
            </div>
            <div style={{padding: '24px'}}>
              <p style={{marginBottom: '8px', color: '#444'}}>📅 Every Wednesday</p>
              <p style={{marginBottom: '8px', color: '#444'}}>🕗 6:00pm</p>
              <p style={{color: '#444'}}>📍 LSC Ajah Auditorium</p>
            </div>
          </div>
          <div style={{border: '1px solid #e5e5e5', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 2px 10px rgba(0,0,0,0.08)'}}>
            <div style={{backgroundColor: '#0a1f44', padding: '20px', textAlign: 'center'}}>
              <h3 style={{color: '#c9a84c', fontSize: '20px', fontWeight: 'bold'}}>Prayer Meeting</h3>
            </div>
            <div style={{padding: '24px'}}>
              <p style={{marginBottom: '8px', color: '#444'}}>📅 Every Friday</p>
              <p style={{marginBottom: '8px', color: '#444'}}>🕗 6:00pm</p>
              <p style={{color: '#444'}}>📍 LSC Ajah Auditorium</p>
            </div>
          </div>
        </div>
        <div style={{textAlign: 'center', marginTop: '40px'}}>
          <a href="/events" style={{backgroundColor: '#0a1f44', color: 'white', padding: '12px 32px', borderRadius: '4px', textDecoration: 'none', fontWeight: 'bold', fontSize: '15px'}}>
            View All Events
          </a>
        </div>
      </div>
    </section>
  )
}