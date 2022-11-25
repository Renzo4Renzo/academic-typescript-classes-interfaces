class Department {
  name: string;

  constructor(n: string) {
    this.name = n;
  }
}

const sales = new Department("Sales B");
console.log(sales);
