export default function Navbar() {
  return (
    <nav style={{backgroundColor: '#0a1f44', color: 'white', padding: '16px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
      <div>
        <h1 style={{color: '#c9a84c', fontSize: '20px', fontWeight: 'bold'}}>LSC Ajah</h1>
        <p style={{color: '#cccccc', fontSize: '12px'}}>RCCG Living Seed Church</p>
      </div>
      <ul style={{display: 'flex', gap: '24px', listStyle: 'none', fontSize: '14px'}}>
        <li><a href="/" style={{color: 'white', textDecoration: 'none'}}>Home</a></li>
        <li><a href="/about" style={{color: 'white', textDecoration: 'none'}}>About</a></li>
        <li><a href="/sermons" style={{color: 'white', textDecoration: 'none'}}>Sermons</a></li>
        <li><a href="/events" style={{color: 'white', textDecoration: 'none'}}>Events</a></li>
        <li><a href="/prayer" style={{color: 'white', textDecoration: 'none'}}>Prayer</a></li>
        <li><a href="/give" style={{color: 'white', textDecoration: 'none'}}>Give</a></li>
        <li><a href="/contact" style={{color: 'white', textDecoration: 'none'}}>Contact</a></li>
      </ul>
      <a href="/live" style={{backgroundColor: '#c9a84c', color: '#0a1f44', padding: '8px 16px', borderRadius: '4px', fontSize: '14px', fontWeight: 'bold', textDecoration: 'none'}}>
        Watch Live
      </a>
    </nav>
  )
}