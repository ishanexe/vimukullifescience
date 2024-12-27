import React from "react";
import './Contact.css';
// import "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css";

const Contact = () => {
  return (
    <>
      <div className="r">
        <h1>Contact</h1>
      </div>

      <section id="con" className="con">
        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d57813.69934336406!2d79.05060660006836!3d21.137089910257636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x3bd4c73cc376dfb5%3A0x7395fdb9132142a8!2sShubhlaxmi%20Banquet%20Hall%2C%20Kanji%20House%20Road%2C%20Binaki%2C%20Nagpur%2C%20Maharashtra!3m2!1d21.173790399999998!2d79.1258915!5e0!3m2!1sen!2sin!4v1721500412495!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            frameBorder="0"
          ></iframe>
        </div>
      </section>

      <div className="add">
        <div className="contact-item" style={{ position: "relative", top: "25px" }}>
          <div className="circle" style={{ position: "relative", bottom: "25px" }}>
            <i className="fa-solid fa-location-dot"></i>
          </div>
          <div className="location">
            <h2>Location:</h2>
            <p>
              Vimukul Life Science, 160, Indira Nagar, Indira Gandhi Gruha Nirman, Opp. Subhlaxmi Sabhagrah,
              Binaki Mangalwari, Nagpur 440017
            </p>
          </div>
        </div>

        <div className="contact-item">
          <div className="circle">
            <i className="fa-regular fa-envelope"></i>
          </div>
          <div className="mail">
            <h2>Email:</h2>
            <p>
              <a href="mailto:info@vimukullifescience.com">info@vimukullifescience.com</a>
            </p>
          </div>
        </div>

        <div className="contact-item">
          <div className="circle">
            <i className="fa-solid fa-phone"></i>
          </div>
          <div className="call">
            <h2>Call:</h2>
            <p>+917489168824</p>
          </div>
        </div>
      </div>


    </>
  );
};

export default Contact;
