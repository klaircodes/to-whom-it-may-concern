import { useState } from 'react'
import './App.css'
import './pixel-borders.css'

function App() {
  const [compliment, setCompliment] = useState('"You are amazing!"')
  
  const compliments = [
    '"You are amazing!"',
    '"You brighten everyone\'s day!"',
    '"You have such a wonderful smile!"',
    '"Your creativity is inspiring!"',
    '"You make the world a better place!"',
    '"You are incredibly talented!"',
    '"Your kindness is contagious!"',
    '"You have great taste!"',
    '"You are stronger than you know!"',
    '"You light up the room!"'
  ]
  
  const generateCompliment = () => {
    const randomIndex = Math.floor(Math.random() * compliments.length)
    setCompliment(compliments[randomIndex])
  }

  return (
    <div className="w-full max-w-2xl mx-auto bg-div shadow-2xl font-mono pixel-corners">
      {/* Header */}
      <div className="bg-div px-3 py-1 flex justify-between items-center border-b-2 border-main">
        <span className="text-white text-sm font-bold flex items-center">
          <span className="mr-2">✨</span>
          compliment generator.exe
          <span className="ml-2">✨</span>
        </span>
        <div className="flex space-x-1">
          <span className="bg-gray-300 px-2 py-1 text-xs border border-gray-500 cursor-pointer hover:bg-gray-200">□</span>
          <span className="bg-gray-300 px-2 py-1 text-xs border border-gray-500 cursor-pointer hover:bg-gray-200">◇</span>
          <span className="bg-red-400 px-2 py-1 text-xs border border-gray-500 cursor-pointer hover:bg-red-300">×</span>
        </div>
      </div>
      
      {/* Main Section */}
      <div className="flex relative">
        {/* Side Panel Border */}
        <div className="w-4 bg-div border-r-2 border-main flex flex-col items-center py-4 space-y-2">
          <div className="w-1 h-3 bg-purple-200 rounded-full opacity-60"></div>
          <div className="w-1 h-2 bg-white rounded-full opacity-40"></div>
          <div className="w-2 h-4 bg-purple-100 rounded-full opacity-30"></div>
        </div>
        
        {/* Background */}
        <div className="flex-1 bg-grid-gradient p-6 relative">
          {/* Decorative elements */}
          <div className="absolute top-4 right-4 text-main text-2xl opacity-100 z-10">✨</div>
          <div className="absolute bottom-8 left-4 text-main text-xl opacity-100 z-10">🌟</div>
          <div className="absolute top-8 left-1/4 text-main text-lg opacity-100 z-10">✦</div>
          
          <div className="text-center">
            {/* Subheading Container */}
            <div className="text-main text-sm mb-8 bg-primary p-4 pixel-corners">
              <div className="mb-4">what is your compliment today?</div>
              
              {/* Compliment Display */}
              <div className="bg-secondary p-6 mb-4 min-h-32 flex items-center justify-center shadow-inner pixel-corners">
                <div className="text-lg text-main font-medium leading-relaxed">
                  {compliment}
                </div>
              </div>
              
              {/* Player Controls */}
              <div className="flex justify-center items-center space-x-4">
                <button className="bg-div hover:opacity-80 border border-main px-3 py-1 rounded text-secondary font-bold">⏮</button>
                <button className="bg-div hover:opacity-80 border border-main px-3 py-1 rounded text-secondary  font-bold">⏸</button>
                <button className="bg-div hover:opacity-80 border border-main px-3 py-1 rounded text-secondary  font-bold">⏭</button>
                <div className="bg-primary border border-main rounded-full h- w-32 relative ml-4">
                  <div className="bg-div items-center h-1 rounded-full mt-0.5 ml-0.5 mb-0.5 w-1/3"></div>
                  <div className="absolute top-0 left-1/3 transform -translate-x-1/2 w-4 h-2 bg-div border border-main rounded-sm"></div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Generate Button */}
          <div className="text-center">
            <button 
              className="bg-div hover:opacity-80 text-secondary font-bold py-3 px-8 shadow-lg transform hover:scale-105 transition-all duration-200 pixel-corners"
              onClick={generateCompliment}
            >
              GENERATE
            </button>
          </div>
        </div>
        
        {/* Scrollbar */}
        <div className="w-8 bg-secondary border-l-2 border-main flex flex-col p-1 ">
          <div className="bg-div hover:opacity-80 border-2 border-main rounded-sm flex-none h-5 flex items-center justify-center cursor-pointer text-xs text-primary ">▲</div>
          <div className="flex-1 bg-secondary relative">
            <div className="absolute top-2 left-0.5 right-0.5 h-24 bg-div border-2 border-main rounded-sm"></div>
          </div>
          <div className="bg-div hover:opacity-80 border-2 border-main rounded-sm flex-none h-5 flex items-center justify-center cursor-pointer text-xs text-primary">▼</div>
        </div>
      </div>
      
      {/* Footer */}
      <div className="bg-div border-t-2 border-main px-3 py-2 flex justify-end">
        <div className="w-6 h-6 bg-secondary border border-main rounded flex items-center justify-center">
          <div className="w-3 h-3 bg-div rounded"></div>
        </div>
      </div>
    </div>
  )
}

export default App
