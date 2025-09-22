import Navigation from '../components/Navigation'

export default function About() {
  return (
    <main>
      <Navigation />

      <div className="about-hero">
        <h1>My Experience</h1>
          <p className="hero-subtitle">
            AI • Corporate Finance • Entrepreneurship • Polyglot
          </p>
          <p className="location">
            📍 Paris, France
          </p>
      </div>

      <div className="about-content">
        <section className="intro">
          <div className="intro-card">
            <h2>Mission</h2>
            <p>
              Building AI solutions for humanity.
            </p>
          </div>
        </section>

        <section className="education">
          <h2>Education & Languages</h2>
          
          <div className="education-item">
            <h3>King's College London</h3>
            <p>Master of Arts in International Affairs (2022 - Dropout)<br/><em>Strategy, War Studies, International Relations</em></p>
          </div>

          <div className="education-item">
            <h3>IMT Atlantique</h3>
            <p> MSc Engineering - Diplôme d'ingénieur (2016-2020)<br/><em>Operations Research, Python, SQL, Markov Process, Artificial Intelligence (NLP), Finance & Accounting</em></p>
          </div>

          <div className="education-item">
            <h3>Lycée Saint-Louis (Paris VIe)</h3>
            <p>Preparatory Classes - Prépa MPSI/MP (2014-2016)<br/><em>Linear Algebra, Functional Analysis, Probability, Computer Science, Electromagnetism, Quantum Mechanics, Optimization Theory, Statistics, Differential Equations, Complex Analysis</em></p>
          </div>

          <div className="languages">
            <h3>Languages</h3>
            <p>Fluent: French, English, Bengali<br/>Intermediate: Mandarin (self-learnt, +1,000 characters)</p>
          </div>
        </section>

        <section className="tech-projects">
          <h2>Tech & AI Projects</h2>
          
          <div className="project-item">
            <h3>M&A Intelligence - Financial Analysis</h3>
            <p>
              Built with FastAPI, ChromaDB, FinBERT, and SentenceTransformers, featuring local LLM (Qwen2.5), 
              Docker microservices, and Celery/Redis task queues for complex financial analysis.
            </p>
          </div>

          <div className="project-item">
            <h3>Luxe AI - Luxury GPT</h3>
            <p>
              Created a Next.js/React TypeScript PWA with Gemini AI integration, Stripe payments, 
              modular moodboards, edge caching, and optimized Core Web Vitals.
            </p>
          </div>

          <div className="project-item">
            <h3>Fixit AI - Repair Assistance</h3>
            <p>
              Developed using FastAPI with iFixit data ingestion, REST API with AI-powered summaries, 
              Swagger documentation, and advanced error handling with latency/cost monitoring.
            </p>
          </div>

          <div className="project-item">
            <h3>Math/Quantum Tools - Advanced Math & Physics</h3>
            <p>
              Developed Python projects for algebraic geometry, Quantum Error Correction (QEC), 
              categorical ETL, spectral analysis, cohomology, Ricci flow, and financial denoising with comprehensive tests and documentation.
            </p>
          </div>
        </section>

        <section className="experience">
          <h2>Professional Experience</h2>
          
          <div className="experience-item">
            <h3>Management Controller & FP&A Analyst - Maison Alaïa (Richemont)</h3>
            <span className="duration">Full-time, 9 months (Nov 2024 - Jul 2025)</span>
          </div>

          <div className="experience-item">
            <h3>Finance & IT Consultant - Maison Alaïa (Richemont)</h3>
            <span className="duration">Freelance, 10 months (Dec 2023 - Oct 2024)</span>
          </div>

          <div className="experience-item">
            <h3>Data & Compliance Analyst - Maison Alaïa (Richemont)</h3>
            <span className="duration">Full-time, 1 year (Sept 2022 - Sept 2023)</span>
          </div>

          <div className="experience-item">
            <h3>Procurement Planner - Sephora (LVMH)</h3>
            <span className="duration">Full-time, 10 months (Mar 2021 - Dec 2021)</span>
          </div>

          <div className="experience-item">
            <h3>E-Commerce Developer - Paris Accessoires Tech</h3>
            <span className="duration">Full-time, 7 months (Aug 2020 - Feb 2021)</span>
          </div>

          <div className="experience-item">
            <h3>Distribution Planner - LVMH (Fenty Fashion)</h3>
            <span className="duration">Intern, 6 months (Jan 2020 - Jul 2020)</span>
          </div>

          <div className="experience-item">
            <h3>Consultant - EY</h3>
            <span className="duration">Intern, 5 months (Apr 2019 - Aug 2019)</span>
          </div>

          <div className="experience-item">
            <h3>Supply Chain Coordinator - Louis Vuitton</h3>
            <span className="duration">Intern, 6 months (Sept 2018 - Mar 2019)</span>
          </div>
        </section>


        <section className="contact">
          <h2>Get In Touch</h2>
          <p>
            I'm always eager to explore new opportunities, partnerships, and meaningful connections with 
            fellow professionals who share my passion for data science, luxury, finance, artificial intelligence and travel.
          </p>
          
          <div className="contact-info">
            <p>Contact: <em>faiazparis at gmail.com</em></p>
            <p>GitHub: <a href="https://github.com/faiazparis" target="_blank" rel="noopener noreferrer">github.com/faiazparis</a></p>
          </div>
        </section>
      </div>

    </main>
  )
}
