import { motion } from "framer-motion"
import "../../styles/pages/contact-hero.css"

function ContactHero() {
  return (
    <section className="contact-hero">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="contact-hero-content"
        >
          <span className="hero-badge">Get In Touch</span>
          <h1>Contact Us</h1>
          <p>We're here to help and answer any question you might have.</p>
        </motion.div>
      </div>
    </section>
  )
}

export default ContactHero