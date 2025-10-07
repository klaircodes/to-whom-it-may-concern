import React, { useRef } from "react";
import Typewriter from "./Typewriter";

function Dialogue1() {
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
      <audio ref={audioRef} src="./src/assets/sound/blippity.mp3" preload="auto" />
      <Typewriter
        text='  OMG!!!! Im like sooooo excited to meet you!!! My name is Vivian! But you can call me Vivi! Hehe~ And yours?'
        onStart={playSound}
        onDone={stopSound}
        className="text-main font-pixel-heading leading-relaxed"
      />
    </div>
  );
}

export default Dialogue1;