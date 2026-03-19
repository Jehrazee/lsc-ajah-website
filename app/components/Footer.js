export default function Footer() {
  return (
    <footer style={{backgroundColor: '#06132e', color: 'white', padding: '60px 24px 20px'}}>
      <div style={{maxWidth: '1100px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '40px', marginBottom: '40px'}}>
        
        {/* Column 1 — Logo + Info */}
        <div>
          <div style={{display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px'}}>
            <img src="/lsc.jpg" alt="Living Seed Church Ajah" style={{height: '52px', width: '52px', borderRadius: '50%', objectFit: 'cover', border: '2px solid #c9a84c'}} />
            <div>
              <h3 style={{color: '#c9a84c', fontSize: '18px', fontWeight: '300', margin: 0, fontFamily: 'Cormorant Garamond, Georgia, serif', letterSpacing: '2px'}}>LSC Ajah</h3>
              <p style={{color: '#888', fontSize: '11px', margin: 0, fontFamily: 'Montserrat, sans-serif', fontWeight: '300', letterSpacing: '1px'}}>Ajah, Lagos</p>
            </div>
          </div>
          <p style={{color: '#cccccc', marginBottom: '8px', fontSize: '13px', fontFamily: 'Montserrat, sans-serif', fontWeight: '300', letterSpacing: '0.5px'}}>RCCG Living Seed Church Ajah</p>
          <p style={{color: '#cccccc', marginBottom: '8px', fontSize: '13px', fontFamily: 'Montserrat, sans-serif', fontWeight: '300'}}>📍 Ajah, Lagos, Nigeria</p>
          <p style={{color: '#cccccc', marginBottom: '8px', fontSize: '13px', fontFamily: 'Montserrat, sans-serif', fontWeight: '300'}}>📞 +234 903 031 9339</p>
          <p style={{color: '#cccccc', fontSize: '13px', fontFamily: 'Montserrat, sans-serif', fontWeight: '300'}}>✉️ info@livingseedchurchajah.org</p>
        </div>

        {/* Column 2 — Explore */}
        <div>
          <h4 style={{color: 'white', fontSize: '11px', fontWeight: '500', marginBottom: '16px', fontFamily: 'Montserrat, sans-serif', letterSpacing: '3px', textTransform: 'uppercase'}}>Explore</h4>
          <ul style={{listStyle: 'none', padding: 0}}>
            {[
              ['About', '/about'],
              ['Sermons', '/sermons'],
              ['Events', '/events'],
              ['Leaders', '/leaders'],
              ['Tribes', '/tribes'],
              ['Gallery', '/gallery'],
            ].map(([label, href]) => (
              <li key={label} style={{marginBottom: '10px'}}>
                <a href={href} style={{color: '#cccccc', textDecoration: 'none', fontSize: '13px', fontFamily: 'Montserrat, sans-serif', fontWeight: '300', letterSpacing: '0.5px'}}>{label}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3 — Connect */}
        <div>
          <h4 style={{color: 'white', fontSize: '11px', fontWeight: '500', marginBottom: '16px', fontFamily: 'Montserrat, sans-serif', letterSpacing: '3px', textTransform: 'uppercase'}}>Connect</h4>
          <ul style={{listStyle: 'none', padding: 0}}>
            {[
              ['Prayer Request', '/prayer'],
              ['Share Testimony', '/testimonies'],
              ['Counselling', '/counselling'],
              ['Join a Department', '/departments'],
              ['Register for a Class', '/classes'],
              ['Give', '/give'],
              ['Contact Us', '/contact'],
            ].map(([label, href]) => (
              <li key={label} style={{marginBottom: '10px'}}>
                <a href={href} style={{color: '#cccccc', textDecoration: 'none', fontSize: '13px', fontFamily: 'Montserrat, sans-serif', fontWeight: '300', letterSpacing: '0.5px'}}>{label}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4 — More + Service Times */}
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

      {/* Bottom Bar */}
      <div style={{borderTop: '1px solid #1a3060', paddingTop: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px', textAlign: 'center'}}>
        <p style={{color: '#888888', fontSize: '12px', fontFamily: 'Montserrat, sans-serif', fontWeight: '300', letterSpacing: '1px'}}>© 2026 RCCG Living Seed Church Ajah. All rights reserved.</p>
        <div style={{display: 'flex', gap: '12px'}}>
          <a href="#" style={{width: '36px', height: '36px', borderRadius: '50%', backgroundColor: '#1877f2', display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none'}}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="white"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
          </a>
          <a href="#" style={{width: '36px', height: '36px', borderRadius: '50%', background: 'linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)', display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none'}}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="white" stroke="none"/></svg>
          </a>
          <a href="#" style={{width: '36px', height: '36px', borderRadius: '50%', backgroundColor: '#ff0000', display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none'}}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="white"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="#ff0000"/></svg>
          </a>
          <a href="#" style={{width: '36px', height: '36px', borderRadius: '50%', backgroundColor: '#000000', display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none'}}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="white"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
          </a>
        </div>
      </div>
    </footer>
  )
}