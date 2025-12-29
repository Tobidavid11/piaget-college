import { motion } from "framer-motion"
import { BookOpen } from "lucide-react"
import "../../styles/pages/courses-hero.css"

export default function CoursesHero() {
  return (
    <section className="courses-hero-modern">
      <div className="courses-hero-bg">
        <div className="floating-shape shape-1" />
        <div className="floating-shape shape-2" />
        <div className="floating-shape shape-3" />
      </div>
      
      <motion.div 
        className="courses-hero-content"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div 
          className="hero-icon-wrapper"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
        >
          <BookOpen size={40} />
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Available Courses
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          Explore our diverse range of NCE programmes and professional courses designed to shape future educators
        </motion.p>
        
        <motion.div 
          className="hero-stats"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <div className="stat-item">
            <span className="stat-number">5+</span>
            <span className="stat-label">Schools</span>
          </div>
          <div className="stat-divider" />
          <div className="stat-item">
            <span className="stat-number">15+</span>
            <span className="stat-label">Programmes</span>
          </div>
          <div className="stat-divider" />
          <div className="stat-item">
            <span className="stat-number">NCE</span>
            <span className="stat-label">Certified</span>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}