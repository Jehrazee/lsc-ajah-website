import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

export const metadata = {
  title: "New Here",
  description: "First time at RCCG Living Seed Church Ajah? Here is everything you need to know before your first visit.",
};

export default function NewHerePage() {
  return (
    <main style={{ backgroundColor: '#ffffff', minHeight: '100vh' }}>
      <Navbar />

      <section style={{ backgroundColor: '#0a1f44', padding: '120px 24px 80px', textAlign: 'center' }}>
        <p style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '11px', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#c9a84c', marginBottom: '16px' }}>Welcome</p>
        <h1 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(36px, 6vw, 64px)', fontWeight: 300, color: '#ffffff', marginBottom: '24px', lineHeight: 1.2 }}>We are Glad You are Here</h1>
        <p style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '16px', fontWeight: 300, color: 'rgba(255,255,255,0.75)', maxWidth: '560px', margin: '0 auto 40px', lineHeight: 1.8 }}>Whether you are visiting for the first time or exploring faith, you are welcome here. Here is everything you need to know before you come.</p>
        <a href="https://wa.me/2349030319339" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', backgroundColor: '#c9a84c', color: '#0a1f44', fontFamily: 'Montserrat, sans-serif', fontSize: '12px', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', padding: '14px 32px', textDecoration: 'none' }}>Chat With Us on WhatsApp</a>
      </section>

      <section style={{ padding: '80px 24px', maxWidth: '900px', margin: '0 auto' }}>
        <p style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '11px', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#c9a84c', marginBottom: '12px', textAlign: 'center' }}>Your First Visit</p>
        <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 300, color: '#0a1f44', marginBottom: '48px', textAlign: 'center' }}>What to Expect</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '32px' }}>
          <div style={{ backgroundColor: '#f9f8f6', padding: '32px 28px', borderLeft: '3px solid #c9a84c' }}>
            <div style={{ fontSize: '28px', marginBottom: '12px' }}>&#129309;</div>
            <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '22px', fontWeight: 400, color: '#0a1f44', marginBottom: '10px' }}>A Warm Welcome</h3>
            <p style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '14px', fontWeight: 300, color: '#555', lineHeight: 1.8, margin: 0 }}>Our welcome team will greet you at the door, help you find a seat, and answer any questions you have.</p>
          </div>
          <div style={{ backgroundColor: '#f9f8f6', padding: '32px 28px', borderLeft: '3px solid #c9a84c' }}>
            <div style={{ fontSize: '28px', marginBottom: '12px' }}>&#127925;</div>
            <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '22px', fontWeight: 400, color: '#0a1f44', marginBottom: '10px' }}>Vibrant Worship</h3>
            <p style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '14px', fontWeight: 300, color: '#555', lineHeight: 1.8, margin: 0 }}>Expect uplifting praise and worship music that sets the tone for an encounter with God.</p>
          </div>
          <div style={{ backgroundColor: '#f9f8f6', padding: '32px 28px', borderLeft: '3px solid #c9a84c' }}>
            <div style={{ fontSize: '28px', marginBottom: '12px' }}>&#128214;</div>
            <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '22px', fontWeight: 400, color: '#0a1f44', marginBottom: '10px' }}>Practical Teaching</h3>
            <p style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '14px', fontWeight: 300, color: '#555', lineHeight: 1.8, margin: 0 }}>Our messages are rooted in Scripture and designed to be relevant to your everyday life.</p>
          </div>
          <div style={{ backgroundColor: '#f9f8f6', padding: '32px 28px', borderLeft: '3px solid #c9a84c' }}>
            <div style={{ fontSize: '28px', marginBottom: '12px' }}>&#128118;</div>
            <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '22px', fontWeight: 400, color: '#0a1f44', marginBottom: '10px' }}>Children Church</h3>
            <p style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '14px', fontWeight: 300, color: '#555', lineHeight: 1.8, margin: 0 }}>We have a dedicated, safe, and fun children church running simultaneously with the main service.</p>
          </div>
          <div style={{ backgroundColor: '#f9f8f6', padding: '32px 28px', borderLeft: '3px solid #c9a84c' }}>
            <div style={{ fontSize: '28px', marginBottom: '12px' }}>&#128247;</div>
            <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '22px', fontWeight: 400, color: '#0a1f44', marginBottom: '10px' }}>Come As You Are</h3>
            <p style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '14px', fontWeight: 300, color: '#555', lineHeight: 1.8, margin: 0 }}>There is no dress code. Come comfortable, what matters is that you show up.</p>
          </div>
          <div style={{ backgroundColor: '#f9f8f6', padding: '32px 28px', borderLeft: '3px solid #c9a84c' }}>
            <div style={{ fontSize: '28px', marginBottom: '12px' }}>&#9201;</div>
            <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '22px', fontWeight: 400, color: '#0a1f44', marginBottom: '10px' }}>Service Length</h3>
            <p style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '14px', fontWeight: 300, color: '#555', lineHeight: 1.8, margin: 0 }}>Services typically run for about 2 hours. You are free to stay for refreshments and fellowship afterwards.</p>
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: '#0a1f44', padding: '80px 24px' }}>
        <div style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'center' }}>
          <p style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '11px', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#c9a84c', marginBottom: '12px' }}>When We Meet</p>
          <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 300, color: '#ffffff', marginBottom: '48px' }}>Service Times</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '24px' }}>
            <div style={{ border: '1px solid rgba(201,168,76,0.3)', padding: '28px 20px' }}>
              <p style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '11px', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#c9a84c', marginBottom: '8px' }}>Sunday</p>
              <p style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '26px', fontWeight: 300, color: '#ffffff', marginBottom: '6px' }}>8:00 AM and 10:30 AM</p>
              <p style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '12px', fontWeight: 300, color: 'rgba(255,255,255,0.55)', margin: 0 }}>Main Service</p>
            </div>
            <div style={{ border: '1px solid rgba(201,168,76,0.3)', padding: '28px 20px' }}>
              <p style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '11px', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#c9a84c', marginBottom: '8px' }}>Wednesday</p>
              <p style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '26px', fontWeight: 300, color: '#ffffff', marginBottom: '6px' }}>6:00 PM</p>
              <p style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '12px', fontWeight: 300, color: 'rgba(255,255,255,0.55)', margin: 0 }}>Midweek Service</p>
            </div>
            <div style={{ border: '1px solid rgba(201,168,76,0.3)', padding: '28px 20px' }}>
              <p style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '11px', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#c9a84c', marginBottom: '8px' }}>Friday</p>
              <p style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '26px', fontWeight: 300, color: '#ffffff', marginBottom: '6px' }}>6:00 PM</p>
              <p style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '12px', fontWeight: 300, color: 'rgba(255,255,255,0.55)', margin: 0 }}>Prayer and Bible Study</p>
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: '80px 24px', maxWidth: '900px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <p style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '11px', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#c9a84c', marginBottom: '12px' }}>Find Us</p>
          <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 300, color: '#0a1f44', marginBottom: '16px' }}>We are Located in Ajah</h2>
          <p style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '15px', fontWeight: 300, color: '#555', lineHeight: 1.8 }}>The Fountain Place, by NIPCO Filling Station, Addo Road, Eti-Osa, Ajah, Lagos</p>
        </div>
        <div style={{ borderRadius: '4px', overflow: 'hidden', marginBottom: '32px' }}>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.7!2d3.5648!3d6.4281!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMjUnNDEuMiJOIDPCsDMzJzUzLjMiRQ!5e0!3m2!1sen!2sng!4v1" width="100%" height="380" style={{ border: 0, display: 'block' }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
        </div>
        <div style={{ textAlign: 'center' }}>
          <a href="https://maps.google.com/?q=The+Fountain+Place+NIPCO+Addo+Road+Ajah+Lagos" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', border: '1px solid #0a1f44', color: '#0a1f44', fontFamily: 'Montserrat, sans-serif', fontSize: '12px', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', padding: '14px 32px', textDecoration: 'none' }}>Get Directions</a>
        </div>
      </section>

      <section style={{ backgroundColor: '#f9f8f6', padding: '64px 24px' }}>
        <div style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'center' }}>
          <p style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '11px', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#c9a84c', marginBottom: '12px' }}>Practical Info</p>
          <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: 300, color: '#0a1f44', marginBottom: '40px' }}>Parking and Accessibility</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '24px', textAlign: 'left' }}>
            <div style={{ padding: '24px', backgroundColor: '#ffffff', borderTop: '3px solid #c9a84c' }}>
              <h3 style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '13px', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#0a1f44', marginBottom: '10px' }}>Parking</h3>
              <p style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '14px', fontWeight: 300, color: '#555', lineHeight: 1.8, margin: 0 }}>Free parking is available on the church premises and along Addo Road.</p>
            </div>
            <div style={{ padding: '24px', backgroundColor: '#ffffff', borderTop: '3px solid #c9a84c' }}>
              <h3 style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '13px', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#0a1f44', marginBottom: '10px' }}>Accessibility</h3>
              <p style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '14px', fontWeight: 300, color: '#555', lineHeight: 1.8, margin: 0 }}>The venue is accessible. Please speak to a steward on arrival if you need any assistance.</p>
            </div>
            <div style={{ padding: '24px', backgroundColor: '#ffffff', borderTop: '3px solid #c9a84c' }}>
              <h3 style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '13px', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#0a1f44', marginBottom: '10px' }}>Security</h3>
              <p style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '14px', fontWeight: 300, color: '#555', lineHeight: 1.8, margin: 0 }}>Security personnel are on duty throughout every service for your safety.</p>
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: '80px 24px', textAlign: 'center' }}>
        <p style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '11px', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#c9a84c', marginBottom: '16px' }}>Take the Next Step</p>
        <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 300, color: '#0a1f44', marginBottom: '20px' }}>Ready to Visit?</h2>
        <p style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '15px', fontWeight: 300, color: '#555', maxWidth: '480px', margin: '0 auto 40px', lineHeight: 1.8 }}>Let us know you are coming and we will make sure someone is there to welcome you personally.</p>
        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="https://wa.me/2349030319339" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', backgroundColor: '#0a1f44', color: '#ffffff', fontFamily: 'Montserrat, sans-serif', fontSize: '12px', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', padding: '14px 32px', textDecoration: 'none' }}>Message Us First</a>
          <a href="/connect" style={{ display: 'inline-block', border: '1px solid #0a1f44', color: '#0a1f44', fontFamily: 'Montserrat, sans-serif', fontSize: '12px', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', padding: '14px 32px', textDecoration: 'none' }}>Get Connected</a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
