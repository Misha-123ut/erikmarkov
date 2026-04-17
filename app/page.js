import '../app/global.css';

export default function Portfolio() {
  const skills = ['React', 'Next.js', 'JS', 'Node', 'TS', 'CSS'];

  return (
    <main>
      <nav className="nav-bar">
        <div className="nav-logo">Portfolio</div>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section className="hero-section">
        <h1 className="hero-title">
          Frontend
          <br />
          Developer
        </h1>
        <p className="hero-subtitle">Creating high-end digital experiences</p>
      </section>

      <section id="about" className="about-section">
        <div className="bg-glow-1"></div>
        <div className="bg-glow-2"></div>
        <div className="container-grid">
          <div className="content-left">
            <h2 className="title-gradient">ABOUT ME</h2>
            <div className="accent-line"></div>
            <p style={{ fontSize: '1.2rem', color: '#ccc', marginBottom: '30px' }}>
              I specialize in building functional and beautiful interfaces. My focus is on
              performance and clean architecture.
            </p>
            <div className="stats-grid">
              <div className="stat-item">
                <h4>2+</h4>
                <p>Years Exp.</p>
              </div>
              <div className="stat-item">
                <h4>15+</h4>
                <p>Projects</p>
              </div>
              <div className="stat-item">
                <h4>24/7</h4>
                <p>Learning</p>
              </div>
            </div>
          </div>
          <div className="content-right">
            <div className="project-card" style={{ justifyContent: 'flex-start', height: 'auto' }}>
              <h3 style={{ marginTop: 0 }}>Core Stack</h3>
              <div className="skills-wrapper">
                {skills.map((s) => (
                  <span key={s} className="skill-tag">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="projects-section">
        <h2 className="title-gradient" style={{ fontSize: '2.5rem' }}>
          PROJECTS
        </h2>
        <div className="projects-grid">
          <div className="project-card">
            <h3>E-commerce Platform</h3>
            <p>Next.js & Stripe</p>
          </div>
          <div className="project-card">
            <h3>AI Dashboard</h3>
            <p>React & OpenAI</p>
          </div>
          <div className="project-card">
            <h3>Crypto Tracker</h3>
            <p>TypeScript & API</p>
          </div>
        </div>
      </section>

      <section id="contact" className="contact-section">
        <div className="contact-card">
          <h2>Ready to work?</h2>
          <p>Let's build something amazing together.</p>
          <a href="mailto:email@example.com" className="contact-btn">
            Get In Touch
          </a>
        </div>
      </section>
    </main>
  );
}
