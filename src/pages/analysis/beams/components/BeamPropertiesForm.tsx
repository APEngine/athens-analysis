/**
 * BeamPropertiesForm - Formulario principal para editar los datos de geometría y cargas de la viga.
 * Incluye vista previa de sección y modales de edición detallada.
 */

// Import React
import React, { useState } from 'react';
// Import Own Components
import BeamPreview from './BeamPreview';
import ConcreteBeamSectionModal from '@/common/components/modal/ConcreteBeamSectionModal';
import LoadsModal from '@/common/components/modal/LoadsModal';
// Import Own Types
import type { BeamDimensions } from '@/models/structuralElements/concrete/beams';
import type { Loads } from '@/models/structuralElements/concrete/loads';

interface BeamPropertiesFormProps {
    beamDimensions: BeamDimensions;
    setBeamDimensions: React.Dispatch<React.SetStateAction<BeamDimensions>>;
    loads: Loads;
    setLoads: React.Dispatch<React.SetStateAction<Loads>>;
}

const BeamPropertiesForm: React.FC<BeamPropertiesFormProps> = ({ beamDimensions, setBeamDimensions, loads, setLoads }) => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isLoadModalOpen, setIsLoadModalOpen] = useState(false)

    return (
        <article className='flex flex-col items-start h-[88vh] items-center gap-3 p-2 border-[.1rem] bg-[#F8F5F9] rounded-[1rem]'>

            <h2 className='py-[.25vh] ml-2 text-xl font-semibold w-full'>Viga a Estudiar</h2>

            <section className="h-fit w-full">
                <BeamPreview
                    beamDimensions={beamDimensions}
                    setBeamDimensions={setBeamDimensions}
                />
            </section>

            <section className='w-full h-fit'>
                <h3 className='border-b mb-2 font-semibold'>Condiciones de estudio</h3>
                <div className=' flex flex-row justify-between bg-[#cdcdcd] py-2 px-3 w-full rounded-lg'>
                    <button
                        onClick={() => setIsModalOpen(true)}
                        className="bg-[#303030] text-[#FFFFFF] p-2 w-full rounded-none rounded-l-lg hover:bg-[#f0f0f0ff] hover:text-[#000] cursor-pointer"
                    >
                        Definir Sección
                    </button>
                    <button
                        onClick={() => setIsLoadModalOpen(true)}
                        className="bg-[#303030] text-[#FFFFFF] p-2 w-full rounded-none rounded-r-lg hover:bg-[#f0f0f0ff] hover:text-[#000] cursor-pointer"
                    >
                        Definir Solicita.
                    </button>
                </div>
            </section>

            <ConcreteBeamSectionModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onConfirm={() => setIsModalOpen(false)}
                beamDimensions={beamDimensions}
                setBeamDimensions={setBeamDimensions}
            />

            <LoadsModal
                isOpen={isLoadModalOpen}
                onClose={() => setIsLoadModalOpen(false)}
                onConfirm={() => setIsLoadModalOpen(false)}
                loads={loads}
                setLoads={setLoads}
            />

        </article>
    );
};

export default BeamPropertiesForm;
