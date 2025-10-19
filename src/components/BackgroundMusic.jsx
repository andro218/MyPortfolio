import React, { useState, useRef, useEffect } from "react";
import { FaVolumeUp, FaVolumeMute } from "react-icons/fa";
import "./BackgroundMusic.css";

const BackgroundMusic = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  // Set up audio loop and initial volume
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.loop = true;
      audioRef.current.volume = 0.3; // Set initial volume to 30%
    }
  }, []);

  return (
    <div className="background-music">
      <audio
        ref={audioRef}
        src="/music/background-music.mp3" // You'll need to add your music file
        preload="auto"
      />
      <button
        className="music-toggle"
        onClick={togglePlay}
        aria-label={
          isPlaying ? "Mute background music" : "Play background music"
        }
      >
        {isPlaying ? <FaVolumeUp /> : <FaVolumeMute />}
      </button>
    </div>
  );
};

export default BackgroundMusic;
