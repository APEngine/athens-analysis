// Import React own libraries
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

// Import Own Components
import { Navbar } from '/src/components/navbar';
import { Home } from './pages/home/index';
import { Analysis } from './pages/analysis/index';
import Beams from "./pages/analysis/Beams";

const App = () => {
  return (
    <div className="font-sans bg-black-background text-white-300 min-h-screen w-full">

      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/analisis" element={<Analysis />} >

            <Route path="vigas" element={<Beams />} />
          </Route>
          {/* <Route path="/contacto" element={<Contacto />} /> */}
        </Routes>
      </Router>
    </div>
  );
};

export default App;
