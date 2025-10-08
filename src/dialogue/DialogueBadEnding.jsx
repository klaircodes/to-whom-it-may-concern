import React, { useRef } from "react";
import Typewriter from "../components/Typewriter";

function DialogueBadEnding() {
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
        text="  y̴̫̅̎o̵͕̤͂ű̶̥̰͍ ̴̧͒̿́a̸̳͝r̴̨̘̖̓̅ë̷͔͝ ̶̘̬̎̅d̸̰͉̋ỏ̴̡͚̩̑̿n̵̨͎͙͗̾̽ȅ̴̼̺͗̈ ̴̼̀͌ͅf̸̝̎́͋͜͜ó̴̩̾͘ȑ̴͖̩͘ ̶͓͚͆H̴̦͗A̷̲̼͗A̶̫̪͉̓̀͝H̴͔̖̽͒̕͜A̶͍͝H̴̰̐͝A̴̰̕H̸̦̆̃̑A̸̘͑͋H̵̛͜Å̴͖͎͎H̵̦̼́̚H̸̠͈̳̏A̸̦̓̐͊H̵̾ͅA̷̞̚H̸̨͔̬͂͊A̸̰̘͚̚H̸̢͐͋Ằ̵̬̩̙̚H̶̛̫͗͌A̸̢̼̬͊Ȟ̵̻̈́͛A̸̦̣̐̽͜H̶̟̦̩͛͗A̷̧̧͖͒H̷̼̳͐̎A̵̖̦̒̇̓H̴͙͌͜A̴̢͚̲̓̚A̶̙̎H̸̞͂Ĥ̴͖̅͝Ǎ̴̜̏̂H̸͓͉̃H̴̡͗͗Ḥ̶̬͊̅͗ͅA̸̰̻͑H̷͉̪̀̆̆A̴̼̭̋̍̃Ḫ̸̨͆̀́A̷̱̻͕̾͘H̵̹͖͋̃Ã̶̡͙̙̈́̿H̷͓͊A̵̧̱̜̒̋A̷̯͌̀̽H̷̹͐́͒A̶͍̯̚͝H̵̡̎̈́Ą̴͝H̴̤͂͋͝A̷̖̒͝͠Ḧ̶̳́̿͘Á̸̢͋͝H̵̩͗͐͝A̴̞̒͘͝H̷̹́̉͝ ̶̺̉̉͂g̸̉͋̉õ̵̊̈n̴̉͑ẻ̸́.̴̌̉ ̵̉͑Ď̷̊ǒ̸̂ň̵̈'̶̌́ť̷́ ̶̌̈ě̷̈v̸̌̈ě̷̈ř̴̈ ̵̌̈ť̷̈ȟ̶̈ǐ̴̈ň̸̈ǩ̷̈ ̶̌̈ǎ̸̈b̷̌̈ǒ̸̈ǔ̴̈ť̵̈ ̷̌̈ť̶̈ř̸̈y̴̌̈ǐ̵̈ň̷̈ǧ̶̈  ̧ ̧ ̧ ̧ ̧ ̧ ̧ ̧ ̧ ̧ ̧ ̧ ̧ ̧ ̧ ̧ ̧ ̧ ̧ ̧ ̧ ̧ ̧ ̧ ̧ ̧ ̧ ̧ ̧ ̧ ̧ ̧to f i n d h e r ."
        speed={5}
        onStart={playSound}
        onDone={stopSound}
        className="text-main font-pixel-heading leading-relaxed"
      />
    </div>
  );
}

export default DialogueBadEnding;
