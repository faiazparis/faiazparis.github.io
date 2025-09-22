# Abrar Fayaz - Portfolio Website

A modern, minimalist portfolio website built with Next.js, showcasing professional experience in AI, corporate finance, and entrepreneurship.

## 🌟 Features

- **Homepage**: Professional bio, travel journey, and expertise showcase
- **CV Page**: Comprehensive professional experience and education
- **Responsive Design**: Mobile-first approach with clean typography
- **Static Export**: Optimized for GitHub Pages deployment
- **GitHub Actions**: Automated build and deployment pipeline
- **Minimalist Design**: Clean, professional aesthetic focused on content

## 🚀 Live Demo

Visit the live website: **[https://faiazparis.github.io/](https://faiazparis.github.io/)**

## 🛠 Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Pure CSS (no external frameworks)
- **Deployment**: GitHub Pages with GitHub Actions
- **Build**: Static export for optimal performance

## 📁 Project Structure

```
├── app/
│   ├── components/
│   │   └── Navigation.tsx     # Main navigation component
│   ├── cv/
│   │   └── page.tsx          # CV/Resume page
│   ├── globals.css           # Global styles and design system
│   ├── layout.tsx            # Root layout with metadata
│   └── page.tsx              # Homepage with bio and expertise
├── .github/
│   └── workflows/
│       └── deploy.yml        # GitHub Actions deployment
├── public/
│   ├── files/
│   │   └── pgp-key.txt       # PGP public key
│   └── photo.jpg             # Professional headshot
├── next.config.js            # Next.js configuration for static export
└── package.json
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**:
```bash
git clone https://github.com/faiazparis/faiazparis.github.io.git
cd faiazparis.github.io
```

2. **Install dependencies**:
```bash
npm install
```

3. **Run the development server**:
```bash
npm run dev
```

4. **Open your browser**: Navigate to [http://localhost:3000](http://localhost:3000)

### Building for Production

```bash
npm run build
```

Static files will be generated in the `out` directory, ready for deployment.

## 🎨 Design Philosophy

This portfolio follows a **minimalist professional design**:

- **Clean Typography**: Lato font family for readability
- **Generous Whitespace**: Focus on content over decoration  
- **Left-Aligned Layout**: Academic-inspired content structure
- **Mobile-First**: Responsive design for all devices
- **Performance**: Static export for fast loading
- **Accessibility**: Semantic HTML and proper contrast

## 📝 Content Sections

### Homepage (`/`)
- Professional introduction and bio
- Travel journey with animated country tags
- Technical expertise and skills
- Contact information

### CV Page (`/cv`)
- Professional experience timeline
- Education and academic background
- Technical projects and achievements
- Language proficiency
- Contact details

## 🔧 Customization

To adapt this portfolio for your own use:

### 1. Personal Information
- Update `app/page.tsx` with your bio and expertise
- Modify `app/cv/page.tsx` with your professional experience
- Replace `public/photo.jpg` with your professional headshot

### 2. Styling
- Customize colors and fonts in `app/globals.css`
- Adjust spacing and layout as needed
- Update the design system variables

### 3. Navigation
- Modify `app/components/Navigation.tsx` for different links
- Update external social media links
- Add or remove navigation items

### 4. Deployment
- Update repository name in `package.json`
- Modify GitHub Actions workflow if needed
- Configure custom domain in GitHub Pages settings

## 🚀 Deployment

This project is configured for **GitHub Pages** deployment:

1. **Repository Setup**: Must be named `username.github.io`
2. **GitHub Actions**: Automated build and deployment
3. **Static Export**: Optimized for static hosting
4. **Custom Domain**: Optional custom domain support

### Manual Deployment
```bash
npm run build
# Upload contents of 'out' directory to your hosting service
```

## 📄 License

This project is open source and available under the [MIT License](LICENSE).


## 📞 Contact

**Abrar Fayaz** - [faiazparis@gmail.com](mailto:faiazparis@gmail.com)

- **GitHub**: [@faiazparis](https://github.com/faiazparis)
- **X/Twitter**: [@faiazparis](https://x.com/faiazparis)
- **Website**: [https://faiazparis.github.io/](https://faiazparis.github.io/)

---

⭐ **Star this repository** and feel free to use it!
