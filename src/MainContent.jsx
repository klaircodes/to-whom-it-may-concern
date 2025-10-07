import { useState } from 'react'
import { motion as Motion } from 'framer-motion'
import { FiMinus, FiSquare, FiX, FiSkipBack, FiPause, FiSkipForward, FiChevronUp, FiChevronDown } from 'react-icons/fi'
import complimentHeadingBg from './assets/images/compliment-heading-bg2.svg'
import Stars from './Stars.jsx'
import Pop from './Pop.jsx'
import './App.css'
import './pixel-borders.css'
import clickSound from './assets/sound/blip-select.mp3';

function MainContent() {
  const [compliment, setCompliment] = useState('"You are amazing!"')
  const [isAnimating, setIsAnimating] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  
  const playSound = () => {
    const audio = new Audio(clickSound);
    audio.play();
  };

  const generateCompliment = async () => {
    setIsAnimating(true)
    setIsLoading(true)
    setCompliment('"loading..."')
    const defaultFallback = '"You are amazing!"'
    let gotText = ''
    try {
      const res = await fetch('https://rizzapi.vercel.app/category/Complimentary?page=1&perPage=50')
      if (res.ok) {
        const data = await res.json()
        if (Array.isArray(data) && data.length > 0) {
          const item = data[Math.floor(Math.random() * data.length)]
          gotText = item?.text ?? (typeof item === 'string' ? item : '')
        } else if (data && data.text) {
          gotText = data.text
        }
      }
      setCompliment(gotText ? `"${gotText}"` : defaultFallback)
    } catch (err) {
      console.error('Failed to fetch or set compliment:', err)
      setCompliment(defaultFallback)
    } finally {
      setIsLoading(false)
      setTimeout(() => setIsAnimating(false), 600)
    }
  }

  return (
    <Pop className="w-full max-w-3xl mx-auto bg-div shadow-2xl font-pixel pixel-corners">
      {/* Header */}
  <Pop delay={0.15} className="bg-div px-4 py-4 flex justify-between items-center border-b-2 border-main relative">
        <img 
          src={complimentHeadingBg} 
          alt="header background" 
          className="absolute  h-12 w-auto object-contain pointer-events-none"
        />
        <span className="text-white text-xs font-pixel-subheading relative z-10 pl-12">
          rizz generator.exe
        </span>
        <div className="flex space-x-2">
          <span className="bg-none px-2 py-2 text-xs border-2 border-white cursor-pointer hover:scale-105 font-pixel-paragraph flex items-center justify-center text-secondary rounded-sm"><FiMinus className="thick-svg" /></span>
          <span className="bg-none px-2 py-2 text-xs border-2 border-white cursor-pointer hover:scale-105 font-pixel-paragraph flex items-center justify-center text-secondary rounded-sm"><FiSquare className="thick-svg" /></span>
          <span className="bg-none px-2 py-2 text-xs border-2 border-white cursor-pointer hover:scale-105 font-pixel-paragraph flex items-center justify-center text-secondary rounded-sm"><FiX className="thick-svg" /></span>
        </div>
      </Pop>
      
      {/* Main Section */}
      <div className="flex relative">
        {/* Side Panel Border */}
        <div className="w-4 bg-div border-r-2 border-main flex flex-col items-center py-4 space-y-2">
          <div className="w-1 h-3 bg-purple-200 rounded-full opacity-60"></div>
          <div className="w-1 h-2 bg-white rounded-full opacity-40"></div>
          <div className="w-2 h-4 bg-purple-100 rounded-full opacity-30"></div>
        </div>
        
        {/* Background */}
        <div className="flex-1 bg-grid-gradient p-4 relative">
          {/* Random purple stars */}
          <Stars />
      
          <div className="text-center">
            {/* Subheading Container */}
            <Pop delay={0.3} className="text-main text-sm mb-8 bg-primary p-2 pixel-corners">
              <div className="mb-4 font-pixel-subheading">what's up bb gorl? lemme rizz u up</div>
              
              {/* Compliment Display */}
              <Pop delay={0.45} className="bg-secondary p-6 mb-4 min-h-60 flex items-center justify-center shadow-inner pixel-corners compliment-bg">
                <Motion.div
                  className={`text-lg text-main font-pixel-heading leading-relaxed`}
                  animate={isAnimating ? { scale: [1, 1.02, 1], opacity: [1, 0.95, 1] } : { scale: 1, opacity: 1 }}
                  transition={{ duration: 0.55, ease: 'easeOut' }}
                >
                  {compliment}
                </Motion.div>
              </Pop>
              
              {/* Player Controls */}
              <div className="flex justify-center items-center space-x-4">
                <button className="bg-div hover:opacity-80 border-2 border-main px-3 py-1 rounded text-secondary flex items-center justify-center"><FiSkipBack /></button>
                <button className="bg-div hover:opacity-80 border-2 border-main px-3 py-1 rounded text-secondary flex items-center justify-center"><FiPause /></button>
                <button className="bg-div hover:opacity-80 border-2 border-main px-3 py-1 rounded text-secondary flex items-center justify-center"><FiSkipForward /></button>
                <div className="bg-primary border border-main rounded-full w-full relative ml-4">
                  <div className="bg-div items-center h-1 rounded-full mt-0.5 ml-0.5 mb-0.5 w-1/3"></div>
                  <div className="absolute top-0 left-1/3 transform -translate-x-1/2 w-4 h-2 bg-div border border-main rounded-sm"></div>
                </div>
              </div>
            </Pop>
          </div>
          
          {/* Generate Button */}
          <div className="text-center">
            <Pop delay={0.45} className="inline-block">
              <button 
                className="custom-hover bg-tertiary hover:opacity-80 text-secondary font-pixel-heading py-3 px-8 shadow-lg transform hover:scale-105 transition-all duration-200 pixel-corners disabled:opacity-60"
                onClick={() => {
                  playSound();
                  generateCompliment();
                }}
                disabled={isLoading}
              >
                {isLoading ? 'LOADING...' : 'GENERATE'}
              </button>
            </Pop>
          </div>
        </div>
        
        {/* Scrollbar */}
        <div className="w-8 bg-secondary border-l-2 border-main flex flex-col p-1 ">
          <div className="bg-tertiary hover:opacity-80 border-2 border-main rounded-sm flex-none h-5 flex items-center justify-center cursor-pointer text-xs text-primary font-pixel-paragraph"><FiChevronUp className="thick-svg" /></div>
          <div className="flex-1 bg-secondary relative">
            <div className="absolute top-2 left-0.5 right-0.5 h-24 bg-tertiary border-2 border-main rounded-sm"></div>
          </div>
          <div className="bg-tertiary hover:opacity-80 border-2 border-main rounded-sm flex-none h-5 flex items-center justify-center cursor-pointer text-xs text-primary font-pixel-paragraph"><FiChevronDown className="thick-svg" /></div>
        </div>
      </div>
      
      {/* Footer */}
      <div className="bg-div border-t-2 border-main px-3 py-2 flex justify-end">
        <div className="w-6 h-6 bg-secondary border border-main rounded flex items-center justify-center">
          <div className="w-3 h-3 bg-div rounded"></div>
        </div>
      </div>
    </Pop>
  )
}

export default MainContent;