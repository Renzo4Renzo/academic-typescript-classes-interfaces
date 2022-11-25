class Flower2 {
  private subtypes: string[] = [];

  constructor(private readonly uuid: string, private name: string) {} //readonly means that after initialization, this value shouldn't change

  describe(this: Flower2) {
    console.log(`Flower2 ${this.uuid}: ${this.name}!`);
  }

  addSubtypes(subtype: string) {
    this.subtypes.push(subtype);
  }

  printEmployeeInformation() {
    console.log(this.subtypes.length);
    console.log(this.subtypes);
  }
}

const chamomille2 = new Flower("434da81a-ccd9-472e-b24f-c918ae9e97be", "chamomille2");

chamomille2.addSubtypes("Blue");
chamomille2.addSubtypes("White");

chamomille2.describe();
chamomille2.printEmployeeInformation();
