import { motion } from "framer-motion"
import { Sparkles } from "lucide-react"
import "../../styles/pages/schools-hero.css"

export default function SchoolsHero() {
  return (
    <section className="hero-section-modern">
      <div className="hero-decoration hero-decoration-1" />
      <div className="hero-decoration hero-decoration-2" />
      
      <motion.div 
        className="hero-container"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="hero-tag">
          <Sparkles size={16} />
          Academics
        </div>
        <h1 className="hero-title">Schools at Piaget College</h1>
        <p className="hero-subtitle">
          Discover our diverse academic departments and subject combinations designed to shape the future of education
        </p>
        <div className="hero-breadcrumb">
          <a href="/">Home</a>
          <span className="breadcrumb-separator">/</span>
          <span className="breadcrumb-current">Schools</span>
        </div>
      </motion.div>
    </section>
  )
}