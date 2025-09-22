# Sabal Hero's Personal Website

A minimalist personal website built with Next.js, inspired by the clean design of academic personal sites.

## Features

- **Homepage**: Bio, research interests, publications, teaching, and service
- **Blog**: Recent posts and archive with individual post pages
- **Navigation**: Clean inline navigation with external links
- **Responsive**: Mobile-friendly design
- **Minimalist**: Pure white background, clean typography, no unnecessary elements

## Tech Stack

- Next.js 14 with App Router
- TypeScript
- CSS (no external frameworks)
- Static export for easy deployment

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Building for Production

```bash
npm run build
```

The static files will be generated in the `out` directory, ready for deployment to any static hosting service.

## Project Structure

```
├── app/
│   ├── blog/
│   │   ├── page.tsx          # Blog home
│   │   └── posts/
│   │       ├── page.tsx      # Blog archive
│   │       └── [slug]/
│   │           └── page.tsx  # Individual posts
│   ├── globals.css           # Global styles
│   ├── layout.tsx            # Root layout
│   └── page.tsx              # Homepage
├── public/
│   └── files/
│       ├── cv.pdf            # CV download
│       └── pgp-key.txt       # PGP key
└── package.json
```

## Customization

To customize this website for your own use:

1. Update personal information in `app/page.tsx`
2. Replace publications with your own
3. Update external links (GitHub, X, Google Scholar)
4. Add your own blog posts in `app/blog/posts/[slug]/page.tsx`
5. Replace the CV file in `public/files/cv.pdf`

## Design Philosophy

This website follows a minimalist academic design:
- Clean, readable typography
- Generous whitespace
- Left-aligned content
- No unnecessary visual elements
- Focus on content over decoration
- Mobile-first responsive design
