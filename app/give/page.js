"use client"
import { useState } from "react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

const bankAccounts = [
  {
    category: "Tithes & Offerings",
    bank: "Access Bank",
    accountName: "Living Seed Church Ajah",
    accountNumber: "1819287370",
    icon: "💛",
  },
  {
    category: "Seed Offering",
    bank: "Access Bank",
    accountName: "Living Seed Church Ajah",
    accountNumber: "1806153617",
    icon: "🌱",
  },
  {
    category: "Building Project",
    bank: "Eco Bank",
    accountName: "Living Seed Church Ajah",
    accountNumber: "3850035719",
    icon: "🏛️",
  },
  {
    category: "Welfare",
    bank: "Access Bank",
    accountName: "Living Seed Church Ajah",
    accountNumber: "1824578450",
    icon: "🤝",
  },
  {
    category: "Domiciliary — USD",
    bank: "Access Bank",
    accountName: "Living Seed Church Ajah",
    accountNumber: "1824896174",
    icon: "💵",
  },
  {
    category: "Domiciliary — Pounds",
    bank: "Access Bank",
    accountName: "Living Seed Church Ajah",
    accountNumber: "1825323468",
    icon: "💷",
  },
]

function CopyButton({ text }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <button
      onClick={handleCopy}
      style={{
        backgroundColor: copied ? '#15803d' : '#c9a84c',
        color: copied ? 'white' : '#0a1f44',
        border: 'none',
        borderRadius: '4px',
        padding: '6px 12px',
        fontSize: '11px',
        fontWeight: '600',
        cursor: 'pointer',
        letterSpacing: '1px',
        fontFamily: 'Montserrat, sans-serif',
        transition: 'all 0.3s ease',
        marginLeft: '8px',
      }}
    >
      {copied ? '✓ Copied!' : 'Copy'}
    </button>
  )
}

export default function Give() {
  return (
    <main>
      <Navbar />

      {/* Hero */}
      <section style={{backgroundColor: '#0a1f44', color: 'white', padding: '80px 24px', textAlign: 'center'}}>
        <p style={{color: '#c9a84c', fontWeight: '500', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '4px', marginBottom: '8px', fontFamily: 'Montserrat, sans-serif'}}>Give</p>
        <h1 style={{fontSize: '52px', fontWeight: '300', fontFamily: 'Cormorant Garamond, Georgia, serif', letterSpacing: '2px'}}>Support the Ministry</h1>
        <p style={{color: '#cccccc', marginTop: '16px', fontSize: '15px', fontFamily: 'Montserrat, sans-serif', fontWeight: '300', letterSpacing: '1px'}}>Your giving makes a difference — thank you for your generosity</p>
      </section>

      {/* Scripture */}
      <section style={{padding: '60px 24px', textAlign: 'center', maxWidth: '700px', margin: '0 auto'}}>
        <p style={{fontSize: '24px', fontStyle: 'italic', color: '#0a1f44', lineHeight: '1.9', marginBottom: '16px', fontFamily: 'Cormorant Garamond, Georgia, serif', fontWeight: '300'}}>
          "Each of you should give what you have decided in your heart to give, not reluctantly or under compulsion, for God loves a cheerful giver."
        </p>
        <p style={{color: '#c9a84c', fontWeight: '500', fontSize: '12px', letterSpacing: '2px', textTransform: 'uppercase', fontFamily: 'Montserrat, sans-serif'}}>— 2 Corinthians 9:7</p>
      </section>

      {/* Giving Options */}
      <section style={{backgroundColor: '#f5f5f5', padding: '60px 24px'}}>
        <div style={{maxWidth: '1100px', margin: '0 auto'}}>
          <p style={{color: '#c9a84c', fontWeight: '500', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '4px', marginBottom: '8px', textAlign: 'center', fontFamily: 'Montserrat, sans-serif'}}>Ways to Give</p>
          <h2 style={{fontSize: '42px', fontWeight: '300', color: '#0a1f44', marginBottom: '40px', textAlign: 'center', fontFamily: 'Cormorant Garamond, Georgia, serif', letterSpacing: '2px'}}>Choose How You'd Like to Give</h2>
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '32px'}}>

            {/* Online */}
            <div style={{backgroundColor: 'white', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 2px 8px rgba(0,0,0,0.08)'}}>
              <div style={{backgroundColor: '#0a1f44', padding: '24px', textAlign: 'center'}}>
                <span style={{fontSize: '48px'}}>💳</span>
                <h3 style={{color: '#c9a84c', fontSize: '26px', fontWeight: '300', marginTop: '8px', fontFamily: 'Cormorant Garamond, Georgia, serif', letterSpacing: '1px'}}>Give Online</h3>
              </div>
              <div style={{padding: '32px'}}>
                <p style={{color: '#555', lineHeight: '1.8', marginBottom: '24px', fontSize: '14px', fontFamily: 'Montserrat, sans-serif', fontWeight: '300'}}>Give securely online using your debit or credit card via Paystack. Fast, safe and easy.</p>
                <button style={{width: '100%', backgroundColor: '#c9a84c', color: '#0a1f44', padding: '14px', border: 'none', borderRadius: '4px', fontWeight: '600', fontSize: '11px', cursor: 'pointer', letterSpacing: '2px', textTransform: 'uppercase', fontFamily: 'Montserrat, sans-serif'}}>
                  Give Now
                </button>
              </div>
            </div>

            {/* In Person */}
            <div style={{backgroundColor: 'white', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 2px 8px rgba(0,0,0,0.08)'}}>
              <div style={{backgroundColor: '#0a1f44', padding: '24px', textAlign: 'center'}}>
                <span style={{fontSize: '48px'}}>🙌</span>
                <h3 style={{color: '#c9a84c', fontSize: '26px', fontWeight: '300', marginTop: '8px', fontFamily: 'Cormorant Garamond, Georgia, serif', letterSpacing: '1px'}}>In Person</h3>
              </div>
              <div style={{padding: '32px'}}>
                <p style={{color: '#555', lineHeight: '1.8', marginBottom: '24px', fontSize: '14px', fontFamily: 'Montserrat, sans-serif', fontWeight: '300'}}>Give during any of our services. Offering is received during Sunday, Wednesday and Friday services.</p>
                <a href="/events" style={{display: 'block', width: '100%', backgroundColor: '#0a1f44', color: 'white', padding: '14px', border: 'none', borderRadius: '4px', fontWeight: '500', fontSize: '11px', cursor: 'pointer', textDecoration: 'none', textAlign: 'center', boxSizing: 'border-box', letterSpacing: '2px', textTransform: 'uppercase', fontFamily: 'Montserrat, sans-serif'}}>
                  View Service Times
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Bank Accounts */}
      <section style={{padding: '60px 24px', backgroundColor: 'white'}}>
        <div style={{maxWidth: '900px', margin: '0 auto'}}>
          <p style={{color: '#c9a84c', fontWeight: '500', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '4px', marginBottom: '8px', textAlign: 'center', fontFamily: 'Montserrat, sans-serif'}}>Bank Transfer</p>
          <h2 style={{fontSize: '42px', fontWeight: '300', color: '#0a1f44', marginBottom: '16px', textAlign: 'center', fontFamily: 'Cormorant Garamond, Georgia, serif', letterSpacing: '2px'}}>Bank Account Details</h2>
          <p style={{color: '#555', fontSize: '14px', marginBottom: '40px', textAlign: 'center', fontFamily: 'Montserrat, sans-serif', fontWeight: '300'}}>Tap the copy icon to copy account numbers instantly</p>
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px'}}>
            {bankAccounts.map(account => (
              <div key={account.category} style={{border: '1px solid #e5e5e5', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 2px 8px rgba(0,0,0,0.06)'}}>
                <div style={{backgroundColor: '#0a1f44', padding: '20px 24px', display: 'flex', alignItems: 'center', gap: '12px'}}>
                  <span style={{fontSize: '28px'}}>{account.icon}</span>
                  <h3 style={{color: '#c9a84c', fontSize: '18px', fontWeight: '300', fontFamily: 'Cormorant Garamond, Georgia, serif', letterSpacing: '1px', margin: 0}}>{account.category}</h3>
                </div>
                <div style={{padding: '24px'}}>
                  <div style={{marginBottom: '12px'}}>
                    <p style={{color: '#999', fontSize: '11px', fontFamily: 'Montserrat, sans-serif', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '4px'}}>Bank</p>
                    <p style={{color: '#0a1f44', fontWeight: '500', fontSize: '14px', fontFamily: 'Montserrat, sans-serif'}}>{account.bank}</p>
                  </div>
                  <div style={{marginBottom: '12px'}}>
                    <p style={{color: '#999', fontSize: '11px', fontFamily: 'Montserrat, sans-serif', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '4px'}}>Account Name</p>
                    <p style={{color: '#0a1f44', fontWeight: '500', fontSize: '14px', fontFamily: 'Montserrat, sans-serif'}}>{account.accountName}</p>
                  </div>
                  <div>
                    <p style={{color: '#999', fontSize: '11px', fontFamily: 'Montserrat, sans-serif', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '4px'}}>Account Number</p>
                    <div style={{display: 'flex', alignItems: 'center'}}>
                      <p style={{color: '#0a1f44', fontWeight: '600', fontSize: '18px', fontFamily: 'Montserrat, sans-serif', letterSpacing: '2px', margin: 0}}>{account.accountNumber}</p>
                      <CopyButton text={account.accountNumber} />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Giving Categories */}
      <section style={{padding: '60px 24px', backgroundColor: '#f5f5f5'}}>
        <div style={{maxWidth: '900px', margin: '0 auto', textAlign: 'center'}}>
          <p style={{color: '#c9a84c', fontWeight: '500', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '4px', marginBottom: '8px', fontFamily: 'Montserrat, sans-serif'}}>Your Giving</p>
          <h2 style={{fontSize: '42px', fontWeight: '300', color: '#0a1f44', marginBottom: '40px', fontFamily: 'Cormorant Garamond, Georgia, serif', letterSpacing: '2px'}}>What Your Gift Supports</h2>
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '24px'}}>
            {[
              {icon: '⛪', label: 'Church Operations'},
              {icon: '📖', label: 'Bible & Discipleship'},
              {icon: '🌍', label: 'Missions & Outreach'},
              {icon: '👶', label: "Children's Ministry"},
            ].map(item => (
              <div key={item.label} style={{padding: '32px 24px', border: '1px solid #e5e5e5', borderRadius: '8px', borderBottom: '4px solid #c9a84c', backgroundColor: 'white'}}>
                <span style={{fontSize: '40px'}}>{item.icon}</span>
                <p style={{color: '#0a1f44', fontWeight: '500', fontSize: '14px', marginTop: '12px', fontFamily: 'Montserrat, sans-serif', letterSpacing: '1px'}}>{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}