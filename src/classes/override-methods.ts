class Flower4 {
  protected subtypes: string[] = []; //"protected" allows ONLY inherited classes to access the property

  constructor(private readonly uuid: string, private name: string) {}
  describe(this: Flower4) {
    console.log(`Flower4 ${this.uuid}: ${this.name}!`);
  }

  addSubtypes(subtype: string) {
    this.subtypes.push(subtype);
  }

  printSubtypesInformation() {
    console.log(this.subtypes.length);
    console.log(this.subtypes);
  }
}

class bigFlower2 extends Flower4 {
  constructor(uuid: string, public textures: string[]) {
    super(uuid, "Huge Flower");
  }

  addSubtypes(subtype: string) {
    if (subtype === "Violet") {
      return;
    }
    this.subtypes.push(subtype);
  }

  addTexture(texture: string) {
    this.textures.push(texture);
  }

  printTextures() {
    console.log(this.textures);
  }
}

const giganticChamomille2 = new bigFlower2("ca41c57b-40df-452a-9446-f2e892f0dc14", ["Harsh"]);

giganticChamomille2.addSubtypes("Violet");
giganticChamomille2.addSubtypes("Sunflower");

giganticChamomille2.printTextures();
giganticChamomille2.printSubtypesInformation();
