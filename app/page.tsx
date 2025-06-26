'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'
import { ArrowRight, Target, Users, TrendingUp, CheckCircle } from 'lucide-react'
import Link from 'next/link'

export default function Home() {
  const services = [
    {
      icon: Target,
      title: 'Strategic Marketing',
      description: 'Custom marketing strategies designed specifically for title agencies'
    },
    {
      icon: Users,
      title: 'Client Acquisition',
      description: 'Proven methods to attract and retain title agency clients'
    },
    {
      icon: TrendingUp,
      title: 'Growth Optimization',
      description: 'Data-driven approaches to scale your title agency business'
    }
  ]

  const stats = [
    { number: '150+', label: 'Title Agencies Served' },
    { number: '95%', label: 'Client Satisfaction Rate' },
    { number: '3x', label: 'Average Revenue Increase' },
    { number: '24/7', label: 'Support Available' }
  ]

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="text-ankor-navy">Marketing</span>
              <br />
              <span className="text-ankor-teal">Solutions</span>
              <br />
              <span className="text-ankor-white">for Title Agencies</span>
            </h1>
            <p className="text-xl text-ankor-white/80 mb-8 max-w-3xl mx-auto">
              We specialize in helping title agencies grow their business through 
              strategic marketing approaches tailored to the real estate industry.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/booking" className="glass-button inline-flex items-center">
                Book Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link href="/services" className="glass-morphism px-6 py-3 rounded-xl font-semibold text-ankor-white hover:bg-ankor-navy/30 transition-all duration-300 border border-ankor-navy/30 inline-flex items-center">
                View Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-ankor-white mb-4">
              Why Choose Ankor Consulting?
            </h2>
            <p className="text-ankor-white/80 max-w-2xl mx-auto">
              We understand the unique challenges title agencies face and provide 
              specialized solutions to help you succeed.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="glass-card text-center"
              >
                <div className="glass-morphism w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <service.icon className="h-8 w-8 text-ankor-teal" />
                </div>
                <h3 className="text-xl font-semibold text-ankor-white mb-3">
                  {service.title}
                </h3>
                <p className="text-ankor-white/80">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-ankor-teal mb-2">
                  {stat.number}
                </div>
                <div className="text-ankor-white/80">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="glass-card text-center"
          >
            <h2 className="text-3xl font-bold text-ankor-white mb-4">
              Ready to Grow Your Title Agency?
            </h2>
            <p className="text-ankor-white/80 mb-8 max-w-2xl mx-auto">
              Let's discuss how our specialized marketing strategies can help you 
              attract more clients and increase your revenue.
            </p>
            <Link href="/booking" className="glass-button inline-flex items-center">
              Schedule Your Free Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
} 