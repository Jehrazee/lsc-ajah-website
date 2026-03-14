export default function Footer() {
  return (
    <footer style={{backgroundColor: '#06132e', color: 'white', padding: '60px 24px 20px'}}>
      <div style={{maxWidth: '1100px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '40px', marginBottom: '40px'}}>
        <div>
          <h3 style={{color: '#c9a84c', fontSize: '24px', fontWeight: '300', marginBottom: '16px', fontFamily: 'Cormorant Garamond, Georgia, serif', letterSpacing: '2px'}}>LSC Ajah</h3>
          <p style={{color: '#cccccc', marginBottom: '8px', fontSize: '13px', fontFamily: 'Montserrat, sans-serif', fontWeight: '300', letterSpacing: '0.5px'}}>RCCG Living Seed Church Ajah</p>
          <p style={{color: '#cccccc', marginBottom: '8px', fontSize: '13px', fontFamily: 'Montserrat, sans-serif', fontWeight: '300'}}>📍 Ajah, Lagos, Nigeria</p>
          <p style={{color: '#cccccc', marginBottom: '8px', fontSize: '13px', fontFamily: 'Montserrat, sans-serif', fontWeight: '300'}}>📞 +234 800 000 0000</p>
          <p style={{color: '#cccccc', fontSize: '13px', fontFamily: 'Montserrat, sans-serif', fontWeight: '300'}}>✉️ info@livingseedchurchajah.org</p>
        </div>
        <div>
          <h4 style={{color: 'white', fontSize: '11px', fontWeight: '500', marginBottom: '16px', fontFamily: 'Montserrat, sans-serif', letterSpacing: '3px', textTransform: 'uppercase'}}>Explore</h4>
          <ul style={{listStyle: 'none', padding: 0}}>
            {[
  ['About', '/about'],
  ['Sermons', '/sermons'],
  ['Events', '/events'],
  ['Leaders', '/leaders'],
  ['Tribes', '/tribes'],
  ['Gallery', '/'],
].map(([label, href]) => (
              <li key={label} style={{marginBottom: '10px'}}>
                <a href={href} style={{color: '#cccccc', textDecoration: 'none', fontSize: '13px', fontFamily: 'Montserrat, sans-serif', fontWeight: '300', letterSpacing: '0.5px'}}>{label}</a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 style={{color: 'white', fontSize: '11px', fontWeight: '500', marginBottom: '16px', fontFamily: 'Montserrat, sans-serif', letterSpacing: '3px', textTransform: 'uppercase'}}>Connect</h4>
          <ul style={{listStyle: 'none', padding: 0}}>
            {[
              ['Prayer Request', '/prayer'],
              ['Share Testimony', '/testimonies'],
              ['Counselling', '/counselling'],
              ['Give', '/give'],
              ['Contact Us', '/contact'],
            ].map(([label, href]) => (
              <li key={label} style={{marginBottom: '10px'}}>
                <a href={href} style={{color: '#cccccc', textDecoration: 'none', fontSize: '13px', fontFamily: 'Montserrat, sans-serif', fontWeight: '300', letterSpacing: '0.5px'}}>{label}</a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 style={{color: 'white', fontSize: '11px', fontWeight: '500', marginBottom: '16px', fontFamily: 'Montserrat, sans-serif', letterSpacing: '3px', textTransform: 'uppercase'}}>More</h4>
          <ul style={{listStyle: 'none', padding: 0}}>
            {[
              ['Declaration', '/declaration'],
              ['Testimonies', '/testimonies'],
              ['FAQ', '/faq'],
              ['Watch Live', '/live'],
            ].map(([label, href]) => (
              <li key={label} style={{marginBottom: '10px'}}>
                <a href={href} style={{color: '#cccccc', textDecoration: 'none', fontSize: '13px', fontFamily: 'Montserrat, sans-serif', fontWeight: '300', letterSpacing: '0.5px'}}>{label}</a>
              </li>
            ))}
          </ul>
          <h4 style={{color: 'white', fontSize: '11px', fontWeight: '500', marginBottom: '16px', marginTop: '24px', fontFamily: 'Montserrat, sans-serif', letterSpacing: '3px', textTransform: 'uppercase'}}>Service Times</h4>
          <p style={{color: '#cccccc', marginBottom: '10px', fontSize: '13px', fontFamily: 'Montserrat, sans-serif', fontWeight: '300'}}>🕗 Sundays: 8:00am & 10:30am</p>
          <p style={{color: '#cccccc', marginBottom: '10px', fontSize: '13px', fontFamily: 'Montserrat, sans-serif', fontWeight: '300'}}>🕕 Wednesdays: 6:00pm</p>
          <p style={{color: '#cccccc', fontSize: '13px', fontFamily: 'Montserrat, sans-serif', fontWeight: '300'}}>🕕 Fridays: 6:00pm</p>
        </div>
      </div>
      <div style={{borderTop: '1px solid #1a3060', paddingTop: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px'}}>
        <p style={{color: '#888888', fontSize: '12px', fontFamily: 'Montserrat, sans-serif', fontWeight: '300', letterSpacing: '1px'}}>© 2026 RCCG Living Seed Church Ajah. All rights reserved.</p>
        <div style={{display: 'flex', gap: '16px'}}>
          <a href="#" style={{color: '#cccccc', textDecoration: 'none', fontSize: '24px'}}>📘</a>
          <a href="#" style={{color: '#cccccc', textDecoration: 'none', fontSize: '24px'}}>📸</a>
          <a href="#" style={{color: '#cccccc', textDecoration: 'none', fontSize: '24px'}}>▶️</a>
          <a href="#" style={{color: '#cccccc', textDecoration: 'none', fontSize: '24px'}}>🐦</a>
        </div>
      </div>
    </footer>
  )
}