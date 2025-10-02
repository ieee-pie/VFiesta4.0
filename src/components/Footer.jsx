import React from 'react'
import Logo from './Logo'

export default function Footer() {
  return (
    <footer className="border-t mt-12 py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <Logo />
        </div>
        <div className="flex gap-4">
          <a aria-label="instagram" href="https://www.instagram.com/ieeepie.kerala/">
            <img src="/assets/instagram.svg" alt="Instagram" className="h-12 w-12" loading="lazy" />
          </a>
          <a aria-label="facebook" href="https://www.facebook.com/ieeepieks">
            <img src="/assets/facebook.svg" alt="Facebook" className="h-12 w-12" loading="lazy" />
          </a>
          <a aria-label="linkedin" href="https://www.linkedin.com/company/ieee-pie-kerala-section/">
            <img src="/assets/linkedin.svg" alt="LinkedIn" className="h-12 w-12" loading="lazy" />
          </a>
          <a aria-label="spotify" href="https://open.spotify.com/show/0efNfgAgQScY8NJeYtUMzB?si=vUpL8efCQua7Ia34cgCz0w&utm_source=copy-link&nd=1&dlsi=511b0693248e4ba6">
            <img src="/assets/spotify.svg" alt="Spotify" className="h-12 w-12" loading="lazy" />
          </a>
          <a aria-label="youtube" href="https://www.youtube.com/@IEEEPIEKeralaSection">
            <img src="/assets/youtube.svg" alt="YouTube" className="h-12 w-12" loading="lazy" />
          </a>
        </div>
        <a href="#tickets" className="bg-red-700 text-white px-4 py-2 rounded font-aderos reg-btn">REGISTER NOW</a>
      </div>
    </footer>
  )
}