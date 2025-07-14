// Import React
import React from "react";
// Import Own Components
import Modal from "./Modal";
import SimpleNumericInput from "@/common/components/inputs/number/simple/SimpleNumberInput";


interface LoadsModalProps {
    isOpen: boolean;
    onClose: () => void;
    onConfirm: () => void;
    loads: {
        deadLoad: number;
        liveLoad: number;
        roofLiveLoad: number;
        snowLoad: number;
        rainLoad: number;
        windLoad: number;
        earthquakeLoad: number;
    };
    setLoads: React.Dispatch<React.SetStateAction<{
        deadLoad: number;
        liveLoad: number;
        roofLiveLoad: number;
        snowLoad: number;
        rainLoad: number;
        windLoad: number;
        earthquakeLoad: number;
    }>>;
}

const LoadsModal: React.FC<LoadsModalProps> = ({
    isOpen,
    onClose,
    onConfirm,
    loads,
    setLoads
}) => {


    const [localLoads, setLocalLoads] = React.useState(loads);

    React.useEffect(() => {
        if (isOpen) {
            setLocalLoads(loads);
        }
    }, [isOpen, loads]);

    const handleInputLoadChange = (key: keyof typeof loads, value: number) => {
        setLocalLoads(prev => ({
            ...prev,
            [key]: value,
        }));
    };

    return (
        <Modal className="min-w-fit" isOpen={isOpen} onClose={onClose} title="Sección Transversal de Viga">
            <article className="flex flex-row gap-6">
                <div className="flex flex-col gap-2 w-[30rem]">

                    <section className="flex flex-col gap-2">
                        <h2 className="font-semibold border-b">Solicitaciones Actuantes</h2>
                        <SimpleNumericInput
                            title="Carga Permanente (D) [Kgf/m]"
                            id="dead-load"
                            name="deadLoad"
                            placeholder="Introduce la base"
                            classname={"simple-input w-[6rem]"}
                            value={localLoads.deadLoad}
                            min={0}
                            max={1000}
                            onChangeFcn={(e) => handleInputLoadChange("deadLoad", Number(e.target.value))}
                            orientation={"flex flex-row"}
                        />
                        <SimpleNumericInput
                            title="Carga Viva (L) [Kgf/m]"
                            id="live-load"
                            name="liveLoad"
                            placeholder="Introduce la base"
                            classname={"simple-input w-[6rem]"}
                            value={localLoads.liveLoad}
                            min={0}
                            max={1000}
                            onChangeFcn={(e) => handleInputLoadChange("liveLoad", Number(e.target.value))}
                            orientation={"flex flex-row"}
                        />
                        <SimpleNumericInput
                            title="Carga Viva de Techo (Lr) [Kgf/m]"
                            id="roof-live-load"
                            name="roofLiveLoad"
                            placeholder="Introduce la base"
                            classname={"simple-input w-[6rem]"}
                            value={localLoads.roofLiveLoad}
                            min={0}
                            max={1000}
                            onChangeFcn={(e) => handleInputLoadChange("roofLiveLoad", Number(e.target.value))}
                            orientation={"flex flex-row"}
                        />
                        <SimpleNumericInput
                            title="Carga por Nieve (S) [Kgf/m]"
                            id="snow-load"
                            name="snowLoad"
                            placeholder="Introduce la base"
                            classname={"simple-input w-[6rem]"}
                            value={localLoads.snowLoad}
                            min={0}
                            max={1000}
                            onChangeFcn={(e) => handleInputLoadChange("snowLoad", Number(e.target.value))}
                            orientation={"flex flex-row"}
                        />
                        <SimpleNumericInput
                            title="Carga por Lluvia (R) [Kgf/m]"
                            id="rain-load"
                            name="rainLoad"
                            placeholder="Introduce la base"
                            classname={"simple-input w-[6rem]"}
                            value={localLoads.rainLoad}
                            min={0}
                            max={1000}
                            onChangeFcn={(e) => handleInputLoadChange("rainLoad", Number(e.target.value))}
                            orientation={"flex flex-row"}
                        />
                        <SimpleNumericInput
                            title="Carga por Viento (W) [Kgf/m]"
                            id="wind-load"
                            name="windLoad"
                            placeholder="Introduce la base"
                            classname={"simple-input w-[6rem]"}
                            value={localLoads.windLoad}
                            min={0}
                            max={1000}
                            onChangeFcn={(e) => handleInputLoadChange("windLoad", Number(e.target.value))}
                            orientation={"flex flex-row"}
                        />
                        <SimpleNumericInput
                            title="Carga Sísmica (E) [Kgf/m]"
                            id="earthquake-load"
                            name="earthquakeLoad"
                            placeholder="Introduce la base"
                            classname={"simple-input w-[6rem]"}
                            value={localLoads.earthquakeLoad}
                            min={0}
                            max={1000}
                            onChangeFcn={(e) => handleInputLoadChange("earthquakeLoad", Number(e.target.value))}
                            orientation={"flex flex-row"}
                        />
                    </section>
                    <div className="flex justify-end gap-2 mt-4">
                        <button onClick={onClose} className="simple-button">
                            Cancelar
                        </button>
                        <button onClick={() => {
                            setLoads(localLoads);
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

export default LoadsModal;