/**
 * Athens Analysis - Main Application Component
 * 
 * This is the root component for the Athens Analysis web app,
 * a tool focused on structural analysis of reinforced concrete beams.
 * It handles client-side routing and layout composition.
 */

import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import './App.css'

// Components
import { Navbar } from '@/common/components/layout/navigation/top-nav';

// Pages
import { Home } from '@/pages/home';
import AnalysisPage from '@/pages/analysis';
import BeamsPage from "@/pages/analysis/beams";

function App() {

  return (
    <main className="font-sans text-gray-800 bg-gray-50 min-h-screen w-full">
      <Router>
        <Navbar />
        <Routes>
          {/* Home Page */}
          <Route path="/" element={<Home />} />

          {/* Analysis Section */}
          <Route path="/analysis" element={<AnalysisPage />}>
            <Route path="beams" element={<BeamsPage />} />
          </Route>

          {/* Fallback Route */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </main>
  )
}

export default App
