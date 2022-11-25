class Enterprise {
  public name: string;
  private employees: string[] = [];

  constructor(n: string) {
    this.name = n;
  }

  describe(this: Enterprise) {
    console.log(`This is ${this.name} enterprise!`);
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

const adidas = new Enterprise("Adidas");

adidas.addEmployee("Taylor");
adidas.addEmployee("Jhon");

adidas.describe();
adidas.printEmployeeInformation();
