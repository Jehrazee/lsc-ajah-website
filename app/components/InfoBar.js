export default function InfoBar() {
  return (
    <section style={{backgroundColor: '#c9a84c', padding: '16px 24px', display: 'flex', justifyContent: 'center', gap: '48px', flexWrap: 'wrap'}}>
      <div style={{display: 'flex', alignItems: 'center', gap: '8px', color: '#0a1f44', fontWeight: 'bold'}}>
        <span>📍</span>
        <p>Ajah, Lagos, Nigeria</p>
      </div>
      <div style={{display: 'flex', alignItems: 'center', gap: '8px', color: '#0a1f44', fontWeight: 'bold'}}>
        <span>🕗</span>
        <p>Sundays: 8:00am & 10:30am</p>
      </div>
      <div style={{display: 'flex', alignItems: 'center', gap: '8px', color: '#0a1f44', fontWeight: 'bold'}}>
        <span>📞</span>
        <p>+234 000 000 0000</p>
      </div>
    </section>
  )
}