'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Settings, FileText, Users, BarChart3 } from 'lucide-react'
import CMS from '@/components/CMS'

export default function Admin() {
  const [activeTab, setActiveTab] = useState('dashboard')
  const [isCMSOpen, setIsCMSOpen] = useState(false)

  const tabs = [
    { id: 'dashboard', name: 'Dashboard', icon: BarChart3 },
    { id: 'content', name: 'Content Management', icon: FileText },
    { id: 'users', name: 'Users', icon: Users },
    { id: 'settings', name: 'Settings', icon: Settings }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-ankor-navy via-ankor-teal to-ankor-navy">
      <div className="pt-8 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl font-bold text-ankor-white mb-4">
              Admin Dashboard
            </h1>
            <p className="text-ankor-white/80">
              Manage your website content and settings
            </p>
          </motion.div>

          {/* Navigation Tabs */}
          <div className="glass-morphism rounded-2xl p-2 mb-8">
            <div className="flex space-x-2">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-xl font-medium transition-all duration-300 ${
                    activeTab === tab.id
                      ? 'bg-ankor-teal text-ankor-white'
                      : 'text-ankor-white/80 hover:text-ankor-white hover:bg-white/10'
                  }`}
                >
                  <tab.icon className="h-5 w-5" />
                  <span>{tab.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Tab Content */}
          <div className="glass-card">
            {activeTab === 'dashboard' && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="space-y-6"
              >
                <h2 className="text-2xl font-bold text-ankor-white mb-6">
                  Dashboard Overview
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="glass-morphism p-6 rounded-xl text-center">
                    <div className="text-3xl font-bold text-ankor-teal mb-2">12</div>
                    <div className="text-ankor-white/80">Blog Posts</div>
                  </div>
                  
                  <div className="glass-morphism p-6 rounded-xl text-center">
                    <div className="text-3xl font-bold text-ankor-teal mb-2">45</div>
                    <div className="text-ankor-white/80">Contact Forms</div>
                  </div>
                  
                  <div className="glass-morphism p-6 rounded-xl text-center">
                    <div className="text-3xl font-bold text-ankor-teal mb-2">1,234</div>
                    <div className="text-ankor-white/80">Page Views</div>
                  </div>
                </div>

                <div className="mt-8">
                  <h3 className="text-xl font-semibold text-ankor-white mb-4">
                    Quick Actions
                  </h3>
                  <div className="flex flex-wrap gap-4">
                    <button
                      onClick={() => setIsCMSOpen(true)}
                      className="glass-button inline-flex items-center"
                    >
                      <FileText className="mr-2 h-4 w-4" />
                      Manage Blog Posts
                    </button>
                    
                    <button className="glass-morphism px-6 py-3 rounded-xl font-semibold text-ankor-white hover:bg-ankor-navy/30 transition-all duration-300 border border-ankor-navy/30 inline-flex items-center">
                      <Users className="mr-2 h-4 w-4" />
                      View Contact Forms
                    </button>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 'content' && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="space-y-6"
              >
                <div className="flex justify-between items-center">
                  <h2 className="text-2xl font-bold text-ankor-white">
                    Content Management
                  </h2>
                  <button
                    onClick={() => setIsCMSOpen(true)}
                    className="glass-button inline-flex items-center"
                  >
                    <FileText className="mr-2 h-4 w-4" />
                    Open CMS
                  </button>
                </div>
                
                <p className="text-ankor-white/80">
                  Use the CMS to create, edit, and manage your blog posts and other content.
                </p>
              </motion.div>
            )}

            {activeTab === 'users' && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="space-y-6"
              >
                <h2 className="text-2xl font-bold text-ankor-white">
                  User Management
                </h2>
                <p className="text-ankor-white/80">
                  Manage user accounts and permissions. (Coming soon)
                </p>
              </motion.div>
            )}

            {activeTab === 'settings' && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="space-y-6"
              >
                <h2 className="text-2xl font-bold text-ankor-white">
                  Settings
                </h2>
                <p className="text-ankor-white/80">
                  Configure website settings and preferences. (Coming soon)
                </p>
              </motion.div>
            )}
          </div>
        </div>
      </div>

      {/* CMS Modal */}
      <CMS isOpen={isCMSOpen} onClose={() => setIsCMSOpen(false)} />
    </div>
  )
} 