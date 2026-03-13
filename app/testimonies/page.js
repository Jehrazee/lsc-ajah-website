import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

export const metadata = {
  title: "Testimonies",
  description: "Read and share testimonies of what God has done at RCCG Living Seed Church Ajah. This is our Year of Back to Back Testimonies 2026.",
}

const testimonies = [
  {
    id: 1,
    name: "Sister Blessing",
    category: "Healing",
    testimony: "I had been struggling with a health condition for months. After the church prayed with me, I went back to the doctor and received a clean bill of health. God is faithful!",
    date: "March 2026",
  },
  {
    id: 2,
    name: "Brother Emeka",
    category: "Breakthrough",
    testimony: "I was unemployed for over a year. After submitting my prayer request and trusting God, I received two job offers in the same week. To God be the glory!",
    date: "February 2026",
  },
  {
    id: 3,
    name: "Sister Funke",
    category: "Family",
    testimony: "My marriage was on the brink of collapse. Through counselling with our pastor and God's intervention, my husband and I are stronger than ever. Jesus is Lord!",
    date: "January 2026",
  },
]

const categoryColors = {
  Healing: '#15803d',
  Breakthrough: '#0a1f44',
  Family: '#6b21a8',
  Finance: '#c9a84c',
  Salvation: '#b45309',
}

export default function Testimonies() {
  return (
    <main>
      <Navbar />

      {/* Hero */}
      <section style={{backgroundColor: '#0a1f44', color: 'white', padding: '80px 24px', textAlign: 'center', position: 'relative', overflow: 'hidden'}}>
        <div style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'radial-gradient(ellipse 60% 60% at 50% 50%, rgba(201,168,76,0.08), transparent 70%)'}} />
        <p style={{color: '#c9a84c', fontWeight: '500', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '4px', marginBottom: '8px', fontFamily: 'Montserrat, sans-serif'}}>2026 Theme</p>
        <h1 style={{fontSize: '52px', fontWeight: '300', fontFamily: 'Cormorant Garamond, Georgia, serif', letterSpacing: '2px', marginBottom: '16px'}}>Year of Back to Back</h1>
        <h2 style={{fontSize: '36px', fontWeight: '300', fontFamily: 'Cormorant Garamond, Georgia, serif', letterSpacing: '2px', color: '#c9a84c', marginBottom: '24px'}}>Testimonies</h2>
        <p style={{color: '#cccccc', fontSize: '15px', fontFamily: 'Montserrat, sans-serif', fontWeight: '300', letterSpacing: '1px', maxWidth: '600px', margin: '0 auto'}}>
          God is moving at Living Seed Church Ajah. Read what He has done and share your own testimony.
        </p>
      </section>

      {/* Testimonies Grid */}
      <section style={{padding: '80px 24px', backgroundColor: '#f9f9f9'}}>
        <div style={{maxWidth: '1100px', margin: '0 auto'}}>
          <p style={{color: '#c9a84c', fontWeight: '500', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '4px', marginBottom: '8px', textAlign: 'center', fontFamily: 'Montserrat, sans-serif'}}>What God Has Done</p>
          <h2 style={{fontSize: '42px', fontWeight: '300', color: '#0a1f44', marginBottom: '48px', textAlign: 'center', fontFamily: 'Cormorant Garamond, Georgia, serif', letterSpacing: '2px'}}>Recent Testimonies</h2>
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '32px'}}>
            {testimonies.map(item => (
              <div key={item.id} style={{backgroundColor: 'white', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 2px 16px rgba(0,0,0,0.08)', borderTop: `4px solid ${categoryColors[item.category]}`}}>
                <div style={{padding: '32px'}}>
                  <span style={{backgroundColor: '#f0e8d5', color: '#c9a84c', fontSize: '11px', fontWeight: '500', padding: '4px 12px', borderRadius: '12px', letterSpacing: '1px', textTransform: 'uppercase', fontFamily: 'Montserrat, sans-serif'}}>{item.category}</span>
                  <p style={{fontSize: '15px', lineHeight: '1.9', color: '#444', margin: '20px 0', fontFamily: 'Montserrat, sans-serif', fontWeight: '300', fontStyle: 'italic'}}>"{item.testimony}"</p>
                  <div style={{borderTop: '1px solid #f0f0f0', paddingTop: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                    <p style={{color: '#0a1f44', fontWeight: '500', fontSize: '13px', fontFamily: 'Montserrat, sans-serif'}}>{item.name}</p>
                    <p style={{color: '#999', fontSize: '12px', fontFamily: 'Montserrat, sans-serif', fontWeight: '300'}}>{item.date}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Submit Form */}
      <section style={{padding: '80px 24px', backgroundColor: 'white'}}>
        <div style={{maxWidth: '700px', margin: '0 auto'}}>
          <p style={{color: '#c9a84c', fontWeight: '500', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '4px', marginBottom: '8px', textAlign: 'center', fontFamily: 'Montserrat, sans-serif'}}>Share Your Story</p>
          <h2 style={{fontSize: '42px', fontWeight: '300', color: '#0a1f44', marginBottom: '16px', textAlign: 'center', fontFamily: 'Cormorant Garamond, Georgia, serif', letterSpacing: '2px'}}>What Has God Done For You?</h2>
          <p style={{color: '#555', fontSize: '14px', lineHeight: '1.9', marginBottom: '40px', textAlign: 'center', fontFamily: 'Montserrat, sans-serif', fontWeight: '300'}}>
            Your testimony could be the miracle someone else needs to hear. Share what God has done!
          </p>

          <div style={{backgroundColor: '#f9f9f9', padding: '48px', borderRadius: '8px', boxShadow: '0 2px 16px rgba(0,0,0,0.06)'}}>
            <div style={{marginBottom: '24px'}}>
              <label style={{display: 'block', color: '#0a1f44', fontWeight: '500', marginBottom: '8px', fontSize: '11px', letterSpacing: '2px', textTransform: 'uppercase', fontFamily: 'Montserrat, sans-serif'}}>Full Name</label>
              <input type="text" placeholder="Your full name" style={{width: '100%', padding: '14px 16px', border: '1px solid #ddd', borderRadius: '4px', fontSize: '14px', boxSizing: 'border-box', outline: 'none', fontFamily: 'Montserrat, sans-serif', fontWeight: '300'}} />
            </div>

            <div style={{marginBottom: '24px'}}>
              <label style={{display: 'block', color: '#0a1f44', fontWeight: '500', marginBottom: '8px', fontSize: '11px', letterSpacing: '2px', textTransform: 'uppercase', fontFamily: 'Montserrat, sans-serif'}}>Category</label>
              <select style={{width: '100%', padding: '14px 16px', border: '1px solid #ddd', borderRadius: '4px', fontSize: '14px', boxSizing: 'border-box', outline: 'none', fontFamily: 'Montserrat, sans-serif', fontWeight: '300', backgroundColor: 'white'}}>
                <option>Healing</option>
                <option>Breakthrough</option>
                <option>Finance</option>
                <option>Family</option>
                <option>Salvation</option>
                <option>Other</option>
              </select>
            </div>

            <div style={{marginBottom: '24px'}}>
              <label style={{display: 'block', color: '#0a1f44', fontWeight: '500', marginBottom: '8px', fontSize: '11px', letterSpacing: '2px', textTransform: 'uppercase', fontFamily: 'Montserrat, sans-serif'}}>Your Testimony</label>
              <textarea placeholder="Share what God has done for you..." rows={6} style={{width: '100%', padding: '14px 16px', border: '1px solid #ddd', borderRadius: '4px', fontSize: '14px', boxSizing: 'border-box', outline: 'none', resize: 'vertical', fontFamily: 'Montserrat, sans-serif', fontWeight: '300'}} />
            </div>

            <div style={{marginBottom: '32px', display: 'flex', alignItems: 'flex-start', gap: '12px'}}>
              <input type="checkbox" id="anonymous" style={{marginTop: '4px', width: '16px', height: '16px'}} />
              <label htmlFor="anonymous" style={{color: '#555', fontSize: '13px', lineHeight: '1.6', fontFamily: 'Montserrat, sans-serif', fontWeight: '300'}}>Share my testimony anonymously</label>
            </div>

            <button style={{width: '100%', backgroundColor: '#c9a84c', color: '#0a1f44', padding: '16px', border: 'none', borderRadius: '4px', fontWeight: '600', fontSize: '12px', cursor: 'pointer', letterSpacing: '2px', textTransform: 'uppercase', fontFamily: 'Montserrat, sans-serif'}}>
              🙌 Submit My Testimony
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}