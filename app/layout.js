import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import BackToTopWrapper from "./components/BackToTopWrapper";
import NextTopLoader from "nextjs-toploader";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "RCCG Living Seed Church Ajah | A Place of Grace, Growth & Worship",
    template: "%s | RCCG Living Seed Church Ajah"
  },
  description: "Welcome to RCCG Living Seed Church Ajah — a family built on the Word of God, committed to raising disciples and transforming lives in Ajah, Lagos, Nigeria.",
  keywords: ["RCCG", "Living Seed Church", "Ajah", "Lagos", "Church", "Nigeria", "RCCG Ajah", "Christian Church Lagos"],
  openGraph: {
    title: "RCCG Living Seed Church Ajah",
    description: "A place of grace, growth and genuine worship in Ajah, Lagos, Nigeria.",
    url: "https://lsc-ajah-website.vercel.app",
    siteName: "RCCG Living Seed Church Ajah",
    locale: "en_NG",
    type: "website",
  },
}

export const viewport = {
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <NextTopLoader
          color="#c9a84c"
          height={3}
          showSpinner={false}
          shadow="0 0 10px #c9a84c"
        />
        {children}
        <BackToTopWrapper />
      </body>
    </html>
  );
}