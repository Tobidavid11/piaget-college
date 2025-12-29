import "../../styles/pages/sandwich-hero.css"

const SandwichHero = () => {
  return (
    <section className="sandwich-hero">
      <div className="container">
        <div className="sandwich-hero-content">
          <span className="hero-badge">Academic Programmes</span>
          <h1>Sandwich Programme</h1>
          <p className="hero-tagline">An innovative way to complete your NCE while working full time.</p>
          <div className="hero-info-grid">
            <div className="info-item">
              <span className="info-label">When</span>
              <span className="info-value">Aug. 3 – Oct. 16, 2024</span>
            </div>
            <div className="info-item">
              <span className="info-label">Where</span>
              <span className="info-value">Piaget College of Education</span>
            </div>
            <div className="info-item">
              <span className="info-label">Contact</span>
              <span className="info-value">0809 772 9616</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SandwichHero