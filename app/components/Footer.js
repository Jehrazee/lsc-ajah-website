export default function Footer() {
  return (
    <footer style={{backgroundColor: '#06132e', color: 'white', padding: '60px 24px 20px'}}>
      <div style={{maxWidth: '1100px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '40px', marginBottom: '40px'}}>
        <div>
          <h3 style={{color: '#c9a84c', fontSize: '20px', fontWeight: 'bold', marginBottom: '16px'}}>LSC Ajah</h3>
          <p style={{color: '#cccccc', marginBottom: '8px', fontSize: '14px'}}>RCCG Living Seed Church Ajah</p>
          <p style={{color: '#cccccc', marginBottom: '8px', fontSize: '14px'}}>📍 Ajah, Lagos, Nigeria</p>
          <p style={{color: '#cccccc', marginBottom: '8px', fontSize: '14px'}}>📞 +234 000 000 0000</p>
          <p style={{color: '#cccccc', fontSize: '14px'}}>✉️ info@livingseedajah.org</p>
        </div>
        <div>
          <h4 style={{color: 'white', fontSize: '16px', fontWeight: 'bold', marginBottom: '16px'}}>Quick Links</h4>
          <ul style={{listStyle: 'none', padding: 0}}>
            {['About', 'Sermons', 'Events', 'Give', 'Contact'].map(link => (
              <li key={link} style={{marginBottom: '8px'}}>
                <a href={`/${link.toLowerCase()}`} style={{color: '#cccccc', textDecoration: 'none', fontSize: '14px'}}>{link}</a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 style={{color: 'white', fontSize: '16px', fontWeight: 'bold', marginBottom: '16px'}}>Service Times</h4>
          <p style={{color: '#cccccc', marginBottom: '8px', fontSize: '14px'}}>🕗 Sundays: 8:00am & 10:30am</p>
          <p style={{color: '#cccccc', marginBottom: '8px', fontSize: '14px'}}>🕕 Wednesdays: 6:00pm</p>
          <p style={{color: '#cccccc', fontSize: '14px'}}>🕕 Fridays: 6:00pm</p>
        </div>
        <div>
          <h4 style={{color: 'white', fontSize: '16px', fontWeight: 'bold', marginBottom: '16px'}}>Follow Us</h4>
          <div style={{display: 'flex', flexDirection: 'column', gap: '8px'}}>
            <a href="#" style={{color: '#cccccc', textDecoration: 'none', fontSize: '14px'}}>📘 Facebook</a>
            <a href="#" style={{color: '#cccccc', textDecoration: 'none', fontSize: '14px'}}>📸 Instagram</a>
            <a href="#" style={{color: '#cccccc', textDecoration: 'none', fontSize: '14px'}}>▶️ YouTube</a>
            <a href="#" style={{color: '#cccccc', textDecoration: 'none', fontSize: '14px'}}>🐦 Twitter</a>
          </div>
        </div>
      </div>
      <div style={{borderTop: '1px solid #1a3060', paddingTop: '20px', textAlign: 'center'}}>
        <p style={{color: '#888888', fontSize: '13px'}}>© 2026 RCCG Living Seed Church Ajah. All rights reserved.</p>
      </div>
    </footer>
  )
}