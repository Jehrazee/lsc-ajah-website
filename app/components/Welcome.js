export default function Welcome() {
  return (
    <section style={{padding: '80px 24px', maxWidth: '1100px', margin: '0 auto', display: 'flex', gap: '48px', alignItems: 'center', flexWrap: 'wrap'}}>
      <div style={{flex: '1', minWidth: '280px'}}>
        <img 
          src="/pastor.jpg" 
          alt="Pastor" 
          style={{width: '100%', borderRadius: '8px', boxShadow: '0 4px 20px rgba(0,0,0,0.15)'}}
        />
      </div>
      <div style={{flex: '2', minWidth: '280px'}}>
        <p style={{color: '#c9a84c', fontWeight: 'bold', marginBottom: '8px', fontSize: '14px', textTransform: 'uppercase', letterSpacing: '2px'}}>A Message from</p>
        <h2 style={{fontSize: '36px', fontWeight: 'bold', color: '#0a1f44', marginBottom: '20px'}}>Our Pastor</h2>
        <p style={{fontSize: '18px', lineHeight: '1.8', color: '#444444', marginBottom: '24px'}}>
          Welcome to RCCG Living Seed Church Ajah. We are a family 
          built on the Word of God, committed to raising disciples 
          and transforming lives. Whether you are joining us for the 
          first time or have been with us for years — you are home.
        </p>
        <a href="/about" style={{backgroundColor: '#0a1f44', color: 'white', padding: '12px 28px', borderRadius: '4px', textDecoration: 'none', fontWeight: 'bold', fontSize: '15px'}}>
          Meet Our Pastor
        </a>
      </div>
    </section>
  )
}