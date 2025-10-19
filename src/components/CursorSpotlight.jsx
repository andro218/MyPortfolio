import React, { useEffect, useRef, useState } from "react";
import "./CursorSpotlight.css";

const LightbulbIcon = ({ isOn }) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill={isOn ? "#c62f15" : "#888"}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M9 21h6v-1H9v1zm3-19a6.5 6.5 0 00-6.5 6.5c0 2.374 1.266 4.204 2.2 5.197.542.59.8 1.08.8 1.303v1h6v-1c0-.223.258-.713.8-1.303.934-.993 2.2-2.823 2.2-5.197A6.5 6.5 0 0012 2zm1 12h-2v-2h2v2zm0-4h-2V7h2v3z" />
  </svg>
);

const CursorSpotlight = () => {
  const spotlightRef = useRef(null);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = `${e.clientX}px`;
      const y = `${e.clientY}px`;

      if (spotlightRef.current) {
        spotlightRef.current.style.setProperty("--x", x);
        spotlightRef.current.style.setProperty("--y", y);
      }
    };

    if (isVisible) {
      document.addEventListener("mousemove", handleMouseMove);
      document.body.classList.add("cursor-lamp");
    } else {
      document.removeEventListener("mousemove", handleMouseMove);
      document.body.classList.remove("cursor-lamp");
    }

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.body.classList.remove("cursor-lamp");
    };
  }, [isVisible]);

  const toggleSpotlight = () => {
    setIsVisible((prev) => !prev);
  };

  return (
    <>
      <button
        onClick={toggleSpotlight}
        aria-label={isVisible ? "Turn off spotlight" : "Turn on spotlight"}
        style={{
          position: "fixed",
          top: 20,
          right: 20,
          zIndex: 10000,
          background: "rgba(255, 255, 255, 0.1)",
          border: "none",
          borderRadius: "50%",
          padding: "8px",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transition: "background-color 0.3s ease",
        }}
        onMouseEnter={(e) =>
          (e.currentTarget.style.background = "rgba(198, 47, 21, 0.2)")
        }
        onMouseLeave={(e) =>
          (e.currentTarget.style.background = "rgba(255, 255, 255, 0.1)")
        }
      >
        <LightbulbIcon isOn={isVisible} />
      </button>

      <div
        ref={spotlightRef}
        className={`cursor-spotlight ${isVisible ? "" : "hidden"}`}
      />
    </>
  );
};

export default CursorSpotlight;
