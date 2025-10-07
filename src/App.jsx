import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Start from './pages/Start.jsx';
import GirlStart from './pages/GirlStart.jsx';
import GirlPath1 from './pages/GirlPath1.jsx';
import GirlPath2 from './pages/GirlPath2.jsx';
import GirlPath1a from './pages/GirlPath1a.jsx';
import MainContent from './pages/MainContent.jsx';
import MusicPlayer from './components/MusicPlayer.jsx';

export default function App() {
  return (
    <Router>
      <MusicPlayer autoPlay={true} />
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/girlstart" element={<GirlStart />} />
        <Route path="/girlpath1" element={<GirlPath1 />} />
        <Route path="/girlpath2" element={<GirlPath2 />} />
        <Route path="/girlpath1a" element={<GirlPath1a />} />
        <Route path="/maincontent" element={<MainContent />} />
      </Routes>
    </Router>
  );
}
