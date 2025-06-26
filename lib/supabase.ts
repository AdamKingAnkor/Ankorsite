import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Database types
export interface ContactForm {
  id?: string
  first_name: string
  last_name: string
  email: string
  phone?: string
  company: string
  service: string
  message?: string
  preferred_date?: string
  preferred_time?: string
  created_at?: string
}

export interface BlogPost {
  id: string
  title: string
  excerpt: string
  content: string
  author: string
  published_date: string
  read_time: string
  category: string
  image_url?: string
  created_at: string
  updated_at: string
}

// Database functions
export const submitContactForm = async (data: ContactForm) => {
  const { data: result, error } = await supabase
    .from('contact_forms')
    .insert([data])
    .select()

  if (error) {
    throw error
  }

  return result
}

export const getBlogPosts = async () => {
  const { data, error } = await supabase
    .from('blog_posts')
    .select('*')
    .order('published_date', { ascending: false })

  if (error) {
    throw error
  }

  return data
}

export const getBlogPost = async (id: string) => {
  const { data, error } = await supabase
    .from('blog_posts')
    .select('*')
    .eq('id', id)
    .single()

  if (error) {
    throw error
  }

  return data
} 