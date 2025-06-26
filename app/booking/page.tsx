'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'
import { Calendar, Clock, Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'

interface BookingForm {
  firstName: string
  lastName: string
  email: string
  phone: string
  company: string
  service: string
  message: string
  preferredDate: string
  preferredTime: string
}

export default function Booking() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  
  const { register, handleSubmit, reset, formState: { errors } } = useForm<BookingForm>()

  const services = [
    'Strategic Marketing Planning',
    'Client Acquisition Campaigns',
    'Business Growth Optimization',
    'Content & Communication',
    'Analytics & Reporting',
    'Ongoing Support & Consulting',
    'Custom Package'
  ]

  const timeSlots = [
    '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
    '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM'
  ]

  const onSubmit = async (data: BookingForm) => {
    setIsSubmitting(true)
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      // Here you would typically send the data to your backend
      console.log('Booking form data:', data)
      
      toast.success('Thank you! We\'ll be in touch within 24 hours.')
      setSubmitted(true)
      reset()
    } catch (error) {
      toast.error('Something went wrong. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (submitted) {
    return (
      <div className="min-h-screen">
        <Header />
        <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="glass-card text-center"
            >
              <div className="glass-morphism w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="h-10 w-10 text-ankor-teal" />
              </div>
              <h1 className="text-4xl font-bold text-ankor-white mb-4">
                Thank You!
              </h1>
              <p className="text-ankor-white/80 text-lg mb-8 max-w-2xl mx-auto">
                Your consultation request has been submitted successfully. 
                We'll review your information and contact you within 24 hours 
                to schedule your free consultation.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="glass-button"
              >
                Submit Another Request
              </button>
            </motion.div>
          </div>
        </div>
        <Footer />
      </div>
    )
  }

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
              <span className="text-ankor-navy">Book Your</span>
              <span className="text-ankor-teal"> Consultation</span>
            </h1>
            <p className="text-xl text-ankor-white/80 mb-8 max-w-3xl mx-auto">
              Ready to transform your title agency? Schedule a free consultation 
              to discuss how our marketing strategies can help you grow.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="glass-card text-center"
            >
              <div className="glass-morphism w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="h-8 w-8 text-ankor-teal" />
              </div>
              <h3 className="text-xl font-semibold text-ankor-white mb-2">
                Email Us
              </h3>
              <p className="text-ankor-white/80">
                info@ankorconsulting.com
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="glass-card text-center"
            >
              <div className="glass-morphism w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="h-8 w-8 text-ankor-teal" />
              </div>
              <h3 className="text-xl font-semibold text-ankor-white mb-2">
                Call Us
              </h3>
              <p className="text-ankor-white/80">
                (555) 123-4567
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="glass-card text-center"
            >
              <div className="glass-morphism w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-ankor-teal" />
              </div>
              <h3 className="text-xl font-semibold text-ankor-white mb-2">
                Visit Us
              </h3>
              <p className="text-ankor-white/80">
                123 Business Ave, Suite 100
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="glass-card"
          >
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-ankor-white mb-4">
                Schedule Your Free Consultation
              </h2>
              <p className="text-ankor-white/80">
                Fill out the form below and we'll get back to you within 24 hours 
                to schedule your consultation.
              </p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-ankor-white font-medium mb-2">
                    First Name *
                  </label>
                  <input
                    {...register('firstName', { required: 'First name is required' })}
                    className="glass-input"
                    placeholder="Enter your first name"
                  />
                  {errors.firstName && (
                    <p className="text-red-400 text-sm mt-1">{errors.firstName.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-ankor-white font-medium mb-2">
                    Last Name *
                  </label>
                  <input
                    {...register('lastName', { required: 'Last name is required' })}
                    className="glass-input"
                    placeholder="Enter your last name"
                  />
                  {errors.lastName && (
                    <p className="text-red-400 text-sm mt-1">{errors.lastName.message}</p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-ankor-white font-medium mb-2">
                    Email *
                  </label>
                  <input
                    {...register('email', { 
                      required: 'Email is required',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Invalid email address'
                      }
                    })}
                    type="email"
                    className="glass-input"
                    placeholder="Enter your email"
                  />
                  {errors.email && (
                    <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-ankor-white font-medium mb-2">
                    Phone Number
                  </label>
                  <input
                    {...register('phone')}
                    className="glass-input"
                    placeholder="Enter your phone number"
                  />
                </div>
              </div>

              <div>
                <label className="block text-ankor-white font-medium mb-2">
                  Company Name *
                </label>
                <input
                  {...register('company', { required: 'Company name is required' })}
                  className="glass-input"
                  placeholder="Enter your company name"
                />
                {errors.company && (
                  <p className="text-red-400 text-sm mt-1">{errors.company.message}</p>
                )}
              </div>

              <div>
                <label className="block text-ankor-white font-medium mb-2">
                  Service of Interest *
                </label>
                <select
                  {...register('service', { required: 'Please select a service' })}
                  className="glass-input"
                >
                  <option value="">Select a service</option>
                  {services.map((service) => (
                    <option key={service} value={service}>{service}</option>
                  ))}
                </select>
                {errors.service && (
                  <p className="text-red-400 text-sm mt-1">{errors.service.message}</p>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-ankor-white font-medium mb-2">
                    Preferred Date
                  </label>
                  <input
                    {...register('preferredDate')}
                    type="date"
                    className="glass-input"
                  />
                </div>

                <div>
                  <label className="block text-ankor-white font-medium mb-2">
                    Preferred Time
                  </label>
                  <select
                    {...register('preferredTime')}
                    className="glass-input"
                  >
                    <option value="">Select a time</option>
                    {timeSlots.map((time) => (
                      <option key={time} value={time}>{time}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-ankor-white font-medium mb-2">
                  Tell Us About Your Goals
                </label>
                <textarea
                  {...register('message')}
                  rows={4}
                  className="glass-input"
                  placeholder="Describe your current challenges and what you hope to achieve..."
                />
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="glass-button inline-flex items-center disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Submitting...
                    </>
                  ) : (
                    <>
                      Submit Request
                      <Send className="ml-2 h-4 w-4" />
                    </>
                  )}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="glass-card"
          >
            <h2 className="text-3xl font-bold text-ankor-white mb-8 text-center">
              What to Expect
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="glass-morphism w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar className="h-8 w-8 text-ankor-teal" />
                </div>
                <h3 className="text-xl font-semibold text-ankor-white mb-2">
                  Schedule Call
                </h3>
                <p className="text-ankor-white/80">
                  We'll contact you within 24 hours to schedule your consultation.
                </p>
              </div>

              <div className="text-center">
                <div className="glass-morphism w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-ankor-teal" />
                </div>
                <h3 className="text-xl font-semibold text-ankor-white mb-2">
                  30-Minute Consultation
                </h3>
                <p className="text-ankor-white/80">
                  Free 30-minute call to discuss your needs and goals.
                </p>
              </div>

              <div className="text-center">
                <div className="glass-morphism w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8 text-ankor-teal" />
                </div>
                <h3 className="text-xl font-semibold text-ankor-white mb-2">
                  Custom Proposal
                </h3>
                <p className="text-ankor-white/80">
                  Receive a tailored proposal based on your specific needs.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
} 