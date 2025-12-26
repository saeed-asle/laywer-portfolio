function Navbar({ sections }) {
  return (
    <header className="navbar">
      <h1 className="nav-logo">Alex Carter • Business Lawyer</h1>

      <nav className="nav-links">
        {sections.map((section) => (
          <a
            key={section.id}
            className="nav-link"
            href={`#${section.id}`}
          >
            {section.title}
          </a>
        ))}
      </nav>
    </header>
  )
}

export default Navbar
