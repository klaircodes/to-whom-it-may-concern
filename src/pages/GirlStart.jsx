import * as React from 'react';
import { FiMinus, FiSquare, FiX, FiChevronUp, FiChevronDown } from 'react-icons/fi';
import Pop from '../components/Pop.jsx';
import '../css/App.css';
import '../css/pixel-borders.css';
import { motion as Motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

import complimentHeadingBg from '../assets/images/compliment-heading-bg2.svg';
import animeGirl from '../assets/images/anime-girl-default.png';
import Typewriter from '../components/Typewriter.jsx';
import DialogueInitial from '../dialogue/DialogueInitial.jsx';
import clickSound from '../assets/sound/blip-select.mp3';

export default function GirlPath1() {
  const navigate = useNavigate();

  const playSound = () => {
    const audio = new Audio(clickSound);
    audio.play();
  };

  const handleFirstButtonClick = () => {
    playSound();
    navigate('/girlpath1');
  };

  const handleSecondButtonClick = () => {
    playSound();
    navigate('/girlpath2');
  };

  return (
    <div className="big-container flex flex-col">
      {/* Upper Div */}
      <div className="upper-div flex">
        {/* Main Window */}
        <div className="relative flex flex-col items-center w-[500px] bg-none mt-8 mb-8" style={{ position: 'relative', zIndex: 2 }}>
          {/* Anime Girl*/}
          <Motion.img
            src={animeGirl}
            alt="Anime Girl"
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.05 }}
            className="absolute left-1/2 -translate-x-1/2 -top-40 w-[22rem] h-[28rem] object-cover select-none drop-shadow-lg"
            style={{ zIndex: 50, pointerEvents: 'none', position: 'absolute' }}
            draggable={false}
          />
          <Pop className="w-full bg-div shadow-2xl font-pixel pixel-corners" style={{ position: 'relative', zIndex: 1 }}>
            {/* Header */}
            <Pop delay={0.15} className="bg-div px-2 py-4 flex justify-between items-center border-b-2 border-main relative">
              <img 
                src={complimentHeadingBg} 
                alt="header background" 
                className="absolute  h-12 w-auto object-contain pointer-events-none"
              />
              <span className="text-white text-xs font-pixel-subheading relative z-10 pl-14">
                girl.exe
              </span>
            </Pop>
            {/* Main Section */}
            <div className="flex relative" style={{ overflow: 'visible', position: 'relative' }}>
              {/* Side Panel Border */}
              <div className="w-4 bg-div border-r-2 border-main flex flex-col items-center py-4 space-y-2">
                <div className="w-1 h-3 bg-purple-200 rounded-full opacity-60"></div>
                <div className="w-1 h-2 bg-white rounded-full opacity-40"></div>
                <div className="w-2 h-4 bg-purple-100 rounded-full opacity-30"></div>
              </div>
              {/* Main Content Area */}
              <div className="flex-1 bg-grid-gradient p-4 relative flex flex-col items-center justify-center" style={{ overflow: 'visible', position: 'relative' }}>
                <div className="bg-primary pixel-corners p-2 w-full flex flex-col items-center" style={{ overflow: 'visible', position: 'relative' }}>
                  <div className="bg-secondary pixel-corners p-2 w-full flex flex-col items-center" style={{ overflow: 'visible', position: 'relative' }}>
                        <div className="relative flex items-center justify-center w-full" style={{ overflow: 'visible', minHeight: '12rem' }}>
                      
                        </div>
                  </div>
                </div>
              </div>
              {/* Scrollbar */}
              <Pop delay={0.4} className="w-8 bg-secondary border-l-2 border-main flex flex-col p-1 ">
                <div className="custom-hover bg-tertiary border-2 border-main rounded-sm flex-none h-5 flex items-center justify-center text-xs text-primary font-pixel-paragraph"><FiChevronUp className="thick-svg" /></div>
                <div className="flex-1 bg-secondary relative">
                  <div className="absolute top-2 left-0.5 right-0.5 h-24 bg-tertiary border-2 border-main rounded-sm"></div>
                </div>
                <div className="custom-hoverbg-tertiary border-2 border-main rounded-sm flex-none h-5 flex items-center justify-center text-xs text-primary font-pixel-paragraph"><FiChevronDown className="thick-svg" /></div>
              </Pop>
            </div>
            {/* Footer */}
            <Pop delay={0.55} className="bg-div border-t-2 border-main px-3 py-2 flex justify-end">
              <div className="w-6 h-6 bg-secondary border border-main rounded flex items-center justify-center">
                <div className="w-3 h-3 bg-div rounded"></div>
              </div>
            </Pop>
          </Pop>
        </div>


        {/* New Div to the Right */}
        <div className="bg-none w-[400px] px-2 relative flex flex-col justify-end items-end mb-8 space-y-4" >
            <Pop delay={0.45} className="block">
              <button onClick={handleFirstButtonClick}
                className="custom-hover bg-tertiary hover:opacity-80 text-secondary font-pixel-heading py-3 px-8 shadow-lg transform hover:scale-105 transition-all duration-200 pixel-corners disabled:opacity-60 w-[300px]"
              >
                "Omg! Mommy Yes! Hi Hello!!!"
              </button>
            </Pop>
            <Pop delay={0.5} className="block">
              <button onClick={handleSecondButtonClick}
                className="custom-hover bg-secondary hover:opacity-80 text-primary font-pixel-heading py-3 px-8 shadow-lg transform hover:scale-105 transition-all duration-200 pixel-corners disabled:opacity-60 w-[300px]"
              >
                "Uhhh.. hi... I guess..."
              </button>
            </Pop>
        </div>
      </div>



      {/* Dating Sim Text Box */}
      <Pop className="relative w-[900px] bg-div pixel-corners shadow-lg border-2 border-main flex flex-row" style={{ position: 'relative', zIndex: 2 }}>
        {/* Text Content */}
        <div className="flex-1 flex flex-col">
          {/* Header */}
          <Pop delay={0.15} className="bg-div px-2 py-4 flex justify-between items-center border-b-2 border-main relative">
                  <img 
                    src={complimentHeadingBg} 
                    alt="header background" 
                    className="absolute  h-12 w-auto object-contain pointer-events-none"
                  />
            <span className="text-white text-xs font-pixel-subheading relative z-10 pl-14">
              girl.exe
            </span>
          </Pop>
          {/* Message Box */}
          <Pop delay={0.25} className="bg-secondary pixel-corners m-4 p-6 flex-1 flex items-center border-2 border-main grid-bg" style={{ minHeight: '120px', fontSize: '1.5rem', fontFamily: 'inherit' }}>
            {/* Typewriter animated message */}
            <DialogueInitial
            />

          </Pop>
        </div>
      </Pop>
    </div>
  );
}
