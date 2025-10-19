import React, { useEffect, useRef, useState } from "react";

const Jumpscare = () => {
  const [showScare, setShowScare] = useState(false);
  const soundRef = useRef(null);

  useEffect(() => {
    setShowScare(true);
    if (soundRef.current) {
      soundRef.current.play();
    }
    // Hide jumpscare after 3 seconds
    const timer = setTimeout(() => setShowScare(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {showScare && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "black",
            backgroundImage:
              "url(https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNGprN2x1cmczbjd5M3UxZWlueHcwdnZ6YmN2MjVnNzI2cW4weHFmMiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/3ohjV8JRMcNVGYK10I/giphy.gif", // Replace with your own image
            backgroundSize: "cover",
            backgroundPosition: "center",
            zIndex: 9999,
          }}
        />
      )}
      <audio
        ref={soundRef}
        src="https://www.myinstants.com/media/sounds/scream.mp3" // Replace with your own sound
        preload="auto"
      />
    </>
  );
};

export default Jumpscare;
