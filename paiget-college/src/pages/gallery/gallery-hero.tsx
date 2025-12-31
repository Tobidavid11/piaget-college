"use client"

import { motion } from "framer-motion"
import "../../styles/pages/gallery-hero.css"

const GalleryHero = () => {
  return (
    <section className="gallery-hero">
      <div className="container">
        <motion.div
          className="gallery-hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="hero-badge">Our Visual Story</span>
          <h1>Campus Gallery</h1>
          <p>Capturing the vibrant life, academic excellence, and memorable moments at Piaget College of Education.</p>
        </motion.div>
      </div>
    </section>
  )
}

export default GalleryHero