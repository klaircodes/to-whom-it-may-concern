import { memo } from 'react'
import { motion as Motion } from 'framer-motion'
import purpleStar from './assets/images/purple-star.svg'

const Stars = memo(function Stars() {
  const fixed = [
    { left: 6, top: 12, size: 1.8, opacity: 1, twinkleDur: 1.6, twinkleDelay: 0.1 },
    { left: 78, top: 8, size: 2.6, opacity: 1, twinkleDur: 2.1, twinkleDelay: 0.6 },
    { left: 50, top: 30, size: 1.2, opacity: 1, twinkleDur: 1.2, twinkleDelay: 0.3 },
    { left: 20, top: 50, size: 2.0, opacity: 1, twinkleDur: 1.8, twinkleDelay: 0.5 },
    { left: 72, top: 60, size: 1.4, opacity: 1, twinkleDur: 1.4, twinkleDelay: 0.2 },
    { left: 40, top: 10, size: 3.2, opacity: 1, twinkleDur: 2.4, twinkleDelay: 0.9 },
    { left: 90, top: 80, size: 3.2, opacity: 1, twinkleDur: 1.9, twinkleDelay: 0.7 },
    { left: 2, top: 78, size: 2.4, opacity: 1, twinkleDur: 1.5, twinkleDelay: 0.4 },
  ]

  return (
    <>
      {fixed.map((s, idx) => (
        <Motion.img
          key={idx}
          src={purpleStar}
          alt="decorative star"
          className={`absolute pointer-events-none z-10`}
          style={{ left: `${s.left}%`, top: `${s.top}%`, width: `${s.size}rem`, height: `${s.size}rem`, opacity: s.opacity, transformOrigin: 'center center' }}
          animate={{ scale: [0.8, 1.15], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: s.twinkleDur, delay: s.twinkleDelay, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
        />
      ))}
    </>
  )
})

export default Stars
