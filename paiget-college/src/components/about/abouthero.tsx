"use client"

import { useEffect } from "react"
import { motion } from "framer-motion"
import { Users, BookOpen, Award, Sparkles } from "lucide-react"
import gsap from "gsap"
import "../../styles/pages/abouthero.css"

function Abouthero() {
  useEffect(() => {
    gsap.from(".about-hero-badge", {
      scale: 0.8,
      duration: 0.6,
      ease: "back.out(1.7)",
    })

    gsap.from(".about-hero-title", {
      y: 50,
      duration: 1,
      delay: 0.2,
      ease: "power3.out",
    })

    gsap.from(".about-hero-description", {
      y: 30,
      duration: 1,
      delay: 0.4,
      ease: "power3.out",
    })

    gsap.from(".about-stat-card", {
      y: 40,
      duration: 0.8,
      stagger: 0.15,
      delay: 0.6,
      ease: "power3.out",
    })
  }, [])

  const stats = [
    { icon: Users, value: "500+", label: "Students Enrolled" },
    { icon: BookOpen, value: "50+", label: "Expert Faculty" },
    { icon: Award, value: "15+", label: "NCE Programs" },
  ]

  return (
    <div className="about-hero-section">
      <div className="about-hero-pattern"></div>
      <div className="about-hero-gradient"></div>

      <div className="about-hero-content">
        <motion.div
          className="about-hero-badge"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400 }}
        >
          <Sparkles className="about-badge-icon" />
          <span>Excellence in Education</span>
        </motion.div>

        <h1 className="about-hero-title">
          About <span className="hero-title-gradient">Our Journey</span>
        </h1>

        <p className="about-hero-description">
          Piaget College of Education is an autonomous private institution committed to providing quality higher
          education and encouraging the advancement of learning throughout Nigeria. We aim to prepare students with a
          solid background that will enhance the present educational standard in terms of skills and knowledge in the
          pursuit of the NCE programme.
        </p>

        <div className="about-hero-stats-grid">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={index}
                className="about-stat-card"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div
                  className="about-stat-icon-wrapper"
                  initial={{ rotate: 0 }}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <Icon className="about-stat-icon" />
                </motion.div>
                <div className="about-stat-value">{stat.value}</div>
                <div className="about-stat-label">{stat.label}</div>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          className="about-hero-blob about-hero-blob-1"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.15, 0.25, 0.15],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="about-hero-blob about-hero-blob-2"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.15, 0.3, 0.15],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="about-hero-wave">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="#f8fafc" fillOpacity="1"/>
        </svg>
      </div>
    </div>
  )
}

export default Abouthero