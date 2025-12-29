import Navbar from "../../../components/navbar"
import Footer from "../../../components/footer"
import SandwichHero from "../sandwich-hero"
import SandwichContent from "../sandwich-content"
import "../../../styles/pages/sandwich-programme.css"

const SandwichProgramme = () => {
  return (
    <div className="sandwich-page">
      <Navbar />
      <main>
        <SandwichHero />

        <SandwichContent />

        <section className="sandwich-schedule">
          <div className="container">
            <div className="schedule-card">
              <div className="schedule-header">
                <h2>Programme Timetable</h2>
                <p>NCE Intensive Accelerated Programme Schedule</p>
              </div>

              <div className="schedule-grid">
                <div className="semester-block">
                  <h3>First Semester</h3>
                  <div className="schedule-timeline">
                    <div className="timeline-item">
                      <span className="date">Week 1</span>
                      <p>Open House, Registration & Fee Payment</p>
                    </div>
                    <div className="timeline-item highlight">
                      <span className="date">Week 2</span>
                      <p>Instructions & Lectures Begin</p>
                    </div>
                    <div className="timeline-item">
                      <span className="date">Week 5</span>
                      <p>Lectures End</p>
                    </div>
                    <div className="timeline-item exams">
                      <span className="date">Week 6</span>
                      <p>1st Semester Exams</p>
                    </div>
                  </div>
                </div>

                <div className="semester-block">
                  <h3>Second Semester</h3>
                  <div className="schedule-timeline">
                    <div className="timeline-item">
                      <span className="date">Week 7</span>
                      <p>Open House & Registration</p>
                    </div>
                    <div className="timeline-item highlight">
                      <span className="date">Week 8</span>
                      <p>Instructions Begin</p>
                    </div>
                    <div className="timeline-item">
                      <span className="date">Week 11</span>
                      <p>Lectures End</p>
                    </div>
                    <div className="timeline-item exams">
                      <span className="date">Week 12</span>
                      <p>Exams Start</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="schedule-footer">
                <p>
                  <strong>Recommendation:</strong> This is an intensive, accelerated NCE programme. Participants are
                  strongly advised to attend all classes.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="call-to-action">
          <div className="container">
            <div className="cta-box">
              <h2>Don't Waste Another Year.</h2>
              <p>Call now & get started with your professional journey.</p>
              <a href="tel:08097729616" className="btn btn-primary">
                0809 772 9616
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default SandwichProgramme