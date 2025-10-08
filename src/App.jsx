import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Start from "./pages/Start.jsx";
import GirlStart from "./pages/GirlStart.jsx";
import GirlPath1 from "./pages/GirlPath1.jsx";
import GirlPath2 from "./pages/GirlPath2.jsx";
import GirlPath1a from "./pages/GirlPath1a.jsx";
import GirlPath1b from "./pages/GirlPath1b.jsx";
import GirlPath1ba from "./pages/GirlPath1ba.jsx";
import GirlPath1bb from "./pages/GirlPath1bb.jsx";
import GirlPath3ba from "./pages/GirlPath3ba.jsx";
import GirlPath3bb from "./pages/GirlPath3bb.jsx";
import GirlPath2a from "./pages/GirlPath2a.jsx";
import GirlPath2b from "./pages/GirlPath2b.jsx";
import GirlPath2ab from "./pages/GirlPath2ab.jsx";
import GirlPathGoodEnding from "./pages/GirlPathGoodEnding.jsx";
import GirlPath3 from "./pages/GirlPath3.jsx";
import GirlPath3a from "./pages/GirlPath3a.jsx";
import GirlPath3b from "./pages/GirlPath3b.jsx";
import GirlPath3aa from "./pages/GirlPath3aa.jsx";
import GirlPathBadEnding from "./pages/GirlPathBadEnding.jsx";
import GirlPathRizzEnding from "./pages/GirlPathRizzEnding.jsx";
import MainContent from "./pages/MainContent.jsx";
import MusicPlayer from "./components/MusicPlayer.jsx";

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
        <Route path="/girlpath1b" element={<GirlPath1b />} />
        <Route path="/girlpath1ba" element={<GirlPath1ba />} />
        <Route path="/girlpath1bb" element={<GirlPath1bb />} />
        <Route path="/girlpath3ba" element={<GirlPath3ba />} />
        <Route path="/girlpath3bb" element={<GirlPath3bb />} />
        <Route path="/girlpath2a" element={<GirlPath2a />} />
        <Route path="/girlpath2b" element={<GirlPath2b />} />
        <Route path="/girlpath2ab" element={<GirlPath2ab />} />
        <Route path="/girlpathgoodending" element={<GirlPathGoodEnding />} />
        <Route path="/girlpath3" element={<GirlPath3 />} />
        <Route path="/girlpath3a" element={<GirlPath3a />} />
        <Route path="/girlpath3b" element={<GirlPath3b />} />
        <Route path="/girlpath3aa" element={<GirlPath3aa />} />
        <Route path="/girlpathbadending" element={<GirlPathBadEnding />} />
        <Route path="/girlpathrizzending" element={<GirlPathRizzEnding />} />
        <Route path="/maincontent" element={<MainContent />} />
      </Routes>
    </Router>
  );
}
