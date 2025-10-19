import React from "react";
import "./Footer.css";
import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      link: "https://github.com/andro218",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      link: "https://www.linkedin.com/in/tzan2233",
    },
    {
      icon: Mail,
      label: "Email",
      link: "https://mail.google.com/mail/?view=cm&fs=1&to=tzan2233@gmail.com&su=Subject&body=Body%20text",
    },
  ];

  return (
    <footer className="footer">
      <div className="footer-bottom">
        <p className="footer-copyright">
          &copy; 2025 Raben Andro Lagumen. All rights reserved.
        </p>
        <div className="footer-socials">
          {socialLinks.map((item, index) => {
            const Icon = item.icon;
            return (
              <a
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                title={item.label}
              >
                <Icon size={18} />
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
