import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

export const metadata = {
  title: "Contact Us",
  description: "Get in touch with RCCG Living Seed Church Ajah. Find us at The Fountain Place, by NIPCO Filling Station, Addo Rd, Ajah, Lagos.",
}

export default function Contact() {
  return (
    <main>
      <Navbar />

      <section style={{backgroundColor: '#0a1f44', color: 'white', padding: '80px 24px', textAlign: 'center'}}>
        <p style={{color: '#c9a84c', fontWeight: '500', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '4px', marginBottom: '8px', fontFamily: 'Montserrat, sans-serif'}}>Get In Touch</p>
        <h1 style={{fontSize: '52px', fontWeight: '300', fontFamily: 'Cormorant Garamond, Georgia, serif', letterSpacing: '2px'}}>Contact Us</h1>
        <p style={{color: '#cccccc', marginTop: '16px', fontSize: '15px', fontFamily: 'Montserrat, sans-serif', fontWeight: '300', letterSpacing: '1px'}}>We would love to hear from you</p>
      </section>

      <section style={{padding: '60px 24px'}}>
        <div style={{maxWidth: '1100px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '48px'}}>
          
          <div>
            <h2 style={{color: '#0a1f44', fontSize: '36px', fontWeight: '300', marginBottom: '24px', fontFamily: 'Cormorant Garamond, Georgia, serif', letterSpacing: '2px'}}>Send Us a Message</h2>
            <div style={{marginBottom: '20px'}}>
              <label style={{display: 'block', color: '#0a1f44', fontWeight: '500', marginBottom: '8px', fontSize: '11px', letterSpacing: '2px', textTransform: 'uppercase', fontFamily: 'Montserrat, sans-serif'}}>Full Name</label>
              <input type="text" placeholder="Your full name" style={{width: '100%', padding: '14px 16px', border: '1px solid #ddd', borderRadius: '4px', fontSize: '14px', boxSizing: 'border-box', outline: 'none', fontFamily: 'Montserrat, sans-serif', fontWeight: '300'}} />
            </div>
            <div style={{marginBottom: '20px'}}>
              <label style={{display: 'block', color: '#0a1f44', fontWeight: '500', marginBottom: '8px', fontSize: '11px', letterSpacing: '2px', textTransform: 'uppercase', fontFamily: 'Montserrat, sans-serif'}}>Email Address</label>
              <input type="email" placeholder="Your email address" style={{width: '100%', padding: '14px 16px', border: '1px solid #ddd', borderRadius: '4px', fontSize: '14px', boxSizing: 'border-box', outline: 'none', fontFamily: 'Montserrat, sans-serif', fontWeight: '300'}} />
            </div>
            <div style={{marginBottom: '20px'}}>
              <label style={{display: 'block', color: '#0a1f44', fontWeight: '500', marginBottom: '8px', fontSize: '11px', letterSpacing: '2px', textTransform: 'uppercase', fontFamily: 'Montserrat, sans-serif'}}>Subject</label>
              <input type="text" placeholder="What is this about?" style={{width: '100%', padding: '14px 16px', border: '1px solid #ddd', borderRadius: '4px', fontSize: '14px', boxSizing: 'border-box', outline: 'none', fontFamily: 'Montserrat, sans-serif', fontWeight: '300'}} />
            </div>
            <div style={{marginBottom: '24px'}}>
              <label style={{display: 'block', color: '#0a1f44', fontWeight: '500', marginBottom: '8px', fontSize: '11px', letterSpacing: '2px', textTransform: 'uppercase', fontFamily: 'Montserrat, sans-serif'}}>Message</label>
              <textarea placeholder="Your message..." rows={6} style={{width: '100%', padding: '14px 16px', border: '1px solid #ddd', borderRadius: '4px', fontSize: '14px', boxSizing: 'border-box', outline: 'none', resize: 'vertical', fontFamily: 'Montserrat, sans-serif', fontWeight: '300'}} />
            </div>
            <button style={{width: '100%', backgroundColor: '#0a1f44', color: 'white', padding: '16px', border: 'none', borderRadius: '4px', fontWeight: '500', fontSize: '11px', cursor: 'pointer', letterSpacing: '2px', textTransform: 'uppercase', fontFamily: 'Montserrat, sans-serif'}}>
              Send Message
            </button>
          </div>

          <div>
            <h2 style={{color: '#0a1f44', fontSize: '36px', fontWeight: '300', marginBottom: '24px', fontFamily: 'Cormorant Garamond, Georgia, serif', letterSpacing: '2px'}}>Find Us</h2>
            <div style={{marginBottom: '32px'}}>
              {[
                {icon: '📍', label: 'Address', value: 'The Fountain Place, by NIPCO Filling Station, Addo Rd, Eti-Osa, Lekki 106104, Lagos, Nigeria'},
                {icon: '📞', label: 'Phone', value: '+234 800 000 0000'},
                {icon: '✉️', label: 'Email', value: 'info@livingseedchurchajah.org'},
                {icon: '🕗', label: 'Sunday Service', value: '8:00am & 10:30am'},
                {icon: '🕕', label: 'Midweek Service', value: 'Wednesdays 6:00pm'},
                {icon: '🕕', label: 'Prayer Meeting', value: 'Fridays 6:00pm'},
              ].map(item => (
                <div key={item.label} style={{display: 'flex', gap: '16px', marginBottom: '20px', alignItems: 'flex-start'}}>
                  <span style={{fontSize: '24px'}}>{item.icon}</span>
                  <div>
                    <p style={{color: '#0a1f44', fontWeight: '500', fontSize: '11px', marginBottom: '2px', letterSpacing: '2px', textTransform: 'uppercase', fontFamily: 'Montserrat, sans-serif'}}>{item.label}</p>
                    <p style={{color: '#555', fontSize: '14px', fontFamily: 'Montserrat, sans-serif', fontWeight: '300'}}>{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
            <div style={{borderRadius: '8px', overflow: 'hidden', boxShadow: '0 2px 16px rgba(0,0,0,0.1)', marginBottom: '16px'}}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.7!2d3.5697!3d6.4281!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sThe+Fountain+Place%2C+NIPCO+Filling+Station%2C+Addo+Rd%2C+Ajah%2C+Lagos!5e0!3m2!1sen!2sng!4v1"
                width="100%"
                height="300"
                style={{border: 'none', display: 'block'}}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <a href="https://maps.google.com/?q=The+Fountain+Place+Addo+Road+Ajah+Lagos+Nigeria" target="_blank" rel="noopener noreferrer" style={{display: 'block', textAlign: 'center', backgroundColor: '#c9a84c', color: '#0a1f44', padding: '14px', borderRadius: '4px', fontWeight: '600', fontSize: '11px', textDecoration: 'none', letterSpacing: '2px', textTransform: 'uppercase', fontFamily: 'Montserrat, sans-serif'}}>
              Get Directions
            </a>
          </div>

        </div>
      </section>

      <section style={{backgroundColor: '#f5f5f5', padding: '60px 24px'}}>
        <div style={{maxWidth: '900px', margin: '0 auto', textAlign: 'center'}}>
          <p style={{color: '#c9a84c', fontWeight: '500', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '4px', marginBottom: '8px', fontFamily: 'Montserrat, sans-serif'}}>How To Find Us</p>
          <h2 style={{fontSize: '42px', fontWeight: '300', color: '#0a1f44', marginBottom: '40px', fontFamily: 'Cormorant Garamond, Georgia, serif', letterSpacing: '2px'}}>Directions</h2>
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '24px', textAlign: 'left'}}>
            {[
              {icon: '🚗', title: 'By Car', desc: 'From Ajah roundabout, take Addo Road. Look for NIPCO Filling Station on your right. The Fountain Place is right beside it.'},
              {icon: '🚌', title: 'By Bus', desc: 'Take any bus heading to Ajah. Alight at Ajah roundabout. Board a tricycle (Keke) heading to Addo Road and alight at NIPCO Filling Station.'},
              {icon: '📱', title: 'On Google Maps', desc: 'Search "Living Seed Church Ajah" or "The Fountain Place, Addo Road, Ajah" on Google Maps for turn by turn directions.'},
            ].map(item => (
              <div key={item.title} style={{backgroundColor: 'white', padding: '28px', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.06)'}}>
                <span style={{fontSize: '32px'}}>{item.icon}</span>
                <h3 style={{color: '#0a1f44', fontSize: '20px', fontWeight: '300', margin: '12px 0 8px', fontFamily: 'Cormorant Garamond, Georgia, serif', letterSpacing: '1px'}}>{item.title}</h3>
                <p style={{color: '#555', fontSize: '13px', lineHeight: '1.8', fontFamily: 'Montserrat, sans-serif', fontWeight: '300'}}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{backgroundColor: '#0a1f44', padding: '60px 24px', textAlign: 'center'}}>
        <p style={{color: '#c9a84c', fontWeight: '500', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '4px', marginBottom: '8px', fontFamily: 'Montserrat, sans-serif'}}>Follow Us</p>
        <h2 style={{fontSize: '42px', fontWeight: '300', color: 'white', marginBottom: '32px', fontFamily: 'Cormorant Garamond, Georgia, serif', letterSpacing: '2px'}}>Connect With Us Online</h2>
        <div style={{display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap'}}>
  {/* Facebook */}
  <a href="#" style={{width: '52px', height: '52px', borderRadius: '50%', backgroundColor: '#1877f2', display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none', transition: 'transform 0.3s ease'}}>
    <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
    </svg>
  </a>
  {/* Instagram */}
  <a href="#" style={{width: '52px', height: '52px', borderRadius: '50%', background: 'linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)', display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none', transition: 'transform 0.3s ease'}}>
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
      <circle cx="12" cy="12" r="4"/>
      <circle cx="17.5" cy="6.5" r="1" fill="white" stroke="none"/>
    </svg>
  </a>
  {/* YouTube */}
  <a href="#" style={{width: '52px', height: '52px', borderRadius: '50%', backgroundColor: '#ff0000', display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none', transition: 'transform 0.3s ease'}}>
    <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/>
      <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="#ff0000"/>
    </svg>
  </a>
  {/* Twitter/X */}
  <a href="#" style={{width: '52px', height: '52px', borderRadius: '50%', backgroundColor: '#000000', display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none', transition: 'transform 0.3s ease'}}>
    <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>
  </a>
</div>
      </section>

      <Footer />
    </main>
  )
}