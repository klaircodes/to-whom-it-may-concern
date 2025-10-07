import { useEffect } from 'react'
import { motion as Motion } from 'framer-motion'
import { useLocation } from 'react-router-dom'

export default function Pop({ children, delay = 0, className = '' }) {
  const location = useLocation()

  useEffect(() => {
  }, [location.pathname])

  return (
    <Motion.div
      key={location.pathname}  //reanimation
      className={className}
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94], delay }}
    >
      {children}
    </Motion.div>
  )
}
