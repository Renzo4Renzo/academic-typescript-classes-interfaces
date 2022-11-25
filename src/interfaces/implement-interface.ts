/* 
You can replace interface with type, but keep in mind:
    1. Interfaces are specific to describe the structure of an object
    2. Interfaces can be implemented on classes
Interfaces are like "abstract classes", but those allow to implement properties/methods while interfaces don't 
*/

interface Greetable {
  name: string;

  greet(phrase: string): void;
}

//NOTE: You can implement more than one interface
class Person2 implements Greetable {
  name: string;
  age = 30;

  constructor(name: string) {
    this.name = name;
  }

  greet(phrase: string) {
    console.log(`${phrase} ${this.name}`);
  }

  goodbye(phrase: string) {
    console.log(`${phrase} ${this.name}`);
  }
}

let user2: Person2;

user2 = new Person2("Gigi");

user2.greet("Hi there - I'm");
user2.goodbye("Bye bye - I'm");
console.log(user2);
