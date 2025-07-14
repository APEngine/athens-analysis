import { ConcreteBeam } from "@/models/structuralElements/concrete/beams";

export function getConcreteBeamProperties(beam: ConcreteBeam) {
  return [
    {
      id: 1,
      label: "Altura efectiva (d)",
      value: beam.calculateEffectiveDepth().toFixed(2),
      unit: "cm",
    },
    {
      id: 2,
      label: "Área bruta (A)",
      value: beam.calculateGrossArea().toFixed(2),
      unit: "cm²",
    },
    {
      id: 3,
      label: "Área neta (An)",
      value: beam.calculateNetArea().toFixed(2),
      unit: "cm²",
    },
    {
      id: 4,
      label: "Momento de inercia (Ix)",
      value: beam.calculateMomentOfInertia().toFixed(2),
      unit: "cm⁴",
    },
    {
      id: 5,
      label: "Área mínima de acero (As,min)",
      value: beam.calculateMinimumSteelArea().toFixed(2),
      unit: "cm²",
    },
    {
      id: 6,
      label: "Área máxima de acero (As,max)",
      value: beam.calculateMaximumSteelArea().toFixed(2),
      unit: "cm²",
    },
    {
      id: 7,
      label: "Área balanceada de acero (As,b)",
      value: beam.calculateBalancedSteelArea().toFixed(2),
      unit: "cm²",
    },
  ];
}
