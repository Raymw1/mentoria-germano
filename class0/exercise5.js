class User {
  constructor(name, lastname, age) {
    this.name = name;
    this.lastname = lastname;
    this.age = age;
  }

  greeting() {
    console.log(`Olá, ${this.name}!`);
  }

  getOlder(age) {
    if (age > 0) {
      this.age += age;
      // console.log(this.age);
    }
  }

  getYounger(age) {
    if (age > 0) {
      this.age -= age;
      // console.log(this.age);
    }
  }

  getGeneration() {
    if (this.age < 0) {
      console.log("Inexistente!");
    } else if (this.age < 30) {
      console.log("Primeira idade!");
    } else if (this.age < 60) {
      console.log("Segunda idade");
    } else {
      console.log("Terceira idade");
    }
  }

}

const user1 = new User("Rayan", "Wilbert", 17);
user1.greeting();
user1.getOlder(43);
user1.getYounger(1);
user1.getGeneration();
