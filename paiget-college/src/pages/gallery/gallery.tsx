import Navbar from "../../components/navbar"
import Footer from "../../components/footer"
import GalleryHero from "./gallery-hero"
import ImageGrid from "./image-grid"
import VideoShowcase from "./video-showcase"
import "../../styles/pages/gallery.css"

function GalleryPage() {
  return (
    <div className="gallery-page">
      <Navbar />
      <GalleryHero />
      <div className="gallery-container">
        <ImageGrid />
        <VideoShowcase />
      </div>
      <Footer />
    </div>
  )
}

export default GalleryPage