/**
 * BeamSummary - Componente que muestra el resumen de propiedades geométricas y combinaciones de carga
 * con animación visual al actualizar los datos.
 */

// Import React
import React, { useState, useEffect, useMemo } from 'react';
// Import Own Components
import Accordion from '@/common/components/Accordion';
import { ConcreteBeam } from '@/models/structuralElements/concrete/beams';
import { getConcreteBeamProperties } from '@/services/concreteCalculations/concreteBeamGeometry';
import { getConcreteBeamLoadCombination } from '@/services/concreteCalculations/ConcreteBeamLoads';
import { LoadCombination } from '@/models/structuralElements/concrete/loads';
// Import Own Types
import type { BeamDimensions } from '@/models/structuralElements/concrete/beams';
import type { Loads } from '@/models/structuralElements/concrete/loads';

interface BeamSummaryProps {
    beamDimensions: BeamDimensions;
    loadCombination: Loads;
}

const BeamSummary: React.FC<BeamSummaryProps> = ({ beamDimensions, loadCombination }) => {

    const beam = useMemo(() => new ConcreteBeam(
        beamDimensions.height,
        beamDimensions.width,
        beamDimensions.covering,
        200,
        beamDimensions.yieldStrength,
        beamDimensions.compressiveStrength
    ), [beamDimensions]);

    const loadCombo = useMemo(() => new LoadCombination(
        loadCombination.deadLoad,
        loadCombination.liveLoad,
        loadCombination.windLoad,
        loadCombination.roofLiveLoad,
        loadCombination.earthquakeLoad,
        loadCombination.rainLoad,
        loadCombination.snowLoad
    ), [loadCombination]);


    const geometricPropertiesList = getConcreteBeamProperties(beam);
    const loadsOnBeam = getConcreteBeamLoadCombination(loadCombo, "Kgfm")

    const [animateSwipe, setAnimateSwipe] = useState(false);

    useEffect(() => {
        setAnimateSwipe(true);
        const timeout = setTimeout(() => setAnimateSwipe(false), 600);
        return () => clearTimeout(timeout);
    }, [beamDimensions, loadCombination]);

    const accordionItems = [
        {
            title: "Propiedades Geométricas",
            content:
                <div className='w-full flex flex-col gap-2 p-2 rounded-[1rem]'>
                    <ol >
                        {geometricPropertiesList.map((i) => (
                            <li key={i.id} className='pb-1'>
                                {i.label}: <strong className={`p-2 rounded-lg ${animateSwipe ? "highlight-swipe" : ""}`}>{i.value} {i.unit}</strong>
                            </li>
                        ))}
                    </ol>
                </div>
        },
        {
            title: "Combinación de Cargas",
            content:
                <div className='w-full flex flex-col gap-2 p-2 rounded-[1rem]'>
                    <ol className=''>
                        {loadsOnBeam.map((i) => (
                            <li key={i.id} className='pb-1'>
                                <strong>Combinación N° {i.id}</strong>
                                <div className={`rounded-lg ${animateSwipe ? "highlight-swipe" : ""}`}>
                                    - {i.label} = {i.value} {i.unit}
                                </div>
                            </li>

                        ))}
                    </ol>
                </div>
        }
    ]

    return (
        <article className='flex flex-col gap-3 w-full h-[88vh] p-2 border-[.1rem] rounded-[1rem] bg-[#F8F5F9]'>
            <h2 className='py-[.25vh] ml-2 text-[#0f0f0f] font-semibold text-xl'>Resumen General</h2>
            <Accordion items={accordionItems} />
        </article>
    );
};

export default BeamSummary;
