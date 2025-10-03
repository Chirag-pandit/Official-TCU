"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"

const navItems = [
  { name: "ABOUT", href: "#about" },
  { name: "SCHEDULE", href: "#schedule" },
  { name: "Prize Pool", href: "#prize-pool" },
  { name: "SPONSORS", href: "#sponsors" },
  { name: "Organizers", href: "#organizers" },
  { name: "COMMUNITY PARTNERS", href: "#community-partners" },
  { name: "CONTACT", href: "#contact" },
]

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-purple-500/30 bg-black/90 backdrop-blur-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
            TCU_VERSE
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-2">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="px-4 py-2 text-sm font-semibold text-gray-300 hover:text-purple-400 transition-all duration-300 border border-transparent hover:border-purple-500/50 rounded-md hover:bg-purple-500/10"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-purple-400 hover:text-purple-300 transition-colors"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-3 text-base font-semibold text-gray-300 hover:text-purple-400 transition-all duration-300 border border-purple-500/30 hover:border-purple-500 rounded-md hover:bg-purple-500/10"
              >
                {item.name}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}
