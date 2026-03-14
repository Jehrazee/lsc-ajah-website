import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

export const metadata = {
  title: "FAQ",
  description: "Frequently asked questions about RCCG Living Seed Church Ajah — service times, location, membership and more.",
}

const faqs = [
  {
    question: "What should I wear to service?",
    answer: "Come as you are! We welcome everyone regardless of what they wear. Smart casual is common but there is no dress code. You are welcome just as you are."
  },
  {
    question: "Is there parking available?",
    answer: "Yes, parking is available at the church premises. We also have volunteers to help direct you on arrival."
  },
  {
    question: "What time should I arrive?",
    answer: "We recommend arriving 10-15 minutes before the service starts. Sunday services begin at 8:00am and 10:30am. Doors open 30 minutes before each service."
  },
  {
    question: "Is there a children's ministry?",
    answer: "Yes! We have a vibrant children's ministry that runs concurrently with the main Sunday service. Children are well cared for in a safe and fun environment."
  },
  {
    question: "How do I become a member?",
    answer: "We welcome new members with open arms! Speak to any of our pastors after service or contact us via the Contact page and we will guide you through the membership process."
  },
  {
    question: "How can I get baptised?",
    answer: "Baptism is available for all believers. Speak to one of our pastors after service or submit a request through our Contact page and we will be in touch."
  },
  {
    question: "How do I join a small group or ministry?",
    answer: "We have various ministries and small groups you can join. Speak to any of our leaders after service or contact us and we will connect you with the right group."
  },
  {
    question: "Where exactly is the church located?",
    answer: "We are located in Ajah, Lagos, Nigeria. Full address and directions are available on our Contact page. You can also reach us on +234 800 000 0000 for directions."
  },
  {
    question: "Do you stream services online?",
    answer: "Yes! All our services are streamed live on our YouTube channel. Visit our Watch Live page for the stream link and schedule."
  },
  {
    question: "How do I request prayer?",
    answer: "You can submit a prayer request anytime through our Prayer page. Our dedicated prayer team will stand in agreement with you."
  },
]

export default function FAQ() {
  return (
    <main>
      <Navbar />

      {/* Hero */}
      <section style={{backgroundColor: '#0a1f44', color: 'white', padding: '80px 24px', textAlign: 'center'}}>
        <p style={{color: '#c9a84c', fontWeight: '500', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '4px', marginBottom: '8px', fontFamily: 'Montserrat, sans-serif'}}>Got Questions?</p>
        <h1 style={{fontSize: '52px', fontWeight: '300', fontFamily: 'Cormorant Garamond, Georgia, serif', letterSpacing: '2px'}}>Frequently Asked Questions</h1>
        <p style={{color: '#cccccc', marginTop: '16px', fontSize: '15px', fontFamily: 'Montserrat, sans-serif', fontWeight: '300', letterSpacing: '1px', maxWidth: '600px', margin: '16px auto 0'}}>
          Everything you need to know about visiting and joining Living Seed Church Ajah.
        </p>
      </section>

      {/* FAQ List */}
      <section style={{padding: '80px 24px'}}>
        <div style={{maxWidth: '800px', margin: '0 auto'}}>
          {faqs.map((faq, index) => (
            <div key={index} style={{borderBottom: '1px solid #e5e5e5', padding: '32px 0'}}>
              <div style={{display: 'flex', gap: '24px', alignItems: 'flex-start'}}>
                <span style={{color: '#c9a84c', fontSize: '24px', fontWeight: '300', fontFamily: 'Cormorant Garamond, Georgia, serif', minWidth: '32px'}}>{String(index + 1).padStart(2, '0')}</span>
                <div>
                  <h3 style={{color: '#0a1f44', fontSize: '20px', fontWeight: '300', marginBottom: '12px', fontFamily: 'Cormorant Garamond, Georgia, serif', letterSpacing: '1px'}}>{faq.question}</h3>
                  <p style={{color: '#555', fontSize: '14px', lineHeight: '1.9', fontFamily: 'Montserrat, sans-serif', fontWeight: '300'}}>{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Still have questions */}
      <section style={{backgroundColor: '#0a1f44', padding: '60px 24px', textAlign: 'center'}}>
        <h2 style={{fontSize: '42px', fontWeight: '300', color: 'white', marginBottom: '16px', fontFamily: 'Cormorant Garamond, Georgia, serif', letterSpacing: '2px'}}>Still Have Questions?</h2>
        <p style={{color: '#cccccc', fontSize: '14px', marginBottom: '32px', fontFamily: 'Montserrat, sans-serif', fontWeight: '300', letterSpacing: '1px'}}>We'd love to hear from you — reach out anytime!</p>
        <div style={{display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap'}}>
          <a href="/contact" style={{backgroundColor: '#c9a84c', color: '#0a1f44', padding: '14px 32px', borderRadius: '4px', fontWeight: '600', fontSize: '12px', textDecoration: 'none', letterSpacing: '2px', textTransform: 'uppercase', fontFamily: 'Montserrat, sans-serif'}}>
            Contact Us
          </a>
          <a href="/prayer" style={{border: '2px solid #c9a84c', color: '#c9a84c', padding: '14px 32px', borderRadius: '4px', fontWeight: '500', fontSize: '12px', textDecoration: 'none', letterSpacing: '2px', textTransform: 'uppercase', fontFamily: 'Montserrat, sans-serif'}}>
            Submit Prayer Request
          </a>
        </div>
      </section>

      <Footer />
    </main>
  )
}
