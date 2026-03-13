import Navbar from "./components/Navbar"
import WelcomeBanner from "./components/WelcomeBanner"
import Hero from "./components/Hero"
import InfoBar from "./components/InfoBar"
import Welcome from "./components/Welcome"
import FeaturedSermon from "./components/FeaturedSermon"
import Events from "./components/Events"
import Testimonies from "./components/Testimonies"
import Gallery from "./components/Gallery"
import Newsletter from "./components/Newsletter"
import Footer from "./components/Footer"

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <WelcomeBanner />
      <InfoBar />
      <Welcome />
      <FeaturedSermon />
      <Events />
      <Testimonies />
      <Gallery />
      <Newsletter />
      <Footer />
    </main>
  )
}