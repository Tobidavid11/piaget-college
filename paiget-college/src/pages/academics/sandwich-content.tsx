import { CheckCircle, Clock, BookOpen, Users, Award, ShieldCheck } from "lucide-react"
import "../../styles/pages/sandwich-content.css"
import AdmissionImage from "../../assets/academics.jpg"

const benefits = [
  {
    icon: <ShieldCheck size={28} />,
    title: "Government Approved",
    description:
      "Piaget College of Education is a privately owned College in Abeokuta, Ogun State, fully NCCE approved.",
  },
  {
    icon: <Clock size={28} />,
    title: "Part-Time Pace",
    description:
      "Full-time studies at a part-time pace. Attend classes only during long vacations and complete in just 3 years.",
  },
  {
    icon: <Award size={28} />,
    title: "University Pathway",
    description:
      "NCE allows you to gain admission into university with 2nd year status, completing your degree faster.",
  },
  {
    icon: <BookOpen size={28} />,
    title: "Great Value",
    description: "FREE Basic Computer classes included. Tuition is significantly lower than four-year institutions.",
  },
  {
    icon: <Users size={28} />,
    title: "Personal Attention",
    description: "Smaller class sizes taught by caring lecturers in a safe, secure, and professional environment.",
  },
  {
    icon: <CheckCircle size={28} />,
    title: "No Time Wasted",
    description: "Complete your education on time with NO STRIKES or month-long delays. We guarantee your future.",
  },
]

const SandwichContent = () => {
  return (
    <section className="sandwich-main">
      <div className="container">
        <div className="section-header text-center">
          <span className="section-subtitle">Why Choose Sandwich?</span>
          <h2>Programme Benefits</h2>
        </div>

        <div className="benefits-grid">
          {benefits.map((benefit, index) => (
            <div className="benefit-card" key={index}>
              <div className="benefit-icon">{benefit.icon}</div>
              <h3>{benefit.title}</h3>
              <p>{benefit.description}</p>
            </div>
          ))}
        </div>

        <div className="requirements-section">
          <div className="requirements-card">
            <div className="card-image">
              <img src={AdmissionImage} alt="Admission Requirements" />
            </div>
            <div className="card-content">
              <h3>Admission Requirements</h3>
              <p>Tailored for School Owners, Full-time employees, Govt. workers, and Adults with:</p>
              <ul className="req-list">
                <li>SSCE / WAEC / NECO / O'Level</li>
                <li>Grade II with credits in 5 subjects</li>
                <li>Must include Mathematics and English</li>
              </ul>

              <div className="schools-list">
                <h4>Available Schools:</h4>
                <div className="school-tags">
                  <span>Early Childhood Care</span>
                  <span>Primary Education</span>
                  <span>General Education</span>
                  <span>Languages</span>
                  <span>Sciences & Computer Studies</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SandwichContent