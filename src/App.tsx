import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Navbar from '/src/components/Navbar';
import { Home } from './pages/home/index';
import { Analysis } from './pages/analysis/index';
import Beams from "./pages/analysis/Beams";
// import Contacto from './Contacto';

const App = () => {
  return (
    <div className="font-sans">

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
