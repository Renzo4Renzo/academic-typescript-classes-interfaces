class Flower8 {
  private subtypes: string[] = [];

  constructor(private readonly uuid: string, private name: string) {}

  describe(this: Flower8) {
    console.log(`Flower8 ${this.uuid}: ${this.name}!`);
  }

  addSubtypes(subtype: string) {
    this.subtypes.push(subtype);
  }

  printEmployeeInformation() {
    console.log(this.subtypes.length);
    console.log(this.subtypes);
  }
}

class LittleFlower4 extends Flower8 {
  static instance: LittleFlower4;
  private constructor(uuid: string, public shapes: string[]) {
    super(uuid, "Tiny Flower");
    this.shapes = shapes;
  }

  static getInstance() {
    if (LittleFlower4.instance) {
      return this.instance; //In this scenario, this.instance = LittleFlower.instance
    }
    return (this.instance = new LittleFlower4("ab", ["Sphere"]));
  }
}

// const sphereChamomille2 = new LittleFlower4("434da81a-ccd9-472e-b24f-c918ae9e97be", ["Sphere"]); //Without singleton
const sphereChamomille2 = LittleFlower4.getInstance(); //With singleton
const sphereChamomille3 = LittleFlower4.getInstance(); //With singleton
console.log(sphereChamomille2, sphereChamomille3);
