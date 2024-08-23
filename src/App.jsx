import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Uzbekistan from './pages/Uzbekistan';
import Jahon from './pages/Jahon';
import Iqtisodiyot from './pages/Iqtisodiyot';
import Jamiyat from './pages/Jamiyat';
import Sport from './pages/Sport';
import FanTexnika from './pages/FanTexnika';
import NuqtayiNazar from './pages/NuqtayiNazar';
import Audio from './pages/Audio';
import "../src/App.css"
import KunUzNews from './pages/KunUzNews';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Uzbekistan" element={<Uzbekistan />} />
        <Route path="/jahon" element={<Jahon />} />
        <Route path="/iqtisodiyot" element={<Iqtisodiyot />} />
        <Route path="/jamiyat" element={<Jamiyat />} />
        <Route path="/sport" element={<Sport />} />
        <Route path="/fan-texnika" element={<FanTexnika />} />
        <Route path="/nuqtayi-nazar" element={<NuqtayiNazar />} />
        <Route path="/audio" element={<Audio />} />
        <Route path="/Kun.uz.news" element={<KunUzNews />} />    
      </Routes>
    </Router>
  );
}

export default App;
