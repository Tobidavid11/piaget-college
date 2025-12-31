"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Maximize2, X, ChevronLeft, ChevronRight } from "lucide-react"
import "../../styles/pages/image-grid.css"
import Image1 from "../../assets/gallery/Image1.jpeg"
import Image2 from "../../assets/gallery/Image2.jpeg"
import Image3 from "../../assets/gallery/Image3.jpeg"
import Image4 from "../../assets/gallery/Image4.jpeg"
import Image5 from "../../assets/gallery/Image5.jpeg"
import Image6 from "../../assets/gallery/Image6.jpeg"
import Image7 from "../../assets/gallery/Image7.jpeg"
import Image8 from "../../assets/gallery/Image8.jpeg"
import Image9 from "../../assets/gallery/Image9.jpeg"
import Image10 from "../../assets/gallery/Image10.jpeg"
import Image11 from "../../assets/gallery/Image11.jpeg"
import Image12 from "../../assets/gallery/Image12.jpeg"
import Image13 from "../../assets/gallery/Image13.jpeg"
import Image14 from "../../assets/gallery/Image14.jpeg"
import Image15 from "../../assets/gallery/Image15.jpeg"

const galleryImages = [
  { id: 1, src: Image1, category: "Campus", title: "Main Administrative Building" },
  { id: 2, src: Image2, category: "Events", title: "Annual Convocation Ceremony" },
  { id: 3, src: Image3, category: "Campus", title: "College Facilities Overview" },
  { id: 4, src: Image4, category: "Academic", title: "Modern Lecture Hall" },
  { id: 5, src: Image5, category: "Academic", title: "Resource Centre" },
  { id: 6, src: Image6, category: "Students", title: "Student Activities" },
  { id: 7, src: Image7, category: "Academic", title: "Science Laboratory" },
  { id: 8, src: Image8, category: "Events", title: "Sports Festival" },
  { id: 9, src: Image9, category: "Campus", title: "Library Wing" },
  { id: 10, src: Image10, category: "Students", title: "Study Groups" },
  { id: 11, src: Image11, category: "Academic", title: "Computer Lab" },
  { id: 12, src: Image12, category: "Events", title: "Cultural Day" },
  { id: 13, src: Image13, category: "Campus", title: "Academic Block" },
  { id: 14, src: Image14, category: "Students", title: "Student Life" },
  { id: 15, src: Image15, category: "Events", title: "Graduation Day" },
]

const ImageGrid = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index)
    setLightboxOpen(true)
  }

  const closeLightbox = () => {
    setLightboxOpen(false)
  }

  const goToNext = () => {
    setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length)
  }

  const goToPrevious = () => {
    setCurrentImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight") goToNext()
    if (e.key === "ArrowLeft") goToPrevious()
    if (e.key === "Escape") closeLightbox()
  }

  return (
    <section className="image-grid-section">
      <div className="section-header">
        <span className="section-subtitle">Visual Journey</span>
        <h2>Photo Collection</h2>
      </div>

      <div className="image-masonry">
        {galleryImages.map((image, index) => (
          <motion.div
            key={image.id}
            className="gallery-item"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
          >
            <div className="gallery-image-wrapper">
              <img src={image.src} alt={image.title} loading="lazy" />
              <div className="gallery-item-overlay">
                <div className="overlay-content">
                  <span className="item-category">{image.category}</span>
                  <h3>{image.title}</h3>
                </div>
                <button 
                  className="view-btn" 
                  aria-label="View full image"
                  onClick={() => openLightbox(index)}
                >
                  <Maximize2 size={20} />
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            className="lightbox-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
            onKeyDown={handleKeyDown}
            tabIndex={0}
          >
            <button className="lightbox-close" onClick={closeLightbox} aria-label="Close">
              <X size={28} />
            </button>

            <button 
              className="lightbox-nav lightbox-prev" 
              onClick={(e) => { e.stopPropagation(); goToPrevious(); }}
              aria-label="Previous image"
            >
              <ChevronLeft size={32} />
            </button>

            <button 
              className="lightbox-nav lightbox-next" 
              onClick={(e) => { e.stopPropagation(); goToNext(); }}
              aria-label="Next image"
            >
              <ChevronRight size={32} />
            </button>

            <motion.div
              className="lightbox-content"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={galleryImages[currentImageIndex].src} 
                alt={galleryImages[currentImageIndex].title}
              />
              <div className="lightbox-info">
                <span className="lightbox-category">{galleryImages[currentImageIndex].category}</span>
                <h3>{galleryImages[currentImageIndex].title}</h3>
                <p className="lightbox-counter">
                  {currentImageIndex + 1} / {galleryImages.length}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default ImageGrid