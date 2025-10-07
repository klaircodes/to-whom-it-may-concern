import React, { useRef } from "react";
import Typewriter from "./Typewriter";

function ShitsAndSounds() {
  const audioRef = useRef(null);

  const playSound = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0; // Reset audio to the start
      audioRef.current.play();
    }
  };

  const stopSound = () => {
    if (audioRef.current) {
      setTimeout(() => {
        audioRef.current.pause();
        audioRef.current.currentTime = 0; // Reset audio to the start
      }, 500); // Delay stopping the sound by 200ms
    }
  };

  return (
    <div>
      <audio ref={audioRef} src="./src/assets/sound/blippity.mp3" preload="auto" />
      <Typewriter
        text=' Ah! Shibal Sekiya! You must be the new guy, right?'
        onStart={playSound}
        onDone={stopSound}
        className="text-main font-pixel-heading leading-relaxed"
      />
    </div>
  );
}

export default ShitsAndSounds;