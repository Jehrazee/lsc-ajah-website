export default function FeaturedSermon() {
  return (
    <section style={{backgroundColor: '#f5f5f5', padding: '80px 24px'}}>
      <div style={{maxWidth: '1100px', margin: '0 auto'}}>
        <p style={{color: '#c9a84c', fontWeight: 'bold', fontSize: '14px', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '8px', textAlign: 'center'}}>Watch & Listen</p>
        <h2 style={{fontSize: '36px', fontWeight: 'bold', color: '#0a1f44', marginBottom: '40px', textAlign: 'center'}}>Latest Sermon</h2>
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
            <span style={{backgroundColor: '#c9a84c', color: '#0a1f44', padding: '4px 12px', borderRadius: '20px', fontSize: '12px', fontWeight: 'bold'}}>Latest</span>
            <h3 style={{fontSize: '28px', fontWeight: 'bold', color: '#0a1f44', margin: '16px 0 12px'}}>The Power of Faith</h3>
            <p style={{color: '#666', marginBottom: '8px'}}>Pastor John Doe</p>
            <p style={{color: '#666', marginBottom: '24px'}}>Sunday 1st March 2026</p>
            <a href="/sermons" style={{backgroundColor: '#0a1f44', color: 'white', padding: '12px 28px', borderRadius: '4px', textDecoration: 'none', fontWeight: 'bold'}}>
              View All Sermons
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}