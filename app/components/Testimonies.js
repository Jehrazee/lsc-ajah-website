export default function Testimonies() {
  return (
    <section style={{padding: '80px 24px', backgroundColor: '#0a1f44', position: 'relative', overflow: 'hidden'}}>
      <div style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'radial-gradient(ellipse 60% 60% at 50% 50%, rgba(201,168,76,0.06), transparent 70%)'}} />
      <div style={{maxWidth: '1100px', margin: '0 auto', position: 'relative', zIndex: 1}}>

        {/* Header */}
        <div style={{textAlign: 'center', marginBottom: '48px'}}>
          <span style={{backgroundColor: '#c9a84c', color: '#0a1f44', padding: '6px 16px', fontSize: '11px', fontWeight: '600', letterSpacing: '2px', textTransform: 'uppercase', fontFamily: 'Montserrat, sans-serif'}}>2026 Theme</span>
          <h2 style={{fontSize: '48px', fontWeight: '300', color: 'white', margin: '16px 0 8px', fontFamily: 'Cormorant Garamond, Georgia, serif', letterSpacing: '2px'}}>Year of Back to Back</h2>
          <h3 style={{fontSize: '32px', fontWeight: '300', color: '#c9a84c', marginBottom: '16px', fontFamily: 'Cormorant Garamond, Georgia, serif', letterSpacing: '2px'}}>Testimonies</h3>
          <p style={{color: '#cccccc', fontSize: '14px', fontFamily: 'Montserrat, sans-serif', fontWeight: '300', letterSpacing: '1px', maxWidth: '500px', margin: '0 auto'}}>
            God is moving at Living Seed Church Ajah. Here is what He has been doing.
          </p>
        </div>

        {/* 3 Testimony Cards */}
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px', marginBottom: '48px'}}>
          {[
            {name: 'Sister Blessing', category: 'Healing', testimony: 'After the church prayed with me, I went back to the doctor and received a clean bill of health. God is faithful!'},
            {name: 'Brother Emeka', category: 'Breakthrough', testimony: 'I was unemployed for over a year. After trusting God, I received two job offers in the same week. To God be the glory!'},
            {name: 'Sister Funke', category: 'Family', testimony: 'My marriage was on the brink of collapse. Through God\'s intervention, my husband and I are stronger than ever!'},
          ].map(item => (
            <div key={item.name} style={{backgroundColor: 'rgba(255,255,255,0.05)', border: '1px solid rgba(201,168,76,0.2)', borderRadius: '8px', padding: '32px'}}>
              <span style={{backgroundColor: 'rgba(201,168,76,0.15)', color: '#c9a84c', fontSize: '11px', fontWeight: '500', padding: '4px 12px', borderRadius: '12px', letterSpacing: '1px', textTransform: 'uppercase', fontFamily: 'Montserrat, sans-serif'}}>{item.category}</span>
              <p style={{fontSize: '14px', lineHeight: '1.9', color: '#cccccc', margin: '16px 0', fontFamily: 'Montserrat, sans-serif', fontWeight: '300', fontStyle: 'italic'}}>"{item.testimony}"</p>
              <p style={{color: '#c9a84c', fontWeight: '500', fontSize: '13px', fontFamily: 'Montserrat, sans-serif'}}>— {item.name}</p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div style={{textAlign: 'center'}}>
          <a href="/testimonies" style={{backgroundColor: '#c9a84c', color: '#0a1f44', padding: '14px 40px', borderRadius: '4px', fontWeight: '600', fontSize: '12px', textDecoration: 'none', letterSpacing: '2px', textTransform: 'uppercase', fontFamily: 'Montserrat, sans-serif', display: 'inline-block'}}>
            Read All Testimonies
          </a>
          <p style={{color: '#888', fontSize: '12px', marginTop: '16px', fontFamily: 'Montserrat, sans-serif', fontWeight: '300'}}>Have a testimony? <a href="/testimonies#share" style={{color: '#c9a84c', textDecoration: 'none'}}>Share yours here →</a></p>
        </div>

      </div>
    </section>
  )
}
