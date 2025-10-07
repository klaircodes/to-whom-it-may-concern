import * as React from 'react';
import { motion as Motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import defaultFolder from './assets/images/default-folder.svg';
import hoverFolder from './assets/images/hover-folder.svg';

export default function Start() {
  const [isHovered, setIsHovered] = React.useState(false);
  const navigate = useNavigate();

  return (
    
    <Motion.div
      initial={{ scale: 0.7, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1, rotate: -2 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      style={{ display: 'inline-block', cursor: 'pointer' }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => navigate('/girlstart')}
    >
      <div className="custom-hover" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <img
          src={isHovered ? hoverFolder : defaultFolder}
          alt="folder"
          style={{ width: 'full', height: 'full', transition: 'filter 0.2s' }}
        />
        <span className="text-main text-xs font-pixel-heading relative z-10 mt-6" style={{ textAlign: 'center' }}>
          to whom it may concern
        </span>
      </div>
    </Motion.div>
  );
}
