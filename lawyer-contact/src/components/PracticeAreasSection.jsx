const areas = [
  {
    title: 'Business formation',
    desc: 'Choosing the right structure (LLC, corporation, partnership), drafting founder agreements, and setting your company up correctly from day one.',
  },
  {
    title: 'Contracts & negotiations',
    desc: 'Client agreements, service contracts, NDAs, partnership deals, and vendor agreements that protect your interests and are easy to understand.',
  },
  {
    title: 'Startups & tech',
    desc: 'Terms of service, privacy policies, SaaS agreements, and ongoing support for fast-moving startups and online businesses.',
  },
  {
    title: 'Employment & freelancers',
    desc: 'Freelancer agreements, contractor terms, basic employment policies, and documents that help you build a fair, compliant team.',
  },
  {
    title: 'Dispute prevention',
    desc: 'Risk reviews, contract audits, and strategy sessions designed to avoid costly disputes before they start.',
  },
  {
    title: 'Commercial leases',
    desc: 'Reviewing and negotiating office, retail, and coworking leases so you know exactly what you’re signing.',
  },
]

function PracticeAreasSection() {
  return (
    <section id="practice" className="page-section practice-section">
      <div className="section-header">
        <h2>Practice Areas</h2>
        <p>Focused on the legal issues that matter most to modern businesses.</p>
      </div>

      <div className="cards-grid">
        {areas.map((area) => (
          <article key={area.title} className="card">
            <h3>{area.title}</h3>
            <p>{area.desc}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default PracticeAreasSection
