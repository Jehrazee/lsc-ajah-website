import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export const metadata = {
  title: 'Gallery',
  description: 'Photos and videos from services, events and special programs at RCCG Living Seed Church Ajah.',
}

const albums = [
  { id: 1, title: "The Lord's Chosen", date: 'Sunday, March 8 2026', category: 'Services', description: "Women's Sunday Service — A powerful celebration of God's chosen women.", photos: '24 photos', link: 'https://drive.google.com/drive/folders/1MSD0TZSApWTI53NjsE57BXRXcAb5hGuf', color: '#6b21a8' },
  { id: 2, title: 'Thanksgiving Sunday', date: 'Sunday, March 1 2026', category: 'Services', description: 'A glorious Thanksgiving Sunday celebrating God faithfulness.', photos: '18 photos', link: '#', color: '#0a1f44' },
  { id: 3, title: '7 Hours in the Holy Ghost', date: 'Friday, February 28 2026', category: 'Programs', description: 'Seven hours of intense worship, prayer and divine encounters.', photos: '31 photos', link: '#', color: '#c9a84c' },
  { id: 4, title: 'Workers in Training', date: 'Saturday, February 22 2026', category: 'Programs', description: 'Equipping and empowering church workers for greater service.', photos: '15 photos', link: '#', color: '#15803d' },
  { id: 5, title: 'Family Weekend', date: 'Sunday, February 15 2026', category: 'Special Events', description: 'A weekend of fellowship, fun and family bonding across all tribes.', photos: '42 photos', link: '#', color: '#b45309' },
  { id: 6, title: 'Cross Over Night', date: 'Wednesday, January 1 2026', category: 'Special Events', description: 'Crossing into 2026 — the Year of Back to Back Testimonies.', photos: '28 photos', link: '#', color: '#0a1f44' },
  { id: 7, title: 'Sunday School Graduation', date: 'Sunday, December 15 2025', category: 'Programs', description: 'Celebrating members who completed the Sunday School curriculum.', photos: '22 photos', link: '#', color: '#6b21a8' },
  { id: 8, title: 'Sports Weekend', date: 'Saturday, November 30 2025', category: 'Special Events', description: 'Tribes competing in friendly sports — Hope, Peace and Love.', photos: '37 photos', link: '#', color: '#c9a84c' },
  { id: 9, title: 'Harvest Sunday', date: 'Sunday, October 20 2025', category: 'Services', description: 'Annual harvest celebration — giving thanks for God provision.', photos: '19 photos', link: '#', color: '#15803d' },
]

export default function GalleryPage() {
  return (
    <main style={{ backgroundColor: '#ffffff', minHeight: '100vh' }}>
      <Navbar />

      <section style={{ backgroundColor: '#0a1f44', color: 'white', padding: '80px 24px', textAlign: 'center' }}>
        <p style={{ color: '#c9a84c', fontWeight: '500', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '4px', marginBottom: '8px', fontFamily: 'Montserrat, sans-serif' }}>Our Moments</p>
        <h1 style={{ fontSize: '52px', fontWeight: '300', fontFamily: 'Cormorant Garamond, Georgia, serif', letterSpacing: '2px', marginBottom: '16px' }}>Gallery</h1>
        <p style={{ color: '#cccccc', fontSize: '15px', fontFamily: 'Montserrat, sans-serif', fontWeight: '300', letterSpacing: '1px', maxWidth: '600px', margin: '0 auto' }}>
          Capturing the moments God moves among us. Photos are shared after every service and event.
        </p>
      </section>

      <section style={{ padding: '80px 24px', maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '32px' }}>
          {albums.map(album => (
            <div key={album.id} style={{ border: '1px solid #e5e5e5', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 2px 16px rgba(0,0,0,0.08)' }}>
              <div style={{ backgroundColor: album.color, padding: '40px 24px', textAlign: 'center' }}>
                <span style={{ fontSize: '48px' }}>&#128247;</span>
                <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '11px', fontFamily: 'Montserrat, sans-serif', marginTop: '8px', letterSpacing: '1px' }}>{album.photos}</p>
              </div>
              <div style={{ padding: '24px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                  <p style={{ color: '#c9a84c', fontSize: '11px', fontWeight: '500', letterSpacing: '2px', textTransform: 'uppercase', fontFamily: 'Montserrat, sans-serif', margin: 0 }}>{album.date}</p>
                  <span style={{ backgroundColor: '#f0f0f0', color: '#555', fontSize: '10px', fontWeight: '500', padding: '3px 10px', borderRadius: '12px', letterSpacing: '1px', textTransform: 'uppercase', fontFamily: 'Montserrat, sans-serif' }}>{album.category}</span>
                </div>
                <h3 style={{ color: '#0a1f44', fontSize: '24px', fontWeight: '300', marginBottom: '8px', fontFamily: 'Cormorant Garamond, Georgia, serif', letterSpacing: '1px' }}>{album.title}</h3>
                <p style={{ color: '#666', fontSize: '13px', lineHeight: '1.8', marginBottom: '24px', fontFamily: 'Montserrat, sans-serif', fontWeight: '300' }}>{album.description}</p>
                <a href={album.link} target="_blank" rel="noopener noreferrer" style={{ display: 'block', textAlign: 'center', backgroundColor: '#0a1f44', color: 'white', padding: '12px', borderRadius: '4px', textDecoration: 'none', fontWeight: '500', fontSize: '11px', letterSpacing: '2px', textTransform: 'uppercase', fontFamily: 'Montserrat, sans-serif' }}>
                  View Photos
                </a>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '64px', padding: '48px', backgroundColor: '#f9f9f9', borderRadius: '8px' }}>
          <p style={{ color: '#c9a84c', fontWeight: '500', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '4px', marginBottom: '8px', fontFamily: 'Montserrat, sans-serif' }}>Stay Connected</p>
          <h2 style={{ fontSize: '36px', fontWeight: '300', color: '#0a1f44', marginBottom: '16px', fontFamily: 'Cormorant Garamond, Georgia, serif', letterSpacing: '2px' }}>Never Miss a Moment</h2>
          <p style={{ color: '#666', fontSize: '14px', lineHeight: '1.8', fontFamily: 'Montserrat, sans-serif', fontWeight: '300', maxWidth: '480px', margin: '0 auto 32px' }}>
            Photos are uploaded to our Google Drive after every service. Follow us on social media for real-time updates.
          </p>
          <a href="/contact" style={{ display: 'inline-block', backgroundColor: '#0a1f44', color: 'white', padding: '14px 32px', borderRadius: '4px', textDecoration: 'none', fontWeight: '500', fontSize: '12px', letterSpacing: '2px', textTransform: 'uppercase', fontFamily: 'Montserrat, sans-serif' }}>
            Follow Us
          </a>
        </div>
      </section>

      <Footer />
    </main>
  )
}
