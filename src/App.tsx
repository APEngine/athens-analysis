// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Home } from './pages/home/index';
import { Analysis } from './pages/analysis/index';
import Beams from "./pages/analysis/Beams";
// import Contacto from './Contacto';

const App = () => {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <b>Athens Analysis</b>
          </li>

          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/analisis">Análisis</Link>
          </li>
          <li>
            <Link to="/contacto">Contacto</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/analisis" element={<Analysis />} >

          <Route path="vigas" element={<Beams />} />
        </Route>
        {/* <Route path="/contacto" element={<Contacto />} /> */}
      </Routes>
    </Router>
  );
};

export default App;
