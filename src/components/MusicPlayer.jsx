import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import defaultSong from "../assets/sound/bg-music.mp3";
import girlPath2Song from "../assets/sound/girlpath2-song.mp3";
import { FiVolumeX, FiVolume2 } from "react-icons/fi";

export default function MusicPlayer({ loop = true }) {
  const location = useLocation();
  const audioRef = useRef(new Audio(defaultSong));
  const [isMuted, setIsMuted] = useState(false);
  const [currentSong, setCurrentSong] = useState(defaultSong);

  useEffect(() => {
    const audio = audioRef.current;
    audio.loop = loop;
    audio.muted = isMuted;

    if (location.pathname === "/girlpath2") {
      if (currentSong !== girlPath2Song) {
        audio.src = girlPath2Song;
        audio.currentTime = 0;
        audio.play();
        setCurrentSong(girlPath2Song);
      }
    } else {
      if (currentSong !== defaultSong) {
        audio.src = defaultSong;
        audio.currentTime = 0;
        audio.play();
        setCurrentSong(defaultSong);
      }
    }

    if (audio.paused) {
      audio.play();
    }
  }, [location.pathname, isMuted, loop, currentSong]);

  const toggleMute = () => {
    const audio = audioRef.current;
    audio.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  return (
    <div
      style={{
        position: "fixed",
        top: "2rem",
        right: "2rem",
        zIndex: 9999,
      }}
    >
      <button
        onClick={toggleMute}
        style={{
          background: "none",
          border: "none",
          cursor: "pointer",
          color: "#41419F",
        }}
      >
        {isMuted ? <FiVolumeX size={40} /> : <FiVolume2 size={40} />}
      </button>
    </div>
  );
}
