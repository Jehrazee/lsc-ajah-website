import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

export const metadata = {
  title: "Connect",
  description: "Connect with RCCG Living Seed Church Ajah — submit a prayer request, share a testimony or request counselling with a pastor.",
}

export default function Connect() {
  return (
    <main>
      <Navbar />

      {/* Hero */}
      <section style={{backgroundColor: '#0a1f44', color: 'white', padding: '80px 24px', textAlign: 'center'}}>
        <p style={{color: '#c9a84c', fontWeight: '500', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '4px', marginBottom: '8px', fontFamily: 'Montserrat, sans-serif'}}>We Are Here For You</p>
        <h1 style={{fontSize: '52px', fontWeight: '300', fontFamily: 'Cormorant Garamond, Georgia, serif', letterSpacing: '2px'}}>Connect</h1>
        <p style={{color: '#cccccc', marginTop: '16px', fontSize: '15px', fontFamily: 'Montserrat, sans-serif', fontWeight: '300', letterSpacing: '1px', maxWidth: '600px', margin: '16px auto 0'}}>
          However you need support — we are here. Choose how you'd like to connect with us.
        </p>
      </section>

      {/* Connect Cards */}
      <section style={{padding: '80px 24px'}}>
        <div style={{maxWidth: '1100px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px'}}>

          {/* Prayer */}
          <a href="/prayer" style={{textDecoration: 'none'}}>
            <div style={{backgroundColor: 'white', border: '1px solid #e5e5e5', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 2px 16px rgba(0,0,0,0.08)', transition: 'transform 0.3s ease', cursor: 'pointer'}}>
              <div style={{backgroundColor: '#0a1f44', padding: '40px 24px', textAlign: 'center'}}>
                <span style={{fontSize: '56px'}}>🙏</span>
                <h2 style={{color: '#c9a84c', fontSize: '28px', fontWeight: '300', marginTop: '16px', fontFamily: 'Cormorant Garamond, Georgia, serif', letterSpacing: '2px'}}>Prayer Request</h2>
              </div>
              <div style={{padding: '32px', textAlign: 'center'}}>
                <p style={{color: '#555', fontSize: '14px', lineHeight: '1.9', marginBottom: '24px', fontFamily: 'Montserrat, sans-serif', fontWeight: '300'}}>Share your prayer needs with us. Our prayer team will stand in agreement with you.</p>
                <span style={{backgroundColor: '#0a1f44', color: 'white', padding: '12px 32px', borderRadius: '4px', fontWeight: '500', fontSize: '11px', letterSpacing: '2px', textTransform: 'uppercase', fontFamily: 'Montserrat, sans-serif'}}>
                  Submit Request →
                </span>
              </div>
            </div>
          </a>

          {/* Testimonies */}
          <a href="/testimonies" style={{textDecoration: 'none'}}>
            <div style={{backgroundColor: 'white', border: '1px solid #e5e5e5', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 2px 16px rgba(0,0,0,0.08)', transition: 'transform 0.3s ease', cursor: 'pointer'}}>
              <div style={{backgroundColor: '#c9a84c', padding: '40px 24px', textAlign: 'center'}}>
                <span style={{fontSize: '56px'}}>🎉</span>
                <h2 style={{color: '#0a1f44', fontSize: '28px', fontWeight: '300', marginTop: '16px', fontFamily: 'Cormorant Garamond, Georgia, serif', letterSpacing: '2px'}}>Share Testimony</h2>
              </div>
              <div style={{padding: '32px', textAlign: 'center'}}>
                <p style={{color: '#555', fontSize: '14px', lineHeight: '1.9', marginBottom: '24px', fontFamily: 'Montserrat, sans-serif', fontWeight: '300'}}>Share what God has done for you. Your testimony could be the miracle someone else needs to hear.</p>
                <span style={{backgroundColor: '#c9a84c', color: '#0a1f44', padding: '12px 32px', borderRadius: '4px', fontWeight: '500', fontSize: '11px', letterSpacing: '2px', textTransform: 'uppercase', fontFamily: 'Montserrat, sans-serif'}}>
                  Share Testimony →
                </span>
              </div>
            </div>
          </a>

          {/* Counselling */}
          <a href="/counselling" style={{textDecoration: 'none'}}>
            <div style={{backgroundColor: 'white', border: '1px solid #e5e5e5', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 2px 16px rgba(0,0,0,0.08)', transition: 'transform 0.3s ease', cursor: 'pointer'}}>
              <div style={{backgroundColor: '#06132e', padding: '40px 24px', textAlign: 'center'}}>
                <span style={{fontSize: '56px'}}>💬</span>
                <h2 style={{color: '#c9a84c', fontSize: '28px', fontWeight: '300', marginTop: '16px', fontFamily: 'Cormorant Garamond, Georgia, serif', letterSpacing: '2px'}}>Counselling</h2>
              </div>
              <div style={{padding: '32px', textAlign: 'center'}}>
                <p style={{color: '#555', fontSize: '14px', lineHeight: '1.9', marginBottom: '24px', fontFamily: 'Montserrat, sans-serif', fontWeight: '300'}}>Request a private counselling session with one of our pastors. We are here to help.</p>
                <span style={{backgroundColor: '#06132e', color: 'white', padding: '12px 32px', borderRadius: '4px', fontWeight: '500', fontSize: '11px', letterSpacing: '2px', textTransform: 'uppercase', fontFamily: 'Montserrat, sans-serif'}}>
                  Request Session →
                </span>
              </div>
            </div>
          </a>

        </div>
      </section>

      <Footer />
    </main>
  )
}