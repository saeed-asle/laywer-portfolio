function AboutSection() {
  return (
    <section id="about" className="page-section about-section">
      <div className="section-header">
        <h2>About</h2>
        <p>Your business partner in legal strategy, not just paperwork.</p>
      </div>

      <div className="two-column">
        <div>
          <p>
            I’m <strong>Alex Carter</strong>, a business and contracts lawyer
            based in <strong>Your City</strong>. I work with founders, small
            business owners, and creative professionals who want clear legal
            guidance without the confusing jargon.
          </p>
          <p>
            Before starting my own practice, I advised companies at a mid-size
            commercial law firm, focusing on technology, services, and
            e-commerce businesses. I combine that experience with a practical,
            down-to-earth approach: explain the risk, suggest options, and help
            you decide what makes sense for your business.
          </p>
        </div>

        <div className="about-highlights">
          <div className="info-block">
            <h3>Credentials</h3>
            <ul>
              <li>J.D., Example Law School</li>
              <li>Admitted to the Bar in State/Region</li>
              <li>Member, Business Law Section</li>
            </ul>
          </div>

          <div className="info-block">
            <h3>How I work</h3>
            <ul>
              <li>Transparent, fixed-fee pricing where possible</li>
              <li>Fast response times & clear timelines</li>
              <li>Plain-language explanations, no legalese</li>
            </ul>
          </div>

          <div className="info-block">
            <h3>Languages</h3>
            <ul>
              <li>English (native)</li>
              <li>Spanish (professional)</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
