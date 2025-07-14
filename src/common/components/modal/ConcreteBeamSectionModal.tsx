// Import React
import React from "react";
// Import Own Components
import Modal from "./Modal";
import SimpleNumericInput from "@/common/components/inputs/number/simple/SimpleNumberInput";
import AppLogo from "/src/assets/AppLogo.svg"

interface ConcreteBeamSectionModalProps {
    isOpen: boolean;
    onClose: () => void;
    onConfirm: () => void;
    beamDimensions: {
        height: number;
        width: number;
        covering: number;
        yieldStrength: number;
        compressiveStrength: number;
    };
    setBeamDimensions: React.Dispatch<React.SetStateAction<{
        height: number;
        width: number;
        covering: number;
        yieldStrength: number;
        compressiveStrength: number;
    }>>
}

const ConcreteBeamSectionModal: React.FC<ConcreteBeamSectionModalProps> = ({
    isOpen,
    onClose,
    onConfirm,
    beamDimensions,
    setBeamDimensions
}) => {

    const [localDimensions, setLocalDimensions] = React.useState(beamDimensions);

    React.useEffect(() => {
        if (isOpen) {
            setLocalDimensions(beamDimensions);
        }
    }, [isOpen, beamDimensions]);

    const handleInputChange = (key: keyof typeof beamDimensions, value: number) => {
        setLocalDimensions(prev => ({
            ...prev,
            [key]: value,
        }));
    };


    return (
        <Modal className="min-w-fit" isOpen={isOpen} onClose={onClose} title="Sección Transversal de Viga">
            <article className="flex flex-row gap-6">
                <section className="flex flex-col justify-center w-[20rem] border-[.15rem] border-[#101010] rounded-[.50rem] p-2">
                    <img src={AppLogo} />
                </section>
                <div className="flex flex-col gap-2 w-[30rem]">

                    <section className="flex flex-col gap-2">
                        <h2 className="font-semibold border-b">Propiedades Geométricas</h2>
                        <SimpleNumericInput
                            title="Base (b) [cm]"
                            id="beam-width"
                            name="beamWidth"
                            placeholder="Introduce la base"
                            classname={"simple-input w-[4.5rem]"}
                            value={localDimensions.width}
                            min={20}
                            max={100}
                            orientation={"flex flex-row"}
                            onChangeFcn={(e) => handleInputChange("width", Number(e.target.value))}
                        />
                        <SimpleNumericInput
                            title="Altura (h) [cm]"
                            id="beam-height"
                            name="beamHeight"
                            placeholder="Introduce la altura"
                            classname={"simple-input w-[4.5rem]"}
                            value={localDimensions.height}
                            min={25}
                            max={100}
                            orientation={"flex flex-row"}
                            onChangeFcn={(e) => handleInputChange("height", Number(e.target.value))}
                        />
                        <SimpleNumericInput
                            title="Recubrimiento (r) [cm]"
                            id="beam-covering"
                            name="beamCovering"
                            placeholder="Introduce el recubrimiento"
                            classname={"simple-input w-[4.5rem]"}
                            value={localDimensions.covering}
                            orientation={"flex flex-row"}
                            min={5}
                            max={100}
                            onChangeFcn={(e) => handleInputChange("covering", Number(e.target.value))}
                        />
                    </section>
                    <section className="flex flex-col gap-2">
                        <h2 className="font-semibold border-b">Propiedades Mecánicas</h2>
                        <SimpleNumericInput
                            title="Resis. compresión concreto (f'c) [Kgf/cm2]"
                            id="beam-width"
                            name="beamWidth"
                            placeholder="Introduce la base"
                            classname={"simple-input w-[6rem]"}
                            value={localDimensions.compressiveStrength}
                            min={180}
                            max={100}
                            onChangeFcn={(e) => handleInputChange("compressiveStrength", Number(e.target.value))}
                            orientation={"flex flex-row"}
                        />
                        <SimpleNumericInput
                            title="Fluencia del acero (fy) [Kgf/cm2]"
                            id="beam-width"
                            name="beamWidth"
                            placeholder="Introduce la base"
                            classname={"simple-input w-[6rem]"}
                            value={localDimensions.yieldStrength}
                            orientation={"flex flex-row"}
                            min={2500}
                            max={100}
                            onChangeFcn={(e) => handleInputChange("yieldStrength", Number(e.target.value))}
                        />
                    </section>
                    <div className="flex justify-end gap-2 mt-4">
                        <button onClick={onClose} className="simple-button">
                            Cancelar
                        </button>
                        <button onClick={() => {
                            setBeamDimensions(localDimensions);
                            onClose();
                        }} className="simple-button">
                            Aplicar
                        </button>
                    </div>
                </div>

            </article>
        </Modal>
    );
};

export default ConcreteBeamSectionModal;