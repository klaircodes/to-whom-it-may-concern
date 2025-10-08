import React, { useRef } from "react";
import Typewriter from "../components/Typewriter";

function Dialogue2() {
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
        src="./src/assets/sound/blippity.mp3"
        preload="auto"
      />
      <Typewriter
        text="  I heard so much about you!!! My name is Vivian but you can call me Vee! or Vivi! or whatever you want! What's your name?"
        onStart={playSound}
        onDone={stopSound}
        className="text-main font-pixel-heading leading-relaxed"
      />
    </div>
  );
}

export default Dialogue2;
