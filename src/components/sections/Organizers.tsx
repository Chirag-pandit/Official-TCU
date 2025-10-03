import { Briefcase, Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Organizers() {
  return (
    <section id="organizers" className="min-h-screen flex items-center justify-center px-4  text-white">
      <div className="w-full max-w-7xl py-16">
        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* About Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-6">
              <Briefcase className="h-8 w-8" style={{ color: "var(--purple-primary)" }} />
              <h3 className="text-2xl font-bold">Organizers</h3>
            </div>
            <p className="text-gray-400 leading-relaxed">
              We bring together the best minds in the industry to create unforgettable experiences and meaningful
              connections.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold mb-6" style={{ color: "var(--purple-light)" }}>
              Quick Links
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="#about" className="text-gray-400 hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#events" className="text-gray-400 hover:text-white transition-colors">
                  Events
                </a>
              </li>
              <li>
                <a href="#speakers" className="text-gray-400 hover:text-white transition-colors">
                  Speakers
                </a>
              </li>
              <li>
                <a href="#sponsors" className="text-gray-400 hover:text-white transition-colors">
                  Sponsors
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Us */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold mb-6" style={{ color: "var(--purple-light)" }}>
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 mt-0.5 flex-shrink-0" style={{ color: "var(--purple-primary)" }} />
                <a href="mailto:network.tcu@gmail.com" className="text-gray-400 hover:text-white transition-colors">
                  network.tcu@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 mt-0.5 flex-shrink-0" style={{ color: "var(--purple-primary)" }} />
                <a href="tel:+91981887912" className="text-gray-400 hover:text-white transition-colors">
                  +91 98188 7912
                </a>
              </li>
               <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 mt-0.5 flex-shrink-0" style={{ color: "var(--purple-primary)" }} />
                <a href="tel:+919728600337" className="text-gray-400 hover:text-white transition-colors">
                  +91 97286 00337
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0" style={{ color: "var(--purple-primary)" }} />
                <span className="text-gray-400">Delhi, India</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold mb-6" style={{ color: "var(--purple-light)" }}>
              Contact Us
            </h4>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Contact us for any queries related to the hackathon on the provided email or phone numbers.
            </p>
            <form className="space-y-3">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-gray-900 border-gray-800 text-white placeholder:text-gray-500 focus:border-[var(--purple-primary)]"
              />
              <Button
                type="submit"
                className="w-full text-white font-semibold"
                style={{ backgroundColor: "var(--purple-primary)" }}
              >
                Send
              </Button>
            </form>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 mb-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Copyright */}
          <p className="text-gray-500 text-sm">© 2025 Organizers. All rights reserved.</p>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="LinkedIn">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Twitter">
              <Twitter className="h-5 w-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Facebook">
              <Facebook className="h-5 w-5" />
            </a>
          </div>

          {/* Legal Links */}
          <div className="flex items-center gap-6 text-sm">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
