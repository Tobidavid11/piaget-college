import Footer from "../components/footer"
import Navbar from "../components/navbar"
import Abouthero from "../components/about/abouthero"
import MissionVisionPhilosophy from "../components/about/missionvisionphilosophy"
import CoreValues from "../components/about/corevalues"
function aboutpage() {
  return (
    <div className="Aboutpage-container">
        <Navbar />
        <Abouthero />
        <MissionVisionPhilosophy/>
        <CoreValues/>
        <Footer />
    </div>
  )
}

export default aboutpage