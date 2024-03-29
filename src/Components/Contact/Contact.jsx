import React from "react";
import "../Contact/contact.css";
import Telephone from "../../assets/telephone.jpg";

export default function Contact() {
  return (
    <main>
      <section id="contact">
        <div className="contact-container">
          <form
            action="https://api.web3forms.com/submit"
            method="POST"
            className="contact-left"
          >
            <input
              type="hidden"
              name="access_key"
              value="2c30fff1-f218-496d-9f51-7f635722079a"
            ></input>
            <div className="contact-left-title">
              <h2>Get in touch</h2>
              <hr />
            </div>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="contact-inputs"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="contact-inputs"
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              className="contact-inputs"
              required
            />
            <button type="submit">
              Submit <i className="fa-solid fa-arrow-right"></i>
            </button>
          </form>
          <div className="contact-right">
            <img src={Telephone}></img>
          </div>
        </div>
      </section>
    </main>
  );
}
