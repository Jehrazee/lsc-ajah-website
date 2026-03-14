import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

export const metadata = {
  title: "Counselling",
  description: "Request a private counselling session with a pastor at RCCG Living Seed Church Ajah. We are here to help.",
}

export default function Counselling() {
  return (
    <main>
      <Navbar />

      {/* Hero */}
      <section style={{backgroundColor: '#0a1f44', color: 'white', padding: '80px 24px', textAlign: 'center'}}>
        <p style={{color: '#c9a84c', fontWeight: '500', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '4px', marginBottom: '8px', fontFamily: 'Montserrat, sans-serif'}}>We Are Here</p>
        <h1 style={{fontSize: '52px', fontWeight: '300', fontFamily: 'Cormorant Garamond, Georgia, serif', letterSpacing: '2px'}}>Counselling</h1>
        <p style={{color: '#cccccc', marginTop: '16px', fontSize: '15px', fontFamily: 'Montserrat, sans-serif', fontWeight: '300', letterSpacing: '1px', maxWidth: '600px', margin: '16px auto 0'}}>
          Our pastors are available to provide confidential, Spirit-led counselling. You don't have to walk through life alone.
        </p>
      </section>

      {/* Intro */}
      <section style={{padding: '60px 24px', textAlign: 'center', maxWidth: '700px', margin: '0 auto'}}>
        <h2 style={{fontSize: '42px', fontWeight: '300', color: '#0a1f44', marginBottom: '16px', fontFamily: 'Cormorant Garamond, Georgia, serif', letterSpacing: '2px'}}>A Safe Space to Talk</h2>
        <p style={{color: '#555', fontSize: '15px', lineHeight: '1.9', fontFamily: 'Montserrat, sans-serif', fontWeight: '300'}}>
          Whatever you are going through — marriage, family, grief, faith, purpose or personal struggles — our pastors are here to listen, pray and guide you through God's Word.
        </p>
      </section>

      {/* What to Expect */}
      <section style={{backgroundColor: '#f5f5f5', padding: '60px 24px'}}>
        <div style={{maxWidth: '1100px', margin: '0 auto'}}>
          <p style={{color: '#c9a84c', fontWeight: '500', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '4px', marginBottom: '8px', textAlign: 'center', fontFamily: 'Montserrat, sans-serif'}}>The Process</p>
          <h2 style={{fontSize: '42px', fontWeight: '300', color: '#0a1f44', marginBottom: '40px', textAlign: 'center', fontFamily: 'Cormorant Garamond, Georgia, serif', letterSpacing: '2px'}}>What to Expect</h2>
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '24px'}}>
            {[
              {step: '01', title: 'Submit Request', desc: 'Fill out the form below with your name and what you would like to discuss.'},
              {step: '02', title: 'We Contact You', desc: 'A pastor will reach out within 48 hours to schedule a convenient time.'},
              {step: '03', title: 'Private Session', desc: 'Meet with a pastor in person or virtually — completely confidential.'},
              {step: '04', title: 'Follow Up', desc: 'We walk with you beyond the session with prayer and ongoing support.'},
            ].map(item => (
              <div key={item.step} style={{backgroundColor: 'white', padding: '32px 24px', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.06)', textAlign: 'center'}}>
                <p style={{color: '#c9a84c', fontSize: '36px', fontWeight: '300', fontFamily: 'Cormorant Garamond, Georgia, serif', marginBottom: '8px'}}>{item.step}</p>
                <h3 style={{color: '#0a1f44', fontSize: '18px', fontWeight: '300', marginBottom: '8px', fontFamily: 'Cormorant Garamond, Georgia, serif', letterSpacing: '1px'}}>{item.title}</h3>
                <p style={{color: '#666', fontSize: '13px', lineHeight: '1.8', fontFamily: 'Montserrat, sans-serif', fontWeight: '300'}}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form */}
      <section style={{padding: '80px 24px'}}>
        <div style={{maxWidth: '700px', margin: '0 auto', backgroundColor: 'white', padding: '48px', borderRadius: '8px', boxShadow: '0 2px 16px rgba(0,0,0,0.08)'}}>
          <h2 style={{color: '#0a1f44', fontSize: '36px', fontWeight: '300', marginBottom: '32px', textAlign: 'center', fontFamily: 'Cormorant Garamond, Georgia, serif', letterSpacing: '2px'}}>Request a Session</h2>

          <div style={{marginBottom: '24px'}}>
            <label style={{display: 'block', color: '#0a1f44', fontWeight: '500', marginBottom: '8px', fontSize: '11px', letterSpacing: '2px', textTransform: 'uppercase', fontFamily: 'Montserrat, sans-serif'}}>Full Name</label>
            <input type="text" placeholder="Your full name" style={{width: '100%', padding: '14px 16px', border: '1px solid #ddd', borderRadius: '4px', fontSize: '14px', boxSizing: 'border-box', outline: 'none', fontFamily: 'Montserrat, sans-serif', fontWeight: '300'}} />
          </div>

          <div style={{marginBottom: '24px'}}>
            <label style={{display: 'block', color: '#0a1f44', fontWeight: '500', marginBottom: '8px', fontSize: '11px', letterSpacing: '2px', textTransform: 'uppercase', fontFamily: 'Montserrat, sans-serif'}}>Phone Number</label>
            <input type="tel" placeholder="Your phone number" style={{width: '100%', padding: '14px 16px', border: '1px solid #ddd', borderRadius: '4px', fontSize: '14px', boxSizing: 'border-box', outline: 'none', fontFamily: 'Montserrat, sans-serif', fontWeight: '300'}} />
          </div>

          <div style={{marginBottom: '24px'}}>
            <label style={{display: 'block', color: '#0a1f44', fontWeight: '500', marginBottom: '8px', fontSize: '11px', letterSpacing: '2px', textTransform: 'uppercase', fontFamily: 'Montserrat, sans-serif'}}>Email Address</label>
            <input type="email" placeholder="Your email address" style={{width: '100%', padding: '14px 16px', border: '1px solid #ddd', borderRadius: '4px', fontSize: '14px', boxSizing: 'border-box', outline: 'none', fontFamily: 'Montserrat, sans-serif', fontWeight: '300'}} />
          </div>

          <div style={{marginBottom: '24px'}}>
            <label style={{display: 'block', color: '#0a1f44', fontWeight: '500', marginBottom: '8px', fontSize: '11px', letterSpacing: '2px', textTransform: 'uppercase', fontFamily: 'Montserrat, sans-serif'}}>Area of Concern</label>
            <select style={{width: '100%', padding: '14px 16px', border: '1px solid #ddd', borderRadius: '4px', fontSize: '14px', boxSizing: 'border-box', outline: 'none', fontFamily: 'Montserrat, sans-serif', fontWeight: '300', backgroundColor: 'white'}}>
              <option>Marriage & Relationships</option>
              <option>Family & Parenting</option>
              <option>Grief & Loss</option>
              <option>Faith & Spiritual Growth</option>
              <option>Purpose & Career</option>
              <option>Mental & Emotional Health</option>
              <option>Financial Challenges</option>
              <option>Other</option>
            </select>
          </div>

          <div style={{marginBottom: '24px'}}>
            <label style={{display: 'block', color: '#0a1f44', fontWeight: '500', marginBottom: '8px', fontSize: '11px', letterSpacing: '2px', textTransform: 'uppercase', fontFamily: 'Montserrat, sans-serif'}}>Preferred Meeting Type</label>
            <select style={{width: '100%', padding: '14px 16px', border: '1px solid #ddd', borderRadius: '4px', fontSize: '14px', boxSizing: 'border-box', outline: 'none', fontFamily: 'Montserrat, sans-serif', fontWeight: '300', backgroundColor: 'white'}}>
              <option>In Person</option>
              <option>Virtual (Video Call)</option>
              <option>Phone Call</option>
            </select>
          </div>

          <div style={{marginBottom: '32px'}}>
            <label style={{display: 'block', color: '#0a1f44', fontWeight: '500', marginBottom: '8px', fontSize: '11px', letterSpacing: '2px', textTransform: 'uppercase', fontFamily: 'Montserrat, sans-serif'}}>Brief Description (optional)</label>
            <textarea placeholder="Share a little about what you'd like to discuss..." rows={4} style={{width: '100%', padding: '14px 16px', border: '1px solid #ddd', borderRadius: '4px', fontSize: '14px', boxSizing: 'border-box', outline: 'none', resize: 'vertical', fontFamily: 'Montserrat, sans-serif', fontWeight: '300'}} />
          </div>

          <div style={{marginBottom: '32px', display: 'flex', alignItems: 'flex-start', gap: '12px'}}>
            <input type="checkbox" id="confidential" style={{marginTop: '4px', width: '16px', height: '16px'}} />
            <label htmlFor="confidential" style={{color: '#555', fontSize: '13px', lineHeight: '1.6', fontFamily: 'Montserrat, sans-serif', fontWeight: '300'}}>I understand that my session will be kept completely confidential</label>
          </div>

          <button style={{width: '100%', backgroundColor: '#0a1f44', color: 'white', padding: '16px', border: 'none', borderRadius: '4px', fontWeight: '500', fontSize: '12px', cursor: 'pointer', letterSpacing: '2px', textTransform: 'uppercase', fontFamily: 'Montserrat, sans-serif'}}>
            💬 Request Counselling Session
          </button>
        </div>
      </section>

      <Footer />
    </main>
  )
}



