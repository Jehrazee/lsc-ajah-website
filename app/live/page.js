import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

export const metadata = {
  title: "Watch Live",
  description: "Stream RCCG Living Seed Church Ajah services live from anywhere in the world. Join us online every Sunday, Wednesday and Friday.",
}

export default function Live() {
  return (
    <main>
      <Navbar />

      {/* Hero */}
      <section style={{backgroundColor: '#0a1f44', color: 'white', padding: '80px 24px', textAlign: 'center'}}>
        <p style={{color: '#c9a84c', fontWeight: '500', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '4px', marginBottom: '8px', fontFamily: 'Montserrat, sans-serif'}}>Join Us Online</p>
        <h1 style={{fontSize: '52px', fontWeight: '300', fontFamily: 'Cormorant Garamond, Georgia, serif', letterSpacing: '2px'}}>Watch Live</h1>
        <p style={{color: '#cccccc', marginTop: '16px', fontSize: '15px', fontFamily: 'Montserrat, sans-serif', fontWeight: '300', letterSpacing: '1px'}}>Stream our services live from anywhere in the world</p>
      </section>

      {/* Live Stream */}
      <section style={{backgroundColor: '#000', padding: '40px 24px'}}>
        <div style={{maxWidth: '900px', margin: '0 auto'}}>
          <div style={{position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', borderRadius: '8px'}}>
            <iframe
              src="https://www.youtube.com/embed/live_stream?channel=CHANNEL_ID"
              style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none'}}
              allowFullScreen
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            />
          </div>
        </div>
      </section>

      {/* Service Times */}
      <section style={{padding: '60px 24px', backgroundColor: '#f5f5f5'}}>
        <div style={{maxWidth: '900px', margin: '0 auto', textAlign: 'center'}}>
          <p style={{color: '#c9a84c', fontWeight: '500', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '4px', marginBottom: '8px', fontFamily: 'Montserrat, sans-serif'}}>Tune In</p>
          <h2 style={{fontSize: '42px', fontWeight: '300', color: '#0a1f44', marginBottom: '40px', fontFamily: 'Cormorant Garamond, Georgia, serif', letterSpacing: '2px'}}>Stream Schedule</h2>
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '24px'}}>
            {[
              {day: 'Sunday', time: '8:00am & 10:30am', label: 'Sunday Service'},
              {day: 'Wednesday', time: '6:00pm', label: 'Midweek Service'},
              {day: 'Friday', time: '6:00pm', label: 'Prayer Meeting'},
            ].map(item => (
              <div key={item.day} style={{backgroundColor: 'white', padding: '32px 24px', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.08)', borderTop: '4px solid #c9a84c'}}>
                <h3 style={{color: '#0a1f44', fontSize: '24px', fontWeight: '300', marginBottom: '8px', fontFamily: 'Cormorant Garamond, Georgia, serif', letterSpacing: '1px'}}>{item.label}</h3>
                <p style={{color: '#666', fontSize: '13px', marginBottom: '4px', fontFamily: 'Montserrat, sans-serif', fontWeight: '300'}}>📅 Every {item.day}</p>
                <p style={{color: '#c9a84c', fontSize: '16px', fontWeight: '500', fontFamily: 'Montserrat, sans-serif'}}>🕐 {item.time}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Subscribe CTA */}
      <section style={{backgroundColor: '#0a1f44', padding: '60px 24px', textAlign: 'center'}}>
        <h2 style={{color: 'white', fontSize: '42px', fontWeight: '300', marginBottom: '16px', fontFamily: 'Cormorant Garamond, Georgia, serif', letterSpacing: '2px'}}>Never Miss a Service</h2>
        <p style={{color: '#cccccc', fontSize: '15px', marginBottom: '32px', fontFamily: 'Montserrat, sans-serif', fontWeight: '300', letterSpacing: '1px'}}>Subscribe to our YouTube channel to get notified every time we go live</p>
        <a href="https://youtube.com" target="_blank" style={{backgroundColor: '#c9a84c', color: '#0a1f44', padding: '16px 40px', borderRadius: '4px', fontWeight: '600', fontSize: '12px', textDecoration: 'none', display: 'inline-block', letterSpacing: '2px', textTransform: 'uppercase', fontFamily: 'Montserrat, sans-serif'}}>
          ▶ Subscribe on YouTube
        </a>
      </section>

      <Footer />
    </main>
  )
}