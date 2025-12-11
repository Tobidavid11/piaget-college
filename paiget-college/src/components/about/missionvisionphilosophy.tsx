"use client"

import { useEffect } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Eye, Zap, Lightbulb } from "lucide-react"
import "../../styles/pages/missionvisionphilosophy.css"

gsap.registerPlugin(ScrollTrigger)

function MissionVisionPhilosophy() {
  useEffect(() => {
    const cards = document.querySelectorAll(".mvp-card")
    cards.forEach((card, index) => {
      gsap.from(card, {
        scrollTrigger: {
          trigger: card,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
        y: 50,
        duration: 0.8,
        delay: index * 0.2,
        ease: "power3.out",
      })
    })
  }, [])

  return (
    <section className="mvp-section">
      <div className="mvp-container">
        <div className="section-header">
          <h2 className="mvp-heading">Mission, Vision & Philosophy</h2>
          <div className="heading-underline"></div>
        </div>

        <div className="mvp-grid">
          <div className="mvp-card mvp-vision">
            <div className="mvp-icon-wrapper">
              <Eye className="mvp-icon" />
            </div>
            <h3 className="mvp-title">Our Vision</h3>
            <p className="mvp-text">
              Piaget College of Education's aim is to set education standards for the future. We are committed to
              excellence and endeavor to provide an optimum teaching and learning environment. At Piaget, We Believe
              Teachers Matter.
            </p>
          </div>

          <div className="mvp-card mvp-mission">
            <div className="mvp-icon-wrapper">
              <Zap className="mvp-icon" />
            </div>
            <h3 className="mvp-title">Our Mission</h3>
            <ul className="mvp-list">
              <li>
                Prepare educators, counselors, administrators, and professionals to be life-long, innovative decision
                makers
              </li>
              <li>Effectively train students to achieve goals, competencies, and skills identified by NCCE</li>
              <li>Encourage maximum potential growth in our learning community</li>
            </ul>
          </div>

          <div className="mvp-card mvp-philosophy">
            <div className="mvp-icon-wrapper">
              <Lightbulb className="mvp-icon" />
            </div>
            <h3 className="mvp-title">Our Philosophy</h3>
            <ul className="mvp-list">
              <li>Produce highly qualified, motivated and efficient classroom teachers</li>
              <li>Encourage the spirit of inquiry and creativity in teachers</li>
              <li>Provide intellectual and professional background for teaching excellence</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MissionVisionPhilosophy