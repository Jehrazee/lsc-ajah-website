export default function Gallery() {
  const albums = [
    {
      id: 1,
      title: "The Lord's Chosen",
      date: "Sunday, March 8 2026",
      description: "Women's Sunday Service — A powerful celebration of God's chosen women.",
      photos: "24 photos",
      link: "https://drive.google.com/drive/folders/1MSD0TZSApWTI53NjsE57BXRXcAb5hGuf",
      color: '#6b21a8'
    },
    {
      id: 2,
      title: "Thanksgiving Sunday",
      date: "Sunday, March 1 2026",
      description: "A glorious Thanksgiving Sunday celebrating God's faithfulness.",
      photos: "18 photos",
      link: "#",
      color: '#0a1f44'
    },
    {
      id: 3,
      title: "7 Hours in the Holy Ghost",
      date: "Friday, February 28 2026",
      description: "Seven hours of intense worship, prayer and divine encounters.",
      photos: "31 photos",
      link: "#",
      color: '#c9a84c'
    },
  ]

  return (
    <section style={{padding: '80px 24px', backgroundColor: 'white'}}>
      <div style={{maxWidth: '1100px', margin: '0 auto'}}>

        {/* Header */}
        <div style={{textAlign: 'center', marginBottom: '48px'}}>
          <p style={{color: '#c9a84c', fontWeight: '500', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '4px', marginBottom: '8px', fontFamily: 'Montserrat, sans-serif'}}>Our Moments</p>
          <h2 style={{fontSize: '42px', fontWeight: '300', color: '#0a1f44', marginBottom: '16px', fontFamily: 'Cormorant Garamond, Georgia, serif', letterSpacing: '2px'}}>Gallery</h2>
          <p style={{color: '#666', fontSize: '14px', fontFamily: 'Montserrat, sans-serif', fontWeight: '300', maxWidth: '500px', margin: '0 auto', lineHeight: '1.8'}}>
            Capturing the moments God moves among us. Photos are shared after every service.
          </p>
        </div>

        {/* Album Cards */}
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '32px', marginBottom: '48px'}}>
          {albums.map(album => (
            <div key={album.id} style={{border: '1px solid #e5e5e5', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 2px 16px rgba(0,0,0,0.08)', transition: 'transform 0.3s ease'}}>
              {/* Color Header */}
              <div style={{backgroundColor: album.color, padding: '40px 24px', textAlign: 'center', position: 'relative'}}>
                <span style={{fontSize: '48px'}}>📸</span>
                <p style={{color: 'rgba(255,255,255,0.7)', fontSize: '11px', fontFamily: 'Montserrat, sans-serif', marginTop: '8px', letterSpacing: '1px'}}>{album.photos}</p>
              </div>
              {/* Details */}
              <div style={{padding: '24px'}}>
                <p style={{color: '#c9a84c', fontSize: '11px', fontWeight: '500', letterSpacing: '2px', textTransform: 'uppercase', fontFamily: 'Montserrat, sans-serif', marginBottom: '8px'}}>{album.date}</p>
                <h3 style={{color: '#0a1f44', fontSize: '24px', fontWeight: '300', marginBottom: '8px', fontFamily: 'Cormorant Garamond, Georgia, serif', letterSpacing: '1px'}}>{album.title}</h3>
                <p style={{color: '#666', fontSize: '13px', lineHeight: '1.8', marginBottom: '24px', fontFamily: 'Montserrat, sans-serif', fontWeight: '300'}}>{album.description}</p>
                <a href={album.link} target="_blank" style={{display: 'block', textAlign: 'center', backgroundColor: '#0a1f44', color: 'white', padding: '12px', borderRadius: '4px', textDecoration: 'none', fontWeight: '500', fontSize: '11px', letterSpacing: '2px', textTransform: 'uppercase', fontFamily: 'Montserrat, sans-serif'}}>
                  View Photos →
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div style={{textAlign: 'center'}}>
          <p style={{color: '#666', fontSize: '13px', fontFamily: 'Montserrat, sans-serif', fontWeight: '300', marginBottom: '16px'}}>Photos are uploaded after every service</p>
        </div>

      </div>
    </section>
  )
}