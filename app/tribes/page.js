import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import TribesClient from "./TribesClient"

export const metadata = {
  title: "Tribes",
  description: "Find your tribe at RCCG Living Seed Church Ajah — Hope, Peace and Love tribes.",
}

export default function Tribes() {
  return (
    <main>
      <Navbar />
      <TribesClient />
      <Footer />
    </main>
  )
}