import { useState, useEffect, useRef } from 'react';
import './LandingPage.css';

export default function LandingPage({ onEnter }) {
  const [loaded, setLoaded] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const heroRef = useRef(null);
  const featuresRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    setTimeout(() => setLoaded(true), 100);
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Intersection observer for scroll-triggered animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -50px 0px' }
    );

    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [loaded]);

  const features = [
    {
      icon: '⚡',
      title: 'AI-Powered Tailoring',
      desc: 'Upload your resume, paste a job description, and watch as Gemini AI rewrites every bullet point to match exactly what recruiters are looking for.',
    },
    {
      icon: '📊',
      title: 'ATS Score Analysis',
      desc: 'Get an instant before-and-after ATS compatibility score. See exactly which keywords were matched and how your score improved.',
    },
    {
      icon: '🔗',
      title: 'GitHub Integration',
      desc: 'Connect your GitHub profile and let the AI automatically surface your most relevant projects for each specific role.',
    },
    {
      icon: '📄',
      title: 'One-Click PDF Export',
      desc: 'Generate a beautifully formatted, ATS-friendly PDF resume ready to submit. Clean typography, proper margins, perfect every time.',
    },
    {
      icon: '✏️',
      title: 'Live Visual Editor',
      desc: 'Full control over every section. Edit skills, experience, projects, and education with instant live preview side-by-side.',
    },
    {
      icon: '🎨',
      title: 'Dark & Light Themes',
      desc: 'Work in the environment you prefer. Switch between a deep obsidian dark mode and a clean light workspace instantly.',
    },
  ];

  return (
    <div className={`landing ${loaded ? 'loaded' : ''}`}>
      {/* Grain overlay */}
      <div className="grain-overlay" />

      {/* Monitor frame / vignette */}
      <div className="vignette" />

      {/* Navigation */}
      <nav className="landing-nav">
        <div className="nav-inner">
          <div className="nav-logo">
            <svg width="36" height="36" viewBox="0 0 40 40" fill="none">
              <rect x="6" y="4" width="28" height="32" rx="6" fill="url(#nav_grad)" />
              <path d="M34 14L24 4V10C24 12.2091 25.7909 14 28 14H34Z" fill="rgba(255,255,255,0.4)" />
              <path d="M23.5 15L16.5 24H21L19 31L26.5 21H22L23.5 15Z" fill="white" />
              <defs>
                <linearGradient id="nav_grad" x1="6" y1="4" x2="34" y2="36" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#10b981" />
                  <stop offset="1" stopColor="#0ea5e9" />
                </linearGradient>
              </defs>
            </svg>
            <span>ResumeForge</span>
          </div>
          <div className="nav-links">
            <a href="#features">Features</a>
            <a href="#how-it-works">How It Works</a>
            <a href="#cta">Get Started</a>
          </div>
          <button className="nav-cta" onClick={onEnter}>
            Launch App →
          </button>
        </div>
      </nav>

      {/* ══════════ HERO ══════════ */}
      <section className="hero" ref={heroRef}>
        <div className="hero-bg-orb orb-1" style={{ transform: `translate(${scrollY * 0.03}px, ${scrollY * -0.05}px)` }} />
        <div className="hero-bg-orb orb-2" style={{ transform: `translate(${scrollY * -0.04}px, ${scrollY * -0.02}px)` }} />
        <div className="hero-bg-orb orb-3" style={{ transform: `translate(${scrollY * 0.02}px, ${scrollY * 0.03}px)` }} />

        <div className="hero-content">
          <div className="hero-badge reveal">
            <span className="badge-dot" />
            AI-Powered Resume Intelligence
          </div>
          <h1 className="hero-title reveal">
            <span className="hero-line">Forge Your</span>
            <span className="hero-line hero-line-accent">
              <em>Future.</em>
            </span>
          </h1>
          <p className="hero-subtitle reveal">
            Precision AI resume tailoring that beats the ATS,<br />
            matches every keyword, and lands interviews.
          </p>
          <div className="hero-actions reveal">
            <button className="btn-hero-primary" onClick={onEnter}>
              <span>Start Building</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </button>
            <a className="btn-hero-secondary" href="#features">
              See How It Works
            </a>
          </div>
          <div className="hero-stats reveal">
            <div className="stat">
              <span className="stat-number">95%</span>
              <span className="stat-label">ATS Pass Rate</span>
            </div>
            <div className="stat-divider" />
            <div className="stat">
              <span className="stat-number">2.5x</span>
              <span className="stat-label">More Interviews</span>
            </div>
            <div className="stat-divider" />
            <div className="stat">
              <span className="stat-number">30s</span>
              <span className="stat-label">Generation Time</span>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="scroll-indicator reveal">
          <div className="scroll-line" />
          <span>Scroll to explore</span>
        </div>
      </section>

      {/* ══════════ MARQUEE ══════════ */}
      <section className="marquee-section">
        <div className="marquee-track">
          <div className="marquee-content">
            {[...Array(2)].map((_, i) => (
              <span key={i}>
                <span className="marquee-item">Resume Tailoring</span>
                <span className="marquee-dot">✦</span>
                <span className="marquee-item">ATS Optimization</span>
                <span className="marquee-dot">✦</span>
                <span className="marquee-item">Keyword Matching</span>
                <span className="marquee-dot">✦</span>
                <span className="marquee-item">GitHub Integration</span>
                <span className="marquee-dot">✦</span>
                <span className="marquee-item">PDF Export</span>
                <span className="marquee-dot">✦</span>
                <span className="marquee-item">Live Editor</span>
                <span className="marquee-dot">✦</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ FEATURES ══════════ */}
      <section className="features-section" id="features" ref={featuresRef}>
        <div className="section-inner">
          <div className="section-label reveal">Features</div>
          <h2 className="section-heading reveal">
            Everything you need to<br /><em>land the interview.</em>
          </h2>
          <div className="features-grid">
            {features.map((f, i) => (
              <div
                key={i}
                className="feature-card reveal"
                style={{ animationDelay: `${i * 0.08}s` }}
              >
                <div className="feature-icon">{f.icon}</div>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ HOW IT WORKS ══════════ */}
      <section className="how-section" id="how-it-works">
        <div className="section-inner">
          <div className="section-label reveal">How It Works</div>
          <h2 className="section-heading reveal">
            Three steps to your<br /><em>perfect resume.</em>
          </h2>
          <div className="steps-grid">
            {[
              { num: '01', title: 'Upload & Paste', desc: 'Upload your existing resume PDF. Paste the job description you\'re targeting. Optionally connect your GitHub.' },
              { num: '02', title: 'AI Tailors It', desc: 'Gemini AI analyzes both documents, matches keywords, rewrites bullet points, and optimizes for ATS compatibility.' },
              { num: '03', title: 'Download & Apply', desc: 'Review the live preview, make any final edits, then export a perfectly formatted PDF ready for submission.' },
            ].map((s, i) => (
              <div key={i} className="step-card reveal" style={{ animationDelay: `${i * 0.15}s` }}>
                <div className="step-number">{s.num}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                {i < 2 && <div className="step-connector" />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ CTA ══════════ */}
      <section className="cta-section" id="cta" ref={ctaRef}>
        <div className="cta-inner reveal">
          <div className="cta-glow" />
          <h2>
            Ready to forge<br />
            <em>your future?</em>
          </h2>
          <p>Stop sending generic resumes. Start landing interviews.</p>
          <button className="btn-hero-primary btn-large" onClick={onEnter}>
            <span>Launch ResumeForge AI</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
          </button>
          <span className="cta-note">Free to use · No sign-up required · Bring your own API key</span>
        </div>
      </section>

      {/* ══════════ FOOTER ══════════ */}
      <footer className="landing-footer">
        <div className="footer-inner">
          <div className="footer-brand">
            <svg width="28" height="28" viewBox="0 0 40 40" fill="none">
              <rect x="6" y="4" width="28" height="32" rx="6" fill="url(#ft_grad)" />
              <path d="M23.5 15L16.5 24H21L19 31L26.5 21H22L23.5 15Z" fill="white" />
              <defs>
                <linearGradient id="ft_grad" x1="6" y1="4" x2="34" y2="36" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#10b981" /><stop offset="1" stopColor="#0ea5e9" />
                </linearGradient>
              </defs>
            </svg>
            <span>ResumeForge AI</span>
          </div>
          <div className="footer-links">
            <a href="https://github.com" target="_blank" rel="noreferrer">GitHub</a>
            <span className="footer-sep">·</span>
            <a href="#features">Features</a>
            <span className="footer-sep">·</span>
            <a href="#how-it-works">How It Works</a>
          </div>
          <div className="footer-copy">
            © {new Date().getFullYear()} ResumeForge AI. Craft with precision.
          </div>
        </div>
      </footer>
    </div>
  );
}
