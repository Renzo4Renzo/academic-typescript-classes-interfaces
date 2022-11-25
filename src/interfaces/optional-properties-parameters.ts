interface IsNamed3 {
  readonly name3?: string;
  outputName?: string;
}

interface Greetable4 extends IsNamed3 {
  greet(phrase: string): void;
}
class Person5 implements Greetable4 {
  name3?: string; //This property can be required here if you wish, even if the interface declares as optional
  age = 30;

  constructor(name3?: string) {
    if (name3) {
      this.name3 = name3;
    }
  }

  greet(phrase: string) {
    if (this.name3) {
      console.log(`${phrase} ${this.name3}`);
    } else console.log("Hi, I'm no one");
  }
}

let user5: Greetable4;

user5 = new Person5();

user5.greet("Hi there - I'm");
console.log(user5);
