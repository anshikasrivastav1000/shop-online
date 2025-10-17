import React from 'react'
import "./Contact.css"
function Contact() {
  return (
    <div> <form
      class="contact-form"
      action="https://formspree.io/f/mwpryodw"
  method="POST"
    >
      <h2>Contact Us</h2>

      <label for="name">Name</label>
      <input type="text" id="name" name="name" placeholder="Enter your name" required />

      <label for="email">Email</label>
      <input
        type="email"
        id="email"
        name="email"
        placeholder="Enter your email"
        required
      />

      <label for="message">Message</label>
      <textarea
        id="message"
        name="message"
        rows="5"
        placeholder="Write your message..."
        required
      ></textarea>

      <button type="submit">Send Message</button>
    </form></div>
  )
}

export default Contact