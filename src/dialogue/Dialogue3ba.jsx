import React, { useRef } from "react";
import Typewriter from "../components/Typewriter";

function Dialogue3ba() {
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
      }, 500);
    }
  };

  return (
    <div>
      <audio
        ref={audioRef}
        src="./src/assets/sound/scary-blip.mp3"
        preload="auto"
      />
      <Typewriter
        text="  W-wait you're not scared?? HEllo I just threatened you and you're still trying to rizz on me?? And Not just any rizz! You're korean rizzing me."
        onStart={playSound}
        onDone={stopSound}
        className="text-main font-pixel-heading leading-relaxed"
      />
    </div>
  );
}

export default Dialogue3ba;
