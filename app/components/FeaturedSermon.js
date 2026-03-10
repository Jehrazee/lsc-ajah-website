export default function FeaturedSermon() {
  return (
    <section style={{backgroundColor: '#f5f5f5', padding: '80px 24px'}}>
      <div style={{maxWidth: '1100px', margin: '0 auto'}}>
        <p style={{color: '#c9a84c', fontWeight: '500', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '4px', marginBottom: '8px', textAlign: 'center', fontFamily: 'Montserrat, sans-serif'}}>Watch & Listen</p>
        <h2 style={{fontSize: '42px', fontWeight: '300', color: '#0a1f44', marginBottom: '40px', textAlign: 'center', fontFamily: 'Cormorant Garamond, Georgia, serif', letterSpacing: '2px'}}>Latest Sermon</h2>
        <div style={{display: 'flex', gap: '40px', alignItems: 'center', flexWrap: 'wrap'}}>
          <div style={{flex: '2', minWidth: '280px'}}>
            <iframe
              width="100%"
              height="380"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="Latest Sermon"
              allowFullScreen
              style={{borderRadius: '8px', border: 'none'}}
            ></iframe>
          </div>
          <div style={{flex: '1', minWidth: '280px'}}>
            <span style={{backgroundColor: '#c9a84c', color: '#0a1f44', padding: '4px 12px', borderRadius: '20px', fontSize: '11px', fontWeight: '600', letterSpacing: '2px', textTransform: 'uppercase', fontFamily: 'Montserrat, sans-serif'}}>Latest</span>
            <h3 style={{fontSize: '32px', fontWeight: '300', color: '#0a1f44', margin: '16px 0 12px', fontFamily: 'Cormorant Garamond, Georgia, serif', letterSpacing: '1px', lineHeight: '1.2'}}>The Power of Faith</h3>
            <p style={{color: '#666', marginBottom: '8px', fontSize: '13px', letterSpacing: '1px', fontFamily: 'Montserrat, sans-serif', fontWeight: '300'}}>Pastor John Doe</p>
            <p style={{color: '#666', marginBottom: '24px', fontSize: '13px', fontFamily: 'Montserrat, sans-serif', fontWeight: '300'}}>Sunday 1st March 2026</p>
            <a href="/sermons" style={{backgroundColor: '#0a1f44', color: 'white', padding: '12px 28px', borderRadius: '4px', textDecoration: 'none', fontWeight: '500', fontSize: '12px', letterSpacing: '2px', textTransform: 'uppercase', fontFamily: 'Montserrat, sans-serif'}}>
              View All Sermons
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}