/**
 * BeamsPage - Página principal para el análisis de vigas de concreto armado.
 * Permite al usuario definir geometría, materiales y cargas, y muestra resultados geométricos y de diseño.
 */

// Import React
import React, { useState } from 'react';
// Import Own Components
import BeamPropertiesForm from './components/BeamPropertiesForm';
import BeamSummary from './components/BeamSummary';
import SimpleTable from './components/table/simple/SimpleTable';
// Import Own Types
import type { BeamDimensions } from '@/models/structuralElements/concrete/beams';
import type { Loads } from '@/models/structuralElements/concrete/loads';

const BeamsPage: React.FC = () => {

  const [beamDimensions, setBeamDimensions] = useState<BeamDimensions>({
    height: 30,
    width: 25,
    covering: 5,
    yieldStrength: 4200,
    compressiveStrength: 210
  });

  const [loads, setLoads] = useState<Loads>({
    deadLoad: 500,
    liveLoad: 300,
    roofLiveLoad: 100,
    snowLoad: 0,
    rainLoad: 0,
    windLoad: 0,
    earthquakeLoad: 0,
  });

  return (
    <main className=" flex flex-row justify-between items-start gap-2 p-2">
      <BeamPropertiesForm
        beamDimensions={beamDimensions}
        setBeamDimensions={setBeamDimensions}
        loads={loads}
        setLoads={setLoads}
      />
      <BeamSummary beamDimensions={beamDimensions} loadCombination={loads} />
      <SimpleTable beamDimensions={beamDimensions} loadCombination={loads} />
    </main>
  );
};

export default BeamsPage;
