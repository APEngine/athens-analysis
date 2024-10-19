export class ConcreteBeam {
    
    width: number; // Beam width (cm)
    height: number; // Beam height (cm)
    covering: number; // Beam covering (cm)
    length: number; // Beam length (cm)
  
    constructor(
        height: number,
        width: number,
        covering: number,
        length:number,
    ) {
      this.height = height;
      this.width = width;
      this.covering = covering;
      this.length = length;
    }
  
    // Método para calcular el área neta de la sección transversal
    calculateNetArea(): number {
      return this.width * ( this.height - this.covering );
    }
    // Método para calcular el área bruta de la sección transversal
    calculateGrossArea(): number {
        return this.width * this.height;
    }
    // Método para calcular el momento de inercia de la sección transversal
    calculateMomentOfInertia(): number {
        return (this.width * Math.pow(this.height, 3)) / 12;
    }
  }