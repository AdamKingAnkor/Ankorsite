# Ankor Consulting Website

A modern, responsive website for Ankor Consulting, a marketing company specializing in title agency marketing solutions. Built with Next.js, TypeScript, and Tailwind CSS featuring a beautiful glass morphism design.

## Features

- **Glass Morphism Design**: Modern UI with frosted glass effects, transparency, and backdrop blur
- **Responsive Design**: Fully responsive across all devices
- **Contact Form**: Integrated form with database storage (Supabase)
- **Blog System**: Content management for blog posts
- **Booking System**: Consultation booking with calendar integration
- **CMS Ready**: Easy content updates and management
- **SEO Optimized**: Built with Next.js for optimal performance

## Pages

- **Home**: Hero section, services overview, and call-to-action
- **About**: Company story, team, and values
- **Services**: Detailed service offerings and pricing
- **Blog**: Industry insights and marketing tips
- **Booking**: Consultation booking form

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom glass morphism utilities
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Forms**: React Hook Form
- **Database**: Supabase (PostgreSQL)
- **Notifications**: React Hot Toast

## Design System

### Colors
- **Teal**: #40b9ce
- **Navy**: #1e3a5f
- **White**: #FFFFFF

### Typography
- **Font**: Montserrat (Google Fonts)
- **Logo**: "ANKOR." in bold Montserrat

### Glass Morphism Components
- Frosted glass effects with transparency
- Backdrop blur properties
- Subtle light borders (1px)
- RGBA colors with alpha transparency
- Layered translucent elements

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Supabase account (for database)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd ankor-consulting
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env.local` file in the root directory:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

4. **Set up Supabase Database**
   
   Create the following tables in your Supabase database:

   **contact_forms table:**
   ```sql
   CREATE TABLE contact_forms (
     id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
     first_name TEXT NOT NULL,
     last_name TEXT NOT NULL,
     email TEXT NOT NULL,
     phone TEXT,
     company TEXT NOT NULL,
     service TEXT NOT NULL,
     message TEXT,
     preferred_date DATE,
     preferred_time TEXT,
     created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
   );
   ```

   **blog_posts table:**
   ```sql
   CREATE TABLE blog_posts (
     id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
     title TEXT NOT NULL,
     excerpt TEXT NOT NULL,
     content TEXT NOT NULL,
     author TEXT NOT NULL,
     published_date DATE NOT NULL,
     read_time TEXT NOT NULL,
     category TEXT NOT NULL,
     image_url TEXT,
     created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
     updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
   );
   ```

5. **Run the development server**
   ```bash
   npm run dev
   ```

6. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Project Structure

```
ankor-consulting/
├── app/                    # Next.js App Router pages
│   ├── about/             # About page
│   ├── blog/              # Blog page
│   ├── booking/           # Booking page
│   ├── services/          # Services page
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # Reusable components
│   ├── Header.tsx         # Navigation header
│   └── Footer.tsx         # Site footer
├── lib/                   # Utility functions
│   └── supabase.ts        # Supabase client and functions
├── public/                # Static assets
├── tailwind.config.js     # Tailwind configuration
├── next.config.js         # Next.js configuration
├── package.json           # Dependencies
└── README.md              # This file
```

## Customization

### Adding New Pages
1. Create a new folder in `app/` with the page name
2. Add a `page.tsx` file with your component
3. Update navigation in `components/Header.tsx`

### Modifying Styles
- Global styles: `app/globals.css`
- Component styles: Use Tailwind classes
- Custom utilities: `tailwind.config.js`

### Adding Blog Posts
1. Insert data into the `blog_posts` table in Supabase
2. Or create a CMS interface for content management

## Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Add environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

### Other Platforms
- Netlify
- Railway
- DigitalOcean App Platform

## CMS Integration

For easy content management, consider integrating:

- **Strapi**: Headless CMS
- **Sanity**: Content platform
- **Contentful**: Enterprise CMS
- **Supabase Dashboard**: Direct database management

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Support

For support or questions, contact:
- Email: info@ankorconsulting.com
- Phone: (555) 123-4567

---

Built with ❤️ for Ankor Consulting