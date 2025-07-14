/**
 * AnalysisPage - Layout for the analysis section.
 * Contains nested routes for various structural analysis tools.
 */

// Import React
import React from 'react';
import { Outlet } from 'react-router-dom';

const AnalysisPage: React.FC = () => {
  return (
    <main>
      <Outlet />
    </main>
  );
};

export default AnalysisPage