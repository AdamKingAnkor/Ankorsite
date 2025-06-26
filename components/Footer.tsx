'use client'

import Link from 'next/link'
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react'
import { motion } from 'framer-motion'

const Footer = () => {
  return (
    <footer className="glass-morphism mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="text-2xl font-bold mb-4">
              <span className="text-ankor-navy">ANKOR</span>
              <span className="text-ankor-teal">.</span>
            </div>
            <p className="text-ankor-white/80 mb-6 max-w-md">
              Professional marketing solutions tailored specifically for title agencies. 
              We help title companies grow their business with strategic marketing approaches.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="glass-morphism p-2 rounded-lg hover:bg-ankor-teal/20 transition-colors">
                <Linkedin className="h-5 w-5 text-ankor-white" />
              </a>
              <a href="#" className="glass-morphism p-2 rounded-lg hover:bg-ankor-teal/20 transition-colors">
                <Twitter className="h-5 w-5 text-ankor-white" />
              </a>
              <a href="#" className="glass-morphism p-2 rounded-lg hover:bg-ankor-teal/20 transition-colors">
                <Facebook className="h-5 w-5 text-ankor-white" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-ankor-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-ankor-white/80 hover:text-ankor-teal transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-ankor-white/80 hover:text-ankor-teal transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-ankor-white/80 hover:text-ankor-teal transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/booking" className="text-ankor-white/80 hover:text-ankor-teal transition-colors">
                  Book Consultation
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-ankor-white font-semibold mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-ankor-teal" />
                <span className="text-ankor-white/80">info@ankorconsulting.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-ankor-teal" />
                <span className="text-ankor-white/80">(555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-ankor-teal" />
                <span className="text-ankor-white/80">123 Business Ave, Suite 100</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p className="text-ankor-white/60">
            © 2024 Ankor Consulting. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer 