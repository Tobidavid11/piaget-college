"use client"

import { useEffect } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { BookOpen, Globe, Target, Users, Heart, Shield, Award, Briefcase } from "lucide-react"
import "../../styles/pages/corevalues.css"

gsap.registerPlugin(ScrollTrigger)

function CoreValues() {
  useEffect(() => {
    const items = document.querySelectorAll(".value-item")
    items.forEach((item, index) => {
      gsap.from(item, {
        scrollTrigger: {
          trigger: item,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
        scale: 0.9,
        duration: 0.6,
        delay: index * 0.1,
        ease: "back.out",
      })
    })
  }, [])

  const values = [
    { title: "Quality Education", icon: BookOpen },
    { title: "Open Access", icon: Globe },
    { title: "Student Success", icon: Target },
    { title: "Diversity", icon: Users },
    { title: "Respect", icon: Heart },
    { title: "Accountability", icon: Shield },
    { title: "Institutional Integrity", icon: Award },
    { title: "Community Service", icon: Briefcase },
  ]

  return (
    <section className="core-values-section">
      <div className="core-values-container">
        <div className="section-header">
          <h2 className="values-heading">Our Core Values</h2>
          <div className="heading-underline"></div>
          <p className="values-subtitle">
            At Piaget, we believe in these fundamental principles that guide our institution
          </p>
        </div>

        <div className="values-grid">
          {values.map((value, index) => {
            const Icon = value.icon
            return (
              <div key={index} className="value-item">
                <div className="value-icon-bg">
                  <Icon className="value-icon" />
                </div>
                <h3 className="value-title">{value.title}</h3>
                <div className="value-hover-line"></div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default CoreValues