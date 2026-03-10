export default function Newsletter() {
  return (
    <section style={{backgroundColor: '#0a1f44', padding: '80px 24px', textAlign: 'center'}}>
      <p style={{color: '#c9a84c', fontWeight: '500', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '4px', marginBottom: '8px', fontFamily: 'Montserrat, sans-serif'}}>Stay Connected</p>
      <h2 style={{fontSize: '42px', fontWeight: '300', color: 'white', marginBottom: '16px', fontFamily: 'Cormorant Garamond, Georgia, serif', letterSpacing: '2px'}}>Never Miss an Update</h2>
      <p style={{color: '#cccccc', fontSize: '15px', marginBottom: '32px', maxWidth: '500px', margin: '0 auto 32px', fontFamily: 'Montserrat, sans-serif', fontWeight: '300', lineHeight: '1.8'}}>
        Sign up to receive updates, announcements and encouragement straight to your inbox.
      </p>
      <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '12px', maxWidth: '500px', margin: '0 auto'}}>
        <input 
          type="email" 
          placeholder="Enter your email address" 
          style={{width: '100%', padding: '14px 20px', fontSize: '14px', border: 'none', borderRadius: '4px', outline: 'none', boxSizing: 'border-box', fontFamily: 'Montserrat, sans-serif', fontWeight: '300', letterSpacing: '1px'}}
        />
        <button style={{backgroundColor: '#c9a84c', color: '#0a1f44', padding: '14px 28px', border: 'none', borderRadius: '4px', fontWeight: '600', fontSize: '12px', cursor: 'pointer', width: '100%', letterSpacing: '2px', textTransform: 'uppercase', fontFamily: 'Montserrat, sans-serif'}}>
          Subscribe
        </button>
      </div>
    </section>
  )
}