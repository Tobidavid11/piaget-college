import Footer from "../../../components/footer"
import Navbar from "../../../components/navbar"
import SchoolsHero from "../schools-hero"
import SchoolCard from "../schools-card"

const schoolsData = [
  {
    title: "School of General Education",
    iconType: "general" as const,
    departments: ["Department of Education", "Department of General Studies"],
    combinations: [
      "Educational Foundation",
      "Psychology and Counseling",
      "Curriculum and Instructions",
      "Educational Technology",
      "Teaching Practice Unit",
    ],
  },
  {
    title: "School of Early Childhood Care Education",
    iconType: "early" as const,
    departments: ["Department of Early Childhood Care & Education"],
    combinations: ["All programmes under this School are Double Major"],
  },
  {
    title: "School of Primary Education",
    iconType: "primary" as const,
    departments: ["Department of Primary Education"],
    combinations: ["All programmes under this School are Double Major"],
  },
  {
    title: "School of Sciences",
    iconType: "science" as const,
    departments: ["Department of Computer Sciences"],
    combinations: ["Integrated Science/Computer Education", "Computer Technology"],
  },
  {
    title: "School of Languages",
    iconType: "languages" as const,
    departments: ["Department of Modern Languages", "Department of Nigerian Languages"],
    combinations: ["English/French", "English/Yoruba", "French/Yoruba"],
  },
]

export default function SchoolsPage() {
  return (
    <div>
      <Navbar />
      <SchoolsHero />
      
      <main className="schools-main-content">
        <div className="schools-container">
          <div className="schools-grid">
            {schoolsData.map((school, index) => (
              <SchoolCard
                key={index}
                title={school.title}
                departments={school.departments}
                combinations={school.combinations}
                iconType={school.iconType}
                index={index}
              />
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}