//Utils
import React from 'react'
import { Helmet } from 'react-helmet'

//Components
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import ContactForm from '../../components/ContactForm/ContactForm'

//Style
import './Contact.css'

//Function
function Contact() {
  return (
    <div className="ContactPage">
      <Helmet>
        <title>Mascaro.dev | Contact</title>
      </Helmet>
      <Header />
      <div className="ContactBloc">
        <h1>Contact</h1>
        <ContactForm />
        <h2>Pour tout contact par courrier : </h2>
        <div id="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2696.6550912327234!2d-0.5446720840756462!3d47.477150304904036!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x480878effffa30a9%3A0x1812e46fcedea1f7!2s4%20All.%20Georges%20Pompidou%2C%2049100%20Angers!5e0!3m2!1sfr!2sfr!4v1674331764704!5m2!1sfr!2sfr"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Contact
