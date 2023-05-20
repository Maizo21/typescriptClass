export class Animal {
  constructor(public name: string) {}

  move(distance: number = 0) {
    console.log(`${this.name} moved ${distance}m.`);
  }

  makeSound() {
    console.log("Make sound");
  }

  greeting() {
    console.log(`Hello, I'm ${this.name}`);
  }
}

export class Dog extends Animal {
  constructor(name: string, public breed: string) {
    super(name);
  }

  bark() {
    console.log("Woof! Woof!");
  }
}

const fifi = new Animal("Fifi");

const lassie = new Dog("Lassie", "Collie");

lassie.move(10);

lassie.bark();
