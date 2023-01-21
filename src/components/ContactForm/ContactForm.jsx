//Utils
import React from 'react'

//Style
import './ContactForm.css'

//Function
function ContactForm() {
  return (
    <div className="ContactForm">
      <form name="contact" method="post" data-netlify="true" onSubmit="submit">
        <input type="hidden" name="form-name" value="contact" />

        <div className="nameBox">
          <label for="name">Nom & Prénom</label>
          <input type="text" name="name" aria-label="name" required="true" />
        </div>

        <div className="emailBox">
          <label for="email">Email</label>
          <input type="email" name="email" aria-label="email" required="true" />
        </div>

        <div className="messageBox">
          <label for="message">Message</label>
          <textarea
            name="message"
            aria-label="message"
            required="true"
          ></textarea>
        </div>

        <button type="submit">Envoyer !</button>
      </form>
    </div>
  )
}

export default ContactForm
