import { motion } from "framer-motion"
import { ChevronRight, GraduationCap, BookOpen, Microscope, Languages, Baby } from "lucide-react"
import "../../styles/pages/school-card.css"

interface SchoolCardProps {
  title: string
  departments: string[]
  combinations: string[]
  iconType: "general" | "early" | "primary" | "science" | "languages"
  index: number
}

const iconMap = {
  general: GraduationCap,
  early: Baby,
  primary: BookOpen,
  science: Microscope,
  languages: Languages,
}

export default function SchoolCard({ title, departments, combinations, iconType, index }: SchoolCardProps) {
  const Icon = iconMap[iconType]
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="school-card-modern"
    >
      <div className="card-accent-line" />
      
      <div className="card-header-modern">
        <div className="card-icon-wrapper-modern">
          <Icon size={28} />
        </div>
        <h3 className="card-title-modern">{title}</h3>
      </div>

      <div className="card-body-modern">
        <div className="card-section-modern">
          <h4 className="section-title-modern">
            <div className="title-indicator" />
            Departments
          </h4>
          <ul className="section-list-modern">
            {departments.map((dept, i) => (
              <li key={i}>
                <ChevronRight size={16} className="list-icon" />
                <span>{dept}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="card-section-modern">
          <h4 className="section-title-modern">
            <div className="title-indicator" />
            Major/Subjects Combination
          </h4>
          <ul className="section-list-modern">
            {combinations.map((comb, i) => (
              <li key={i}>
                <ChevronRight size={16} className="list-icon" />
                <span>{comb}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="card-footer-modern">
        <button className="requirements-btn-modern">
          Entry Requirements
          <ChevronRight size={18} />
        </button>
      </div>
    </motion.div>
  )
}