import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

export default function NotFound() {
  return (
    <main>
      <Navbar />
      <section style={{backgroundColor: '#0a1f44', minHeight: '70vh', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '60px 24px'}}>
        <div>
          <p style={{color: '#c9a84c', fontSize: '120px', fontWeight: 'bold', margin: '0', lineHeight: '1'}}>404</p>
          <h1 style={{color: 'white', fontSize: '32px', fontWeight: 'bold', margin: '16px 0'}}>
            Looks Like You're Lost
          </h1>
          <p style={{color: '#cccccc', fontSize: '18px', marginBottom: '8px'}}>
            Even the disciples got lost sometimes. 😄
          </p>
          <p style={{color: '#cccccc', fontSize: '16px', marginBottom: '40px'}}>
            The page you're looking for doesn't exist.
          </p>
          <div style={{display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap'}}>
            <a href="/" style={{backgroundColor: '#c9a84c', color: '#0a1f44', padding: '14px 32px', borderRadius: '4px', fontWeight: 'bold', fontSize: '16px', textDecoration: 'none'}}>
              🏠 Go Home
            </a>
            <a href="/contact" style={{backgroundColor: 'transparent', color: 'white', padding: '14px 32px', borderRadius: '4px', fontWeight: 'bold', fontSize: '16px', textDecoration: 'none', border: '2px solid white'}}>
              Contact Us
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}