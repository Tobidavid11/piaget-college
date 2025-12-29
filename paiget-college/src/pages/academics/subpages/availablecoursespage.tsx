import Navbar from "../../../components/navbar"
import Footer from "../../../components/footer"
import CoursesHero from "../courses-hero"
import CourseGrid from "../courses-grid"

export default function AvailableCourses() {
  return (
    <div className="available-courses-page">
      <Navbar />
      <main>
        <CoursesHero />
        <CourseGrid />
      </main>
      <Footer />
    </div>
  )
}