export default function Hero() {
  return (
    <section style={{backgroundColor: '#0a1f44', color: 'white', padding: '80px 24px', textAlign: 'center'}}>
      <h1 style={{fontSize: '48px', fontWeight: 'bold', marginBottom: '16px', lineHeight: '1.2'}}>
        Welcome to <span style={{color: '#c9a84c'}}>Living Seed Church</span>
      </h1>
      <p style={{fontSize: '20px', color: '#cccccc', marginBottom: '32px', maxWidth: '600px', margin: '0 auto 32px'}}>
        A place of grace, growth and genuine worship
      </p>
      <div style={{display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap'}}>
        <a href="/about" style={{backgroundColor: '#c9a84c', color: '#0a1f44', padding: '14px 32px', borderRadius: '4px', fontWeight: 'bold', textDecoration: 'none', fontSize: '16px'}}>
          Join Us Sunday
        </a>
        <a href="/live" style={{border: '2px solid #c9a84c', color: '#c9a84c', padding: '14px 32px', borderRadius: '4px', fontWeight: 'bold', textDecoration: 'none', fontSize: '16px'}}>
          Watch Live
        </a>
      </div>
    </section>
  )
}