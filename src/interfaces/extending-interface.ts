interface IsNamed {
  readonly name3: string;
}

//You can extend more than one interface
interface Greetable3 extends IsNamed {
  greet(phrase: string): void;
}
class Person4 implements Greetable3 {
  name3: string;
  age = 30;

  constructor(name3: string) {
    this.name3 = name3;
  }

  greet(phrase: string) {
    console.log(`${phrase} ${this.name3}`);
  }
}

let user4: Greetable3;

user4 = new Person4("Gigi");

user4.greet("Hi there - I'm");
console.log(user4);
