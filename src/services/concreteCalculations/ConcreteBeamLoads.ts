import { LoadCombination } from "@/models/structuralElements/concrete/loads";

export function getConcreteBeamLoadCombination(combo: LoadCombination, unit: string) {
  return [
    {
      id: "1",
      label: "U = 1.4D",
      value: combo.getUltimateCombination1().toFixed(2),
      unit: unit,
    },
    {
      id: "2A",
      label: "U = 1.2D + 1.6L + 0.5Lr",
      value: combo.getUltimateCombination2A().toFixed(2),
      unit: unit,
    },
    {
      id: "2B",
      label: "U = 1.2D + 1.6L + 0.5S",
      value: combo.getUltimateCombination2B().toFixed(2),
      unit: unit,
    },
    {
      id: "2C",
      label: "U = 1.2D + 1.6L + 0.5W",
      value: combo.getUltimateCombination2C().toFixed(2),
      unit: unit,
    },

    {
      id: "3A",
      label: "U = 1.2D + 1.6Lr + Max(L or 0.5W)",
      value: combo.getUltimateCombination3A().toFixed(2),
      unit: unit,
    },
    {
      id: "3B",
      label: "U = 1.2D + 1.6S + Max(L or 0.5W)",
      value: combo.getUltimateCombination3B().toFixed(2),
      unit: unit,
    },
    {
      id: "3C",
      label: "U = 1.2D + 1.6R + Max(L or 0.5W)",
      value: combo.getUltimateCombination3C().toFixed(2),
      unit: unit,
    },

    {
      id: "4A",
      label: "U = 1.2D + 1.0W + L + 0.5Lr",
      value: combo.getUltimateCombination4A().toFixed(2),
      unit: unit,
    },
    {
      id: "4B",
      label: "U = 1.2D + 1.0W + L + 0.5S",
      value: combo.getUltimateCombination4B().toFixed(2),
      unit: unit,
    },
    {
      id: "4C",
      label: "U = 1.2D + 1.0W + L + 0.5R",
      value: combo.getUltimateCombination4C().toFixed(2),
      unit: unit,
    },

    {
      id: "5",
      label: "U = 1.2D + 1.0E + L + 0.2S",
      value: combo.getUltimateCombination5().toFixed(2),
      unit: unit,
    },
    {
      id: "6",
      label: "U = 0.9D + 1.0W",
      value: combo.getUltimateCombination6().toFixed(2),
      unit: unit,
    },
    {
      id: "7",
      label: "U = 0.9D + 1.0E",
      value: combo.getUltimateCombination7().toFixed(2),
      unit: unit,
    },
  ];
}
