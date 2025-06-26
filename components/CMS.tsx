'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Plus, Edit, Trash2, Save, X } from 'lucide-react'
import { supabase, BlogPost } from '@/lib/supabase'
import toast from 'react-hot-toast'

interface CMSProps {
  isOpen: boolean
  onClose: () => void
}

export default function CMS({ isOpen, onClose }: CMSProps) {
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [editingPost, setEditingPost] = useState<BlogPost | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    title: '',
    excerpt: '',
    content: '',
    author: '',
    category: '',
    read_time: ''
  })

  useEffect(() => {
    if (isOpen) {
      fetchPosts()
    }
  }, [isOpen])

  const fetchPosts = async () => {
    try {
      const { data, error } = await supabase
        .from('blog_posts')
        .select('*')
        .order('created_at', { ascending: false })

      if (error) throw error
      setPosts(data || [])
    } catch (error) {
      toast.error('Failed to fetch posts')
      console.error('Error fetching posts:', error)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      if (editingPost) {
        // Update existing post
        const { error } = await supabase
          .from('blog_posts')
          .update({
            ...formData,
            updated_at: new Date().toISOString()
          })
          .eq('id', editingPost.id)

        if (error) throw error
        toast.success('Post updated successfully')
      } else {
        // Create new post
        const { error } = await supabase
          .from('blog_posts')
          .insert([{
            ...formData,
            published_date: new Date().toISOString().split('T')[0]
          }])

        if (error) throw error
        toast.success('Post created successfully')
      }

      setFormData({
        title: '',
        excerpt: '',
        content: '',
        author: '',
        category: '',
        read_time: ''
      })
      setEditingPost(null)
      fetchPosts()
    } catch (error) {
      toast.error('Failed to save post')
      console.error('Error saving post:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleEdit = (post: BlogPost) => {
    setEditingPost(post)
    setFormData({
      title: post.title,
      excerpt: post.excerpt,
      content: post.content,
      author: post.author,
      category: post.category,
      read_time: post.read_time
    })
  }

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this post?')) return

    try {
      const { error } = await supabase
        .from('blog_posts')
        .delete()
        .eq('id', id)

      if (error) throw error
      toast.success('Post deleted successfully')
      fetchPosts()
    } catch (error) {
      toast.error('Failed to delete post')
      console.error('Error deleting post:', error)
    }
  }

  const handleCancel = () => {
    setEditingPost(null)
    setFormData({
      title: '',
      excerpt: '',
      content: '',
      author: '',
      category: '',
      read_time: ''
    })
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />
      
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="glass-card w-full max-w-4xl max-h-[90vh] overflow-y-auto"
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-ankor-white">
            {editingPost ? 'Edit Post' : 'Add New Post'}
          </h2>
          <button
            onClick={onClose}
            className="glass-morphism p-2 rounded-lg hover:bg-ankor-teal/20 transition-colors"
          >
            <X className="h-6 w-6 text-ankor-white" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-ankor-white font-medium mb-2">
                Title *
              </label>
              <input
                type="text"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                className="glass-input"
                required
              />
            </div>

            <div>
              <label className="block text-ankor-white font-medium mb-2">
                Author *
              </label>
              <input
                type="text"
                value={formData.author}
                onChange={(e) => setFormData({ ...formData, author: e.target.value })}
                className="glass-input"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-ankor-white font-medium mb-2">
                Category *
              </label>
              <input
                type="text"
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                className="glass-input"
                required
              />
            </div>

            <div>
              <label className="block text-ankor-white font-medium mb-2">
                Read Time *
              </label>
              <input
                type="text"
                value={formData.read_time}
                onChange={(e) => setFormData({ ...formData, read_time: e.target.value })}
                className="glass-input"
                placeholder="e.g., 5 min read"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-ankor-white font-medium mb-2">
              Excerpt *
            </label>
            <textarea
              value={formData.excerpt}
              onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
              className="glass-input"
              rows={3}
              required
            />
          </div>

          <div>
            <label className="block text-ankor-white font-medium mb-2">
              Content *
            </label>
            <textarea
              value={formData.content}
              onChange={(e) => setFormData({ ...formData, content: e.target.value })}
              className="glass-input"
              rows={8}
              required
            />
          </div>

          <div className="flex gap-4">
            <button
              type="submit"
              disabled={isLoading}
              className="glass-button inline-flex items-center disabled:opacity-50"
            >
              {isLoading ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                  Saving...
                </>
              ) : (
                <>
                  <Save className="mr-2 h-4 w-4" />
                  {editingPost ? 'Update Post' : 'Create Post'}
                </>
              )}
            </button>

            {editingPost && (
              <button
                type="button"
                onClick={handleCancel}
                className="glass-morphism px-4 py-2 rounded-xl text-ankor-white hover:bg-ankor-navy/30 transition-colors"
              >
                Cancel
              </button>
            )}
          </div>
        </form>

        <div>
          <h3 className="text-xl font-bold text-ankor-white mb-4">Existing Posts</h3>
          <div className="space-y-4">
            {posts.map((post) => (
              <div key={post.id} className="glass-morphism p-4 rounded-xl">
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-ankor-white mb-2">
                      {post.title}
                    </h4>
                    <p className="text-ankor-white/80 text-sm mb-2">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center space-x-4 text-xs text-ankor-white/60">
                      <span>By {post.author}</span>
                      <span>{post.category}</span>
                      <span>{post.read_time}</span>
                    </div>
                  </div>
                  <div className="flex space-x-2 ml-4">
                    <button
                      onClick={() => handleEdit(post)}
                      className="glass-morphism p-2 rounded-lg hover:bg-ankor-teal/20 transition-colors"
                    >
                      <Edit className="h-4 w-4 text-ankor-white" />
                    </button>
                    <button
                      onClick={() => handleDelete(post.id)}
                      className="glass-morphism p-2 rounded-lg hover:bg-red-500/20 transition-colors"
                    >
                      <Trash2 className="h-4 w-4 text-red-400" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  )
} 