import { useState } from 'react'
import './App.css'


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
    <div className="main-window">
      <div className="header">
        <span className="title">compliment generator.exe</span>
        <div className="window-controls">
          <span className="minimize">□</span>
          <span className="maximize">◇</span>
          <span className="close">×</span>
        </div>
      </div>
      
      <div className="main-section">
        <div className="side-panel-border"></div>
        
        <div className="background">
          <div className="player-container">
            <div className="subheading">what is your compliment today?</div>
            
            <div className="compliment-display">
              {compliment}
            </div>
            
            <div className="player">
              <div className="player-controls">
                <button className="control-btn">⏮</button>
                <button className="control-btn">⏸</button>
                <button className="control-btn">⏭</button>
              </div>
              <div className="progress-bar">
                <div className="progress-track">
                  <div className="progress-handle"></div>
                </div>
              </div>
            </div>
          </div>
          
          <button className="generate-button" onClick={generateCompliment}>
            GENERATE
          </button>
        </div>
        
        <div className="scrollbar">
          <div className="scroll-up">▲</div>
          <div className="scroll-bar"></div>
          <div className="scroll-down">▼</div>
        </div>
      </div>
      
      <div className="footer">
        <div className="footer-icon"></div>
      </div>
    </div>
  )
}

export default App
