interface Greetable2 {
  readonly name2: string;

  greet(phrase: string): void;
}
class Person3 implements Greetable2 {
  name2: string;
  age = 30;

  constructor(name2: string) {
    this.name2 = name2;
  }

  greet(phrase: string) {
    console.log(`${phrase} ${this.name2}`);
  }
}

let user3: Greetable2;

user3 = new Person3("Gigi");
// user3.name2 = "Jacy"; //This will throw an error since user3 is an instance of "Greetable" with "name2" property as readonly

user3.greet("Hi there - I'm");
console.log(user3);
