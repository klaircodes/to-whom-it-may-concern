import { useEffect } from 'react'
import { motion as Motion } from 'framer-motion'

let hasMounted = false

export default function Pop({ children, delay = 0, className = '' }) {
  const initialProp = hasMounted ? false : { opacity: 0, scale: 0.8, y: 20 }

  useEffect(() => {
    hasMounted = true
  }, [])

  return (
    <Motion.div
      className={className}
      initial={initialProp}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94], delay }}
    >
      {children}
    </Motion.div>
  )
}
