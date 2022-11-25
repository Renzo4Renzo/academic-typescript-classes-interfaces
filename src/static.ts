class Flower6 {
  protected subtypes: string[] = [];

  constructor(private readonly uuid: string, private name: string) {}
  describe(this: Flower6) {
    console.log(`Flower6 ${this.uuid}: ${this.name} with at least ${Flower6.mininumPetals}!`); //this.XXX is not used to called static properties/methods
  }

  addSubtypes(subtype: string) {
    this.subtypes.push(subtype);
  }

  printSubtypesInformation() {
    console.log(this.subtypes.length);
    console.log(this.subtypes);
  }

  static createFlower(name: string) {
    return { name: name };
  }

  static mininumPetals = 4;
}

const greenFlower = Flower6.createFlower("Margaret");
console.log(greenFlower, Flower6.mininumPetals);
