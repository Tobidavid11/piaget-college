"use client"

import Navbar from "../../components/navbar"
import Footer from "../../components/footer"
import ContactHero from "./contact-hero"
import ContactInfo from "./contact-info"
import ContactForm from "./contact-form"
import "../../styles/pages/contactus.css"

function ContactUs() {
  return (
    <div className="contact-page">
      <Navbar />
      <ContactHero />
      
      <section className="contact-content">
        <div className="container">
          <div className="contact-grid">
            <ContactInfo />
            <ContactForm />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default ContactUs