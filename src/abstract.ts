//abstract classes can't be instantiated
abstract class Flower7 {
  protected subtypes: string[] = [];

  constructor(protected readonly uuid: string, private name: string) {}

  abstract describe(this: Flower7): void; //this enforces any inherit class to implement "describe" method

  addSubtypes(subtype: string) {
    this.subtypes.push(subtype);
  }

  printInformation() {
    console.log(this.name);
    console.log(this.subtypes.length);
    console.log(this.subtypes);
  }
}

class LittleFlower2 extends Flower7 {
  constructor(uuid: string, public shapes: string[]) {
    super(uuid, "Tiny Flower");
    this.shapes = shapes;
  }

  describe() {
    console.log(`Little Flower UUID: ${this.uuid}`);
  }
}

const redFlower = new LittleFlower2("a1", ["Spheric"]);
redFlower.describe();
