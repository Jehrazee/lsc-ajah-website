import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

export const metadata = {
  title: "Contact Us",
  description: "Get in touch with RCCG Living Seed Church Ajah. We would love to hear from you. Find our address, phone number and service times.",
}

export default function Contact() {
  return (
    <main>
      <Navbar />

      {/* Hero */}
      <section style={{backgroundColor: '#0a1f44', color: 'white', padding: '80px 24px', textAlign: 'center'}}>
        <p style={{color: '#c9a84c', fontWeight: '500', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '4px', marginBottom: '8px', fontFamily: 'Montserrat, sans-serif'}}>Get In Touch</p>
        <h1 style={{fontSize: '52px', fontWeight: '300', fontFamily: 'Cormorant Garamond, Georgia, serif', letterSpacing: '2px'}}>Contact Us</h1>
        <p style={{color: '#cccccc', marginTop: '16px', fontSize: '15px', fontFamily: 'Montserrat, sans-serif', fontWeight: '300', letterSpacing: '1px'}}>We would love to hear from you</p>
      </section>

      {/* Contact Grid */}
      <section style={{padding: '60px 24px'}}>
        <div style={{maxWidth: '1100px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '48px'}}>
          
          {/* Contact Form */}
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

          {/* Contact Info */}
          <div>
            <h2 style={{color: '#0a1f44', fontSize: '36px', fontWeight: '300', marginBottom: '24px', fontFamily: 'Cormorant Garamond, Georgia, serif', letterSpacing: '2px'}}>Find Us</h2>
            
            <div style={{marginBottom: '32px'}}>
              {[
                {icon: '📍', label: 'Address', value: 'Ajah, Lagos, Nigeria'},
                {icon: '📞', label: 'Phone', value: '+234 000 000 0000'},
                {icon: '✉️', label: 'Email', value: 'info@livingseedajah.org'},
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

            {/* Map Placeholder */}
            <div style={{backgroundColor: '#e5e5e5', height: '250px', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
              <p style={{color: '#888', fontSize: '14px', fontFamily: 'Montserrat, sans-serif', fontWeight: '300'}}>📍 Google Map will appear here</p>
            </div>
          </div>

        </div>
      </section>

      {/* Social Links */}
      <section style={{backgroundColor: '#f5f5f5', padding: '60px 24px', textAlign: 'center'}}>
        <p style={{color: '#c9a84c', fontWeight: '500', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '4px', marginBottom: '8px', fontFamily: 'Montserrat, sans-serif'}}>Follow Us</p>
        <h2 style={{fontSize: '42px', fontWeight: '300', color: '#0a1f44', marginBottom: '32px', fontFamily: 'Cormorant Garamond, Georgia, serif', letterSpacing: '2px'}}>Connect With Us Online</h2>
        <div style={{display: 'flex', justifyContent: 'center', gap: '24px', flexWrap: 'wrap'}}>
          {[
            {icon: '📘', label: 'Facebook'},
            {icon: '📸', label: 'Instagram'},
            {icon: '▶️', label: 'YouTube'},
            {icon: '🐦', label: 'Twitter'},
          ].map(item => (
            <a key={item.label} href="#" style={{display: 'flex', alignItems: 'center', gap: '8px', backgroundColor: 'white', padding: '14px 28px', borderRadius: '4px', boxShadow: '0 2px 8px rgba(0,0,0,0.08)', textDecoration: 'none', color: '#0a1f44', fontWeight: '500', fontSize: '12px', letterSpacing: '2px', textTransform: 'uppercase', fontFamily: 'Montserrat, sans-serif'}}>
              <span style={{fontSize: '24px'}}>{item.icon}</span>
              {item.label}
            </a>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  )
}
