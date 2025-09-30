import React, { useState, useRef } from "react";
import backgroundMusic from "../assets/audio/background-music.mp3";

const BackgroundMusic = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <>
      <audio ref={audioRef} loop>
        <source src={backgroundMusic} type="audio/mpeg" />
      </audio>
      <button
        onClick={toggleMusic}
        className="fixed top-4 right-4 z-50 bg-white bg-opacity-90 rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group"
        aria-label={isPlaying ? "Tắt nhạc" : "Bật nhạc"}
      >
        <svg
          className={`w-6 h-6 transition-all duration-300 ${
            isPlaying
              ? "text-pink-500 animate-pulse"
              : "text-gray-400 group-hover:text-pink-400"
          }`}
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
        </svg>
      </button>
    </>
  );
};

export default BackgroundMusic;
