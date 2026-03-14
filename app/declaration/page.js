import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

export const metadata = {
  title: "The Declaration",
  description: "The 2026 Declaration of RCCG Living Seed Church Ajah — Year of Back to Back Testimonies.",
}

export default function Declaration() {
  return (
    <main>
      <Navbar />

      {/* Hero */}
      <section style={{backgroundColor: '#0a1f44', color: 'white', padding: '80px 24px', textAlign: 'center'}}>
        <p style={{color: '#c9a84c', fontWeight: '500', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '4px', marginBottom: '8px', fontFamily: 'Montserrat, sans-serif'}}>2026</p>
        <h1 style={{fontSize: '52px', fontWeight: '300', fontFamily: 'Cormorant Garamond, Georgia, serif', letterSpacing: '2px'}}>The Declaration</h1>
        <p style={{color: '#cccccc', marginTop: '16px', fontSize: '15px', fontFamily: 'Montserrat, sans-serif', fontWeight: '300', letterSpacing: '1px'}}>Spoken at the end of every service at Living Seed Church Ajah</p>
      </section>

      {/* Declaration */}
      <section style={{padding: '80px 24px', backgroundColor: '#f9f9f9'}}>
        <div style={{maxWidth: '800px', margin: '0 auto'}}>

          {/* Card */}
          <div style={{backgroundColor: '#0a1f44', borderRadius: '8px', padding: '64px', textAlign: 'center', boxShadow: '0 8px 40px rgba(0,0,0,0.2)', position: 'relative', overflow: 'hidden'}}>
            
            {/* Background glow */}
            <div style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'radial-gradient(ellipse 60% 60% at 50% 50%, rgba(201,168,76,0.08), transparent 70%)'}} />
            
            {/* Title */}
            <p style={{color: '#c9a84c', fontWeight: '500', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '4px', marginBottom: '24px', fontFamily: 'Montserrat, sans-serif'}}>2026 Declaration</p>
            
            {/* Declaration lines */}
            <div style={{position: 'relative', zIndex: 1}}>
              {[
                {text: 'I am a LIVING SEED', highlight: true},
                {text: 'I am whole', highlight: false},
                {text: 'I am hale', highlight: false},
                {text: 'I am hearty', highlight: false},
                {text: 'I am planted by the God of all Flesh', highlight: false},
                {text: 'I engage the authority of God\'s word', highlight: false},
                {text: 'I enjoy the power of the Holy Ghost', highlight: false},
                {text: 'No more delays', highlight: true},
                {text: 'No more closed doors', highlight: true},
                {text: 'Testimonies in my fellowship', highlight: false},
                {text: 'Testimonies in my health', highlight: false},
                {text: 'Testimonies in my family', highlight: false},
                {text: 'Testimonies in my finances', highlight: false},
                {text: 'Testimonies in my marriage', highlight: false},
                {text: 'Testimonies all round', highlight: false},
                {text: 'For this is my season of BACK TO BACK TESTIMONIES.', highlight: true},
              ].map((line, index) => (
                <p key={index} style={{
                  color: line.highlight ? '#c9a84c' : 'white',
                  fontSize: line.highlight ? '22px' : '18px',
                  fontWeight: line.highlight ? '400' : '300',
                  fontFamily: 'Cormorant Garamond, Georgia, serif',
                  lineHeight: '1.8',
                  marginBottom: '4px',
                  letterSpacing: '1px',
                }}>
                  {line.text}
                </p>
              ))}
            </div>

            {/* Hashtag */}
            <p style={{color: '#c9a84c', fontSize: '14px', fontWeight: '500', marginTop: '32px', fontFamily: 'Montserrat, sans-serif', letterSpacing: '2px'}}>
              #myyearofbacktobacktestimonies
            </p>
          </div>

          {/* Share prompt */}
          <div style={{textAlign: 'center', marginTop: '48px'}}>
            <p style={{color: '#c9a84c', fontWeight: '500', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '4px', marginBottom: '8px', fontFamily: 'Montserrat, sans-serif'}}>Declare It Daily</p>
            <h2 style={{fontSize: '36px', fontWeight: '300', color: '#0a1f44', marginBottom: '16px', fontFamily: 'Cormorant Garamond, Georgia, serif', letterSpacing: '2px'}}>Speak It. Believe It. Receive It.</h2>
            <p style={{color: '#555', fontSize: '14px', lineHeight: '1.9', fontFamily: 'Montserrat, sans-serif', fontWeight: '300', maxWidth: '500px', margin: '0 auto 32px'}}>
              This declaration is spoken at the end of every service. Speak it daily over your life and watch God move!
            </p>
            <div style={{display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap'}}>
              <a href="/testimonies" style={{backgroundColor: '#c9a84c', color: '#0a1f44', padding: '14px 32px', borderRadius: '4px', fontWeight: '600', fontSize: '12px', textDecoration: 'none', letterSpacing: '2px', textTransform: 'uppercase', fontFamily: 'Montserrat, sans-serif'}}>
                Share Your Testimony
              </a>
              <a href="/prayer" style={{border: '2px solid #0a1f44', color: '#0a1f44', padding: '14px 32px', borderRadius: '4px', fontWeight: '500', fontSize: '12px', textDecoration: 'none', letterSpacing: '2px', textTransform: 'uppercase', fontFamily: 'Montserrat, sans-serif'}}>
                Submit Prayer Request
              </a>
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  )
}
