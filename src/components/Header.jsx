import React, { useState } from 'react'
import Logo from './Logo'

export default function Header() {
  const [open, setOpen] = useState(false)
  return (
    <header className="border-b border-gray-200">
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Logo />
          <ul className="hidden md:flex gap-6 text-sm font-medium text-gray-600 font-aderos">
            <li><a href="#home" className="hover:text-gray-900">HOME</a></li>
            <li><a href="#about" className="hover:text-gray-900">ABOUT</a></li>
            <li><a href="#events" className="hover:text-gray-900">PRE-EVENTS</a></li>
            {/* <li><a href="#speakers" className="hover:text-gray-900">SPEAKERS</a></li>
            <li><a href="#schedule" className="hover:text-gray-900">SCHEDULE</a></li> */}
            <li><a href="#contact" className="hover:text-gray-900">CONTACT</a></li>
          </ul>
        </div>
        <div className="flex items-center gap-3">
          <a href="#tickets" className="hidden md:inline-block text-sm font-semibold bg-red-700 text-white px-4 py-2 rounded font-aderos reg-btn">REGISTER</a>
          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center rounded p-2 text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300"
            aria-label="Toggle navigation menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? (
              // X icon
              <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            ) : (
              // Hamburger icon
              <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            )}
          </button>
        </div>
      </nav>
      {/* Mobile menu panel */}
      {open && (
        <div className="md:hidden border-t bg-white">
          <div className="max-w-6xl mx-auto px-6 py-4">
            <ul className="flex flex-col gap-4 text-base font-medium text-gray-700 font-aderos">
              <li><a href="#home" onClick={() => setOpen(false)} className="block py-1">HOME</a></li>
              <li><a href="#about" onClick={() => setOpen(false)} className="block py-1">ABOUT</a></li>
              <li><a href="#events" onClick={() => setOpen(false)} className="block py-1">EVENTS</a></li>
              <li><a href="#contact" onClick={() => setOpen(false)} className="block py-1">CONTACT</a></li>
            </ul>
            <div className="mt-4">
              <a href="#tickets" onClick={() => setOpen(false)} className="inline-block bg-red-700 text-white px-4 py-2 rounded font-aderos">REGISTER</a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}