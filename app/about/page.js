import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

export default function About() {
  return (
    <main>
      <Navbar />
      
      {/* Hero */}
      <section style={{backgroundColor: '#0a1f44', color: 'white', padding: '80px 24px', textAlign: 'center'}}>
        <p style={{color: '#c9a84c', fontWeight: 'bold', fontSize: '14px', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '8px'}}>Who We Are</p>
        <h1 style={{fontSize: '48px', fontWeight: 'bold'}}>About Us</h1>
      </section>

      {/* Vision & Mission */}
      <section style={{padding: '80px 24px', maxWidth: '1100px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '40px'}}>
        <div style={{backgroundColor: '#f5f5f5', padding: '40px', borderRadius: '8px', borderTop: '4px solid #c9a84c'}}>
          <h2 style={{color: '#0a1f44', fontSize: '24px', fontWeight: 'bold', marginBottom: '16px'}}>Our Vision</h2>
          <p style={{color: '#444', lineHeight: '1.8'}}>To raise a generation of disciples who are rooted in the Word of God, transformed by His grace, and sent out to impact the world for His glory.</p>
        </div>
        <div style={{backgroundColor: '#f5f5f5', padding: '40px', borderRadius: '8px', borderTop: '4px solid #0a1f44'}}>
          <h2 style={{color: '#0a1f44', fontSize: '24px', fontWeight: 'bold', marginBottom: '16px'}}>Our Mission</h2>
          <p style={{color: '#444', lineHeight: '1.8'}}>To make heaven. To take as many people with us. To have a member of RCCG in every family of all nations.</p>
        </div>
        <div style={{backgroundColor: '#f5f5f5', padding: '40px', borderRadius: '8px', borderTop: '4px solid #c9a84c'}}>
          <h2 style={{color: '#0a1f44', fontSize: '24px', fontWeight: 'bold', marginBottom: '16px'}}>Our Values</h2>
          <p style={{color: '#444', lineHeight: '1.8'}}>Faith, Family, Fellowship, Growth and Service. We believe in the power of community and the transforming grace of Jesus Christ.</p>
        </div>
      </section>

      {/* Pastor */}
      <section style={{backgroundColor: '#f5f5f5', padding: '80px 24px'}}>
        <div style={{maxWidth: '1100px', margin: '0 auto', display: 'flex', gap: '48px', alignItems: 'center', flexWrap: 'wrap'}}>
          <div style={{flex: '1', minWidth: '280px'}}>
            <img src="/pastor.jpg" alt="Pastor" style={{width: '100%', borderRadius: '8px', boxShadow: '0 4px 20px rgba(0,0,0,0.15)'}} />
          </div>
          <div style={{flex: '2', minWidth: '280px'}}>
            <p style={{color: '#c9a84c', fontWeight: 'bold', fontSize: '14px', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '8px'}}>Meet</p>
            <h2 style={{fontSize: '36px', fontWeight: 'bold', color: '#0a1f44', marginBottom: '20px'}}>Our Pastor</h2>
            <p style={{fontSize: '16px', lineHeight: '1.8', color: '#444', marginBottom: '16px'}}>
              Pastor [Name] has been leading RCCG Living Seed Church Ajah with a heart for God and a passion for people. Under his leadership, the church has grown into a vibrant community of believers committed to worship, discipleship and service.
            </p>
            <p style={{fontSize: '16px', lineHeight: '1.8', color: '#444'}}>
              His ministry is marked by an uncompromising commitment to the Word of God and a deep love for the congregation. He is supported by his wife and family who serve alongside him in the ministry.
            </p>
          </div>
        </div>
      </section>

      {/* What We Believe */}
      <section style={{padding: '80px 24px'}}>
        <div style={{maxWidth: '1100px', margin: '0 auto'}}>
          <p style={{color: '#c9a84c', fontWeight: 'bold', fontSize: '14px', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '8px', textAlign: 'center'}}>Our Foundation</p>
          <h2 style={{fontSize: '36px', fontWeight: 'bold', color: '#0a1f44', marginBottom: '40px', textAlign: 'center'}}>What We Believe</h2>
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px'}}>
            {[
              {title: 'The Bible', desc: 'We believe the Bible is the inspired, infallible Word of God and the final authority for faith and life.'},
              {title: 'Salvation', desc: 'We believe in salvation through faith in Jesus Christ alone — His death, burial and resurrection.'},
              {title: 'The Holy Spirit', desc: 'We believe in the person and power of the Holy Spirit who lives in every believer.'},
              {title: 'Prayer', desc: 'We believe prayer is essential to the Christian life and the foundation of everything we do.'},
              {title: 'Community', desc: 'We believe God designed us for community — to worship together, grow together and serve together.'},
              {title: 'Eternity', desc: 'We believe in the second coming of Jesus Christ and eternal life for all who believe in Him.'},
            ].map((item) => (
              <div key={item.title} style={{padding: '24px', border: '1px solid #e5e5e5', borderRadius: '8px', borderLeft: '4px solid #c9a84c'}}>
                <h3 style={{color: '#0a1f44', fontWeight: 'bold', fontSize: '18px', marginBottom: '8px'}}>{item.title}</h3>
                <p style={{color: '#666', lineHeight: '1.7', fontSize: '14px'}}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}