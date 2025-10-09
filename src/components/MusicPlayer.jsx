import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import defaultSong from "../assets/sound/bg-music.mp3";
import horrorSong from "../assets/sound/horror.mp3";
import horrorRizzSong from "../assets/sound/horror-rizz.mp3";
import quackSound from "../assets/sound/quack.mp3";
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

    const horrorPaths = [
      "/girlpath1ba",
      "/girlpath3",
      "/girlpath3b",
      "/girlpath3bb",
      "/girlpathbadending",
    ];

    const horrorRizzPaths = [
      "/girlpath3a",
      "/girlpath3ba",
      "/girlpath3aa",
      "/girlpathrizzending",
    ];

    const quackPath = "/girlpathbadending";

    let newSong = defaultSong;

    if (horrorPaths.includes(location.pathname)) {
      newSong = horrorSong;
    } else if (horrorRizzPaths.includes(location.pathname)) {
      newSong = horrorRizzSong;
    }

    if (currentSong !== newSong) {
      audio.src = newSong;
      audio.currentTime = 0;
      audio.play();
      setCurrentSong(newSong);
    }

    if (location.pathname === quackPath) {
      const quackAudio = new Audio(quackSound);
      quackAudio.play();
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
