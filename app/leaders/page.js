import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

export const metadata = {
  title: "Our Leaders",
  description: "Meet the leaders of RCCG Living Seed Church Ajah — Pastor Emmanuel Osas Azenabor and the leadership team.",
}

const leaders = [
  {
    id: 1,
    name: "Pastor Emmanuel Osas Azenabor",
    role: "Senior Pastor",
    bio: "Pastor Emmanuel has been leading Living Seed Church for over 3 years with a heart for discipleship and community impact. His ministry is marked by an uncompromising commitment to the Word of God and a deep love for the congregation.",
    image: "/pastor.jpg",
  },
  {
    id: 2,
    name: "Pastor Oluwapelumi Akinola",
    role: "Associate Pastor",
    bio: "Pastor Pelumi is a vibrant leader and a powerful man of God. He serves alongside the Senior Pastor with passion and dedication to the growth of the church and its members.",
    image: "/pastor.jpg",
  },
  {
    id: 3,
    name: "Pastor Daniel Akande",
    role: "Associate Pastor",
    bio: "Pastor Daniel serves with dedication and a heart for God's people. He is committed to the growth and development of the church and its members.",
    image: "/pastor.jpg",
  },
]

export default function Leaders() {
  return (
    <main>
      <Navbar />

      {/* Hero */}
      <section style={{backgroundColor: '#0a1f44', color: 'white', padding: '80px 24px', textAlign: 'center'}}>
        <p style={{color: '#c9a84c', fontWeight: '500', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '4px', marginBottom: '8px', fontFamily: 'Montserrat, sans-serif'}}>The Team</p>
        <h1 style={{fontSize: '52px', fontWeight: '300', fontFamily: 'Cormorant Garamond, Georgia, serif', letterSpacing: '2px'}}>Our Leaders</h1>
        <p style={{color: '#cccccc', marginTop: '16px', fontSize: '15px', fontFamily: 'Montserrat, sans-serif', fontWeight: '300', letterSpacing: '1px'}}>Servants of God, committed to leading with love and integrity</p>
      </section>

      {/* Leaders */}
      <section style={{padding: '80px 24px'}}>
        <div style={{maxWidth: '1100px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '80px'}}>
          {leaders.map((leader, index) => (
            <div key={leader.id} style={{display: 'flex', gap: '60px', alignItems: 'center', flexWrap: 'wrap', flexDirection: index % 2 === 0 ? 'row' : 'row-reverse'}}>
              <div style={{flex: '1', minWidth: '280px'}}>
                <img src={leader.image} alt={leader.name} style={{width: '100%', borderRadius: '8px', boxShadow: '0 8px 32px rgba(0,0,0,0.15)'}} />
              </div>
              <div style={{flex: '2', minWidth: '280px'}}>
                <p style={{color: '#c9a84c', fontWeight: '500', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '4px', marginBottom: '8px', fontFamily: 'Montserrat, sans-serif'}}>{leader.role}</p>
                <h2 style={{fontSize: '42px', fontWeight: '300', color: '#0a1f44', marginBottom: '20px', fontFamily: 'Cormorant Garamond, Georgia, serif', letterSpacing: '2px', lineHeight: '1.2'}}>{leader.name}</h2>
                <p style={{fontSize: '15px', lineHeight: '1.9', color: '#444', fontFamily: 'Montserrat, sans-serif', fontWeight: '300'}}>{leader.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{backgroundColor: '#f5f5f5', padding: '60px 24px', textAlign: 'center'}}>
        <p style={{color: '#c9a84c', fontWeight: '500', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '4px', marginBottom: '8px', fontFamily: 'Montserrat, sans-serif'}}>Get In Touch</p>
        <h2 style={{fontSize: '42px', fontWeight: '300', color: '#0a1f44', marginBottom: '16px', fontFamily: 'Cormorant Garamond, Georgia, serif', letterSpacing: '2px'}}>Connect With Our Leaders</h2>
        <p style={{color: '#555', fontSize: '14px', marginBottom: '32px', fontFamily: 'Montserrat, sans-serif', fontWeight: '300', maxWidth: '500px', margin: '0 auto 32px', lineHeight: '1.8'}}>Our leaders are here to serve you. Reach out for prayer, counselling or just to connect.</p>
        <div style={{display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap'}}>
          <a href="/counselling" style={{backgroundColor: '#0a1f44', color: 'white', padding: '14px 32px', borderRadius: '4px', fontWeight: '500', fontSize: '12px', textDecoration: 'none', letterSpacing: '2px', textTransform: 'uppercase', fontFamily: 'Montserrat, sans-serif'}}>
            Request Counselling
          </a>
          <a href="/prayer" style={{border: '2px solid #0a1f44', color: '#0a1f44', padding: '14px 32px', borderRadius: '4px', fontWeight: '500', fontSize: '12px', textDecoration: 'none', letterSpacing: '2px', textTransform: 'uppercase', fontFamily: 'Montserrat, sans-serif'}}>
            Submit Prayer Request
          </a>
        </div>
      </section>

      <Footer />
    </main>
  )
}