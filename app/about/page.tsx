'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'
import { Award, Users, Target, Heart, CheckCircle } from 'lucide-react'

export default function About() {
  const values = [
    {
      icon: Target,
      title: 'Excellence',
      description: 'We strive for excellence in everything we do, delivering results that exceed expectations.'
    },
    {
      icon: Heart,
      title: 'Integrity',
      description: 'We operate with complete transparency and honesty in all our business relationships.'
    },
    {
      icon: Users,
      title: 'Partnership',
      description: 'We view our clients as partners and work collaboratively to achieve shared success.'
    },
    {
      icon: Award,
      title: 'Innovation',
      description: 'We continuously innovate and adapt our strategies to stay ahead of industry trends.'
    }
  ]

  const team = [
    {
      name: 'Sarah Johnson',
      role: 'Founder & CEO',
      bio: '15+ years in title agency marketing with a passion for helping businesses grow.'
    },
    {
      name: 'Michael Chen',
      role: 'Marketing Director',
      bio: 'Expert in digital marketing strategies specifically tailored for real estate professionals.'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Client Success Manager',
      bio: 'Dedicated to ensuring every client achieves their marketing goals and business objectives.'
    }
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
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-ankor-navy">About</span>
              <span className="text-ankor-teal"> Ankor</span>
            </h1>
            <p className="text-xl text-ankor-white/80 mb-8 max-w-3xl mx-auto">
              We're a specialized marketing consultancy dedicated to helping title agencies 
              thrive in today's competitive real estate market.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-ankor-white mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-ankor-white/80">
                <p>
                  Founded in 2020, Ankor Consulting was born from a simple observation: 
                  title agencies were struggling to find marketing solutions that truly 
                  understood their unique business model and industry challenges.
                </p>
                <p>
                  Our founder, Sarah Johnson, spent over a decade working with title 
                  agencies and realized that generic marketing approaches simply weren't 
                  cutting it. Title agencies needed specialized strategies that accounted 
                  for their specific regulatory environment, client relationships, and 
                  business cycles.
                </p>
                <p>
                  Today, we've helped over 150 title agencies across the country grow 
                  their businesses through our tailored marketing approaches, deep 
                  industry knowledge, and proven strategies.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="glass-card"
            >
              <div className="text-center">
                <div className="text-6xl font-bold text-ankor-teal mb-4">150+</div>
                <div className="text-ankor-white text-xl mb-2">Title Agencies Served</div>
                <div className="text-ankor-white/80">Across the United States</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-ankor-white mb-4">
              Our Values
            </h2>
            <p className="text-ankor-white/80 max-w-2xl mx-auto">
              These core values guide everything we do and shape how we serve our clients.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-card text-center"
              >
                <div className="glass-morphism w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="h-8 w-8 text-ankor-teal" />
                </div>
                <h3 className="text-xl font-semibold text-ankor-white mb-3">
                  {value.title}
                </h3>
                <p className="text-ankor-white/80">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-ankor-white mb-4">
              Meet Our Team
            </h2>
            <p className="text-ankor-white/80 max-w-2xl mx-auto">
              Our experienced team brings together deep industry knowledge and 
              marketing expertise to serve your title agency.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="glass-card text-center"
              >
                <div className="glass-morphism w-24 h-24 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="h-12 w-12 text-ankor-teal" />
                </div>
                <h3 className="text-xl font-semibold text-ankor-white mb-2">
                  {member.name}
                </h3>
                <p className="text-ankor-teal font-medium mb-3">
                  {member.role}
                </p>
                <p className="text-ankor-white/80">
                  {member.bio}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="glass-card text-center"
          >
            <h2 className="text-3xl font-bold text-ankor-white mb-6">
              Our Mission
            </h2>
            <p className="text-ankor-white/80 text-lg leading-relaxed">
              To empower title agencies with the marketing tools, strategies, and 
              support they need to grow their businesses, attract more clients, 
              and achieve sustainable success in the competitive real estate market.
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
} 