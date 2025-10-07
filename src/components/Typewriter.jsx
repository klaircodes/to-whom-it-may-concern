import React, { useEffect, useState, useRef } from "react";
import { motion as Motion } from "framer-motion";

export default function Typewriter({
  text = "",
  speed = 40,
  className = "",
  onStart,
  onDone,
}) {
  const [displayed, setDisplayed] = useState("");
  const charIndex = useRef(0);

  useEffect(() => {
    setDisplayed("");
    charIndex.current = 0;

    if (!text) return;

    if (onStart) onStart();

    const interval = setInterval(() => {
      setDisplayed((prev) => {
        const nextChar = text[charIndex.current];
        return nextChar !== undefined ? prev + nextChar : prev;
      });
      charIndex.current++;

      if (charIndex.current >= text.length) {
        clearInterval(interval);
        if (onDone) onDone();
      }
    }, speed);

    return () => {
      clearInterval(interval);
    };
  }, [text, speed, onStart, onDone]);

  return (
    <Motion.div
      key={text}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={`text-lg font-pixel text-purple-900 ${className}`}
    >
      {displayed}
    </Motion.div>
  );
}
