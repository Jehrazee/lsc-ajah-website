export default function Newsletter() {
  return (
    <section style={{backgroundColor: '#0a1f44', padding: '80px 24px', textAlign: 'center'}}>
      <p style={{color: '#c9a84c', fontWeight: 'bold', fontSize: '14px', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '8px'}}>Stay Connected</p>
      <h2 style={{fontSize: '36px', fontWeight: 'bold', color: 'white', marginBottom: '16px'}}>Never Miss an Update</h2>
      <p style={{color: '#cccccc', fontSize: '18px', marginBottom: '32px', maxWidth: '500px', margin: '0 auto 32px'}}>
        Sign up to receive updates, announcements and encouragement straight to your inbox.
      </p>
      <div style={{display: 'flex', justifyContent: 'center', gap: '0', maxWidth: '500px', margin: '0 auto', flexWrap: 'wrap'}}>
        <input 
          type="email" 
          placeholder="Enter your email address" 
          style={{flex: '1', minWidth: '250px', padding: '14px 20px', fontSize: '16px', border: 'none', borderRadius: '4px 0 0 4px', outline: 'none'}}
        />
        <button style={{backgroundColor: '#c9a84c', color: '#0a1f44', padding: '14px 28px', border: 'none', borderRadius: '0 4px 4px 0', fontWeight: 'bold', fontSize: '16px', cursor: 'pointer'}}>
          Subscribe
        </button>
      </div>
    </section>
  )
}