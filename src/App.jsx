import { useState } from 'react'
import { motion as Motion } from 'framer-motion'
import { FiMinus, FiSquare, FiX, FiSkipBack, FiPause, FiSkipForward, FiChevronUp, FiChevronDown } from 'react-icons/fi'
import complimentHeadingBg from './assets/images/compliment-heading-bg.svg'
import Stars from './Stars.jsx'
import Pop from './Pop.jsx'
import './App.css'
import './pixel-borders.css'

function App() {
  const [compliment, setCompliment] = useState('"You are amazing!"')
  const [isAnimating, setIsAnimating] = useState(false)
  
  const compliments = [
    '"You are amazing!"',
    '"You goon to femboys!"',
    '"Even if you were cloned, you\'d still be the better-looking one."',
    '"Tell your parents I said, ‘well done.’"',
    '"You know…you have a perfectly shaped head."',
    '"Kevin said you\'re cool."',
    '"Your kindness is contagious!"',
    '"You have great taste!"',
    '"You are stronger than you know!"',
    '"You light up the room!"'
  ]
  
  const generateCompliment = () => {
    setIsAnimating(true)
    const randomIndex = Math.floor(Math.random() * compliments.length)
    setCompliment(compliments[randomIndex])
    
    // Reset animation 
    setTimeout(() => {
      setIsAnimating(false)
    }, 600)
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
        <span className="text-white text-xs font-pixel-subheading relative z-10 pl-4">
          compliment generator.exe
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
              <div className="mb-4 font-pixel-subheading">what is your compliment today?</div>
              
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
                className="bg-div hover:opacity-80 text-secondary font-pixel-heading py-3 px-8 shadow-lg transform hover:scale-105 transition-all duration-200 pixel-corners"
                onClick={generateCompliment}
              >
                GENERATE
              </button>
            </Pop>
          </div>
        </div>
        
        {/* Scrollbar */}
        <div className="w-8 bg-secondary border-l-2 border-main flex flex-col p-1 ">
          <div className="bg-div hover:opacity-80 border-2 border-main rounded-sm flex-none h-5 flex items-center justify-center cursor-pointer text-xs text-primary font-pixel-paragraph"><FiChevronUp className="thick-svg" /></div>
          <div className="flex-1 bg-secondary relative">
            <div className="absolute top-2 left-0.5 right-0.5 h-24 bg-div border-2 border-main rounded-sm"></div>
          </div>
          <div className="bg-div hover:opacity-80 border-2 border-main rounded-sm flex-none h-5 flex items-center justify-center cursor-pointer text-xs text-primary font-pixel-paragraph"><FiChevronDown className="thick-svg" /></div>
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

export default App
