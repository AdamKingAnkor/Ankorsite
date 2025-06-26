'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'
import { Calendar, Clock, ArrowRight, Tag } from 'lucide-react'
import Link from 'next/link'

export default function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: '5 Essential Marketing Strategies for Title Agencies in 2024',
      excerpt: 'Discover the most effective marketing approaches that title agencies should implement to stay competitive and attract more clients in the current market.',
      author: 'Sarah Johnson',
      date: 'January 15, 2024',
      readTime: '5 min read',
      category: 'Marketing Strategy',
      image: '/api/placeholder/400/250'
    },
    {
      id: 2,
      title: 'Building Trust: How Title Agencies Can Leverage Digital Marketing',
      excerpt: 'Learn how to build credibility and trust with potential clients through strategic digital marketing techniques tailored for the title industry.',
      author: 'Michael Chen',
      date: 'January 10, 2024',
      readTime: '4 min read',
      category: 'Digital Marketing',
      image: '/api/placeholder/400/250'
    },
    {
      id: 3,
      title: 'The Future of Title Agency Marketing: Trends to Watch',
      excerpt: 'Explore emerging trends and technologies that will shape the future of marketing for title agencies and real estate professionals.',
      author: 'Emily Rodriguez',
      date: 'January 5, 2024',
      readTime: '6 min read',
      category: 'Industry Trends',
      image: '/api/placeholder/400/250'
    },
    {
      id: 4,
      title: 'Client Retention Strategies for Title Agencies',
      excerpt: 'Discover proven methods to retain existing clients and build long-term relationships that drive repeat business and referrals.',
      author: 'Sarah Johnson',
      date: 'December 28, 2023',
      readTime: '4 min read',
      category: 'Client Relations',
      image: '/api/placeholder/400/250'
    },
    {
      id: 5,
      title: 'SEO Best Practices for Title Agency Websites',
      excerpt: 'Optimize your title agency website for search engines and improve your online visibility to attract more qualified leads.',
      author: 'Michael Chen',
      date: 'December 20, 2023',
      readTime: '7 min read',
      category: 'SEO',
      image: '/api/placeholder/400/250'
    },
    {
      id: 6,
      title: 'Social Media Marketing for Title Agencies: A Complete Guide',
      excerpt: 'Learn how to effectively use social media platforms to promote your title agency services and connect with potential clients.',
      author: 'Emily Rodriguez',
      date: 'December 15, 2023',
      readTime: '5 min read',
      category: 'Social Media',
      image: '/api/placeholder/400/250'
    }
  ]

  const categories = [
    'All Posts',
    'Marketing Strategy',
    'Digital Marketing',
    'Industry Trends',
    'Client Relations',
    'SEO',
    'Social Media'
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
              <span className="text-ankor-navy">Title Agency</span>
              <span className="text-ankor-teal"> Insights</span>
            </h1>
            <p className="text-xl text-ankor-white/80 mb-8 max-w-3xl mx-auto">
              Expert insights, industry trends, and marketing strategies to help 
              title agencies grow their business and stay ahead of the competition.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <motion.button
                key={category}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  category === 'All Posts'
                    ? 'bg-ankor-teal text-ankor-white'
                    : 'glass-morphism text-ankor-white hover:bg-ankor-teal/20'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="glass-card"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center space-x-4 mb-4">
                  <span className="bg-ankor-teal text-ankor-white px-3 py-1 rounded-full text-sm font-medium">
                    Featured
                  </span>
                  <span className="text-ankor-white/60 text-sm">
                    {blogPosts[0].category}
                  </span>
                </div>
                <h2 className="text-3xl font-bold text-ankor-white mb-4">
                  {blogPosts[0].title}
                </h2>
                <p className="text-ankor-white/80 mb-6">
                  {blogPosts[0].excerpt}
                </p>
                <div className="flex items-center space-x-6 mb-6">
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-4 w-4 text-ankor-teal" />
                    <span className="text-ankor-white/60 text-sm">
                      {blogPosts[0].date}
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="h-4 w-4 text-ankor-teal" />
                    <span className="text-ankor-white/60 text-sm">
                      {blogPosts[0].readTime}
                    </span>
                  </div>
                </div>
                <Link 
                  href={`/blog/${blogPosts[0].id}`}
                  className="glass-button inline-flex items-center"
                >
                  Read Full Article
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
              <div className="glass-morphism rounded-xl h-64 flex items-center justify-center">
                <span className="text-ankor-white/60">Featured Image</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-ankor-white mb-4">
              Latest Articles
            </h2>
            <p className="text-ankor-white/80 max-w-2xl mx-auto">
              Stay updated with the latest insights and strategies for title agency marketing.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-card group"
              >
                <div className="glass-morphism rounded-xl h-48 mb-6 flex items-center justify-center">
                  <span className="text-ankor-white/60">Post Image</span>
                </div>
                
                <div className="flex items-center space-x-4 mb-4">
                  <span className="bg-ankor-teal/20 text-ankor-teal px-3 py-1 rounded-full text-sm font-medium">
                    {post.category}
                  </span>
                </div>
                
                <h3 className="text-xl font-semibold text-ankor-white mb-3 group-hover:text-ankor-teal transition-colors">
                  {post.title}
                </h3>
                
                <p className="text-ankor-white/80 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4 text-ankor-teal" />
                      <span className="text-ankor-white/60 text-sm">
                        {post.date}
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="h-4 w-4 text-ankor-teal" />
                      <span className="text-ankor-white/60 text-sm">
                        {post.readTime}
                      </span>
                    </div>
                  </div>
                </div>
                
                <Link 
                  href={`/blog/${post.id}`}
                  className="inline-flex items-center text-ankor-teal hover:text-ankor-teal/80 transition-colors font-medium"
                >
                  Read More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="glass-card text-center"
          >
            <h2 className="text-3xl font-bold text-ankor-white mb-4">
              Stay Updated
            </h2>
            <p className="text-ankor-white/80 mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter for the latest insights, tips, and strategies 
              to help your title agency grow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="glass-input flex-1"
              />
              <button className="glass-button whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
} 