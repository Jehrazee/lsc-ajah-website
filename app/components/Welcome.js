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
        <p style={{color: '#c9a84c', fontWeight: '500', marginBottom: '8px', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '4px', fontFamily: 'Montserrat, sans-serif'}}>A Message from</p>
        <h2 style={{fontSize: '42px', fontWeight: '300', color: '#0a1f44', marginBottom: '20px', fontFamily: 'Cormorant Garamond, Georgia, serif', letterSpacing: '2px', lineHeight: '1.2'}}>Our Pastor</h2>
        <p style={{fontSize: '16px', lineHeight: '1.9', color: '#444444', marginBottom: '24px', fontFamily: 'Montserrat, sans-serif', fontWeight: '300'}}>
          Welcome to RCCG Living Seed Church Ajah. We are a family 
          built on the Word of God, committed to raising disciples 
          and transforming lives. Whether you are joining us for the 
          first time or have been with us for years — you are home.
        </p>
        <a href="/about" style={{backgroundColor: '#0a1f44', color: 'white', padding: '12px 28px', borderRadius: '4px', textDecoration: 'none', fontWeight: '500', fontSize: '12px', letterSpacing: '2px', textTransform: 'uppercase', fontFamily: 'Montserrat, sans-serif'}}>
          Meet Our Pastor
        </a>
      </div>
    </section>
  )
}