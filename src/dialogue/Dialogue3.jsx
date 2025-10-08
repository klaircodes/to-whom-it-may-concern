import React, { useRef } from "react";
import Typewriter from "../components/Typewriter";

function Dialogue3() {
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
        text="  D̸̝́į̸̇d̷͚̎ ̴̝̾y̴͔͝o̴̧̕u̶̮̒ ̵̪̇r̵̠͊e̵̥͌à̵̯ĺ̴̩l̷͈̉ỵ̴̃ ̵͇̆t̴̺̀h̸͖͋í̵̟n̸̢̋k̵̑ͅ ̷͔͝y̵̦̅ó̴͍u̶̳͂ ̵̘͂h̴͍̿a̷̡̐d̶̯̀ ̷̛̣å̸̡ ̸͖̓c̷͖͗h̷̡͌o̵̥͆î̴̥c̶̩̔é̵̼?̴̥͂"
        onStart={playSound}
        onDone={stopSound}
        speed={10}
        className="text-main font-pixel-heading leading-relaxed"
      />
    </div>
  );
}

export default Dialogue3;
