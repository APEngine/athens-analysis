export interface BeamDimensions {
  height: number;                // Total height of the beam section (cm)
  width: number;                 // Width of the beam section (cm)
  covering: number;             // Concrete cover from extreme fiber to rebar centroid (cm)
  yieldStrength: number;        // Steel yield strength, fy (kgf/cm²)
  compressiveStrength: number;  // Concrete compressive strength, f'c (kgf/cm²)
}

export class ConcreteBeam {
  width: number;
  height: number;
  covering: number;
  length: number;
  yieldStrength: number;
  compressiveStrength: number;

  // Material properties
  private readonly Es = 2_100_000; // Modulus of elasticity for steel (kgf/cm²)
  private readonly epsilonC = 0.003; // Ultimate strain of concrete
  private readonly beta1 = 0.85; // Stress block factor (per COVENIN or ACI)
  private readonly phi = 0.9; // Strength reduction factor for flexure

  constructor(
    height: number,
    width: number,
    covering: number,
    length: number,
    yieldStrength: number,
    compressiveStrength: number,
  ) {
    this.height = height;
    this.width = width;
    this.covering = covering;
    this.length = length;
    this.yieldStrength = yieldStrength;
    this.compressiveStrength = compressiveStrength;
  }

  // Calculates the effective depth "d" (distance from compression fiber to centroid of tensile steel)
  calculateEffectiveDepth(): number {
    return this.height - this.covering;
  }

  // Calculates the minimum required steel area (As,min) based on empirical code formula
  calculateMinimumSteelArea(): number {
    const d = this.calculateEffectiveDepth();
    return (14 * this.width * d) / this.yieldStrength;
  }

  // Calculates the balanced steel area (As,b) based on strain compatibility
  calculateBalancedSteelArea(): number {
    const d = this.calculateEffectiveDepth();
    const epsilonY = this.yieldStrength / this.Es; // Yield strain of steel
    const c = (this.epsilonC * d) / (this.epsilonC + epsilonY); // Neutral axis depth
    const a = this.beta1 * c; // Depth of equivalent stress block

    return (0.85 * this.compressiveStrength * this.width * a) / this.yieldStrength;
  }

  // Calculates the maximum allowed steel area (As,max = 75% of As,b)
  calculateMaximumSteelArea(): number {
    return this.calculateBalancedSteelArea() * 0.75;
  }

  // Returns the gross cross-sectional area (Ag = b × h)
  calculateGrossArea(): number {
    return this.width * this.height;
  }

  // Returns the net (effective) area, excluding cover (An = b × d)
  calculateNetArea(): number {
    return this.width * this.calculateEffectiveDepth();
  }

  // Calculates the moment of inertia of the cross section (Ix)
  calculateMomentOfInertia(): number {
    return (this.width * Math.pow(this.height, 3)) / 12;
  }

  // Computes the depth "a" of the equivalent rectangular stress block based on steel area
  calculateCompressionStressBlock(steelArea: number): number {
    return (steelArea * this.yieldStrength) / (0.85 * this.compressiveStrength * this.width);
  }

  // Calculates the nominal moment capacity (Mn) in kgf·cm
  // Formula: Mn = As × fy × (d - a/2)
  calculateNominalMoment(steelArea: number): number {
    const d = this.calculateEffectiveDepth();
    const a = this.calculateCompressionStressBlock(steelArea);
    return steelArea * this.yieldStrength * (d - a / 2);
  }

  // Calculates the design moment (φMn), including the strength reduction factor
  calculateDesignMoment(steelArea: number): number {
    return this.phi * this.calculateNominalMoment(steelArea);
  }
}
