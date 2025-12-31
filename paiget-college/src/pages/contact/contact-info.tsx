import { motion } from "framer-motion"
import { Mail, Phone, MapPin } from "lucide-react"
import "../../styles/pages/contact-info.css"

const contactDetails = [
  {
    icon: <MapPin size={24} />,
    title: "Address",
    details: ["34, Quarry Road, Ibara,", "Abeokuta, Ogun State, Nigeria."],
  },
  {
    icon: <Phone size={24} />,
    title: "Phone",
    details: ["+234-8097729616", "+234-9036002738"],
  },
  {
    icon: <Mail size={24} />,
    title: "Email",
    details: ["info@piagetcoe.edu.ng"],
  },
]

function ContactInfo() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="contact-info"
    >
      <div className="section-header">
        <h2>Get in Touch</h2>
        <p>Feel free to reach out through any of these channels.</p>
      </div>

      <div className="info-cards">
        {contactDetails.map((item, index) => (
          <motion.div
            key={index}
            className="info-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="icon-wrapper">{item.icon}</div>
            <div className="info-content">
              <h3>{item.title}</h3>
              {item.details.map((detail, i) => (
                <p key={i}>{detail}</p>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="map-container"
      >
        <iframe
          title="Piaget College Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3958.943144578168!2d3.3364993!3d7.1325732!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103a4c0c1b0c0c1b%3A0x1b0c1b0c1b0c1b0c!2s34%20Quarry%20Rd%2C%20Ibara%2C%20Abeokuta%20111101%2C%20Ogun%2C%20Nigeria!5e0!3m2!1sen!2s!4v1715850000000!5m2!1sen!2s"
          width="100%"
          height="320"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
        />
      </motion.div>
    </motion.div>
  )
}

export default ContactInfo