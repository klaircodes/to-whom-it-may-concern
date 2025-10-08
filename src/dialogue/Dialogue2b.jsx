import React, { useRef } from "react";
import Typewriter from "../components/Typewriter";

function Dialogue2b() {
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
        text="  Oh? Shrish! That's a wonderful name!
         I'm so glad to meet you! My friends told me a lot about you! You're the transfer student from Vietnam!"
        onStart={playSound}
        onDone={stopSound}
        className="text-main font-pixel-heading leading-relaxed"
      />
    </div>
  );
}

export default Dialogue2b;
