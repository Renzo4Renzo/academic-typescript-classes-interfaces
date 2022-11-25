class Flower {
  private subtypes: string[] = [];

  constructor(private uuid: string, private name: string) {} //Shortcut to initialize variables in constructor

  describe(this: Flower) {
    console.log(`Flower ${this.uuid}: ${this.name}!`);
  }

  addSubtypes(subtype: string) {
    this.subtypes.push(subtype);
  }

  printEmployeeInformation() {
    console.log(this.subtypes.length);
    console.log(this.subtypes);
  }
}

const chamomille = new Flower("434da81a-ccd9-472e-b24f-c918ae9e97be", "chamomille");

chamomille.addSubtypes("Blue");
chamomille.addSubtypes("White");

chamomille.describe();
chamomille.printEmployeeInformation();
