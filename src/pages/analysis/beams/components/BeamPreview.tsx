/**
 * BeamPreview - Renderiza una sección transversal SVG de la viga en base a las propiedades actuales.
 */

// Import React
import React from 'react';
// Import Own Types
import type { BeamDimensions } from '@/models/structuralElements/concrete/beams';

interface BeamPreviewProps {
  beamDimensions: BeamDimensions;
  setBeamDimensions: React.Dispatch<React.SetStateAction<BeamDimensions>>;
}

const BeamPreview: React.FC<BeamPreviewProps> = ({ beamDimensions }) => {
  const { height, width, covering } = beamDimensions;

  const effectiveDepth = height - covering;

  const containerSize = 10 * 16;
  const maxDimension = Math.max(width, height);
  const scale = maxDimension ? containerSize / maxDimension : 1;

  const svgWidth = width * scale * 0.90;
  const svgHeight = height * scale * 0.90;

  return (
    <div className=' flex flex-col items-center justify-center border-[#3f3f3f]'>
      <h3 className='border-b w-full mb-2 font-semibold'>Sección Transversal</h3>
      <section className="w-[22.5rem] h-[17.5rem]">
        <svg
          className='rounded-[1rem]'
          viewBox={`-10 -10 ${(svgWidth + 30)/0.90} ${(svgHeight + 30)/0.90}`}
          preserveAspectRatio="xMidYMid meet"
          width="100%"
          height="100%"
          style={{
            border: '2px solid black',
            backgroundColor: '#e0e0e022',
          }}
        >
          {/* Contorno */}
          <rect
            x={10}
            y={10}
            width={svgWidth}
            height={svgHeight}
            fill="#afafaf"
            stroke="black"
            strokeWidth="1"
          />

          <rect
            x={10}
            y={10}
            width={svgWidth}
            height={(height - covering) * scale * 0.90}
            fill="#808080"
            stroke="blue"
            strokeWidth="1"
          />

          <line
            x1={10}
            y1={10 + effectiveDepth * scale * 0.90}
            x2={width * scale * 0.98}
            y2={10 + effectiveDepth * scale * 0.90}
            stroke="red"
            strokeWidth="2"
            strokeDasharray="2"
          />

          {/* Etiquetas */}
          <text x={10 + width * scale / 2.20} y={effectiveDepth + (effectiveDepth / 3) * scale} textAnchor="middle" fontSize="12px" fill="black">
            Área Neta
          </text>
          <text x={10 + width * scale / 2.20} y={height * scale + (height * 0.25)} textAnchor="middle" fontSize="12px" fill="black">
            b = {width} cm
          </text>
          <text x={-height * scale / 2.5} y={1} textAnchor="middle" fontSize="12px" fill="black" transform="rotate(-90 10,10)">
            h = {height} cm
          </text>
          <text x={10 + width * scale / 2.20} y={covering} fontSize="12px" fill="blue" textAnchor="middle">
            r = {covering} cm
          </text>
          <text x={-height * scale / 2.5} y={scale * width + 3 * covering} fontSize="12px" fill="red" textAnchor="middle" transform="rotate(-90 10,10)">
            d = {effectiveDepth} cm
          </text>
        </svg>
      </section>
    </div>
  );
};

export default BeamPreview;
