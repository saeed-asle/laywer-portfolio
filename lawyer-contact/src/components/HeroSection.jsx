function HeroSection() {
  return (
    <section id="home" className="page-section hero-section">
      <div className="hero-content">
        <p className="hero-tagline">BUSINESS • CONTRACTS • STARTUPS</p>
        <h2 className="hero-title">
          Clear, practical legal advice
          <span className="hero-highlight"> for growing businesses.</span>
        </h2>
        <p className="hero-subtitle">
          I help entrepreneurs, freelancers, and small companies reduce risk,
          negotiate better deals, and focus on what they do best—running
          their business.
        </p>

        <div className="hero-ctas">
          <a href="#contact" className="btn btn-primary">
            Schedule a consultation
          </a>
          <a href="#practice" className="btn btn-outline">
            View practice areas
          </a>
        </div>

        <div className="hero-badges">
          <span className="pill">7+ years experience</span>
          <span className="pill">Business & Contract Law</span>
          <span className="pill">Remote & in-person</span>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
