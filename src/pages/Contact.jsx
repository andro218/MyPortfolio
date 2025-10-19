import React from "react";
import "./Contact.css";
import "../sectionAnimations.css";
import { Github, Linkedin, Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/andro218",
      link: "https://github.com/andro218",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/tzan2233",
      link: "https://www.linkedin.com/in/tzan2233",
    },
    {
      icon: Mail,
      label: "Gmail",
      value: "tzan2233@gmail.com",
      link: "https://mail.google.com/mail/?view=cm&fs=1&to=tzan2233@gmail.com&su=Subject&body=Body%20text",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+63 963 021 6696",
      link: "tel:+639630216696",
    },
    {
      icon: MapPin,
      label: "Address",
      value: "Barangay IV, Daet, Camarines Norte",
      link: "https://maps.app.goo.gl/jWErXJDAE5nCaT7w6",
    },
  ];

  return (
    <div id="contact-sec" className="contact-section section-fade-in">
      <div className="contact-container">
        <div className="contact-brand">
          <h3 className="contact-brand-title">
            Contact Me from the Other World
          </h3>
          <p className="contact-brand-desc">
            Summon me from the shadows—I answer whispers, not echoes.
          </p>
        </div>

        <div className="contact-links">
          <h4 className="contact-section-title">Get In Touch</h4>
          <div className="contact-links-grid">
            {contactInfo.map((item, index) => {
              const Icon = item.icon;
              return (
                <a
                  key={index}
                  href={item.link}
                  target={item.link.startsWith("http") ? "_blank" : "_self"}
                  rel={
                    item.link.startsWith("http") ? "noopener noreferrer" : ""
                  }
                  className="contact-link"
                  title={item.value}
                >
                  <Icon size={20} className="contact-link-icon" />
                  <div className="contact-link-content">
                    <span className="contact-link-label">{item.label}</span>
                    <span className="contact-link-value">{item.value}</span>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
