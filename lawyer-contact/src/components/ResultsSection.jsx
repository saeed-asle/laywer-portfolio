const results = [
  {
    title: 'Protected a startup during a major client negotiation',
    details:
      'Reviewed and redrafted a six-figure services agreement, limiting liability, clarifying scope, and securing better payment terms.',
    outcome: 'Result: reduced legal risk while increasing projected revenue by 20%.',
  },
  {
    title: 'Helped a freelancer turn messy emails into a solid contract',
    details:
      'Created a clear, reusable client agreement to cover scope, revisions, deadlines, and late-payment fees.',
    outcome: 'Result: fewer misunderstandings and more predictable income.',
  },
  {
    title: 'Guided a retailer through a complex commercial lease',
    details:
      'Explained key clauses in plain language, negotiated improvements, and added protections for early exit and repairs.',
    outcome: 'Result: long-term lease with terms that fit the client’s real needs.',
  },
]

function ResultsSection() {
  return (
    <section id="results" className="page-section results-section">
      <div className="section-header">
        <h2>Client Results</h2>
        <p>Real stories, anonymized for confidentiality.</p>
      </div>

      <div className="cards-grid">
        {results.map((item) => (
          <article key={item.title} className="card">
            <h3>{item.title}</h3>
            <p>{item.details}</p>
            <p className="muted">{item.outcome}</p>
          </article>
        ))}
      </div>

      <div className="testimonial">
        <p className="quote">
          “Alex is the first lawyer who explained contracts in a way I actually
          understood. He protected my business without slowing it down.”
        </p>
        <p className="quote-author">— Small business owner, e-commerce</p>
      </div>
    </section>
  )
}

export default ResultsSection
