export default function WelcomeBanner() {
  return (
    <div style={{backgroundColor: '#06132e', padding: '10px 0', borderBottom: '1px solid #1a3060', overflow: 'hidden'}}>
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
        .scrolling-text {
          display: inline-block;
          animation: scroll 20s linear infinite;
          white-space: nowrap;
        }
      `}</style>
      <div className="scrolling-text">
        <span style={{color: '#c9a84c', fontSize: '13px', fontWeight: 'bold', letterSpacing: '1px'}}>
  ✨ Year of Back to Back Testimonies 2026 &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; 🙏 Join us every Sunday at 8:00am & 10:30am &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; 📖 Midweek Service every Wednesday at 6:00pm &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; 🔥 New sermon series starting this Sunday — Don't miss it! &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; ✨ Year of Back to Back Testimonies 2026 &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; 🙏 Join us every Sunday at 8:00am & 10:30am
</span>
      </div>
    </div>
  )
}