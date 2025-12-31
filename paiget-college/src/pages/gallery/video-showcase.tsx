"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Play, X } from "lucide-react"
import "../../styles/pages/video-showcase.css"
import Clip1 from "../../assets/gallery/videos/Clip1.mp4"
import Clip2 from "../../assets/gallery/videos/Clip2.mp4"

const secondaryVideos = [
  { 
    id: 1, 
    title: "Highlights", 
    tag: "Events", 
    video: Clip1,
    thumbnail: "/college-event-1.jpg" 
  },
  { 
    id: 2, 
    title: "Academic Excellence", 
    tag: "Archive", 
    video: Clip2,
    thumbnail: "/college-event-2.jpg" 
  },
]

const VideoShowcase = () => {
  const [videoModalOpen, setVideoModalOpen] = useState(false)
  const [currentVideo, setCurrentVideo] = useState<string | null>(null)
  const [currentVideoTitle, setCurrentVideoTitle] = useState("")

  const openVideoModal = (videoSrc: string, title: string) => {
    setCurrentVideo(videoSrc)
    setCurrentVideoTitle(title)
    setVideoModalOpen(true)
  }

  const closeVideoModal = () => {
    setVideoModalOpen(false)
    setCurrentVideo(null)
    setCurrentVideoTitle("")
  }

  return (
    <section className="video-showcase-section">
      <div className="section-header">
        <span className="section-subtitle">Motion Stories</span>
        <h2>Featured Videos</h2>
      </div>

      <div className="video-grid">
        <motion.div
          className="featured-video"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="video-container">
            <iframe
              src="https://www.youtube.com/embed/KedxZzER3g8"
              title="Piaget College Documentary"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <div className="video-info">
            <h3>College Documentary</h3>
            <p>A deep dive into the history, mission, and success stories of Piaget College of Education.</p>
          </div>
        </motion.div>

        <div className="secondary-videos">
          {secondaryVideos.map((video, index) => (
            <motion.div
              key={video.id}
              className="mini-video-card"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => openVideoModal(video.video, video.title)}
            >
              <div className="mini-video-thumb">
                <video 
                  src={video.video} 
                  muted 
                  playsInline
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <div className="play-overlay">
                  <div className="play-button">
                    <Play size={28} fill="#a01e1e" color="#a01e1e" strokeWidth={0} />
                  </div>
                </div>
              </div>
              <div className="mini-video-details">
                <h4>{video.title}</h4>
                <span className="video-tag">{video.tag}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {videoModalOpen && currentVideo && (
          <motion.div
            className="video-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeVideoModal}
          >
            <button className="video-modal-close" onClick={closeVideoModal} aria-label="Close">
              <X size={28} />
            </button>

            <motion.div
              className="video-modal-content"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <video 
                src={currentVideo} 
                controls 
                autoPlay
                className="modal-video-player"
              />
              <div className="video-modal-info">
                <h3>{currentVideoTitle}</h3>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default VideoShowcase