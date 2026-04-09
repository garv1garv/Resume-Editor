import { useEffect, useState, useRef } from 'react';
import './LandingPage.css';

function useItersectionObserver(options = {}) {
  const [elements, setElements] = useState([]);
  const [entries, setEntries] = useState([]);

  const observer = useRef(
    new IntersectionObserver((observedEntries) => {
      setEntries(observedEntries);
    }, options)
  );

  useEffect(() => {
    const currentObserver = observer.current;
    currentObserver.disconnect();
    if (elements.length) {
      elements.forEach(elem => currentObserver.observe(elem));
    }
    return () => currentObserver.disconnect();
  }, [elements]);

  return [setElements, entries];
}

export default function LandingPage({ onEnter }) {
  const [scrollY, setScrollY] = useState(0);

  // Simple scroll trigger logic classes
  useEffect(() => {
    const handleScroll = () => requestAnimationFrame(() => setScrollY(window.scrollY));
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Intersection observer for `.reveal` elements
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    }, { threshold: 0.1 });

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach(el => observer.observe(el));

    return () => {
      window.removeEventListener('scroll', handleScroll);
      revealElements.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="shader-body">
      {/* Physical Monitor Bezel / Frame */}
      <div className="monitor-bezel">
        <div className="screen-glare"></div>
        <div className="crts-scanlines"></div>
        <div className="film-grain"></div>

        <nav className="shader-nav">
          <div className="nav-left">ResumeForge</div>
          <div className="nav-right">
            <a href="#work">Selected Work</a>
            <a href="#about-us">About Us</a>
            <a href="#contact">Contact</a>
            <button className="book-call-btn" onClick={onEnter}>Launch Editor ↗</button>
          </div>
        </nav>

        <div className="scroll-wrapper">
          {/* Hero Section */}
          <section className="shader-hero reveal">
            <div className="hero-content">
              <h1 className="hero-title" style={{ transform: `translateY(${scrollY * -0.2}px)` }}>
                An AI Resume Studio, <br />
                <em>Plugged into the Future.</em>
              </h1>
              <div className="hero-footer">
                <span className="scroll-prompt">↓ Scroll to Inspect</span>
              </div>
            </div>
          </section>

          {/* AI Features Section instead of useless work carousel */}
          <section className="shader-work reveal" id="features">
            <h2 className="section-label">Toolkit Overview</h2>
            <p className="work-desc">Advanced Semantic Parsing and Output Generation.</p>
            <div className="features-grid">
              <div className="feature-block reveal delay-1">
                <h3>01. Semantic Matcher</h3>
                <p>We analyze your target job description against your background to highlight the perfect linguistic overlap, overriding ATS filters.</p>
              </div>
              <div className="feature-block reveal delay-2">
                <h3>02. Executive Formatting</h3>
                <p>No generic templates. Built with clean, minimalist typography optimized for human recruiters and high-level decision makers.</p>
              </div>
              <div className="feature-block reveal delay-3">
                <h3>03. Instant Deployment</h3>
                <p>Modify, regenerate, and export absolute perfect pixel PDFs without navigating clumsy drag-and-drop builders.</p>
              </div>
            </div>
          </section>

          {/* About Us Section */}
          <section className="shader-about reveal" id="about-us">
            <div className="about-inner">
              <h1 className="about-heading">
                Making Career Storytelling More <br />
                <em>Playful, Powerful, and Alive.</em>
              </h1>
              <div className="about-columns">
                <div className="about-text">
                  <p>
                    ResumeForge is a creative development studio specialized in building interactive AI solutions for ambitious job seekers. Serious about careers, based on the web, and working with professionals worldwide.
                  </p>
                  <p>
                    Plugged into the future. While we're a targeted AI tool, we have a network of capabilities: ATS parsers, semantic matchers, and language models, ready to plug in with an array of skills.
                  </p>
                  <p>
                    This modular approach means we can scale and adapt to each application. Whether it's a FAANG engineering role, an executive position, or a creative portfolio, we help bold candidates stand out across every screening system.
                  </p>
                </div>
                <div className="about-text">
                  <p>
                    We build resumes that demand attention and reward curiosity. We push digital recruitment to places you haven't seen before, and have fun doing it. Beyond automation, we offer high-fidelity pdf design, typography, semantic tuning, and creative consulting.
                  </p>
                  <p>
                    Whether it's passing a rigid ATS scanner, launching a new career transition, or bringing a stagnant profile to life, ResumeForge bridges the gap between ambition and technical execution. Our process is hands-on, collaborative, and tailored for candidates that value craft. We're not your regular resume writer. We don't troubleshoot printers.
                  </p>
                </div>
              </div>
            </div>
            
            {/* The "Paper" Corporate Division */}
            <div className="corporate-division reveal">
              <div className="rainbow-divide"></div>
              <div className="corporate-inner">
                <p className="pitch-text">
                  In today's fast-paced corporate landscape, you need a partner who understands the bottom line. At ResumeForge, we engineer success through strategic precision and mutual profitability. Our AI is ready to synergize with your background, unlock new verticals, and maximize your interview ROI. We don't just generate text; we deliver results that compound.
                </p>
                <br />
                <p className="pitch-text">
                  We leverage state-of-the-art technology to give your profile a decisive competitive advantage. We provide turnkey optimization that scales. We merge high-performance parsing with executive-level design to build assets that appreciate your market value.
                </p>
              </div>
            </div>
          </section>

          {/* CTA / Footer Section */}
          <section className="shader-footer reveal" id="contact">
             <div className="rainbow-divide reverse"></div>
             <div className="footer-content">
               <h2 className="footer-pitch">Ready to take your enterprise to the next level?</h2>
               <p className="footer-subpitch">
                 Don't waste valuable time. Review our platform, crunch the numbers, and you'll see the trajectory points one way: up. Pick up the phone, send a fax, or schedule a consultation. The future of your career is waiting. <strong>Let's execute.</strong>
               </p>
               <div className="footer-actions">
                 <button className="book-call-large" onClick={onEnter}>Launch Protocol ↗</button>
               </div>

               <div className="footer-bottom">
                 <div className="footer-col">
                   <span>Let's interface, call us today!</span>
                   <a href="mailto:hello@resumeforge.ai">hello@resumeforge.ai</a>
                 </div>
                 <div className="footer-col">
                   <a href="#" className="footer-link">LinkedIn</a>
                   <a href="#" className="footer-link">Instagram</a>
                   <a href="#" className="footer-link">X (Twitter)</a>
                 </div>
                 <div className="footer-col right">
                   <span>Reach out today to our CEO</span>
                   <a href="mailto:ceo@resumeforge.ai">ceo@resumeforge.ai</a>
                   <a href="#" className="footer-link small mt-4">Accessibility Statement</a>
                 </div>
               </div>
             </div>
          </section>
        </div>
      </div>
    </div>
  );
}
