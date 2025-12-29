"use client"

import { motion } from "framer-motion"
import { Quote } from "lucide-react"
import "../styles/testimonial.css"
import Testimonial1 from "../assets/testimonial1.jpg"
import Testimonial2 from "../assets/testimonial2.jpg"
import Testimonial3 from "../assets/testimonial3.jpg"

const testimonials = [
  {
    id: 1,
    name: "Olawale Johnson",
    role: "NCE Graduate, 2021",
    image: Testimonial1,
    quote:
      "Piaget College of Education provided me with the practical skills and confidence I needed to excel in my teaching career. The faculty's dedication is unmatched.",
  },
  {
    id: 2,
    name: "Amaka Okafor",
    role: "Primary Education Specialist",
    image: Testimonial2,
    quote:
      "The internship programs and ICT integration at Piaget truly set it apart. I felt fully prepared for the challenges of modern classroom management.",
  },
  {
    id: 3,
    name: "Tunde Bakare",
    role: "Secondary School Teacher",
    image: Testimonial3,
    quote:
      "I chose Piaget for its reputation in teacher education, and it was the best decision of my life. The environment is supportive and highly professional.",
  },
]

function Testimonials() {
  return (
    <section className="testimonials-section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="section-header"
        >
          <span className="subtitle">Alumni Stories</span>
          <h2 className="title">What Our Alumni Are Saying</h2>
        </motion.div>

        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              className="testimonial-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="quote-icon">
                <Quote size={28} strokeWidth={2.5} />
              </div>
              
              <div className="testimonial-content">
                <p className="testimonial-text">"{testimonial.quote}"</p>
              </div>

              <div className="testimonial-footer">
                <div className="testimonial-avatar">
                  <img
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                  />
                </div>
                <div className="testimonial-info">
                  <h4 className="testimonial-name">{testimonial.name}</h4>
                  <p className="testimonial-role">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials