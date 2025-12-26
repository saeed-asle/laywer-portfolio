function Section({ id, title, text }) {
  return (
    <section id={id} className="page-section">
      <h2>{title}</h2>
      <p>{text}</p>
    </section>
  )
}

export default Section
