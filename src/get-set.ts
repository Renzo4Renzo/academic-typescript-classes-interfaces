class Flower5 {
  protected subtypes: string[] = [];

  constructor(private readonly uuid: string, private name: string) {}
  describe(this: Flower5) {
    console.log(`Flower5 ${this.uuid}: ${this.name}!`);
  }

  addSubtypes(subtype: string) {
    this.subtypes.push(subtype);
  }

  printSubtypesInformation() {
    console.log(this.subtypes.length);
    console.log(this.subtypes);
  }
}

class bigFlower3 extends Flower5 {
  private lastTexture: string;

  get mostRecentTexture() {
    if (this.lastTexture) {
      return this.lastTexture;
    }
    throw new Error("No texture found!");
  }

  set mostRecentTexture(value: string) {
    if (!value) {
      throw new Error("Please pass in a valid value!");
    }
    this.addTexture(value);
  }

  constructor(uuid: string, private textures: string[]) {
    super(uuid, "Huge Flower");
    this.lastTexture = textures[0];
  }

  addSubtypes(subtype: string) {
    if (subtype === "Violet") {
      return;
    }
    this.subtypes.push(subtype);
  }

  addTexture(texture: string) {
    this.textures.push(texture);
    this.lastTexture = texture;
  }

  printTextures() {
    console.log(this.textures);
  }
}

const giganticChamomille3 = new bigFlower3("ca41c57b-40df-452a-9446-f2e892f0dc14", []);

giganticChamomille3.mostRecentTexture = "Gross";
giganticChamomille3.addTexture("Baby que mas?");
console.log(giganticChamomille3.mostRecentTexture);

// giganticChamomille3.addSubtypes("Violet");
// giganticChamomille3.addSubtypes("Sunflower");

giganticChamomille3.printTextures();
// giganticChamomille3.printSubtypesInformation();
