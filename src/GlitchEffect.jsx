import { motion as Motion } from "framer-motion";

export default function GlitchEffect({ children, delay = 2 }) {
  return (
    <Motion.div
      className="glitch-container"
      initial="hidden"
      animate="visible"
      variants={superFastFlickerAndShakeVariants(delay)}
    >
      {children}
    </Motion.div>
  );
}

const superFastFlickerAndShakeVariants = (delay) => ({
  hidden: { opacity: 1, x: 0 },
  visible: {
    opacity: [1, 0, 1, 0.5, 1, 0, 1, 1],
    x: [0, -10, 10, -15, 15, 0, 0],
    transition: {
      repeat: Infinity,
      repeatType: "loop",
      duration: 0.5,
      times: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 1],
      repeatDelay: delay, 
    },
  },
});