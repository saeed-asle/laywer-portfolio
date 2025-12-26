function ContactSection() {
  return (
    <section id="contact" className="page-section contact-section">
      <div className="section-header">
        <h2>Contact</h2>
        <p>Tell me briefly what you need help with and I’ll reply within 1 business day.</p>
      </div>

      <div className="two-column">
        <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
          <div className="form-row">
            <label>
              Full name
              <input type="text" placeholder="Your name" required />
            </label>
          </div>

          <div className="form-row">
            <label>
              Email
              <input type="email" placeholder="you@example.com" required />
            </label>
          </div>

          <div className="form-row">
            <label>
              Business / organization
              <input type="text" placeholder="Company or project name" />
            </label>
          </div>

          <div className="form-row">
            <label>
              How can I help?
              <textarea
                rows="4"
                placeholder="Briefly describe your situation or question…"
                required
              />
            </label>
          </div>

          <div className="form-row checkbox-row">
            <label>
              <input type="checkbox" /> I agree to be contacted about this inquiry.
            </label>
          </div>

          <button type="submit" className="btn btn-primary full-width">
            Send message
          </button>
        </form>

        <div className="contact-details">
          <h3>Direct contact</h3>
          <p>Email: <a href="mailto:hello@alexcarterlaw.com">hello@alexcarterlaw.com</a></p>
          <p>Phone: (000) 123-4567</p>
          <p>Location: Your City, Your Country</p>

          <h3>Typical working hours</h3>
          <p>Monday – Friday, 9:00 – 17:00</p>

          <h3>Good fit if you are…</h3>
          <ul>
            <li>Launching or growing a small business or startup</li>
            <li>Needing clear contracts and long-term support</li>
            <li>Looking for a friendly, straight-talking lawyer</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
