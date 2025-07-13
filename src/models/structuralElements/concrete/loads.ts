// Interface to define different types of structural loads (in kgf/m)
export interface Loads {
  deadLoad: number;         // Dead load (D)
  liveLoad: number;         // Live load (L)
  roofLiveLoad: number;     // Roof live load (Lr)
  snowLoad: number;         // Snow load (S)
  rainLoad: number;         // Rain load (R)
  windLoad: number;         // Wind load (W)
  earthquakeLoad: number;   // Earthquake load (E)
}

// Class to represent and compute different load combinations for structural design
export class LoadCombination {

  deadLoad: number;         // Dead load (kgf/m)
  liveLoad: number;         // Live load (kgf/m)
  windLoad: number;         // Wind load (kgf/m)
  roofLiveLoad: number;     // Roof live load (kgf/m)
  earthquakeLoad: number;   // Earthquake load (kgf/m)
  rainLoad: number;         // Rain load (kgf/m)
  snowLoad: number;         // Snow load (kgf/m)

  constructor(
    deadLoad: number,
    liveLoad: number,
    windLoad: number = 0,
    roofLiveLoad: number = 0,
    earthquakeLoad: number = 0,
    rainLoad: number = 0,
    snowLoad: number = 0
  ) {
    this.deadLoad = deadLoad;
    this.liveLoad = liveLoad;
    this.windLoad = windLoad;
    this.roofLiveLoad = roofLiveLoad;
    this.earthquakeLoad = earthquakeLoad;
    this.rainLoad = rainLoad;
    this.snowLoad = snowLoad;
  }

  // Load Combination 1: 1.4D
  getUltimateCombination1(): number {
    return 1.4 * this.deadLoad;
  }

  // Load Combination 2A: 1.2D + 1.6L + 0.5Lr
  getUltimateCombination2A(): number {
    return 1.2 * this.deadLoad + 1.6 * this.liveLoad + 0.5 * this.roofLiveLoad;
  }

  // Load Combination 2B: 1.2D + 1.6L + 0.5S
  getUltimateCombination2B(): number {
    return 1.2 * this.deadLoad + 1.6 * this.liveLoad + 0.5 * this.snowLoad;
  }

  // Load Combination 2C: 1.2D + 1.6L + 0.5W
  getUltimateCombination2C(): number {
    return 1.2 * this.deadLoad + 1.6 * this.liveLoad + 0.5 * this.windLoad;
  }

  // Load Combination 3A: 1.2D + 1.6Lr + (L or 0.5W)
  getUltimateCombination3A(): number {
    return 1.2 * this.deadLoad + 1.6 * this.roofLiveLoad + Math.max(this.liveLoad, 0.5 * this.windLoad);
  }

  // Load Combination 3B: 1.2D + 1.6S + (L or 0.5W)
  getUltimateCombination3B(): number {
    return 1.2 * this.deadLoad + 1.6 * this.snowLoad + Math.max(this.liveLoad, 0.5 * this.windLoad);
  }

  // Load Combination 3C: 1.2D + 1.6R + (L or 0.5W)
  getUltimateCombination3C(): number {
    return 1.2 * this.deadLoad + 1.6 * this.rainLoad + Math.max(this.liveLoad, 0.5 * this.windLoad);
  }

  // Load Combination 4A: 1.2D + 1.0W + L + 0.5Lr
  getUltimateCombination4A(): number {
    return 1.2 * this.deadLoad + 1.0 * this.windLoad + this.liveLoad + 0.5 * this.roofLiveLoad;
  }

  // Load Combination 4B: 1.2D + 1.0W + L + 0.5S
  getUltimateCombination4B(): number {
    return 1.2 * this.deadLoad + 1.0 * this.windLoad + this.liveLoad + 0.5 * this.snowLoad;
  }

  // Load Combination 4C: 1.2D + 1.0W + L + 0.5R
  getUltimateCombination4C(): number {
    return 1.2 * this.deadLoad + 1.0 * this.windLoad + this.liveLoad + 0.5 * this.rainLoad;
  }

  // Load Combination 5: 1.2D + 1.0E + L + 0.2S
  getUltimateCombination5(): number {
    return 1.2 * this.deadLoad + 1.0 * this.earthquakeLoad + this.liveLoad + 0.2 * this.snowLoad;
  }

  // Load Combination 6: 0.9D + 1.0W
  getUltimateCombination6(): number {
    return 0.9 * this.deadLoad + 1.0 * this.windLoad;
  }

  // Load Combination 7: 0.9D + 1.0E
  getUltimateCombination7(): number {
    return 0.9 * this.deadLoad + 1.0 * this.earthquakeLoad;
  }

  // Returns the highest (governing) ultimate load combination value
  getMaximumUltimateCombination(): number {
    const combinations = [
      this.getUltimateCombination1(),
      this.getUltimateCombination2A(),
      this.getUltimateCombination2B(),
      this.getUltimateCombination2C(),
      this.getUltimateCombination3A(),
      this.getUltimateCombination3B(),
      this.getUltimateCombination3C(),
      this.getUltimateCombination4A(),
      this.getUltimateCombination4B(),
      this.getUltimateCombination4C(),
      this.getUltimateCombination5(),
      this.getUltimateCombination6(),
      this.getUltimateCombination7(),
    ];

    return Math.max(...combinations);
  }

}
