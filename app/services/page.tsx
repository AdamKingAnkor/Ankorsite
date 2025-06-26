'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'
import { CheckCircle, Target, Users, TrendingUp, BarChart3, MessageSquare, Calendar, Zap } from 'lucide-react'
import Link from 'next/link'

export default function Services() {
  const services = [
    {
      icon: Target,
      title: 'Strategic Marketing Planning',
      description: 'Comprehensive marketing strategies tailored specifically for title agencies',
      features: [
        'Market analysis and competitive research',
        'Custom marketing roadmap development',
        'Brand positioning and messaging',
        'Quarterly strategy reviews and updates'
      ]
    },
    {
      icon: Users,
      title: 'Client Acquisition Campaigns',
      description: 'Proven methods to attract and convert new title agency clients',
      features: [
        'Digital advertising campaigns',
        'Content marketing and SEO',
        'Social media management',
        'Lead generation and nurturing'
      ]
    },
    {
      icon: TrendingUp,
      title: 'Business Growth Optimization',
      description: 'Data-driven approaches to scale your title agency operations',
      features: [
        'Performance analytics and reporting',
        'Conversion rate optimization',
        'Customer retention strategies',
        'Revenue growth planning'
      ]
    },
    {
      icon: MessageSquare,
      title: 'Content & Communication',
      description: 'Professional content creation and communication strategies',
      features: [
        'Website content development',
        'Email marketing campaigns',
        'Social media content',
        'Client communication templates'
      ]
    },
    {
      icon: BarChart3,
      title: 'Analytics & Reporting',
      description: 'Comprehensive tracking and reporting of marketing performance',
      features: [
        'Monthly performance reports',
        'ROI tracking and analysis',
        'Client acquisition metrics',
        'Competitive benchmarking'
      ]
    },
    {
      icon: Calendar,
      title: 'Ongoing Support & Consulting',
      description: 'Continuous support and guidance for your marketing efforts',
      features: [
        'Weekly strategy calls',
        '24/7 support availability',
        'Industry trend updates',
        'Best practice recommendations'
      ]
    }
  ]

  const packages = [
    {
      name: 'Starter',
      price: '$2,500',
      period: '/month',
      description: 'Perfect for small title agencies getting started with marketing',
      features: [
        'Basic marketing strategy',
        'Monthly content creation',
        'Social media management',
        'Email marketing setup',
        'Basic analytics reporting'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$4,500',
      period: '/month',
      description: 'Ideal for growing title agencies with established operations',
      features: [
        'Comprehensive marketing strategy',
        'Weekly content creation',
        'Advanced social media campaigns',
        'Lead generation campaigns',
        'Detailed analytics and reporting',
        'Monthly strategy calls',
        'Competitive analysis'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$7,500',
      period: '/month',
      description: 'For large title agencies requiring full-service marketing support',
      features: [
        'Custom marketing strategy',
        'Daily content creation',
        'Multi-channel campaigns',
        'Advanced lead generation',
        'Real-time analytics dashboard',
        'Weekly strategy calls',
        'Dedicated account manager',
        'Priority support'
      ],
      popular: false
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
              <span className="text-ankor-navy">Our</span>
              <span className="text-ankor-teal"> Services</span>
            </h1>
            <p className="text-xl text-ankor-white/80 mb-8 max-w-3xl mx-auto">
              Comprehensive marketing solutions designed specifically for title agencies. 
              We help you attract clients, grow your business, and achieve sustainable success.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-ankor-white mb-4">
              What We Offer
            </h2>
            <p className="text-ankor-white/80 max-w-2xl mx-auto">
              Our services are tailored to address the unique challenges and opportunities 
              that title agencies face in today's competitive market.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-card"
              >
                <div className="glass-morphism w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <service.icon className="h-8 w-8 text-ankor-teal" />
                </div>
                <h3 className="text-xl font-semibold text-ankor-white mb-3">
                  {service.title}
                </h3>
                <p className="text-ankor-white/80 mb-4">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-ankor-teal mt-0.5 flex-shrink-0" />
                      <span className="text-ankor-white/80 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-ankor-white mb-4">
              Pricing Plans
            </h2>
            <p className="text-ankor-white/80 max-w-2xl mx-auto">
              Choose the plan that best fits your title agency's needs and growth goals.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`glass-card relative ${pkg.popular ? 'ring-2 ring-ankor-teal' : ''}`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-ankor-teal text-ankor-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-ankor-white mb-2">
                    {pkg.name}
                  </h3>
                  <div className="flex items-baseline justify-center mb-2">
                    <span className="text-4xl font-bold text-ankor-teal">{pkg.price}</span>
                    <span className="text-ankor-white/60 ml-1">{pkg.period}</span>
                  </div>
                  <p className="text-ankor-white/80 text-sm">
                    {pkg.description}
                  </p>
                </div>

                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-ankor-teal mt-0.5 flex-shrink-0" />
                      <span className="text-ankor-white/80 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link 
                  href="/booking" 
                  className={`w-full text-center py-3 px-6 rounded-xl font-semibold transition-all duration-300 ${
                    pkg.popular 
                      ? 'bg-ankor-teal text-ankor-white hover:bg-ankor-teal/80' 
                      : 'glass-button'
                  }`}
                >
                  Get Started
                </Link>
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
              Ready to Transform Your Title Agency?
            </h2>
            <p className="text-ankor-white/80 mb-8 max-w-2xl mx-auto">
              Let's discuss how our specialized marketing services can help you 
              attract more clients and grow your business.
            </p>
            <Link href="/booking" className="glass-button inline-flex items-center">
              Schedule Your Free Consultation
              <Zap className="ml-2 h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
} 