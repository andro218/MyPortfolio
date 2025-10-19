import React, { useState, useEffect } from "react";
import "./Sidebar.css";
import { Home, User, Folder, Mail } from "lucide-react";

const Sidebar = () => {
  const [active, setActive] = useState("home");

  const menuItems = [
    { id: "home", label: "Home", icon: <Home size={22} /> },
    { id: "about", label: "About", icon: <User size={22} /> },
    { id: "projects", label: "Projects", icon: <Folder size={22} /> },
    { id: "contact", label: "Contact", icon: <Mail size={22} /> },
  ];

  // Detect active section while scrolling
  useEffect(() => {
    const handleScroll = () => {
      menuItems.forEach((item) => {
        const section = document.querySelector(`#${item.id}-sec`);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (
            rect.top <= window.innerHeight / 2 &&
            rect.bottom >= window.innerHeight / 2
          ) {
            setActive(item.id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll handler
  const handleClick = (id) => {
    setActive(id);
    const section = document.querySelector(`#${id}-sec`);
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <aside className="simple-sidebar">
      {/* 🔹 Clickable vertical logo (only in home section) */}
      {active === "home" && (
        <div
          className="vertical-title fade-in"
          onClick={() => handleClick("home")}
          style={{ cursor: "pointer" }}
          title="Back to Home"
        ></div>
      )}

      {/* 🔹 Menu Items */}
      <div className="menu-items">
        {menuItems.map((item) => (
          <div
            key={item.id}
            className={`sidebar-item ${active === item.id ? "active" : ""}`}
            onClick={() => handleClick(item.id)}
          >
            <div className="icon">{item.icon}</div>
            <div className="label">{item.label}</div>
          </div>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;
