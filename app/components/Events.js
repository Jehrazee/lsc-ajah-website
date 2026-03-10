export default function Events() {
  return (
    <section style={{padding: '80px 24px', backgroundColor: '#ffffff'}}>
      <div style={{maxWidth: '1100px', margin: '0 auto'}}>
        <p style={{color: '#c9a84c', fontWeight: '500', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '4px', marginBottom: '8px', textAlign: 'center', fontFamily: 'Montserrat, sans-serif'}}>Join Us</p>
        <h2 style={{fontSize: '42px', fontWeight: '300', color: '#0a1f44', marginBottom: '40px', textAlign: 'center', fontFamily: 'Cormorant Garamond, Georgia, serif', letterSpacing: '2px'}}>Upcoming Events</h2>
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px'}}>
          <div style={{border: '1px solid #e5e5e5', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 2px 10px rgba(0,0,0,0.08)'}}>
            <div style={{backgroundColor: '#0a1f44', padding: '20px', textAlign: 'center'}}>
              <h3 style={{color: '#c9a84c', fontSize: '22px', fontWeight: '300', fontFamily: 'Cormorant Garamond, Georgia, serif', letterSpacing: '1px'}}>Sunday Service</h3>
            </div>
            <div style={{padding: '24px'}}>
              <p style={{marginBottom: '8px', color: '#444', fontFamily: 'Montserrat, sans-serif', fontWeight: '300', fontSize: '14px'}}>📅 Every Sunday</p>
              <p style={{marginBottom: '8px', color: '#444', fontFamily: 'Montserrat, sans-serif', fontWeight: '300', fontSize: '14px'}}>🕗 8:00am & 10:30am</p>
              <p style={{color: '#444', fontFamily: 'Montserrat, sans-serif', fontWeight: '300', fontSize: '14px'}}>📍 LSC Ajah Auditorium</p>
            </div>
          </div>
          <div style={{border: '1px solid #e5e5e5', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 2px 10px rgba(0,0,0,0.08)'}}>
            <div style={{backgroundColor: '#0a1f44', padding: '20px', textAlign: 'center'}}>
              <h3 style={{color: '#c9a84c', fontSize: '22px', fontWeight: '300', fontFamily: 'Cormorant Garamond, Georgia, serif', letterSpacing: '1px'}}>Midweek Service</h3>
            </div>
            <div style={{padding: '24px'}}>
              <p style={{marginBottom: '8px', color: '#444', fontFamily: 'Montserrat, sans-serif', fontWeight: '300', fontSize: '14px'}}>📅 Every Wednesday</p>
              <p style={{marginBottom: '8px', color: '#444', fontFamily: 'Montserrat, sans-serif', fontWeight: '300', fontSize: '14px'}}>🕗 6:00pm</p>
              <p style={{color: '#444', fontFamily: 'Montserrat, sans-serif', fontWeight: '300', fontSize: '14px'}}>📍 LSC Ajah Auditorium</p>
            </div>
          </div>
          <div style={{border: '1px solid #e5e5e5', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 2px 10px rgba(0,0,0,0.08)'}}>
            <div style={{backgroundColor: '#0a1f44', padding: '20px', textAlign: 'center'}}>
              <h3 style={{color: '#c9a84c', fontSize: '22px', fontWeight: '300', fontFamily: 'Cormorant Garamond, Georgia, serif', letterSpacing: '1px'}}>Prayer Meeting</h3>
            </div>
            <div style={{padding: '24px'}}>
              <p style={{marginBottom: '8px', color: '#444', fontFamily: 'Montserrat, sans-serif', fontWeight: '300', fontSize: '14px'}}>📅 Every Friday</p>
              <p style={{marginBottom: '8px', color: '#444', fontFamily: 'Montserrat, sans-serif', fontWeight: '300', fontSize: '14px'}}>🕗 6:00pm</p>
              <p style={{color: '#444', fontFamily: 'Montserrat, sans-serif', fontWeight: '300', fontSize: '14px'}}>📍 LSC Ajah Auditorium</p>
            </div>
          </div>
        </div>
        <div style={{textAlign: 'center', marginTop: '40px'}}>
          <a href="/events" style={{backgroundColor: '#0a1f44', color: 'white', padding: '12px 32px', borderRadius: '4px', textDecoration: 'none', fontWeight: '500', fontSize: '12px', letterSpacing: '2px', textTransform: 'uppercase', fontFamily: 'Montserrat, sans-serif'}}>
            View All Events
          </a>
        </div>
      </div>
    </section>
  )
}