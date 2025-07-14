// Import React
import React, { useState, useEffect } from 'react';
// Import Own components
import { ConcreteBeam } from '@/models/structuralElements/concrete/beams';
import { LoadCombination } from '@/models/structuralElements/concrete/loads';
import { HoverInfo } from '@/common/components/HoverInfo'; 
// Import MUI icons
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import ShieldIcon from '@mui/icons-material/Shield';

interface BeamData {
  steelArea: number; // cm²
  momentCapacity: number; // kgf.cm
  designMoment: number; // kgf.cm
}

interface SimpleTableProps {
  beamDimensions: {
    height: number;
    width: number;
    covering: number;
    yieldStrength: number;
    compressiveStrength: number;
  };
  loadCombination: {
    deadLoad: number;
    liveLoad: number;
    roofLiveLoad: number;
    snowLoad: number;
    rainLoad: number;
    windLoad: number;
    earthquakeLoad: number;
  }
}


const SimpleTable: React.FC<SimpleTableProps> = ({ beamDimensions, loadCombination }) => {

  // Local variable declaration
  const [showColorRows, setShowColorRows] = useState(false)
  const [animateRows, setAnimateRows] = useState(false);
  const phi = 0.90; // Constant

  // Beam object creation
  const beam = new ConcreteBeam(beamDimensions.height, beamDimensions.width, beamDimensions.covering, 200, beamDimensions.yieldStrength, beamDimensions.compressiveStrength)

  // Beam object methods
  const AsMin = beam.calculateMinimumSteelArea();
  const AsMax = beam.calculateMaximumSteelArea();
  const steps = 20;
  const stepSize = (AsMax - AsMin) / (steps - 1);

  const data: BeamData[] = Array.from({ length: steps }, (_, i) => {
    const steelArea = AsMin + i * stepSize;
    const momentCapacity = beam.calculateNominalMoment(steelArea);
    const designMoment = momentCapacity * phi;
    return {
      steelArea: parseFloat(steelArea.toFixed(4)),
      momentCapacity,
      designMoment,
    };
  });

  // Load object creation
  const loadCombo = new LoadCombination(
    loadCombination.deadLoad,
    loadCombination.liveLoad,
    loadCombination.windLoad,
    loadCombination.roofLiveLoad,
    loadCombination.earthquakeLoad,
    loadCombination.rainLoad,
    loadCombination.snowLoad,
  )

  const maximumCombination = loadCombo.getMaximumUltimateCombination();

  // Convert ratio to HSL background
  function getRowColor(mu: number, mn: number): string {
    const ratio = mn / mu;

    // Not safe
    if (ratio < 1) return "#FF0F0F";
    if (ratio < 1.10) return "#FF4400";
    if (ratio < 1.20) return "#FF6600"; 
    // // Barely safe         
    if (ratio < 1.30) return "#FF9900";
    if (ratio < 1.40) return "#FFCC00";
    // // Moderately safe   
    if (ratio < 1.50) return "#FFFF00";
    if (ratio < 1.60) return "#CCFF00";
    // // Very safe      
    if (ratio < 1.70) return "#99FF00";
    if (ratio < 1.80) return "#66FF00";
    if (ratio < 1.90) return "#33FF00";
    // // Extremely safe  
    if (ratio < 2) return "#00FF00";
    return "#00FF33"
  }


  useEffect(() => {
    setAnimateRows(true);
    const timeout = setTimeout(() => setAnimateRows(false), 700); // igual duración que la animación
    return () => clearTimeout(timeout);
  }, [data]);

  return (
    <article className='flex flex-col gap-3 w-full h-[88vh] p-2 border-[.1rem] rounded-[1rem] bg-[#F8F5F9]'>
      <div className='flex flex-row justify-between items-center'>
        <h2 className='py-[.25vh] ml-2 text-[#0f0f0f] font-semibold text-xl'>Resultados</h2>
        <span>

          <HoverInfo
            info={
              <div>
                <h4 className="font-bold mb-2 text-black-200">Niveles de Seguridad</h4>
                <p className="text-xs text-black-200 mb-2">
                  La escala de colores indica el nivel de adecuación estructural: rojo para diseños que no cumplen, amarillo para secciones al límite y verde para condiciones estructuralmente seguras.
                </p>
                <section className="flex flex-col gap-1">
                  {[
                    "#FF0F0F", "#FF4400", "#FF6600", "#FF9900", "#FFCC00", "#FFFF00",
                    "#CCFF00", "#99FF00", "#66FF00", "#33FF00", "#00FF00", "#00FF33",
                  ].map((color, i) => (
                    <span
                      key={i}
                      className="w-full h-4 rounded"
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </section>
                <p className="text-[0.7rem] italic text-black-200">
                  Rojo = peligro · Verde = seguro
                </p>
              </div>
            }
          >
            <div className='w-full h-full'>
              <span className='w-full h-full rounded-[50%] p-[.25rem] flex flex-row items-center justify-center'>
                <HelpOutlineIcon />
              </span>
            </div>
          </HoverInfo>



        </span>

      </div>
      <div className='overflow-y-auto w-full'>

        <table className='w-full'>
          <thead className='sticky top-0'>
            <tr className='bg-[#1f1f1f]'>
              <th className="text-[#f0f0f0]" style={{ padding: '0.50rem', textAlign: 'center' }}>As [cm²]</th>
              <th className="text-[#f0f0f0]" style={{ padding: '0.50rem', textAlign: 'center' }}>Mn [kgfcm]</th>
              <th className="text-[#f0f0f0]" style={{ padding: '0.50rem', textAlign: 'center' }}>ϕ</th>
              <th className="text-[#f0f0f0]" style={{ padding: '0.50rem', textAlign: 'center' }}>ϕMn [kgfcm]</th>
            </tr>
          </thead>
          <tbody>
            {/* Filas generadas */}
            {data.map((row, index) => (
              <tr key={index}
                className={animateRows ? '!row-highlight-animated' : ''}
                style={{
                  backgroundColor:
                    `${showColorRows ? getRowColor(maximumCombination * 100, row.designMoment) :
                      index % 2 === 0 ? '#d0d0d0' : '#f0f0f0'}`
                }}
              >
                <td style={{ padding: '0.50rem', textAlign: 'center' }}>{row.steelArea.toFixed(2)}</td>
                <td style={{ padding: '0.50rem', textAlign: 'center' }}>{row.momentCapacity.toFixed(2)}</td>
                <td style={{ padding: '0.50rem', textAlign: 'center' }}>{phi.toFixed(2)}</td>
                <td style={{ padding: '0.50rem', textAlign: 'center' }}>{row.designMoment.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <section className='flex flex-row justify-end items-center w-full]'>
        <button
          className='bg-[#303030] text-[#FFFFFF] p-2 w-full hover:bg-[#000] cursor-pointer'
          onClick={() => { setShowColorRows(!showColorRows) }}
        >
          {showColorRows ? "Ocultar factor de seguridad mínimo" : "Ver factor de seguridad mínimo"}
          <span className='px-2'><ShieldIcon /></span>
        </button>
      </section>
    </article>
  );
};

export default SimpleTable;