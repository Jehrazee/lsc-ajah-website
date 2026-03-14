import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Link from "next/link"

export const metadata = {
  title: "Prayer Requests",
  description: "Submit a prayer request to RCCG Living Seed Church Ajah. Our prayer team will stand in agreement with you. You are not alone.",
}

export default function Prayer() {
  return (
    <main>
      <Navbar />

      {/* Hero */}
      <section style={{backgroundColor: '#0a1f44', color: 'white', padding: '80px 24px', textAlign: 'center'}}>
        <p style={{color: '#c9a84c', fontWeight: '500', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '4px', marginBottom: '8px', fontFamily: 'Montserrat, sans-serif'}}>We Care</p>
        <h1 style={{fontSize: '52px', fontWeight: '300', fontFamily: 'Cormorant Garamond, Georgia, serif', letterSpacing: '2px'}}>Prayer Requests</h1>
        <p style={{color: '#cccccc', marginTop: '16px', fontSize: '15px', fontFamily: 'Montserrat, sans-serif', fontWeight: '300', letterSpacing: '1px'}}>Share your prayer needs with us — we would love to pray with you</p>
      </section>

      {/* Intro */}
      <section style={{padding: '60px 24px', textAlign: 'center', maxWidth: '700px', margin: '0 auto'}}>
        <h2 style={{fontSize: '42px', fontWeight: '300', color: '#0a1f44', marginBottom: '16px', fontFamily: 'Cormorant Garamond, Georgia, serif', letterSpacing: '2px'}}>You Are Not Alone</h2>
        <p style={{color: '#555', fontSize: '15px', lineHeight: '1.9', fontFamily: 'Montserrat, sans-serif', fontWeight: '300'}}>
          The Bible says in Matthew 18:20 — "For where two or three gather in my name, there am I with them." 
          Submit your prayer request below and our prayer team will stand in agreement with you.
        </p>
      </section>

      {/* Prayer Form */}
      <section style={{backgroundColor: '#f5f5f5', padding: '60px 24px'}}>
        <div style={{maxWidth: '700px', margin: '0 auto', backgroundColor: 'white', padding: '48px', borderRadius: '8px', boxShadow: '0 2px 16px rgba(0,0,0,0.08)'}}>
          <h2 style={{color: '#0a1f44', fontSize: '36px', fontWeight: '300', marginBottom: '32px', textAlign: 'center', fontFamily: 'Cormorant Garamond, Georgia, serif', letterSpacing: '2px'}}>Submit a Prayer Request</h2>
          
          <div style={{marginBottom: '24px'}}>
            <label style={{display: 'block', color: '#0a1f44', fontWeight: '500', marginBottom: '8px', fontSize: '11px', letterSpacing: '2px', textTransform: 'uppercase', fontFamily: 'Montserrat, sans-serif'}}>Full Name</label>
            <input type="text" placeholder="Your full name" style={{width: '100%', padding: '14px 16px', border: '1px solid #ddd', borderRadius: '4px', fontSize: '14px', boxSizing: 'border-box', outline: 'none', fontFamily: 'Montserrat, sans-serif', fontWeight: '300'}} />
          </div>

          <div style={{marginBottom: '24px'}}>
            <label style={{display: 'block', color: '#0a1f44', fontWeight: '500', marginBottom: '8px', fontSize: '11px', letterSpacing: '2px', textTransform: 'uppercase', fontFamily: 'Montserrat, sans-serif'}}>Email Address</label>
            <input type="email" placeholder="Your email address" style={{width: '100%', padding: '14px 16px', border: '1px solid #ddd', borderRadius: '4px', fontSize: '14px', boxSizing: 'border-box', outline: 'none', fontFamily: 'Montserrat, sans-serif', fontWeight: '300'}} />
          </div>

          <div style={{marginBottom: '24px'}}>
            <label style={{display: 'block', color: '#0a1f44', fontWeight: '500', marginBottom: '8px', fontSize: '11px', letterSpacing: '2px', textTransform: 'uppercase', fontFamily: 'Montserrat, sans-serif'}}>Phone Number (optional)</label>
            <input type="tel" placeholder="Your phone number" style={{width: '100%', padding: '14px 16px', border: '1px solid #ddd', borderRadius: '4px', fontSize: '14px', boxSizing: 'border-box', outline: 'none', fontFamily: 'Montserrat, sans-serif', fontWeight: '300'}} />
          </div>

          <div style={{marginBottom: '24px'}}>
            <label style={{display: 'block', color: '#0a1f44', fontWeight: '500', marginBottom: '8px', fontSize: '11px', letterSpacing: '2px', textTransform: 'uppercase', fontFamily: 'Montserrat, sans-serif'}}>Prayer Request</label>
            <textarea placeholder="Share your prayer request here..." rows={6} style={{width: '100%', padding: '14px 16px', border: '1px solid #ddd', borderRadius: '4px', fontSize: '14px', boxSizing: 'border-box', outline: 'none', resize: 'vertical', fontFamily: 'Montserrat, sans-serif', fontWeight: '300'}} />
          </div>

          <div style={{marginBottom: '32px', display: 'flex', alignItems: 'flex-start', gap: '12px'}}>
            <input type="checkbox" id="private" style={{marginTop: '4px', width: '16px', height: '16px'}} />
            <label htmlFor="private" style={{color: '#555', fontSize: '13px', lineHeight: '1.6', fontFamily: 'Montserrat, sans-serif', fontWeight: '300'}}>Keep my prayer request private (only shared with the prayer team)</label>
          </div>

          <button style={{width: '100%', backgroundColor: '#0a1f44', color: 'white', padding: '16px', border: 'none', borderRadius: '4px', fontWeight: '500', fontSize: '12px', cursor: 'pointer', letterSpacing: '2px', textTransform: 'uppercase', fontFamily: 'Montserrat, sans-serif'}}>
            🙏 Submit Prayer Request
          </button>
        </div>
      </section>

      {/* Prayer Times */}
      <section style={{padding: '60px 24px', textAlign: 'center'}}>
        <p style={{color: '#c9a84c', fontWeight: '500', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '4px', marginBottom: '8px', fontFamily: 'Montserrat, sans-serif'}}>Join Us</p>
        <h2 style={{fontSize: '42px', fontWeight: '300', color: '#0a1f44', marginBottom: '16px', fontFamily: 'Cormorant Garamond, Georgia, serif', letterSpacing: '2px'}}>Corporate Prayer Times</h2>
        <p style={{color: '#555', fontSize: '14px', marginBottom: '40px', fontFamily: 'Montserrat, sans-serif', fontWeight: '300', letterSpacing: '1px'}}>Come and pray together with us in person</p>
        <div style={{display: 'flex', justifyContent: 'center', gap: '24px', flexWrap: 'wrap'}}>
          {[
            {day: 'Every Wednesday', time: '6:00pm', label: 'Midweek Prayer'},
            {day: 'Every Friday', time: '6:00pm', label: 'Friday Prayer Meeting'},
          ].map(item => (
            <div key={item.day} style={{backgroundColor: '#0a1f44', color: 'white', padding: '32px 40px', borderRadius: '8px', minWidth: '220px'}}>
              <h3 style={{color: '#c9a84c', fontSize: '22px', fontWeight: '300', marginBottom: '8px', fontFamily: 'Cormorant Garamond, Georgia, serif', letterSpacing: '1px'}}>{item.label}</h3>
              <p style={{color: '#cccccc', fontSize: '13px', marginBottom: '4px', fontFamily: 'Montserrat, sans-serif', fontWeight: '300'}}>📅 {item.day}</p>
              <p style={{color: 'white', fontSize: '18px', fontWeight: '500', fontFamily: 'Montserrat, sans-serif'}}>🕐 {item.time}</p>
            </div>
          ))}
        </div>
      </section>

      {/* More Ways We Can Help */}
      <section style={{backgroundColor: '#f5f5f5', padding: '80px 24px', textAlign: 'center'}}>
        <p style={{color: '#c9a84c', fontWeight: '500', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '4px', marginBottom: '8px', fontFamily: 'Montserrat, sans-serif'}}>We Are Here For You</p>
        <h2 style={{fontSize: '42px', fontWeight: '300', color: '#0a1f44', marginBottom: '16px', fontFamily: 'Cormorant Garamond, Georgia, serif', letterSpacing: '2px'}}>More Ways We Can Help</h2>
        <p style={{color: '#555', fontSize: '14px', lineHeight: '1.8', fontFamily: 'Montserrat, sans-serif', fontWeight: '300', maxWidth: '520px', margin: '0 auto 48px'}}>
          Whatever you are going through, Living Seed Church is here to walk with you.
        </p>

        <div style={{display: 'flex', justifyContent: 'center', gap: '24px', flexWrap: 'wrap', maxWidth: '960px', margin: '0 auto'}}>

          {/* Testimonies */}
          <Link href="/testimonies" style={{textDecoration: 'none', flex: '1', minWidth: '240px', maxWidth: '280px'}}>
            <div style={{backgroundColor: 'white', borderRadius: '8px', padding: '40px 32px', boxShadow: '0 2px 16px rgba(0,0,0,0.07)', height: '100%', borderTop: '4px solid #c9a84c', cursor: 'pointer'}}>
              <div style={{fontSize: '36px', marginBottom: '16px'}}>🙌</div>
              <h3 style={{color: '#0a1f44', fontSize: '22px', fontWeight: '300', marginBottom: '12px', fontFamily: 'Cormorant Garamond, Georgia, serif', letterSpacing: '1px'}}>Share a Testimony</h3>
              <p style={{color: '#555', fontSize: '13px', lineHeight: '1.8', fontFamily: 'Montserrat, sans-serif', fontWeight: '300', marginBottom: '24px'}}>
                Has God done something wonderful in your life? Share it and encourage the body of Christ.
              </p>
              <span style={{color: '#c9a84c', fontSize: '11px', fontWeight: '500', letterSpacing: '2px', textTransform: 'uppercase', fontFamily: 'Montserrat, sans-serif'}}>Share Now →</span>
            </div>
          </Link>

          {/* Counselling */}
          <Link href="/counselling" style={{textDecoration: 'none', flex: '1', minWidth: '240px', maxWidth: '280px'}}>
            <div style={{backgroundColor: 'white', borderRadius: '8px', padding: '40px 32px', boxShadow: '0 2px 16px rgba(0,0,0,0.07)', height: '100%', borderTop: '4px solid #c9a84c', cursor: 'pointer'}}>
              <div style={{fontSize: '36px', marginBottom: '16px'}}>💬</div>
              <h3 style={{color: '#0a1f44', fontSize: '22px', fontWeight: '300', marginBottom: '12px', fontFamily: 'Cormorant Garamond, Georgia, serif', letterSpacing: '1px'}}>Request Counselling</h3>
              <p style={{color: '#555', fontSize: '13px', lineHeight: '1.8', fontFamily: 'Montserrat, sans-serif', fontWeight: '300', marginBottom: '24px'}}>
                Speak confidentially with a pastor. We are here to listen, guide and support you.
              </p>
              <span style={{color: '#c9a84c', fontSize: '11px', fontWeight: '500', letterSpacing: '2px', textTransform: 'uppercase', fontFamily: 'Montserrat, sans-serif'}}>Book a Session →</span>
            </div>
          </Link>

          {/* Connect Hub */}
          <Link href="/connect" style={{textDecoration: 'none', flex: '1', minWidth: '240px', maxWidth: '280px'}}>
            <div style={{backgroundColor: 'white', borderRadius: '8px', padding: '40px 32px', boxShadow: '0 2px 16px rgba(0,0,0,0.07)', height: '100%', borderTop: '4px solid #c9a84c', cursor: 'pointer'}}>
              <div style={{fontSize: '36px', marginBottom: '16px'}}>🤝</div>
              <h3 style={{color: '#0a1f44', fontSize: '22px', fontWeight: '300', marginBottom: '12px', fontFamily: 'Cormorant Garamond, Georgia, serif', letterSpacing: '1px'}}>Connect With Us</h3>
              <p style={{color: '#555', fontSize: '13px', lineHeight: '1.8', fontFamily: 'Montserrat, sans-serif', fontWeight: '300', marginBottom: '24px'}}>
                Explore all the ways to get involved, get support and grow with our church family.
              </p>
              <span style={{color: '#c9a84c', fontSize: '11px', fontWeight: '500', letterSpacing: '2px', textTransform: 'uppercase', fontFamily: 'Montserrat, sans-serif'}}>Explore →</span>
            </div>
          </Link>

        </div>
      </section>

      <Footer />
    </main>
  )
}