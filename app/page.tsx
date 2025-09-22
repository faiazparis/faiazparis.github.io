'use client'
import Image from 'next/image'
import Navigation from './components/Navigation'
import { useEffect, useRef, useState } from 'react'

function AnimatedCountryTags() {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  const countries = [
    { name: 'Paris', class: 'paris', icon: '📍' },
    { name: 'Nepal', class: 'nepal', icon: '🇳🇵' },
    { name: 'India', class: 'india', icon: '🇮🇳' },
    { name: 'Thailand', class: 'thailand', icon: '🇹🇭' },
    { name: 'Vietnam', class: 'vietnam', icon: '🇻🇳' },
    { name: 'China', class: 'china', icon: '🇨🇳' },
    { name: 'Japan', class: 'japan', icon: '🇯🇵' },
    { name: 'Korea', class: 'korea', icon: '🇰🇷' },
    { name: 'Maldives', class: 'maldives', icon: '🇲🇻' },
    { name: 'UAE', class: 'uae', icon: '🇦🇪' },
    { name: 'Saudi Arabia', class: 'saudi', icon: '🇸🇦' },
    { name: 'Colombia', class: 'colombia', icon: '🇨🇴' },
    { name: 'USA', class: 'usa', icon: '🇺🇸' }
  ]

  return (
    <div ref={ref} className="countries-grid">
      {countries.map((country, index) => (
        <span 
          key={country.name}
          className={`country-tag ${country.class} ${isVisible ? 'animate' : ''}`}
          style={{ animationDelay: isVisible ? `${index * 0.1}s` : '0s' }}
        >
          <span className="country-icon">{country.icon}</span>
          {country.name}
        </span>
      ))}
    </div>
  )
}

export default function Home() {
  return (
    <main>
      <Navigation />

      <div className="hero-section">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Abrar Fayaz</h1>
            <p className="hero-description">
              🇫🇷 French-Asian Entrepreneur & AI Engineer
            </p>
            <div className="contact-info">
              <p>Contact: <em>faiazparis at gmail.com</em></p>
              <p>GitHub: <a href="https://github.com/faiazparis" target="_blank" rel="noopener noreferrer">github.com/faiazparis</a></p>
            </div>
          </div>
          <div className="hero-photo">
            <div className="photo-container">
              <Image
                src="/photo.jpg"
                alt="Abrar Fayaz - Professional Headshot"
                width={200}
                height={200}
                className="profile-photo"
                priority
              />
            </div>
          </div>
        </div>
      </div>


      <p>
        My work is driven by three core values: innovation in pushing technological boundaries, 
        curiosity in exploring new possibilities across cultures and markets, and 
        respect for diverse perspectives that shape meaningful solutions. These principles 
        guide both my leadership and entrepreneurial ventures, creating impact through 
        thoughtful technology and genuine human connection.
      </p>

      <h2>Travel Journey</h2>
      
      <div className="travel-journey">
        <p>
          My journey spans from Paris (where I live) through Nepal and India 
          (spiritual exploration), to the vibrant markets of Thailand and Vietnam, 
          the ancient wisdom of China, the technological innovation of Japan and Korea, 
          the tropical paradise of Maldives, the business hubs of UAE and Saudi Arabia, 
          the energy of Colombia, and finally to the innovation centers of the USA. 
          Each destination shaped my perspective on technology, culture, and global business.
        </p>
        
        <AnimatedCountryTags />
      </div>

      <h2>Expertise</h2>

      <ul>
        <li>Languages: Python, TypeScript/JavaScript, SQL</li>
        <li>Frameworks: FastAPI, Node.js/NestJS, React/Next.js, React Native</li>
        <li>AI/ML: LLMs, CrewAI, LangChain, RAG (ChromaDB), Transformers/FinBERT</li>
        <li>Corporate Finance: FP&A, P&L analysis, Budget optimization, EBIT improvement, IFRS 16</li>
        <li>Data & Analytics: Power BI, DAX, SAP, Master data management</li>
        <li>Infrastructure: PostgreSQL, Docker, Git/GitHub, CI/CD, WebSockets</li>
      </ul>
    </main>
  )
}
