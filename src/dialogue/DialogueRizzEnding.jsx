import React, { useRef } from "react";
import Typewriter from "../components/Typewriter";

function DialogueRizzEnding() {
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
        text="  Aaaaa Shrish-senpai... I-I'm yours to command... Babycakes..."
        onStart={playSound}
        onDone={stopSound}
        className="text-main font-pixel-heading leading-relaxed"
      />
    </div>
  );
}

export default DialogueRizzEnding;
