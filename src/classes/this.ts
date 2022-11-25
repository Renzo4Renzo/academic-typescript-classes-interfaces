class Color {
  name: string;

  constructor(n: string) {
    this.name = n;
  }

  //Adding "this" parameter for extra safety, so the method gives an error when it's used in an object which does not contain required properties for the class
  describe(this: Color) {
    console.log(`This is a ${this.name} color!`);
  }
}

const red = new Color("Red");
red.describe();

const redCopy = { name: "Reddy", describe: red.describe };
redCopy.describe();
