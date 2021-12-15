export class X {

  name = "Alan";

  constructor() {

  }

  displayName() {
    console.log(`Hello, ${this.name}.`);
  }

}

let x = new X();
x.displayName();

