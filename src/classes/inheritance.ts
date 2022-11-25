class Flower3 {
  private subtypes: string[] = [];

  constructor(private readonly uuid: string, private name: string) {} //readonly means that after initialization, this value shouldn't change

  describe(this: Flower3) {
    console.log(`Flower3 ${this.uuid}: ${this.name}!`);
  }

  addSubtypes(subtype: string) {
    this.subtypes.push(subtype);
  }

  printEmployeeInformation() {
    console.log(this.subtypes.length);
    console.log(this.subtypes);
  }
}

//You can only inherit from one class
class littleFlower extends Flower3 {
  constructor(uuid: string, public shapes: string[]) {
    super(uuid, "Tiny Flower");
    this.shapes = shapes; //any "this.XXX" should be called after super(...)
  }
}

class bigFlower extends Flower3 {
  constructor(uuid: string, public textures: string[]) {
    super(uuid, "Huge Flower");
  }

  addTexture(texture: string) {
    this.textures.push(texture);
  }

  printTextures() {
    console.log(this.textures);
  }
}

const sphereChamomille = new littleFlower("434da81a-ccd9-472e-b24f-c918ae9e97be", ["Sphere"]);

sphereChamomille.addSubtypes("Blue");
sphereChamomille.addSubtypes("White");

sphereChamomille.describe();
sphereChamomille.printEmployeeInformation();

console.log(sphereChamomille);

const giganticChamomille = new bigFlower("ca41c57b-40df-452a-9446-f2e892f0dc14", ["Harsh"]);
giganticChamomille.printTextures();
